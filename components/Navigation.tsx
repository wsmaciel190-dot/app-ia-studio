
import React from 'react';
import { Section, SectionId } from '../constants';

interface NavigationProps {
  sections: Section[];
  activeSection: SectionId;
  onSelectSection: (id: SectionId) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ sections, activeSection, onSelectSection }) => {
  return (
    <nav className="relative">
      {/* 
        Container flexível:
        - Mobile: overflow-x-auto (rolagem horizontal), sem wrap.
        - Desktop (md): flex-wrap (quebra de linha), centralizado, sem rolagem.
        - scroll-smooth: Garante suavidade ao rolar horizontalmente.
      */}
      <div className="flex gap-2 overflow-x-auto scroll-smooth md:overflow-visible md:flex-wrap md:justify-center pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
        {sections.map(({ id, title, Icon }) => (
          <button
            key={id}
            onClick={() => onSelectSection(id)}
            className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 whitespace-nowrap touch-manipulation
              ${activeSection === id
                ? 'bg-slate-800 border-cyan-500/50 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] ring-1 ring-cyan-500/20 transform scale-105'
                : 'bg-slate-800/30 border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800 hover:border-slate-700 active:scale-95'
              }`}
          >
            <Icon className={`w-4 h-4 md:w-5 md:h-5 ${activeSection === id ? 'text-cyan-400' : 'text-slate-500'}`} />
            <span>{title}</span>
          </button>
        ))}
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
};