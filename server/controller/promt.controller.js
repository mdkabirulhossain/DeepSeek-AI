import OpenAI from "openai";
import { Promt } from "../model/promt.model.js";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export const sendPromt = async (req, res) => {
  const { content } = req.body;

  // 🧪 Validate input
  if (!content || !content.trim()) {
    return res.status(400).json({ error: "Prompt content is required." });
  }

  try {
    // 💾 Save user's prompt
    await Promt.create({ role: "user", content: content.trim() });

    // 🤖 Request response from OpenRouter
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1-0528:free",
      messages: [{ role: "user", content: content.trim() }],
      extra_headers: {
        "HTTP-Referer": "https://yourdomain.com",
        "X-Title": "Your App Name",
      },
      extra_body: {},
    });

    console.log("OpenRouter Response:", completion);

    const aiMessage = completion?.choices?.[0]?.message?.content;

    // 🚫 Handle no response from model
    if (!aiMessage || aiMessage.trim() === "") {
      console.warn("AI returned no content.");
      return res.status(400).json({ error: "The AI could not generate a response for this prompt." });
    }

    // 💾 Save assistant's response
    await Promt.create({ role: "assistant", content: aiMessage });

    // ✅ Send response to frontend
    return res.status(200).json({ reply: aiMessage });

  } catch (error) {
    // 🧯 Catch unexpected internal/server errors
    console.error("sendPromt error:", error);
    return res.status(500).json({
      error: "Internal Server Error. Please try again later.",
      details: error.message,
    });
  }
};
