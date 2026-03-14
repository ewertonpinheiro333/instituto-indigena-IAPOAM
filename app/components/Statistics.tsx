"use client";

import { useState } from "react";

const impactAreas = [
  {
    title: "Proteção Territorial",
    description: "Defesa dos direitos e terras dos povos originários",
    metric: "253",
    label: "Comunidades"
  },
  {
    title: "Preservação Ambiental",
    description: "Floresta em pé e sustentabilidade na Amazônia",
    metric: "15+",
    label: "Anos"
  },
  {
    title: "Fortalecimento Cultural",
    description: "Valorização dos saberes tradicionais indígenas",
    metric: "35+",
    label: "Etnias"
  }
];

const timeline = [
  { year: "2011", event: "Fundação do IAPOAM" },
  { year: "15+", event: "Anos de Atuação" },
  { year: "35+", event: "Etnias Atendidas" },
  { year: "253", event: "Comunidades Alcançadas" }
];

export default function Statistics() {
  const [activeArea, setActiveArea] = useState<number>(0);

  return (
    <section className="py-16 bg-gradient-to-br from-[#132a13] via-[#1a1a1a] to-[#132a13] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#90a955] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#132a13] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#132a13]/50 border border-[#90a955]/30 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#ecf39e] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#ecf39e]">
              Nosso Impacto
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Compromisso com a Amazônia
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Mais de uma década dedicada aos povos originários e à floresta
          </p>
        </div>

        {/* Compact Timeline Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-4 text-center border border-white/10 hover:border-[#90a955]/40 hover:shadow-lg hover:shadow-[#90a955]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecf39e] to-[#90a955] mb-1">
                {item.year}
              </div>
              <div className="text-xs text-white/60 font-medium">
                {item.event}
              </div>
            </div>
          ))}
        </div>

        {/* Impact Areas - Tablet Navigation Style */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Áreas de Impacto
          </h3>
          
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar">
            {impactAreas.map((area, index) => (
              <button
                key={index}
                onClick={() => setActiveArea(index)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeArea === index
                    ? 'bg-gradient-to-r from-[#132a13] to-[#90a955] text-white shadow-lg shadow-[#90a955]/30'
                    : 'bg-white/5 text-white/70 border border-white/10 hover:border-[#90a955]/40'
                }`}
              >
                {area.title}
              </button>
            ))}
          </div>

          {/* Active Area Content */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 shadow-xl">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecf39e] to-[#90a955] mb-2">
                {impactAreas[activeArea].metric}
              </div>
              <div className="text-sm text-white/60 font-medium mb-4">
                {impactAreas[activeArea].label}
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-white mb-3 text-center">
              {impactAreas[activeArea].title}
            </h4>
            
            <p className="text-white/70 text-center leading-relaxed max-w-xl mx-auto">
              {impactAreas[activeArea].description}
            </p>
          </div>
        </div>

        {/* Mission Statement - Compact Card */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 shadow-xl">
          <div className="max-w-3xl mx-auto">
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                Quem Somos
              </h3>
              <p className="text-white/70 leading-relaxed text-center text-sm">
                O <span className="font-semibold text-white">Instituto de Apoio aos Povos Originários da Amazônia (IAPOAM)</span> é uma organização <span className="font-semibold">apartidária e não religiosa</span>, fundada em 15 de fevereiro de 2011, dedicada à defesa dos direitos dos povos originários e à preservação da floresta amazônica.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#132a13]/60 to-[#90a955]/20 rounded-xl p-5 border-l-4 border-[#ecf39e]">
              <h4 className="text-lg font-bold text-white mb-3">Nossa Missão</h4>
              <p className="text-white/70 leading-relaxed text-sm mb-4">
                Desenvolvemos projetos em parceria com comunidades, promovendo o <span className="font-semibold text-white">fortalecimento sociocultural</span>, a <span className="font-semibold text-white">proteção territorial</span>, a <span className="font-semibold text-white">sustentabilidade ambiental</span> e o respeito aos <span className="font-semibold text-white">saberes tradicionais</span>.
              </p>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <p className="text-white/80 leading-relaxed text-sm italic">
                  "Com mais de uma década de atuação, reafirmamos nosso compromisso com a justiça social, a valorização dos povos indígenas e a manutenção da floresta em pé."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators - Compact */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#ecf39e] rounded-full"></div>
              <span className="font-medium">Organização Apartidária</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#ecf39e] rounded-full"></div>
              <span className="font-medium">Não Religiosa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#ecf39e] rounded-full"></div>
              <span className="font-medium">CNPJ: 13.955.659/0001-43</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}