import 'dotenv/config';
import { HuggingFaceInference } from "@langchain/community/llms/hf";
import { PromptTemplate } from "@langchain/core/prompts";

const model = new HuggingFaceInference({
  model: "HuggingFaceH4/zephyr-7b-beta", 
  apiKey: process.env.HUGGINGFACEHUB_API_KEY,
});

const prompt = PromptTemplate.fromTemplate(`
You are a Dubai hangout expert.
Given the vibe "{vibe}", respond *ONLY* with a JSON array of exactly 3 hangout spots.

Each item must be an object with exactly two keys:
- "name": string
- "description": string

Do not include any extra text, labels, or notes—just the array itself.
`);

export async function generateRecommendations(vibe: string) {
  // 1) Fill in the template
  const formatted = await prompt.format({ vibe });
  // 2) Call the model
  const response = await model.invoke(formatted);
  console.log("Raw response:\n", response);

  // 3) Pull out the first [...] pair (including everything between)
  const match = response.match(/\[\s*\{[\s\S]*?\}\s*\]/);
  if (!match) {
    console.error("❌ No JSON array found in output");
    throw new Error("Could not parse recommendations.");
  }
  let jsonStr = match[0];

  // 4) Remove any trailing commas before the closing bracket
  jsonStr = jsonStr.replace(/,(\s*])/, "$1");

  // 5) Parse and return
  try {
    return JSON.parse(jsonStr) as { name: string; description: string }[];
  } catch (err) {
    console.error("❌ Failed to parse JSON:", err, "\nCleaned JSON:", jsonStr);
    throw new Error("Could not parse recommendations.");
  }
}
