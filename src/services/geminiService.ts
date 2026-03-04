import { GoogleGenAI, Type } from "@google/genai";
import { MECATRONICA_BANK, Question } from "../data/questions";

const getApiKey = () => {
  // Use import.meta.env (Vite standard) or process.env (AI Studio standard) safely
  const viteKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
  const processKey = (window as any).process?.env?.GEMINI_API_KEY;
  return viteKey || processKey || "";
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export type { Question };

export async function generateExam(topic: string): Promise<Question[]> {
  // Si el tema es Mecatrónica o Electricidad, usamos el banco local
  const lowerTopic = topic.toLowerCase();
  if (lowerTopic.includes("mecatrónica") || lowerTopic.includes("electricidad") || lowerTopic.includes("electrónica")) {
    // Seleccionar 20 preguntas aleatorias del banco
    const shuffled = [...MECATRONICA_BANK].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 20).map((q, index) => ({ ...q, id: index + 1 }));
  }

  // Si es otro tema, usamos la IA para generar las preguntas
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Genera un examen de opción múltiple sobre el tema: "${topic}". 
    El examen debe tener exactamente 20 preguntas.
    Cada pregunta debe tener 4 opciones (A, B, C, D) y solo una respuesta correcta.
    Asegúrate de que las preguntas sean variadas y cubran diferentes aspectos del tema.
    El tono debe ser profesional y educativo.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.INTEGER },
            text: { type: Type.STRING },
            options: {
              type: Type.OBJECT,
              properties: {
                A: { type: Type.STRING },
                B: { type: Type.STRING },
                C: { type: Type.STRING },
                D: { type: Type.STRING },
              },
              required: ["A", "B", "C", "D"],
            },
            correctAnswer: { 
              type: Type.STRING,
              description: "La letra de la respuesta correcta (A, B, C o D)"
            },
            explanation: { type: Type.STRING, description: "Una breve explicación de por qué la respuesta es correcta" }
          },
          required: ["id", "text", "options", "correctAnswer", "explanation"],
        },
      },
    },
  });

  try {
    const questions = JSON.parse(response.text || "[]");
    return questions;
  } catch (error) {
    console.error("Error parsing exam questions:", error);
    throw new Error("No se pudo generar el examen correctamente.");
  }
}
