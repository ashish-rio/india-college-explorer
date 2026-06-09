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
      'User-Agent': 'aistudio-build',
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

    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY env is missing. Falling back to simple keyword matching.");
      // Fallback matching when key is absent
      const q = query.toLowerCase().trim();
      const colleges = getColleges();
      const matches = colleges.filter(col => 
        col.name.toLowerCase().includes(q) ||
        col.city.toLowerCase().includes(q) ||
        col.state.toLowerCase().includes(q) ||
        col.events.some(evt => evt.category.toLowerCase().includes(q) || evt.name.toLowerCase().includes(q))
      ).map(col => col.id);

      return res.json({
        matches,
        rationale: `Showing custom search matches for "${query}" across 28 states.`
      });
    }

    const colleges = getColleges();
    const collegesMinified = colleges.map(col => ({
      id: col.id,
      name: col.name,
      state: col.state,
      city: col.city,
      type: col.type,
      events: col.events.map(e => ({ name: e.name, category: e.category }))
    }));

    const systemInstruction = 
      "You are an elegant academic search assistant for Indian engineering colleges. " +
      "Analyze the user's search query (which may ask for specific states, events, or categories like Hackathon, Sports, Culture, Techfest) " +
      "and match it semantically against the minified custom college list provided. " +
      "Return a list of strictly matching college IDs in order of relevance, and a short 1-2 sentence friendly rationale summarizing what is found.";

    const prompt = 
      `User Search Query: "${query}"\n\n` +
      `Engineering College Database:\n${JSON.stringify(collegesMinified, null, 2)}`;

    // Call gemini-3.5-flash with JSON response Schema
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            matches: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Array of matching college IDs (e.g., college_1, college_2) that fit the query."
            },
            rationale: {
              type: Type.STRING,
              description: "A short elegant 1-2 sentence summary of what was found."
            }
          },
          required: ["matches", "rationale"]
        }
      }
    });

    const resultText = response.text || "{}";
    const resultJson = JSON.parse(resultText);

    res.json(resultJson);
  } catch (error: any) {
    console.error("Gemini Search API error:", error?.message || error);
    res.status(500).json({ error: "Failed to process semantic search inquiry." });
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
