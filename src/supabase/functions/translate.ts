import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function translate(text: string, lang: string) {
  if (lang === "en") return text;

  const res = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Translate this product category name to ${lang}.
Return only the translated text.

Text: "${text}"`,
  });

  return res.output_text.trim();
}
