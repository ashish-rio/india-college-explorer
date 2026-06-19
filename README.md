# 🎓 College Explorer & Event Guide AI

Hey there! Thanks for stopping by. I built this portal because searching for the right engineering college in India shouldn't feel like staring at an outdated, static Excel sheet. 

I wanted to build a modern, high-performance web discovery app that actually feels amazing to interact with. By combining deep, structured institutional data with fluid, physics-based motion, I created an interactive portal mapping verified IITs, NITs, IIITs, state hubs, and top private universities.

### 🖥️ Application Dashboard Interface Layout

Here is a vector mockup demonstrating the balanced grid architecture, flowing filter rails, and interactive college comparison modules of our live app interface:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" style="background-color: #0c0a09; border-radius: 16px; border: 1px solid #27272a; font-family: system-ui, -apple-system, sans-serif;">
  <rect width="100%" height="100%" fill="#09090b" rx="16" />
  
  <!-- 1. HEADER (Sticky top) -->
  <g transform="translate(15, 15)">
    <rect width="770" height="50" rx="10" fill="#18181b" stroke="#27272a" stroke-width="1" />
    <circle cx="28" cy="25" r="14" fill="#8b5cf6" opacity="0.15" />
    <circle cx="28" cy="25" r="9" fill="#8b5cf6" />
    <text x="50" y="29" fill="#ffffff" font-size="12" font-weight="bold">COLLEGE EXPLORER HUB</text>
    <rect x="520" y="12" width="130" height="26" rx="6" fill="#09090b" stroke="#27272a" />
    <text x="585" y="28" fill="#a1a1aa" font-size="9" font-family="monospace" font-weight="bold" text-anchor="middle">🔎 STATE REGISTRY</text>
    <rect x="660" y="12" width="95" height="26" rx="6" fill="#8b5cf6" />
    <text x="707" y="28" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">COMPARE (2)</text>
  </g>

  <!-- 2. LEFT SIDEBAR (State list filter) -->
  <g transform="translate(15, 80)">
    <rect width="200" height="350" rx="10" fill="#18181b" stroke="#27272a" stroke-width="1" />
    <text x="15" y="30" fill="#a1a1aa" font-size="10" font-weight="bold" font-family="monospace" letter-spacing="1">STATES & UTS</text>
    <line x1="15" y1="42" x2="185" y2="42" stroke="#27272a" />
    
    <!-- State Items -->
    <rect x="15" y="55" width="10" height="10" rx="2" fill="#8b5cf6" />
    <text x="32" y="64" fill="#ffffff" font-size="10" font-weight="bold">Delhi NCR</text>
    <text x="180" y="64" fill="#52525b" font-weight="bold" font-size="9" text-anchor="end">12</text>

    <rect x="15" y="85" width="10" height="10" rx="2" fill="none" stroke="#52525b" />
    <text x="32" y="94" fill="#e4e4e7" font-size="10">Maharashtra</text>
    <text x="180" y="94" fill="#52525b" font-weight="bold" font-size="9" text-anchor="end">88</text>

    <rect x="15" y="115" width="10" height="10" rx="2" fill="#8b5cf6" />
    <text x="32" y="124" fill="#ffffff" font-size="10" font-weight="bold">Karnataka</text>
    <text x="180" y="124" fill="#52525b" font-weight="bold" font-size="9" text-anchor="end">65</text>

    <rect x="15" y="145" width="10" height="10" rx="2" fill="none" stroke="#52525b" />
    <text x="32" y="154" fill="#e4e4e7" font-size="10">Tamil Nadu</text>
    <text x="180" y="154" fill="#52525b" font-weight="bold" font-size="9" text-anchor="end">41</text>
  </g>

  <!-- 3. MAIN DASHBOARD CONTENT -->
  <g transform="translate(230, 80)">
    <!-- Search / Filter widgets -->
    <rect width="555" height="50" rx="10" fill="#18181b" stroke="#27272a" stroke-width="1" />
    <text x="15" y="30" fill="#71717a" font-size="11">Search colleges by state, course or event festival...</text>
    <rect x="420" y="12" width="120" height="26" rx="6" fill="#3b82f6" fill-opacity="0.1" stroke="#3b82f6" stroke-width="1" />
    <text x="480" y="28" fill="#60a5fa" font-size="9" font-weight="bold" text-anchor="middle">⚡ GEMINI AI ON</text>

    <!-- Cards Grid -->
    <!-- Card 1 (IIT Delhi Mockup) -->
    <g transform="translate(0, 65)">
      <rect width="265" height="185" rx="10" fill="#18181b" stroke="#3b82f6" stroke-dasharray="0" stroke-width="1.5" />
      <!-- Top banner strip -->
      <rect x="1" y="1" width="263" height="30" rx="9" fill="rgba(59, 130, 246, 0.08)" />
      <text x="12" y="19" fill="#60a5fa" font-size="9" font-family="monospace" font-weight="bold">IIT INSTITUTE</text>
      
      <!-- Content -->
      <text x="12" y="52" fill="#ffffff" font-size="12" font-weight="bold">Indian Institute of Technology</text>
      <text x="12" y="68" fill="#71717a" font-size="9">IIT Delhi, New Delhi</text>

      <!-- Accepted Exams tag -->
      <rect x="12" y="83" width="76" height="18" rx="4" fill="#09090b" stroke="#27272a" />
      <text x="50" y="95" fill="#a1a1aa" font-size="8" text-anchor="middle">JEE ADVANCED</text>

      <!-- Event Hub section -->
      <rect x="12" y="112" width="241" height="32" rx="6" fill="#09090b" stroke="#27272a" />
      <circle cx="26" cy="128" r="8" fill="#ef4444" opacity="0.2" />
      <circle cx="26" cy="128" r="4" fill="#ef4444" />
      <text x="42" y="128" fill="#ffffff" font-size="9" font-weight="bold">Tryst Hackathon 2026</text>
      <text x="42" y="138" fill="#71717a" font-size="7">Prize Pool: ₹1,50,000</text>
      <rect x="200" y="118" width="45" height="20" rx="4" fill="#3b82f6" />
      <text x="222" y="130" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Open 🔎</text>

      <!-- Bottom link -->
      <text x="12" y="168" fill="#52525b" font-size="8">Est. 1961</text>
      <text x="253" y="168" fill="#60a5fa" font-size="9" font-weight="bold" text-anchor="end">More Details →</text>
    </g>

    <!-- Card 2 (NIT Surathkal Mockup) -->
    <g transform="translate(290, 65)">
      <rect width="265" height="185" rx="10" fill="#18181b" stroke="#27272a" stroke-width="1" />
      <!-- Top banner strip -->
      <rect x="1" y="1" width="263" height="30" rx="9" fill="none" />
      <text x="12" y="19" fill="#a1a1aa" font-size="9" font-family="monospace" font-weight="bold">NIT INSTITUTE</text>
      
      <!-- Content -->
      <text x="12" y="52" fill="#ffffff" font-size="12" font-weight="bold">National Inst. of Technology</text>
      <text x="12" y="68" fill="#71717a" font-size="9">NITK Surathkal, Karnataka</text>

      <!-- Accepted Exams tag -->
      <rect x="12" y="83" width="56" height="18" rx="4" fill="#09090b" stroke="#27272a" />
      <text x="40" y="95" fill="#a1a1aa" font-size="8" text-anchor="middle">JEE MAIN</text>

      <!-- Event Hub section -->
      <rect x="12" y="112" width="241" height="32" rx="6" fill="#09090b" stroke="#27272a" />
      <circle cx="26" cy="128" r="8" fill="#f59e0b" opacity="0.2" />
      <circle cx="26" cy="128" r="4" fill="#f59e0b" />
      <text x="42" y="128" fill="#ffffff" font-size="9" font-weight="bold">Engineer Techfest 2026</text>
      <text x="42" y="138" fill="#71717a" font-size="7">Prize Pool: ₹2,00,000</text>
      <rect x="200" y="118" width="45" height="20" rx="4" fill="#27272a" stroke="#3f3f46" />
      <text x="222" y="130" fill="#a1a1aa" font-size="8" font-weight="bold" text-anchor="middle">Open 🔎</text>

      <!-- Bottom link -->
      <text x="12" y="168" fill="#52525b" font-size="8">Est. 1960</text>
      <text x="253" y="168" fill="#60a5fa" font-size="9" font-weight="bold" text-anchor="end">More Details →</text>
    </g>

    <!-- Bottom Pagination indicator & statistics -->
    <rect x="0" y="265" width="555" height="40" rx="10" fill="#18181b" fill-opacity="0.3" stroke="#27272a" stroke-width="1" />
    <text x="15" y="289" fill="#52525b" font-size="9">Showing 1 - 12 of 145 colleges matched</text>
    <rect x="420" y="272" width="120" height="26" rx="6" fill="#18181b" stroke="#27272a" />
    <text x="480" y="288" fill="#a1a1aa" font-size="9" text-anchor="middle">Load Next Page ⏬</text>
  </g>
</svg>
```

---

## 🚀 What This App Does (The Core Experience)

*   **⚡ Predictive Multi-State Discovery & Filter Engine**: Quickly search across 28 states and Union Territories using instant smart search bars. You can filter by institution type (IIT, NIT, Private, etc.), location, and established date milestones.
*   **⚖️ Matrix-Level College Comparison**: Click "Compare" on any college card to lock them into your comparison matrix. It expands into a side-by-side bento-grid overlay showing campuses, key details, and statistics instantly.
*   **🎉 Live Campus Event & Festival Hub**: Engineering is not just about lectures—it is about the culture. Clicking details slides out a drawer showing campus cultural festivals, dynamic schedules, active prize pools, and contest entry requirements.
*   **🧭 Testing Roadmaps Catalog**: Step-by-step navigation guides for major entrance exams (JEE Advanced, JEE Mains, BITSAT, WBJEE, COMEDK, etc.) breaking down average dates, eligibility, patterns, and timelines.
*   **🔮 Under-the-Hood Local Search Fallback**: If the internet drops off or the AI hits rate limits, a blazing fast offline search index (under 15ms) kicks in seamlessly so the user experience never breaks.

---

## 🎨 Creative Kinetics (GSAP + Lenis Smooth Scroll)

I wanted this app to feel premium, like a high-end product landing page. To achieve this, I completely replaced standard static scrolling with advanced animation libraries:

1.  **Lenis Smooth Scrolling**: I integrated Lenis to implement inertia-based, buttery smooth scrolling. It removes choppy jumping of default scroll wheels and creates a continuous organic flow.
2.  **GSAP Scroll Hooks & Timeline Staggering**: When the page loads, GSAP takes over. Staggered timelines elevate the headers, state sidebar, search widget, and list elements sequentially. This creates a beautifully polished "reveal" rather than just a sudden flash of content.
3.  **Physical Ambient Backdrops**: I built floating color orbs in the background that drift, pulse, and expand slowly over time via continuous GSAP infinite tweens.
4.  **Interactive Cards**: Hovering over college cards triggers an elastic scaling transition, elevating the card upwards (`y: -6`) and shifting the glassmorphic frame to a subtle glowing neon border.

---

## 🏗️ Technical Architecture & Under-The-Hood Decisions

### 🗺️ Visual System Architecture Map

Below is a vector schematic mapping our hardware-accelerated ingestion pipeline, proxy routing layers, and secure AI schema enforcement:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 360" width="100%" style="background-color: #0c0a09; border-radius: 16px; border: 1px solid #27272a; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Grid Background -->
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="1" />
    </pattern>
    <linearGradient id="violetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#a78bfa" />
    </linearGradient>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#60a5fa" />
    </linearGradient>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#34d399" />
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#71717a" />
    </marker>
  </defs>
  <rect width="100%" height="100%" fill="#09090b" rx="16" />
  <rect width="100%" height="100%" fill="url(#grid)" rx="16" />

  <!-- 1. FRONTEND CLIENT (React/Vite) -->
  <g transform="translate(40, 60)">
    <rect width="180" height="240" rx="12" fill="rgba(24, 24, 27, 0.7)" stroke="#3f3f46" stroke-width="1.5" />
    <rect width="180" height="40" rx="12" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="1.5" />
    <text x="90" y="25" fill="#3b82f6" font-size="11" font-weight="900" letter-spacing="1" text-anchor="middle">CLIENT SIDE (SPA)</text>
    
    <!-- Inner Nodes -->
    <rect x="15" y="60" width="150" height="42" rx="6" fill="#18181b" stroke="#27272a" />
    <text x="25" y="78" fill="#e4e4e7" font-size="11" font-weight="bold">React SPA (Vite)</text>
    <text x="25" y="93" fill="#71717a" font-size="9">UI Shell & State Trees</text>

    <rect x="15" y="115" width="150" height="42" rx="6" fill="#18181b" stroke="#27272a" />
    <text x="25" y="133" fill="#e4e4e7" font-size="11" font-weight="bold">Lenis Scroll Core</text>
    <text x="25" y="148" fill="#a78bfa" font-size="9">Inertial Smooth Engine</text>

    <rect x="15" y="170" width="150" height="42" rx="6" fill="#18181b" stroke="#27272a" />
    <text x="25" y="188" fill="#e4e4e7" font-size="11" font-weight="bold">GSAP / Motion</text>
    <text x="25" y="203" fill="#60a5fa" font-size="9">GPU Hardware Acceleration</text>
  </g>

  <!-- Connectors Client to Server -->
  <path d="M 220 180 L 310 180" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow)" stroke-dasharray="4" />
  <text x="265" y="170" fill="#3b82f6" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">HTTPS Requests</text>

  <!-- 2. SECURE BACKEND (Express / Node.js) -->
  <g transform="translate(320, 60)">
    <rect width="180" height="240" rx="12" fill="rgba(24, 24, 27, 0.7)" stroke="#3f3f46" stroke-width="1.5" />
    <rect width="180" height="40" rx="12" fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" stroke-width="1.5" />
    <text x="90" y="25" fill="#8b5cf6" font-size="11" font-weight="900" letter-spacing="1" text-anchor="middle">EXPRESS GATEWAY</text>

    <!-- Inner Nodes -->
    <rect x="15" y="60" width="150" height="42" rx="6" fill="#18181b" stroke="#27272a" />
    <text x="25" y="78" fill="#e4e4e7" font-size="11" font-weight="bold">Secure Proxy Router</text>
    <text x="25" y="93" fill="#71717a" font-size="9">Protects Secret Keys</text>

    <rect x="15" y="115" width="150" height="42" rx="6" fill="#18181b" stroke="#27272a" />
    <text x="25" y="133" fill="#e4e4e7" font-size="11" font-weight="bold">Gemini SDK proxy</text>
    <text x="25" y="148" fill="#a78bfa" font-size="9">Structured Schema Guards</text>

    <rect x="15" y="170" width="150" height="42" rx="6" fill="#18181b" stroke="#27272a" />
    <text x="25" y="188" fill="#e4e4e7" font-size="11" font-weight="bold">In-Memory Index</text>
    <text x="25" y="203" fill="#34d399" font-size="9">Blazing-fast Local Fallback</text>
  </g>

  <!-- Connectors Server to Google AI API -->
  <path d="M 500 135 L 590 135" fill="none" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrow)" />
  <text x="545" y="125" fill="#a78bfa" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">API Call</text>

  <!-- Connectors Server to Database -->
  <path d="M 500 230 L 590 230" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)" />
  <text x="545" y="220" fill="#34d399" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">Local Query</text>

  <!-- 3a. GOOGLE GEN AI CLOUD -->
  <g transform="translate(600, 60)">
    <rect width="160" height="110" rx="12" fill="rgba(15, 23, 42, 0.83)" stroke="#1e293b" stroke-width="1.5" />
    <path d="M 12 110 C 12 110 5 10 80 10 C 155 10 148 110 148 110 Z" fill="rgba(99, 102, 241, 0.05)" />
    <text x="80" y="32" fill="#818cf8" font-size="11" font-weight="bold" text-anchor="middle">Google Gemini AI</text>
    <text x="80" y="52" fill="#475569" font-size="9" text-anchor="middle">Model: gemini-2.5-flash</text>
    <rect x="15" y="65" width="130" height="30" rx="4" fill="#0f172a" stroke="#334155" />
    <text x="80" y="84" fill="#6366f1" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">SDK v2.4 Enforced</text>
  </g>

  <!-- 3b. OFFLINE INDEX REDUNDANCY -->
  <g transform="translate(600, 190)">
    <rect width="160" height="110" rx="12" fill="rgba(6, 78, 59, 0.15)" stroke="#065f46" stroke-width="1.5" />
    <text x="80" y="35" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Offline Archive</text>
    <text x="80" y="55" fill="#047857" font-size="9" text-anchor="middle">Structured Static Maps</text>
    <rect x="15" y="68" width="130" height="30" rx="4" fill="#064e3b" stroke="#059669" />
    <text x="80" y="86" fill="#a7f3d0" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">Instant 15ms Recovery</text>
  </g>
</svg>
```

---

### 1. The Security First Approach (No Leaked Client Keys)
As is standard practice in secure production deployments, **I built a clean full-stack proxy architecture**. 
Upstream LLM API keys (like Google Gemini) are isolated inside backend memory. React fires query parameters to Express api routes, meaning database access and API credentials never leak out to GitHub, DevTools, or the end user.

### 2. Standalone Server Bundling (`esbuild`)
To make deployment extremely efficient, I optimized the compilation flow using Vite and Esbuild. 
Instead of transferring massive node folders at runtime, `npm run build` compiles our Express server (`server.ts`) directly into a highly tight, standalone CommonJS bundle (`dist/server.cjs`). This resolves all relative paths before execution, speeding up container spin-up times and saving server resources.

### 3. Contextual Grounding & Schema Guard
Instead of letting the AI hallucinate random colleges, query inputs are structured directly on our backend server side. We inject our typed JSON system schemas into the Gemini model prompt using the official `@google/genai` TypeScript SDK, ensuring the AI only recommends verified colleges.

---

## 🛠️ The Stack I Used

*   **Frontend SPA**: React 18/19, TypeScript, Tailwind CSS v4
*   **Smooth Scroll**: Lenis Core (`lenis`)
*   **Micro-interactions & Sequences**: GreenSock Animation Platform (`gsap`), Framer Motion (`motion/react`)
*   **Server Logic**: Express.js & Node.js
*   **AI Integration**: Google Gen AI SDK v2.4 (Strict schema parameterizations)
*   **Dev & Build Pipeline**: Vite 6, Esbuild, `tsx` (TypeScript Executor for Dev server)

---

## 💡 Why It Is Portfolio-Ready

*   **Written by hand, documented with care**: I focused on clean coding patterns, separating layouts, data maps, drawers, and modal states into highly organized modular files.
*   **Performance metrics are priority**: Uses standard React hooks (`useMemo`, `useCallback`) alongside performance batching tricks (rendering only what's on screen) to keep the layout lightweight under heavy filters.
*   **Durable and defensive**: Fully typed interfaces, zero relative runtime import overheads, robust error boundaries, and defensive custom fallbacks.
