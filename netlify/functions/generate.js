const { OpenAI } = require("openai");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.handler = async function(event) {
  const { prompt } = JSON.parse(event.body);
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    max_tokens: 1000,
    messages: [{ role: "user", content: prompt }]
  });
  const text = completion.choices[0].message.content;
  return {
    statusCode: 200,
    body: JSON.stringify({ text })
  };
};
