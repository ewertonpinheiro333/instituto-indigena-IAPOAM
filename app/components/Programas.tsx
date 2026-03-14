"use client";

import { useState } from "react";
import Link from "next/link";

const programs = [
  {
    id: "maloca-digital",
    title: "Maloca Digital",
    subtitle: "Inclusão Tecnológica Indígena",
    color: "from-[#2E590E] to-[#548C1C]",
    borderColor: "border-[#548C1C]/40",
    description:
      "O programa Maloca Digital nasce da convicção de que o acesso à tecnologia é um direito de todos, incluindo os povos originários. Por meio da doação e instalação de computadores, criação de pontos de conectividade e capacitação em informática básica, o IAPOAM leva o mundo digital até as aldeias sem que estas percam sua identidade cultural.",
    actions: [
      "Doação e instalação de computadores nas aldeias",
      "Capacitação em informática básica e internet",
      "Criação de pontos de conectividade comunitários",
      "Oficinas de uso de ferramentas digitais para cidadania",
      "Acesso a serviços públicos online para comunidades",
    ],
    impact: "Mais de 200 famílias indígenas capacitadas digitalmente",
  },
  {
    id: "pescadores",
    title: "Pescadores",
    subtitle: "Pesca Artesanal Indígena",
    color: "from-[#0C2605] to-[#2E590E]",
    borderColor: "border-[#2E590E]/40",
    description:
      "Os rios da Amazônia são a fonte de vida e sustento de milhares de famílias indígenas. O programa de apoio aos Pescadores do IAPOAM atua na garantia dos territórios pesqueiros tradicionais, no fortalecimento das técnicas ancestrais de pesca e na inserção responsável da produção no mercado, sempre respeitando os ciclos naturais e a sustentabilidade ambiental.",
    actions: [
      "Suporte técnico para técnicas de pesca sustentável",
      "Defesa dos territórios e direitos pesqueiros tradicionais",
      "Apoio à comercialização ética da produção pesqueira",
      "Capacitação em manejo e conservação dos recursos hídricos",
      "Documentação e preservação dos saberes da pesca ancestral",
    ],
    impact: "Apoio a dezenas de famílias ribeirinhas e pescadores indígenas",
  },
  {
    id: "agricultores",
    title: "Agricultores",
    subtitle: "Agricultura Sustentável Indígena",
    color: "from-[#2E590E] to-[#548C1C]",
    borderColor: "border-[#548C1C]/40",
    description:
      "A terra é sagrada para os povos indígenas. O programa de apoio aos Agricultores do IAPOAM valoriza as práticas tradicionais de cultivo e promove a segurança alimentar das comunidades, aliando os conhecimentos ancestrais com técnicas agroecológicas modernas. O objetivo é garantir autonomia alimentar e renda digna para as famílias indígenas.",
    actions: [
      "Assessoria técnica em agroecologia e agricultura orgânica",
      "Fortalecimento de hortas e roças comunitárias",
      "Apoio à comercialização de produtos da floresta",
      "Capacitação em técnicas de conservação do solo",
      "Promoção de feiras e mercados locais indígenas",
    ],
    impact: "Segurança alimentar fortalecida em diversas comunidades",
  },
  {
    id: "artesaos",
    title: "Artesãos",
    subtitle: "Arte e Cultura dos Povos Originários",
    color: "from-[#0C2605] to-[#2E590E]",
    borderColor: "border-[#2E590E]/40",
    description:
      "O artesanato indígena é muito mais do que um produto — é uma linguagem cultural que transmite histórias, espiritualidade e identidade dos povos originários. O programa de apoio aos Artesãos do IAPOAM fortalece a produção, preserva as técnicas tradicionais e abre novos canais de comercialização que valorizam de forma justa o trabalho dos artistas indígenas.",
    actions: [
      "Fortalecimento das técnicas tradicionais de artesanato",
      "Criação de canais justos de comercialização e exposição",
      "Oficinas de criação com materiais naturais da floresta",
      "Documentação e preservação das artes tradicionais indígenas",
      "Feiras culturais e exposições para valorização da arte ancestral",
    ],
    impact: "Geração de renda e valorização da identidade cultural indígena",
  },
];

export function Programas() {
  const [active, setActive] = useState(0);

  return (
    <section id="programas" className="py-20 bg-[#0C2605] relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#548C1C] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#2E590E] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-[#010D00]/80 border border-[#2E590E]/50 rounded-full mb-4">
            <span className="text-sm font-medium text-[#8EBF24]">Programas</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nossos Programas</h2>
          <p className="text-white/65 max-w-2xl mx-auto text-base">
            Iniciativas estruturadas para fortalecer a autonomia, dignidade e sustentabilidade das comunidades indígenas
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {programs.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                active === i
                  ? `bg-gradient-to-r ${p.color} text-white shadow-lg shadow-[#010D00]/40 scale-105`
                  : "bg-[#010D00]/60 text-white/65 border border-[#2E590E]/40 hover:border-[#548C1C]/60 hover:text-white"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Active Program Content */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left: description */}
          <div className="bg-[#010D00]/60 border border-[#2E590E]/40 rounded-3xl p-8">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${programs[active].color} rounded-full mb-5`}>
              <span className="text-sm font-bold text-white">{programs[active].subtitle}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">{programs[active].title}</h3>

            <p className="text-white/70 leading-relaxed mb-6 text-sm">
              {programs[active].description}
            </p>

            {/* Impact badge */}
            <div className="bg-[#2E590E]/20 border border-[#548C1C]/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#8EBF24] rounded-full mt-1.5 flex-shrink-0 animate-pulse" />
                <div>
                  <p className="text-xs text-white/50 font-semibold uppercase tracking-wider mb-1">Impacto</p>
                  <p className="text-sm text-white/80">{programs[active].impact}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: actions */}
          <div className="bg-[#010D00]/60 border border-[#2E590E]/40 rounded-3xl p-8">
            <h4 className="text-lg font-bold text-white mb-6">Nossas Ações</h4>

            <div className="space-y-3 mb-8">
              {programs[active].actions.map((action, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-[#0C2605]/60 border border-[#2E590E]/30 rounded-xl hover:border-[#548C1C]/50 transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 bg-[#8EBF24] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-white/75 leading-relaxed">{action}</span>
                </div>
              ))}
            </div>

            <Link
              href="/o-que-fazemos"
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#2E590E] to-[#548C1C] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#548C1C]/20 hover:scale-105 transition-all duration-300 text-sm"
            >
              Saiba Mais Sobre Nossos Programas
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {programs.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "w-8 h-2.5 bg-[#8EBF24]" : "w-2.5 h-2.5 bg-[#2E590E]/60 hover:bg-[#548C1C]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}