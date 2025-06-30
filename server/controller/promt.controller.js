import OpenAI from "openai";
import { Promt } from "../model/promt.model.js";

const openai = new OpenAI({
  apiKey: "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",
  baseURL: "https://openrouter.ai/api/v1", // MUST include /api/v1
});

export const sendPromt = async (req, res) => {
  const { content } = req.body;

  if (!content || !content.trim()) {
    return res.status(400).json({ errors: "Prompt content is required" });
  }

  try {
    // Save user prompt
    await Promt.create({
      role: "user",
      content: content.trim(),
    });

    // Make API call to OpenRouter
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1-0528:free",
      messages: [{ role: "user", content: content.trim() }],
      extra_headers: {
        "HTTP-Referer": "https://yourdomain.com", // Replace with your actual domain
        "X-Title": "Your App Name", // Optional title for ranking
      },
      extra_body: {}, // Required by OpenRouter API
    });

    // Log full response for debugging
    console.log("OpenRouter Response:", completion);

    // Safe check for AI response
    if (!completion.choices || completion.choices.length === 0) {
      console.error("No choices found in OpenRouter response.");
      throw new Error("No choices returned from model");
    }

    const aiContent = completion.choices[0]?.message?.content;

    if (!aiContent) {
      console.error("No content found in AI message.");
      throw new Error("No content returned from model");
    }

    // Save assistant response
    await Promt.create({
      role: "assistant",
      content: aiContent,
    });

    // Send back to frontend
    return res.status(200).json({ reply: aiContent });

  } catch (error) {
    console.error("sendPromt error:", error);
    return res.status(500).json({
      error: "Something went wrong in Prompt API",
      details: error.message,
    });
  }
};
