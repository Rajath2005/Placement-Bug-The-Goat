import { GoogleGenAI } from "@google/genai";
import { GeneratedAnswer } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAnswerForQuestion = async (
  questionText: string,
  contextTag: string
): Promise<GeneratedAnswer> => {
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
    
    // Simple parsing to separate code from text if needed, 
    // but returning full markdown text is usually better for the UI to handle.
    return {
      text: fullText,
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to fetch answer. Please check your API key or internet connection.");
  }
};
