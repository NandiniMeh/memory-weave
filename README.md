# 🧠 Memory Weave

**Memory Weave** is a web app that uses AI to generate lucid, emotion-laden memories from random snippets of thought. It combines natural language generation with an animated, cinematic frontend to make it feel like you really lived that forgotten (or fictional) moment.

---

## 🌟 Features

- 📝 Submit memory fragments (e.g., “lavender”, “midnight rain”, “his smile”)
- 🎭 Choose a mood like `nostalgic`, `nightmarish`, `romantic`, or `anxious`
- 🧵 AI weaves a coherent, immersive memory from your input
- 💫 Dreamy animated UI with floating glowing particles
- 💻 Built with React + Material UI (frontend), Express + OpenRouter (backend)

## 🧪 Tech Stack

| Layer     | Tech Used                        |
|-----------|----------------------------------|
| Frontend  | React, Material UI, tsparticles  |
| Backend   | Node.js, Express, dotenv         |
| LLM API   | [OpenRouter.ai](https://openrouter.ai) |
| Styling   | CSS Modules, Theme Overrides     |

## 🛠️ Getting Started

### Clone the Repo

```bash
git clone https://github.com/NandiniMeh/memory-weave.git
cd memory-weave

### 📦 Backend Setup (/backend)

cd backend
npm install

# Create a .env file
touch .env

# Add this to .env
# (replace with your real OpenRouter API key)
OPENROUTER_API_KEY=your_openrouter_api_key_here

# Start backend server
node index.js

# Backend runs at:
# http://localhost:5000

---

### 🎨 Frontend Setup (/frontend)

cd ../frontend
npm install
npm start

# Frontend runs at:
# http://localhost:3000

---

## 🧠 Inspiration

*What if you could feed snippets of your life to an AI that stitched together a memory more vivid than real life?*
Memory Weave started at the crossroads of emotion, memory and machine imagination — An examination of language's potential to reconnect what time has separated.

## ✨ Credits

Created with love by @NandiniMeh
Powered by OpenRouter, React, and pure imagination.
