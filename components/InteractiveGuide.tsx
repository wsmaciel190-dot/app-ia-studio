
import React, { useState, useCallback } from 'react';
import { getCleansingAdvice } from '../services/geminiService';
import { GuideStarIcon } from './icons/GuideStarIcon';
import { SparklesIcon } from './icons/SparklesIcon'; // Mantendo apenas se for usado em outro lugar, mas neste arquivo substituiremos o principal

const SYMPTOM_TAGS = [
  "Cansaço Excessivo", "Insônia", "Brigas Constantes", 
  "Objetos Quebrando", "Plantas Murchando", "Peso no Ambiente",
  "Bloqueio Financeiro", "Desânimo", "Vultos/Sombras"
];

export const InteractiveGuide: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleGetAdvice = useCallback(async () => {
    if ((!prompt.trim() && selectedTags.length === 0) || isLoading) return;

    setIsLoading(true);
    setError('');
    setResponse('');

    // Tempo de leitura da frase (15 segundos)
    // Sincronizado com a duração da animação CSS abaixo
    const READING_TIME_MS = 15000; 

    try {
      // Inicia o timer e a requisição simultaneamente
      const timerPromise = new Promise(resolve => setTimeout(resolve, READING_TIME_MS));
      const advicePromise = getCleansingAdvice(prompt, selectedTags);
      
      // Aguarda ambos terminarem. O Promise.all garante que o loading
      // durará PÊLO MENOS o tempo do timer, permitindo a leitura da frase.
      const [_, advice] = await Promise.all([timerPromise, advicePromise]);
      
      setResponse(advice);
    } catch (e) {
      setError('Não foi possível obter o conselho. Tente novamente.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, selectedTags, isLoading]);

  return (
    <div className="flex flex-col gap-5 md:gap-6">
      <div className="flex items-center gap-3 border-b border-slate-700 pb-4">
        <div className="p-2 bg-amber-300/10 rounded-full shrink-0">
          <GuideStarIcon className="w-6 h-6 text-amber-300" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
            Consultor Espiritual
          </h2>
          <p className="text-xs md:text-sm text-slate-400">Baseado na sabedoria da Umbanda</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <label className="text-sm font-medium text-slate-300 uppercase tracking-wider block">
          O que você tem sentido?
        </label>
        <div className="flex flex-wrap gap-2">
          {SYMPTOM_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 border touch-manipulation active:scale-95 ${
                selectedTags.includes(tag)
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.3)]'
                  : 'bg-slate-800 border-slate-600 text-slate-400 hover:border-slate-500 hover:text-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-300 uppercase tracking-wider block">
          Detalhes adicionais (Opcional)
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ex: Sinto que isso começou depois que recebi uma visita..."
          className="w-full p-4 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 h-24 resize-none placeholder-slate-600 text-sm md:text-base"
          disabled={isLoading}
        />
      </div>
      
      <button
        onClick={handleGetAdvice}
        disabled={isLoading || (!prompt.trim() && selectedTags.length === 0)}
        className="w-full sm:w-auto self-end px-6 py-3.5 md:py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/30 active:scale-[0.98] transition-all duration-300 disabled:opacity-80 disabled:cursor-wait disabled:transform-none disabled:shadow-none flex items-center justify-center gap-2 text-sm md:text-base overflow-hidden"
      >
        {isLoading ? (
          <div className="flex items-center w-full md:min-w-[300px] h-6 relative overflow-hidden">
            {/* Ícone fixo à esquerda */}
            <div className="shrink-0 z-10 bg-gradient-to-r from-cyan-600 to-cyan-600/0 pr-2">
                <svg className="animate-spin h-5 w-5 text-amber-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
            
            {/* Texto deslizante */}
            <div className="absolute inset-0 flex items-center">
                <span className="whitespace-nowrap animate-marquee pl-8 text-cyan-100 font-medium tracking-wide">
                  Sintonizando com a egrégora de luz e buscando a sabedoria ancestral para guiar seus passos...
                </span>
            </div>
            
            {/* Gradiente de fade à direita para suavizar a saída */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-blue-600 to-transparent z-10"></div>
          </div>
        ) : (
          <>
            <GuideStarIcon className="w-5 h-5" />
            <span>Receber Orientação</span>
          </>
        )}
      </button>

      {error && <p className="text-red-400 bg-red-900/20 p-3 rounded-lg border border-red-800/50 text-sm">{error}</p>}
      
      {response && (
        <div className="mt-2 p-4 md:p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600/50 rounded-2xl animate-fade-in shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 opacity-70"></div>
          <h3 className="text-lg md:text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
            <GuideStarIcon className="w-5 h-5" />
            Orientação Personalizada
          </h3>
          <div className="prose prose-invert prose-sm md:prose-base text-slate-300 whitespace-pre-wrap leading-relaxed">
            {response.split('**').map((part, index) => 
                index % 2 !== 0 ? <strong key={index} className="text-cyan-200">{part}</strong> : part
            )}
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-700 text-center">
            <p className="text-sm text-slate-400 italic mb-4">
              "A fé é o principal ingrediente de qualquer ritual."
            </p>
            <div className="bg-slate-950/40 rounded-xl p-4 border border-slate-700/50 mx-auto max-w-2xl">
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                <strong className="text-amber-200/90 block mb-1 tracking-wide">✦ NOTA IMPORTANTE ✦</strong>
                Estas orientações servem como um auxílio de luz para você e seu lar, mas <strong className="text-slate-200">não substituem nem inutilizam</strong> a consulta sagrada e as orientações de uma Entidade Espiritual incorporada em um Terreiro de Umbanda. O axé vivo e presencial do terreiro é insubstituível.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes marquee {
  0% { transform: translateX(400px); } /* Começa logo à direita do botão */
  100% { transform: translateX(-150%); } /* Atravessa tudo até sumir à esquerda */
}
.animate-marquee {
  animation: marquee 15s linear infinite;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
