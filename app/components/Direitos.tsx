"use client";

import { useState } from "react";

const stats = [
  { value: "91,5%", label: "do eleitorado de São Gabriel da Cachoeira é indígena", source: "TSE" },
  { value: "81,2%", label: "dos eleitores de São Paulo de Olivença são indígenas", source: "TSE" },
  { value: "79,3%", label: "dos eleitores de Santa Isabel do Rio Negro são indígenas", source: "TSE" },
];

const direitos = [
  {
    title: "O Kokar antes da Coroa",
    text: "Antes da chegada dos portugueses, o Brasil já era habitado por centenas de povos com suas próprias formas de organização, territórios respeitados e lideranças. O Kokar — coroa de penas indígena — representa séculos de soberania e sabedoria que antecede qualquer constituição.",
  },
  {
    title: "O Voto como Instrumento de Poder",
    text: "No século XX nasceu a modernidade brasileira: o sindicato, o partido, a democracia representativa. Hoje, com a lei de cotas indígenas aprovada e o ano eleitoral de 2026 se aproximando, o voto é a arma mais poderosa que o povo originário tem para escolher seus próprios representantes.",
  },
  {
    title: "Parente Vota em Parente",
    text: "A lei de cotas indígenas garante representatividade nos espaços de poder. Votar em candidatos indígenas é fortalecer a voz dos povos originários nas câmaras, assembleias e no congresso. Cada voto consciente é um passo rumo à autodeterminação.",
  },
  {
    title: "Venda de Voto é Crime Eleitoral",
    text: "Trocar seu voto por cesta básica, dinheiro ou qualquer benefício é crime eleitoral previsto no Código Eleitoral Brasileiro — com pena de reclusão e multa. Não se deixe enganar. Seu voto vale muito mais do que qualquer oferta.",
  },
];

const comoVotar = [
  { step: "01", title: "Tire seu Título de Eleitor", desc: "Procure o cartório eleitoral mais próximo ou acesse o site do TSE. O título é gratuito e obrigatório para votar." },
  { step: "02", title: "Confira seu Local de Votação", desc: "Use o app e-Título ou acesse o site do TRE-AM para saber onde votar. A Justiça Eleitoral leva as urnas até comunidades remotas." },
  { step: "03", title: "Pesquise os Candidatos", desc: "Conheça as propostas. Priorize candidatos que defendam terras indígenas, saúde, educação diferenciada e direitos dos povos originários." },
  { step: "04", title: "Vote com Consciência", desc: "No dia da eleição, leve seu documento com foto. Não aceite propostas de troca de voto — denuncie pelo app Pardal do TSE." },
];

export function Direitos() {
  const [activeTab, setActiveTab] = useState<"por-que" | "como">("por-que");

  return (
    <section className="py-20 bg-white relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0C2605] border border-[#2E590E] rounded-full mb-5">
            <div className="w-2 h-2 bg-[#8EBF24] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#8EBF24] tracking-wide">Direitos Políticos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0C2605] mb-4 tracking-tight">
            Por que Votar?
          </h2>
          <p className="text-[#2E590E] max-w-2xl mx-auto text-base leading-relaxed">
            Antes da coroa dos reis, existia o Kokar — a coroa de penas dos povos originários.
            O voto consciente é a continuidade dessa soberania.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0C2605] rounded-2xl p-6 text-center hover:bg-[#2E590E] transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#8EBF24] mb-2">{stat.value}</div>
              <p className="text-white/80 text-sm leading-snug">{stat.label}</p>
              <span className="inline-block mt-2 text-xs text-[#8EBF24]/70 font-semibold tracking-wider">Fonte: {stat.source}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("por-que")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
              activeTab === "por-que"
                ? "bg-[#0C2605] text-white border-[#0C2605]"
                : "bg-transparent text-[#0C2605] border-[#0C2605]/40 hover:border-[#0C2605] hover:bg-[#0C2605]/5"
            }`}
          >
            Por que votar?
          </button>
          <button
            onClick={() => setActiveTab("como")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
              activeTab === "como"
                ? "bg-[#0C2605] text-white border-[#0C2605]"
                : "bg-transparent text-[#0C2605] border-[#0C2605]/40 hover:border-[#0C2605] hover:bg-[#0C2605]/5"
            }`}
          >
            Como votar?
          </button>
        </div>

        {/* Tab: Por que votar */}
        {activeTab === "por-que" && (
          <div className="grid md:grid-cols-2 gap-6">
            {direitos.map((item, i) => (
              <div
                key={i}
                className="group bg-[#0C2605] rounded-3xl p-7 hover:bg-[#2E590E] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0C2605]/20 transition-all duration-300"
              >
                <h3 className="text-base font-bold text-white mb-3 leading-tight">
                  {item.title}
                </h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#548C1C] to-[#8EBF24] rounded-full mb-3 group-hover:w-16 transition-all duration-300" />
                <p className="text-sm text-white/65 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Como votar */}
        {activeTab === "como" && (
          <div className="space-y-4">
            {comoVotar.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 bg-[#0C2605] rounded-3xl p-6 hover:bg-[#2E590E] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0C2605]/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <span className="text-[#8EBF24] font-bold text-sm">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Alert: Crime eleitoral */}
        <div className="mt-12 bg-[#0C2605] border-l-4 border-[#8EBF24] rounded-3xl p-8">
          <h3 className="text-lg font-bold text-white mb-3">Venda de Voto é Crime!</h3>
          <p className="text-white/65 text-sm leading-relaxed max-w-2xl">
            Trocar seu voto por cesta básica, dinheiro ou qualquer benefício é{" "}
            <span className="text-[#8EBF24] font-semibold">crime eleitoral</span> — com pena de
            reclusão de até 4 anos e multa. Não venda sua voz. Denuncie pelo app{" "}
            <span className="text-[#8EBF24] font-semibold">Pardal</span> do TSE ou ligue{" "}
            <span className="text-[#8EBF24] font-semibold">0800 978 0011</span>.
          </p>
        </div>

        {/* IAPOAM CTA */}
        <div className="mt-6 bg-[#0C2605] rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            O IAPOAM Está ao Seu Lado
          </h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#548C1C] to-[#8EBF24] rounded-full mb-4 mx-auto" />
          <p className="text-white/65 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            O Instituto de Apoio aos Povos Originários da Amazônia trabalha para que cada indígena
            conheça e exerça seus direitos políticos. Ajudamos comunidades a se cadastrar como eleitores,
            a entender os processos eleitorais e a denunciar irregularidades. Parente indígena vota em
            parente — com consciência e liberdade.
          </p>
          <a
            href="https://wa.me/5592985220682"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#8EBF24] hover:bg-[#7aaa1a] text-[#010D00] font-bold rounded-full text-sm transition-all duration-300"
          >
            Fale com o IAPOAM
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Source note */}
        <div className="mt-10 text-center">
          <p className="text-[#2E590E]/50 text-xs">
            Dados: Tribunal Regional Eleitoral do Amazonas (TRE-AM) e Tribunal Superior Eleitoral (TSE) — Abril/2025 •{" "}
            <a
              href="https://www.tre-am.jus.br/comunicacao/noticias/2025/Abril/justica-eleitoral-garante-a-participacao-democratica-dos-povos-indigenas-por-meio-do-voto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#548C1C] transition-colors underline underline-offset-2"
            >
              Leia a notícia completa
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}