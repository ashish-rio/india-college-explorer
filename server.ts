import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'CollegeExplorerEngine/1.0.0',
    }
  }
});

// Import the real college generation data directly to parse matching indexes
import { getColleges } from "./src/data/colleges.js";

// AI Semantic Search Endpoint
app.post("/api/gemini/search", async (req, res) => {
  try {
    const { query } = req.body;
    if (!query || typeof query !== "string" || query.trim() === "") {
      return res.status(400).json({ error: "Query is required" });
    }

    const colleges = getColleges();
    const collegesMinified = colleges.map(col => ({
      id: col.id,
      name: col.name,
      state: col.state,
      city: col.city,
      type: col.type,
      established: col.established,
      website: col.website,
      famousFest: col.famousFest
    }));

    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY env is missing. Falling back to simple keyword matching.");
      const q = query.toLowerCase().trim();
      const matches = colleges.filter(col => 
        col.name.toLowerCase().includes(q) ||
        col.city.toLowerCase().includes(q) ||
        col.state.toLowerCase().includes(q)
      ).map(col => col.id);

      return res.json({
        matches,
        rationale: `Showing custom search matches for "${query}" across 28 states.`,
        dynamicColleges: []
      });
    }

    // 1. Incorporate Google Custom Search JSON API if keys are provided
    const googleSearchApiKey = process.env.GOOGLE_CUSTOM_SEARCH_API_KEY;
    const googleSearchCx = process.env.GOOGLE_CUSTOM_SEARCH_CX;
    let customSearchResultsText = "";
    let isCustomSearchActive = false;

    if (googleSearchApiKey && googleSearchCx && googleSearchApiKey.trim() !== "" && googleSearchCx.trim() !== "") {
      try {
        console.log(`[Google Custom Search] Executing query: ${query}`);
        const customSearchUrl = `https://www.googleapis.com/customsearch/v1?key=${encodeURIComponent(googleSearchApiKey.trim())}&cx=${encodeURIComponent(googleSearchCx.trim())}&q=${encodeURIComponent(query + " engineering college higher education India")}`;
        const searchRes = await fetch(customSearchUrl);
        if (searchRes.ok) {
          const searchData = await searchRes.json();
          const items = searchData.items || [];
          if (items.length > 0) {
            isCustomSearchActive = true;
            customSearchResultsText = items.map((item: any, idx: number) => {
              return `Web Result #${idx + 1}:\nTitle: ${item.title}\nLink: ${item.link}\nSnippet: ${item.snippet}\n`;
            }).join("\n");
            console.log(`[Google Custom Search] Successfully retrieved ${items.length} items from Google Search.`);
          } else {
            console.log("[Google Custom Search] No search items returned.");
          }
        } else {
          console.error(`[Google Custom Search] Google API responded with state ${searchRes.status}`);
        }
      } catch (err: any) {
        console.error("[Google Custom Search] Failed to reach Custom Search API:", err?.message || err);
      }
    }

    // 2. Craft Custom Search-grounded system instructions
    let systemInstruction = 
      "You are a state-of-the-art Search Grounding assistant for the India College Explorer.\n" +
      "The user will search for any engineering or higher-education college in India (e.g. BITS Pilani, Ramaiah Institute of Technology, BITS Goa, VIT Vellore, Manipal, LPU, DTU, or local colleges).\n" +
      "Your instructions:\n";

    if (isCustomSearchActive) {
      systemInstruction += 
        "1. We have successfully queried the Google Custom Search API and retrieved the following real-world verified data:\n" +
        "=========================================\n" +
        customSearchResultsText +
        "=========================================\n" +
        "Analyze these custom google search items to parse the official college names, accepted exams, location, and official URL. For any Indian college that the user query describes, construct a matching structured entry with verified real-world fields (website, city, state, established year, and type).\n";
    } else {
      systemInstruction +=
        "1. ALWAYS trigger Google Search (via your integrated googleSearch tool if enabled, or your pre-trained academic knowledge base about all Indian higher-education institutions) to find real-world verified information about the colleges mentioned in the query. Look up their exact location (city, state), type, accepted exams, establishment year, and real website URL.\n";
    }

    systemInstruction +=
      "2. Check if the discovered college already exists in the pre-defined list of colleges (collegesMinified) provided to you. If it matches a pre-defined college (e.g., matching or spelling variation of 'IIT Patna' or 'NIT Raipur'), DO NOT recreate it. Just reference its pre-defined 'id' (e.g., 'college_66') and include it in the 'matches' list.\n" +
      "3. If the college exists in the real world but is NOT in the pre-defined list, you must dynamically generate a complete College object and place it in the 'dynamicColleges' array, and include its newly generated ID in your 'matches' array.\n" +
      "4. Rules for generating dynamic colleges:\n" +
      "   - 'id': Create a unique ID string starting with 'dynamic_' followed by a random name (e.g., 'dynamic_msrit', 'dynamic_vitvellore').\n" +
      "   - 'name': Provide the full official name (e.g., 'M. S. Ramaiah Institute of Technology').\n" +
      "   - 'city', 'state': Provide the true city and Indian state (e.g., 'Bengaluru', 'Karnataka'). State must be a proper Indian state spelling.\n" +
      "   - 'type': Must be one of: 'IIT', 'NIT', 'IIIT', 'BITS', 'State Govt', 'Central', 'Private', 'Deemed'. Pick the closest match.\n" +
      "   - 'examAccepted': Accepted national or state level exams (e.g., ['JEE Main', 'COMEDK', 'KCET']).\n" +
      "   - 'famousFest': The real festival of the college or a real-sounding name (e.g., 'Utsav', 'Riviera').\n" +
      "   - 'website': Real, correct website URL of the college (e.g., 'https://msrit.edu').\n" +
      "   - 'established': Real founding year (e.g., 1962).\n" +
      "   - 'events': Create exactly 4 events (one for each event category: 'Hackathon', 'Sports', 'Culture', 'Techfest') with customized names, scheduling dates for late 2026/early 2027, and prize pools (e.g., '200K INR').\n" +
      "5. Respond strictly with a JSON object obeying the requested schema.";

    const prompt = 
      `User Search Query: "${query}"\n\n` +
      `Pre-defined Indian Colleges list (refer to this so you resolve matches or avoid duplicate dynamic generation):\n${JSON.stringify(collegesMinified, null, 2)}`;

    // Build the request configurations dynamically to preserve quotas
    const requestConfig: any = {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          matches: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Array of matching college IDs (both pre-defined ids and dynamic_ ids) matching the query in order of relevance."
          },
          rationale: {
            type: Type.STRING,
            description: "A short, beautiful, friendly 2-sentence summary explaining what was found on Google Search and highlighted."
          },
          dynamicColleges: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING, description: "Unique dynamic identifier starting with 'dynamic_'" },
                name: { type: Type.STRING },
                city: { type: Type.STRING },
                state: { type: Type.STRING },
                type: { 
                  type: Type.STRING, 
                  description: "Strictly one of: 'IIT', 'NIT', 'IIIT', 'BITS', 'State Govt', 'Central', 'Private', 'Deemed'" 
                },
                examAccepted: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                famousFest: { type: Type.STRING },
                website: { type: Type.STRING },
                established: { type: Type.INTEGER },
                events: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING, description: "Custom event name using the college's name/vibe" },
                      category: { type: Type.STRING, description: "Must be exactly: 'Hackathon' | 'Sports' | 'Culture' | 'Techfest'" },
                      prizePool: { type: Type.STRING },
                      schedule: { type: Type.STRING }
                    },
                    required: ["name", "category", "prizePool", "schedule"]
                  }
                }
              },
              required: ["id", "name", "city", "state", "type", "examAccepted", "famousFest", "website", "established", "events"]
            },
            description: "List of real Indian colleges discovered from Google Search that are not present in pre-defined college database."
          }
        },
        required: ["matches", "rationale", "dynamicColleges"]
      }
    };

    // If Custom Google Search is NOT enabled, configure the googleSearch grounding tool as a robust backup
    if (!isCustomSearchActive) {
      requestConfig.tools = [{ googleSearch: {} }];
    }

    let response;
    try {
      response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: requestConfig
      });
    } catch (innerError: any) {
      // If we failed with tools enabled, let's retry WITHOUT the Google Search tool (using model's internal memory)
      if (requestConfig.tools) {
        console.warn("Retrying Gemini request without active googleSearch tool due to quota/rate error:", innerError?.message || innerError);
        const retryConfig = { ...requestConfig };
        delete retryConfig.tools;
        // Make sure model knows it should use its own state-of-the-art knowledge of Indian colleges
        retryConfig.systemInstruction = systemInstruction + "\nNote: Active googleSearch tool is disabled for this backup run. Fulfill the user request with your extensive internal database of real-world Indian college structures.";
        
        response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: prompt,
          config: retryConfig
        });
      } else {
        throw innerError;
      }
    }

    const resultText = response.text || "{}";
    const resultJson = JSON.parse(resultText);

    // Resolve pre-defined IDs to real college names dynamically to prevent client-side ID mismatch
    const matchedNames: string[] = [];
    if (resultJson.matches && Array.isArray(resultJson.matches)) {
      resultJson.matches.forEach((mId: string) => {
        const found = colleges.find(c => c.id === mId);
        if (found) {
          matchedNames.push(found.name);
        }
      });
    }
    resultJson.matchedNames = matchedNames;

    res.json(resultJson);
  } catch (error: any) {
    console.error("Gemini Search Grounding API error (falling back to custom local search):", error?.message || error);
    
    // Smooth fallback to local matching to prevent 500 status failure
    const rawVal = req.body?.query || "";
    const q = String(rawVal).toLowerCase().trim();
    const colleges = getColleges();
    const matchedColleges = colleges.filter(col => 
      col.name.toLowerCase().includes(q) ||
      col.city.toLowerCase().includes(q) ||
      col.state.toLowerCase().includes(q)
    );
    const matches = matchedColleges.map(col => col.id);
    const matchedNames = matchedColleges.map(col => col.name);

    res.json({
      matches,
      matchedNames,
      rationale: `AI Grounded Search is temporarily offline due to API quota limits. Reverting to custom database matching for "${rawVal}".`,
      dynamicColleges: []
    });
  }
});

// Vite middleware integration for live preview and SPA asset serving
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Full-Stack Node Server] initialized successfully on port ${PORT}`);
  });
}

if (!process.env.VERCEL) {
  setupVite();
}

export default app;
