const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/generate-memory", async (req, res) => {
  const { fragments, tone, pov, style } = req.body;

  const prompt = `
You are a memory weaver.

Reconstruct an emotionally rich memory using these fragments:
${fragments.map((f) => `- ${f}`).join("\n")}

Tone: ${tone}
Point of view: ${pov}
Style: ${style}

Write a vivid and coherent memory below:
`;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a memory weaver. You reconstruct vivid first-person memories from scattered fragments.",
            },
            { role: "user", content: prompt },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log("🔍 Raw API response from OpenRouter:", data);
    const reply =
      data.choices?.[0]?.message?.content || "⚠️ Failed to generate memory.";
    res.json({ memory: reply });
  } catch (err) {
    console.error("OpenRouter error:", err);
    res.status(500).json({ error: "Failed to generate memory" });
  }
});

app.listen(port, () => {
  console.log(
    `✅ Memory Weave (OpenRouter version) running at http://localhost:${port}`
  );
});
