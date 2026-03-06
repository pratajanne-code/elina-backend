import OpenAI from "openai";
import { elinaSystemPrompt } from "../config/prompts.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function askElina(userMessage) {
  const response = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: elinaSystemPrompt },
      { role: "user", content: userMessage }
    ]
  });

  return response.choices[0].message.content;
}
