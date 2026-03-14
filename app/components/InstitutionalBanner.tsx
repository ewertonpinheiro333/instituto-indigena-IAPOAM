"use client";

import Link from "next/link";

const values = [
  {
    title: "Missão",
    text: "Promover a defesa dos direitos dos povos originários, fortalecer suas culturas e garantir sustentabilidade para as comunidades amazônicas.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    title: "Visão",
    text: "Um futuro onde os povos indígenas da Amazônia vivem com dignidade, autonomia e com suas terras e culturas preservadas para as próximas gerações.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Valores",
    text: "Respeito à diversidade cultural, transparência, solidariedade, comprometimento social e amor incondicional pela floresta e seus povos.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const highlights = [
  { number: "2011", label: "Ano de Fundação" },
  { number: "253",  label: "Comunidades" },
  { number: "35+",  label: "Etnias" },
  { number: "16+",  label: "Anos de Impacto" },
];

export function InstitutionalBanner() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* ── Subtle background decoration ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left corner leaf shape */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#8EBF24]/08 rounded-full blur-3xl" />
        {/* Bottom-right corner */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#548C1C]/06 rounded-full blur-3xl" />
        {/* Horizontal rule accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8EBF24]/40 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section label + heading ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8EBF24]/12 border border-[#8EBF24]/30 rounded-full mb-5">
            <div className="w-2 h-2 bg-[#548C1C] rounded-full" />
            <span className="text-sm font-semibold text-[#2E590E] tracking-wide">
              Sobre o Instituto
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#010D00] mb-6 leading-tight tracking-tight">
            Quem Somos
          </h2>

          <p className="text-lg text-[#2E590E]/80 max-w-3xl mx-auto leading-relaxed">
            O{" "}
            <span className="font-bold text-[#0C2605]">
              Instituto de Apoio aos Povos Originários da Amazônia (IAPOAM)
            </span>{" "}
            é uma organização apartidária e não religiosa, dedicada à luta pelos
            direitos dos povos indígenas e quilombolas e à preservação da floresta
            amazônica desde 2011.
          </p>
        </div>

        {/* ── Quick stats bar ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="group text-center py-6 px-4 bg-[#8EBF24]/08 border border-[#8EBF24]/20 rounded-2xl hover:bg-[#8EBF24]/15 hover:border-[#548C1C]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-black text-[#0C2605] mb-1">
                {h.number}
              </div>
              <div className="text-sm font-semibold text-[#548C1C]/80">
                {h.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Mission / Vision / Values cards ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {values.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#8EBF24]/25 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-[#548C1C]/10 hover:-translate-y-1 hover:border-[#548C1C]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Card top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8EBF24] to-[#548C1C] rounded-t-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              

              <h3 className="text-xl font-bold text-[#010D00] mb-3">{item.title}</h3>
              <p className="text-sm text-[#2E590E]/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ── Quote block ── */}
        <div className="relative bg-gradient-to-br from-[#0C2605] to-[#2E590E] rounded-3xl p-10 lg:p-14 mb-12 overflow-hidden shadow-2xl shadow-[#0C2605]/20">
          {/* Background decoration inside quote */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#548C1C]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8EBF24]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Large quote mark */}
          <div
            className="absolute top-6 left-8 text-[120px] leading-none text-white/08 font-serif select-none"
            aria-hidden="true"
          >
            "
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic font-light mb-8">
              Com mais de uma década de atuação, reafirmamos nosso compromisso com
              a justiça social, a valorização dos povos indígenas e a manutenção
              da floresta em pé.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#8EBF24]/60" />
              <div className="flex items-center gap-2 px-4 py-1.5 bg-[#8EBF24]/15 border border-[#8EBF24]/25 rounded-full">
                <div className="w-2 h-2 bg-[#8EBF24] rounded-full animate-pulse" />
                <span className="text-sm font-bold text-[#8EBF24] tracking-wider uppercase">IAPOAM</span>
              </div>
              <div className="h-px w-12 bg-[#8EBF24]/60" />
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <Link
            href="/quem-somos"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0C2605] text-white font-bold text-base rounded-xl shadow-lg shadow-[#0C2605]/20 hover:bg-[#2E590E] hover:shadow-xl hover:shadow-[#2E590E]/25 hover:scale-105 active:scale-100 transition-all duration-300"
          >
            Conheça Nossa História Completa
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Trust indicators below CTA */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-8">
            {[
              "Apartidária",
              "Não Religiosa",
              "Transparência Total",
              "CNPJ: 13.955.659/0001-43",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs font-semibold text-[#548C1C]/70"
              >
                <svg className="w-3.5 h-3.5 text-[#8EBF24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom transition ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/30 to-transparent" />
    </section>
  );
}