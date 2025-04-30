import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { generateRecommendations } from "./recommend.js"; // 👈 include `.js` if using ESM

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.post("/api/recommend", async (req, res) => {
  const { vibe } = req.body;
  console.log("Received vibe:", vibe);

  if (!vibe) {
    return res.status(400).json({ error: "Vibe is required" });
  }

  try {
    const recommendations = await generateRecommendations(vibe);
    res.json({ recommendations });
  } catch (error) {
    console.error("Error generating recommendations:", error);
    res.status(500).json({ error: "Failed to generate recommendations" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});
