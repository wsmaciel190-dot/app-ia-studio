
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY is not set. The app will not function correctly.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getCleansingAdvice = async (userInput: string, tags: string[] = []): Promise<string> => {
  try {
    // Usando o modelo mais recente recomendado para tarefas de texto
    const model = 'gemini-3-flash-preview';
    
    const bookContext = `
      Princípios do livro "Limpeza Espiritual do Lar na Umbanda":
      - A limpeza visa eliminar energias negativas de pensamentos, sentimentos ou influências espirituais.
      - Sinais de desequilíbrio incluem: peso no ar, brigas, objetos quebrando, cansaço, insônia, irritabilidade, bloqueios na vida.
      - Rituais incluem: Defumação (com ervas quentes como arruda/guiné para limpeza; ervas mornas como alecrim/alfazema para harmonia), limpeza do chão com infusão de ervas, copo com água e sal grosso atrás da porta, e firmar velas para o Anjo da Guarda.
      - A preparação é chave: limpeza física da casa e banho de descarrego pessoal são essenciais antes de qualquer ritual.
    `;

    const symptomsContext = tags.length > 0 
      ? `Sintomas específicos selecionados pelo usuário: ${tags.join(', ')}.` 
      : '';

    const fullPrompt = `
      Você é um assistente virtual especialista nos ensinamentos de Pai Wanderson Maciel sobre limpeza espiritual do lar na Umbanda.
      Sua tarefa é fornecer conselhos práticos e passo a passo, baseados estritamente nos princípios do livro.

      **Contexto do Livro:**
      ${bookContext}

      **Situação do Usuário:**
      ${symptomsContext}
      Relato adicional: "${userInput}"

      **Sua Resposta:**
      Com base na situação do usuário e nos ensinamentos do livro, forneça um guia prático e compassivo.
      1. Comece identificando os sinais que o usuário descreveu ou selecionou.
      2. Sugira um plano de ação passo a passo, começando pela Preparação Essencial (limpeza física e pessoal).
      3. Recomende o ritual mais adequado (ex: Defumação, Limpeza com Ervas), explicando como fazê-lo de forma simples.
      4. Sugira uma prática de manutenção.
      5. Use uma linguagem de acolhimento e respeito (Axé). Organize a resposta com títulos, negrito e listas para fácil leitura.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: fullPrompt,
    });
    
    return response.text || "Não foi possível gerar um conselho no momento.";

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error && error.message.includes('API key not valid')) {
       return "Erro: A chave da API não é válida. Por favor, verifique a configuração.";
    }
    return "Ocorreu um erro ao buscar o conselho. Por favor, tente novamente mais tarde.";
  }
};
