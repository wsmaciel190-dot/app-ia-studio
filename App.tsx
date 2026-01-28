
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { InteractiveGuide } from './components/InteractiveGuide';
import { Navigation } from './components/Navigation';
import { SectionContent } from './components/SectionContent';
import { SECTIONS, SectionId } from './constants';

const App: React.FC = () => {
  // Referência para a área de conteúdo para permitir rolagem suave
  const contentRef = useRef<HTMLDivElement>(null);

  // Inicializa o estado baseado na URL (hash) para suportar refresh e links diretos
  const [activeSection, setActiveSection] = useState<SectionId>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      return SECTIONS.some(s => s.id === hash) ? (hash as SectionId) : 'intro';
    }
    return 'intro';
  });

  // Atualiza a URL quando a seção muda e rola suavemente para o conteúdo
  const handleSelectSection = useCallback((id: SectionId) => {
    setActiveSection(id);
    // Atualiza a URL sem o pulo padrão do navegador (usando pushState) para controlar a rolagem manualmente
    window.history.pushState(null, '', `#${id}`);
    
    // Rola suavemente para o início da seção de conteúdo se estiver muito abaixo na página
    if (contentRef.current) {
      const yOffset = -100; // Um pouco de espaço para o cabeçalho não cobrir
      const element = contentRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      // Só rola se o usuário estiver abaixo do ponto de início do conteúdo
      if (window.scrollY > y) {
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }
  }, []);

  // Ouve mudanças na URL (Botão Voltar do Android/Browser)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (SECTIONS.some(s => s.id === hash)) {
        setActiveSection(hash as SectionId);
      } else {
        setActiveSection('intro');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activeSectionData = SECTIONS.find(s => s.id === activeSection) || SECTIONS[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-gray-200 font-sans selection:bg-cyan-500/30">
      <main className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <Header />
        
        <div className="mt-6 md:mt-8 p-4 md:p-6 bg-slate-800/50 rounded-2xl shadow-2xl backdrop-blur-sm border border-slate-700">
          <InteractiveGuide />
        </div>

        <div className="mt-8 md:mt-12" ref={contentRef}>
          <Navigation 
            sections={SECTIONS} 
            activeSection={activeSection}
            onSelectSection={handleSelectSection} 
          />
          <div className="mt-4 md:mt-6">
            <SectionContent section={activeSectionData} />
          </div>
        </div>

        <footer className="text-center mt-8 md:mt-12 py-6 text-slate-500 text-xs md:text-sm">
          <p>Baseado na obra de Pai Wanderson Maciel. Axé!</p>
        </footer>
      </main>
    </div>
  );
};

export default App;