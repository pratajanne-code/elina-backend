import express from "express";
import askElina from "../services/llm.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const reply = await askElina(message);
    res.json({ reply });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "LLM error" });
  }
});

export default router;
