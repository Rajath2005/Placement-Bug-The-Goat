import { GoogleGenAI } from "@google/genai";
import { GeneratedAnswer } from "../types";

// Access the system key from build time env
const systemApiKey = process.env.API_KEY;

export const getAnswerForQuestion = async (
  questionText: string,
  contextTag: string,
  userApiKey?: string | null
): Promise<GeneratedAnswer> => {
  
  // Prioritize user key if provided, otherwise use system key
  const apiKey = userApiKey || systemApiKey;

  if (!apiKey) {
    throw new Error("MISSING_KEY");
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      You are an expert technical interviewer and coding tutor.
      
      Task: Provide a concise, optimal solution for the following placement question.
      Context: ${contextTag} Programming/Algorithm.
      
      Question: "${questionText}"
      
      Requirements:
      1. Provide a brief explanation of the logic (2-3 sentences max).
      2. Provide the complete, working code solution in the appropriate language (${contextTag}).
      3. If the question involves complexity, briefly state Time/Space complexity.
      
      Format the output nicely. Put the code in a markdown block.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    const fullText = response.text || "No response generated.";
    
    return {
      text: fullText,
    };

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Check for Rate Limit (429) or Quota issues or Permission denied (403)
    const msg = error.message?.toLowerCase() || "";
    if (msg.includes('429') || msg.includes('quota') || msg.includes('resource exhausted')) {
        throw new Error("QUOTA_EXCEEDED");
    }
    if (msg.includes('403') || msg.includes('api key') || msg.includes('permission')) {
        throw new Error("INVALID_KEY");
    }
    
    throw new Error(`Failed to fetch answer: ${error.message || "Unknown error"}`);
  }
};