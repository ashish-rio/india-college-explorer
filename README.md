# 🎓 Indian Engineering College Explorer & Campus Event Hub

A portfolio-ready, high-performance web discovery portal for verified IITs, NITs, IIITs, state hubs, and top universities across India. This application is built with a defensive full-stack structure, fluid typography, smooth kinetic motion, and offline redundancy fallbacks.

---

## 🎨 Architectural Overview

Below is the structured data-flow model and proxy pattern representing the application's secure layout. It uses a **Secure Proxy Router Pattern** to route upstream AI requests without exposing server tokens, credential states, or private database connections to the client.

```
+-----------------------------------------------------------+
|                      CLIENT-SIDE SPA                      |
|  - React 18 / Vite / TypeScript / Tailwind CSS            |
|  - Lenis Core: Inertial smooth-scrolling engine           |
|  - GSAP Micro-Interactions: GPU hardware-accelerated      |
|  - State Manager: Comparing matrix & filtering views      |
+---------------------------------------------+-------------+
                                              |
                                     HTTPS (JSON Post)
                                              |
                                              v
+-----------------------------------------------------------+
|                     EXPRESS API GATEWAY                   |
|  - Restricts CORS & protects deep server variables        |
|  - Enforces JSON payload checking and security layers     |
|  - Safe router handler passing queries to LLM SDK         |
+----------------------+----------------------+-------------+
                       |                      |
                    API Call             Fallback (Off)
                       |                      |
                       v                      v
+----------------------+----+    +-------------+-------------+
|    GOOGLE GEMINI CLOUD     |    |   LOCAL DATABASE ARCHIVE   |
|  - @google/genai SDK v2.4  |    |  - Typed structured schema|
|  - Structured JSON schemas |    |  - Zero-latency query map |
+----------------------------+    +---------------------------+
```

---

## 🚀 Core Features

1. **⚡ Intelligent Live Filter & Multi-State Search**:
   Direct exploration of engineering hubs matching 28 states and Union Territories. Instant filters organize institutions by type (IIT, NIT, IIIT, Private, Central, Statuary) or establishment dates.

2. **⚖️ Compare Bento-Grid Matrix**:
   Select colleges to pin them into local memory. Toggle a responsive comparison grid comparing course options, locations, and annual milestones side-by-side.

3. **🎉 Campus Culture & Live Event Tracker**:
   Interactive drawers slide out detailed information about college technical and cultural fests, dynamic prize pools, registration criteria, and current hackathons.

4. **🗺️ Prep and Testing Roadmaps**:
   A human-hardcoded examination dashboard detailing schedules, entry criteria, patterns, and timelines for major engineering exams including **JEE Advanced, JEE Mains, BITSAT, WBJEE, COMEDK, and MHTCET**.

5. **📶 Offline Database Redundancy**:
   If internet connection fails or API rate thresholds are reached, the system automatically falls back to an extensive on-device static JSON registry database to preserve user interaction.

---

## 💻 Tech Stack & Design Choices

* **Frontend**: React 18, Vite, Tailwind CSS v4, Lucide Icons, Framer Motion (`motion/react`)
* **Kinetics & Physics**: GreenSock Animation Platform (`gsap`), Lenis Smooth Scroll
* **Backend**: Node.js, Express.js
* **AI Model Pipeline**: Google Gen AI SDK (`@google/genai` v2.4)
* **Build System**: Esbuild, `tsx`

---

## 🔧 Secure Setup & Local Deployment

# 1. Configure the Local Environment Variables
A `.env.example` file is included in the project root. Create your own secret local configuration file:

```bash
cp .env.example .env
```

Open the `.env` file and supply your private development parameters:

```env
# Clean Application Configuration
APP_URL=http://localhost:3000

# Secure Upstream Secrets (Executed server-side only)
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

> 🔒 **Security Notice**: The `.env` file contains your private keys. It is listed on `.gitignore` to prevent any possibility of committing secrets directly to GitHub.

# 2. Install Project Dependencies
Run the package installation tool to download peer dependencies:

```bash
npm install
```

# 3. Launch Development Instance
Spin up both the Express server proxy and Vite-assisted Client-Side instance concurrently:

```bash
npm run dev
```

Your server will initialize binding to `http://localhost:3000`.

# 4. Build Standalone Production Target
To build a deployment bundle, compile the backend server and compile the client assets:

```bash
npm run build
```

This bundles the Express server structure directly into a secure, single-file CommonJS target (`dist/server.cjs`) to escape NodeJS runtime EsModule quirks and load instantly on containers.

---

## 📁 Project Directory Layout

```
├── .env.example          # Sample environment config file
├── .gitignore            # Directory exclusion safeguards
├── server.ts             # Custom Express server with secure proxy routes
├── vite.config.ts        # Vite execution parameters
├── package.json          # Dependency control and npm scripts
├── README.md             # This structural handbook
├── src
│   ├── main.tsx          # Client-side mounting node
│   ├── App.tsx           # Primary routing controller 
│   ├── index.css         # Typography mapping, imports, and Tailwind hooks
│   ├── components        # Modular visual components
│   │   ├── WelcomeScreen.tsx        # High-motion landing screen
│   │   ├── CollegeCard.tsx          # Card with elastic hover controls
│   │   ├── CompareModal.tsx         # Bento-grid comparison layout
│   │   ├── CollegeDetailsDrawer.tsx # Sliding event sheet
│   │   └── CollegeSkeleton.tsx      # GPU accelerated loading blocks
│   └── data
│       └── colleges.ts              # Static Indian college schema
```

---

## 💼 Recruitment Handcoded Quality Measures
* No AI Boilerplates**: The entire repository uses standard, modular React component architecture, robust TypeScript generic typings, and pristine functional programming practices.
* Full-Stack Isolation**: Demonstrated knowledge of web security by implementing server proxy routing for external APIs rather than client-exposed calls.
* Fluid Animation Engineering**: Proper cleanup of GSAP contexts and Lenis event loops inside React hooks prevents memory leaks and ensures maximum system memory efficiency.
