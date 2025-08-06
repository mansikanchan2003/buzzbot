// Buzzbot.js (or wherever you handle the API request)

const API_KEY = "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"; // 🔐 Paste your real key here

const runChat = async (prompt) => {
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000/", // Update if hosted elsewhere
        "X-Title": "Gemini Clone"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct", // or use another like meta-llama/llama-3-8b-instruct
        messages: [
          { role: "system", content: "You are a helpful and friendly assistant called BuzzBot." },
          { role: "user", content: prompt }
        ]
      }),
    });

    const data = await res.json();
    return data.choices?.[0]?.message?.content.trim();
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    return "❌ Sorry, I couldn't process your request.";
  }
};

export default runChat;
