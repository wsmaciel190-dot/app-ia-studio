
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center px-2">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight flex flex-col items-center justify-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-300 drop-shadow-sm">
          Limpeza Espiritual
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-300 drop-shadow-sm mt-1 sm:mt-2">
          Pessoal e do Lar
        </span>
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
        Guia Interativo para Harmonização e Proteção na Umbanda
      </p>
    </header>
  );
};
