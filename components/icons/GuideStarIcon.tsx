
import React from 'react';

export const GuideStarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    {/* Estrela principal de 4 pontas */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8Z" />
    {/* Raios de luz nos diagonais para efeito de irradiação */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l1.5 -1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17l1.5 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l-1.5 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l-1.5 -1.5" />
    {/* Pequeno círculo central representando o núcleo da energia */}
    <circle cx="12" cy="12" r="1.5" fill="currentColor" className="opacity-50" />
  </svg>
);
