import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getSolarAdvice = async (location: string, monthlyBill: number): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      Act as an expert solar energy consultant for 'TopSolar Andalucía'.
      The user is located in ${location} and spends approximately ${monthlyBill}€ per month on electricity.
      
      Provide a brief, persuasive, and data-driven estimate in Spanish formatted as Markdown.
      Include:
      1. Estimated number of solar panels needed.
      2. Estimated monthly savings (in Euros).
      3. A mention of specific Andalusian weather benefits (high sun hours) or regional subsidies (Subvenciones Junta de Andalucía) relevant to ${location}.
      4. Keep the tone professional but warm and inviting (Andalusian hospitality).
      5. Keep it under 150 words.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Lo sentimos, no pudimos generar un cálculo en este momento. Por favor contáctanos directamente.";
  } catch (error) {
    console.error("Error generating solar advice:", error);
    return "Hubo un error al conectar con nuestro asesor inteligente. Por favor intenta más tarde o llámanos.";
  }
};