
import React from 'react';
import { LotusIcon } from './components/icons/LotusIcon';
import { SunIcon } from './components/icons/SunIcon';
import { VesselIcon } from './components/icons/VesselIcon';
import { HerbsIcon } from './components/icons/HerbsIcon';
import { AmuletIcon } from './components/icons/AmuletIcon';
import { ThirdEyeIcon } from './components/icons/ThirdEyeIcon';
import { CandleIcon } from './components/icons/CandleIcon';

export type SectionId = 'intro' | 'fundamentals' | 'identifying' | 'preparation' | 'rituals' | 'herbs' | 'maintenance';

export interface Section {
  id: SectionId;
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  content: React.ReactNode;
}

export const SECTIONS: Section[] = [
  {
    id: 'intro',
    title: 'Introdução',
    Icon: LotusIcon,
    content: (
      <div className="space-y-4">
        <p>Nosso lar é nosso refúgio, o espaço onde recarregamos as energias. Na visão da Umbanda, o ambiente doméstico é um campo energético vivo, suscetível a influências positivas e negativas. A qualidade dessa energia impacta diretamente nosso bem-estar físico, mental, emocional e espiritual.</p>
        <p>Este guia oferece um caminho prático, baseado nos preceitos da Umbanda, para realizar a limpeza e harmonização energética do seu lar, transformando-o em um verdadeiro santuário de paz, luz e Axé.</p>
      </div>
    ),
  },
  {
    id: 'fundamentals',
    title: 'Fundamentos',
    Icon: SunIcon,
    content: (
       <div className="space-y-4">
        <p>A Umbanda possui uma cosmovisão rica, onde tudo no universo é permeado por energia, conhecida como <strong>Axé</strong>. O Axé é a força vital divina presente em todos os seres.</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Energias:</strong> Podem ser positivas (harmonia, saúde), negativas (vibrações densas, desequilibradas) ou neutras. A limpeza espiritual visa eliminar as energias negativas.</li>
          <li><strong>Influências Espirituais:</strong> Podem afetar o ambiente, como larvas astrais (acúmulos energéticos deletérios) e miasmas, criados por pensamentos e emoções negativas persistentes.</li>
          <li><strong>Proteção:</strong> A fé, a intenção e a conexão espiritual são pilares para proteger o lar.</li>
          <li><strong>Entidades:</strong> Orixás e guias espirituais auxiliam no processo de limpeza, trazendo sua força e sabedoria.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'identifying',
    title: 'Identificando a Necessidade',
    Icon: ThirdEyeIcon,
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-lg text-amber-300 mb-2">Sinais no Ambiente:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Sensação de peso no ar, brigas frequentes.</li>
            <li>Objetos quebrando e eletrodomésticos com defeitos constantes.</li>
            <li>Lâmpadas queimando com frequência.</li>
            <li>Presença inexplicável de insetos, odores desagradáveis.</li>
            <li>Plantas murchando, animais agitados ou doentes.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg text-cyan-300 mb-2">Sinais nos Moradores:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Cansaço extremo e persistente, insônia, sono agitado.</li>
            <li>Pesadelos recorrentes, irritabilidade, desânimo, apatia.</li>
            <li>Sensação de drenagem energética.</li>
            <li>Doenças frequentes, problemas financeiros inesperados.</li>
            <li>Sensação de estagnação ou bloqueio na vida.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'preparation',
    title: 'Preparação Essencial',
    Icon: VesselIcon,
    content: (
       <div className="space-y-4">
        <p>Uma preparação cuidadosa é crucial para a eficácia do ritual.</p>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li><strong>Limpeza Física:</strong> A desordem material atrai desordem espiritual. Organize os cômodos, livre-se de objetos quebrados ou sem uso, e faça uma limpeza completa em pisos, paredes e móveis.</li>
          <li><strong>Preparação Pessoal:</strong> Tome um banho de descarrego (arruda, guiné ou sal grosso), seguido de um banho de equilíbrio (alfazema ou alecrim). Vista roupas claras e mantenha a mente focada com pensamentos elevados.</li>
          <li><strong>Escolha do Momento:</strong> Escolha um momento de calma, sem interrupções. As fases da lua podem ser consideradas (Minguante para banimento, Crescente/Cheia para harmonização).</li>
          <li><strong>Reunião dos Materiais:</strong> Prepare velas, ervas secas, incensos, defumador, carvão, água, sal grosso e recipientes adequados.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'rituals',
    title: 'Rituais Poderosos',
    Icon: CandleIcon,
    content: (
       <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg text-amber-300 mb-2">Defumação</h3>
          <p>Utiliza a fumaça sagrada da queima de ervas para transmutar energias. Passe a fumaça por todos os cômodos, começando pelos fundos da casa e terminando na porta de entrada, com as janelas abertas.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-cyan-300 mb-2">Limpeza com Água e Ervas</h3>
          <p>Prepare uma infusão ou maceração de ervas e use-a para limpar o chão da casa, também dos fundos para a frente. Use ervas como guiné e arruda para limpeza, e alecrim ou alfazema para harmonia.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-amber-300 mb-2">Utilização de Água e Sal Grosso</h3>
          <p>Coloque um copo de vidro com água e três punhados de sal grosso atrás da porta principal de entrada. Ele atuará como um filtro energético. Troque semanalmente ou quando a aparência da água se alterar.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-cyan-300 mb-2">Velas e Orações de Firmeza</h3>
          <p>Acender velas com intenção cria um ponto de luz e atrai proteção. Firme uma vela branca de sete dias para o Anjo da Guarda de cada morador, pedindo proteção e clareza.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'herbs',
    title: 'Ervas Sagradas',
    Icon: HerbsIcon,
    content: (
      <div className="space-y-4">
        <p>Cada planta possui uma vibração única, sendo fundamental nos rituais.</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-700/50 rounded-lg">
            <h4 className="font-bold text-rose-400">Ervas Quentes</h4>
            <p className="text-sm">Energia intensa para limpezas profundas e quebra de demandas. Usar com cautela.</p>
            <p className="text-xs mt-2 italic">Ex: Arruda, Guiné, Casca de alho, Pimentas.</p>
          </div>
          <div className="p-4 bg-slate-700/50 rounded-lg">
            <h4 className="font-bold text-amber-300">Ervas Mornas</h4>
            <p className="text-sm">Energia equilibradora e harmonizadora. Ideais para restaurar o equilíbrio após limpezas pesadas.</p>
            <p className="text-xs mt-2 italic">Ex: Alfazema, Alecrim, Manjericão, Sálvia.</p>
          </div>
          <div className="p-4 bg-slate-700/50 rounded-lg">
            <h4 className="font-bold text-cyan-300">Ervas Frias</h4>
            <p className="text-sm">Energias específicas e calmantes, muitas vezes ligadas diretamente a Orixás.</p>
            <p className="text-xs mt-2 italic">Ex: Boldo (Oxalá), Rosa branca.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'maintenance',
    title: 'Manutenção da Harmonia',
    Icon: AmuletIcon,
    content: (
       <div className="space-y-4">
        <p>A limpeza é um processo contínuo. Adote práticas para manter a energia do lar elevada:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Cultive Vibrações Positivas:</strong> Mantenha pensamentos positivos, gratidão, amor e paz no dia a dia. Evite brigas e fofocas.</li>
          <li><strong>Práticas Regulares:</strong> Faça defumações suaves com ervas mornas (alecrim) semanalmente. Use incensos de boa qualidade.</li>
          <li><strong>Ponto de Firmeza:</strong> Crie um pequeno altar doméstico com velas, cristais, flores e imagens de sua devoção para ancorar energias positivas.</li>
          <li><strong>Busque Auxílio:</strong> Para casos mais complexos ou persistentes, não hesite em procurar a orientação de um terreiro de Umbanda sério e de sua confiança.</li>
        </ul>
      </div>
    ),
  },
];
