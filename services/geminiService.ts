import { GoogleGenAI } from "@google/genai";
import { GeneratedAnswer } from "../types";

// Access the key. Vite replaces process.env.API_KEY with the string value at build time.
const apiKey = process.env.API_KEY;

export const getAnswerForQuestion = async (
  questionText: string,
  contextTag: string
): Promise<GeneratedAnswer> => {
  // Check if the key was actually injected during the build
  if (!apiKey) {
    throw new Error("API Key is missing. Go to Netlify > Site settings > Environment variables, add 'API_KEY', and trigger a new deploy.");
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
    // Provide more specific error messages
    if (error.message && (error.message.includes('403') || error.message.includes('key'))) {
        throw new Error("Invalid API Key. Please check that your Google AI Studio key is correct in Netlify settings.");
    }
    throw new Error(`Failed to fetch answer: ${error.message || "Unknown error"}`);
  }
};