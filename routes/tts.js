import express from "express";
import generateSpeech from "../services/tts.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { text } = req.body;

  try {
    const audio = await generateSpeech(text);
    res.set("Content-Type", "audio/mpeg");
    res.send(audio);
  } catch (err) {
    console.error("TTS error:", err);
    res.status(500).json({ error: "TTS error" });
  }
});

export default router;
