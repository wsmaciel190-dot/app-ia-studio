
import React from 'react';
import { Section } from '../constants';

interface SectionContentProps {
  section: Section;
}

const SectionContentComponent: React.FC<SectionContentProps> = ({ section }) => {
  return (
    <div className="p-4 md:p-6 bg-slate-800/30 rounded-2xl border border-slate-700 animate-fade-in-content">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 flex items-center gap-3">
        <div className="p-1.5 bg-amber-400/10 rounded-lg">
          <section.Icon className="w-6 h-6 md:w-7 md:h-7 text-amber-300" />
        </div>
        {section.title}
      </h2>
      <div className="prose prose-invert prose-sm md:prose-base prose-slate max-w-none leading-relaxed">
        {section.content}
      </div>
    </div>
  );
};

const fadeIn = `
@keyframes fadeInContent {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-content {
  animation: fadeInContent 0.4s ease-out forwards;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = fadeIn;
document.head.appendChild(styleSheet);


export const SectionContent = React.memo(SectionContentComponent);
