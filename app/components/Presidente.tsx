"use client";

import Image from "next/image";
import Link from "next/link";

const highlights = [
  { number: "16+", label: "Anos de Liderança" },
  { number: "253", label: "Comunidades Impactadas" },
  { number: "35+", label: "Etnias Representadas" },
  { number: "6",   label: "Programas Fundados" },
];

export function Presidente() {
  return (
    <section className="py-24 bg-[#8EBF24] relative overflow-hidden">

      {/* ── Background organic shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#548C1C]/30 rounded-full blur-[90px]" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#2E590E]/25 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#8EBF24]/20 rounded-full blur-[120px]" />

        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-presidente" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#010D00" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-presidente)" />
        </svg>

        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#010D00]/15 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#010D00]/10 border border-[#010D00]/15 rounded-full mb-5">
            <div className="w-2 h-2 bg-[#010D00]/50 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#010D00]/70 tracking-wide">
              Liderança & Fundação
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#010D00] mb-4 leading-tight tracking-tight">
            A Fundadora do IAPOAM
          </h2>
          <p className="text-base md:text-lg text-[#0C2605]/75 max-w-2xl mx-auto leading-relaxed font-medium">
            Por trás do instituto, uma história de coragem, dedicação e amor
            inabalável pelos povos da floresta
          </p>
        </div>

        {/* ── Main content: photo + text ── */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center mb-16">

          {/* ── Photo column ── */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px]">

              {/* Offset decorative frame */}
              <div className="absolute inset-0 rounded-3xl border-2 border-[#010D00]/12 translate-x-4 translate-y-4" />

              {/* Photo card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0C2605]/35 border-2 border-white/50 bg-[#0C2605]">

                {/* The photo — portrait, showing face clearly */}
                <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/kamilaperfil.png"
                    alt="Kamila Silva Prestes — Presidente e Fundadora do IAPOAM"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 90vw, 380px"
                  />

                  {/* Soft gradient at bottom for name tag readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010D00]/75 via-[#010D00]/05 to-transparent" />
                </div>

                {/* Name tag */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8EBF24] rounded-full mb-2 shadow-md">
                    <div className="w-1.5 h-1.5 bg-[#010D00] rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-[#010D00] uppercase tracking-wider">
                      Fundadora & Presidente
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white drop-shadow-lg">
                    Kamila Silva Prestes
                  </h3>
                </div>
              </div>

              {/* Floating badge — years */}
              <div className="absolute -bottom-4 -right-4 flex flex-col items-center justify-center w-20 h-20 bg-[#010D00] rounded-2xl shadow-xl border-2 border-[#8EBF24]/40">
                <span className="text-2xl font-black text-[#8EBF24] leading-none">16+</span>
                <span className="text-[9px] font-bold text-white/60 uppercase tracking-wide mt-0.5 text-center leading-tight">Anos de<br/>Luta</span>
              </div>
            </div>
          </div>

          {/* ── Text column ── */}
          <div className="space-y-5">
            <p className="text-lg text-[#010D00]/90 leading-relaxed">
              <span className="font-bold">Kamila Silva Prestes</span> é a presidente
              e fundadora do IAPOAM — uma mulher cuja trajetória é marcada por um
              comprometimento profundo com a causa dos povos originários da Amazônia.
            </p>

            <p className="text-base text-[#0C2605]/80 leading-relaxed">
              Nascida e criada com os valores de respeito à natureza e às culturas
              tradicionais, Kamila dedicou sua vida à construção de pontes entre as
              comunidades indígenas e o mundo externo, lutando incansavelmente pela
              garantia de direitos básicos e pela preservação da floresta.
            </p>

            <p className="text-base text-[#0C2605]/80 leading-relaxed">
              Em 2011, motivada pela urgência das demandas sociais e ambientais que
              presenciava nas aldeias, fundou o IAPOAM com a missão de transformar a
              realidade de dezenas de etnias amazônicas. Sob sua liderança, o instituto
              cresceu de uma pequena organização local para uma referência regional no
              campo dos direitos indígenas.
            </p>

            <p className="text-base text-[#0C2605]/80 leading-relaxed">
              Sua atuação vai além da gestão institucional: Kamila é uma voz ativa nos
              debates sobre preservação da Amazônia, demarcação de terras indígenas e
              inclusão social — sempre priorizando a escuta ativa e o respeito aos
              saberes tradicionais.
            </p>

            {/* Quote */}
            <div className="relative bg-[#010D00]/08 border-l-4 border-[#010D00]/30 rounded-r-2xl p-5 mt-2">
              <div className="absolute -top-3 left-4 text-4xl text-[#010D00]/20 font-serif leading-none select-none">
                "
              </div>
              <p className="text-base text-[#010D00]/80 italic leading-relaxed pt-1">
                A floresta não é apenas um ecossistema — ela é casa, memória e futuro
                para milhares de famílias. Protegê-la é proteger a humanidade.
              </p>
              <p className="text-sm font-bold text-[#0C2605] mt-3">
                — Kamila Silva Prestes
              </p>
            </div>

            <Link
              href="/quem-somos"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#010D00]/70 hover:text-[#010D00] transition-all duration-200 pt-1"
            >
              Saiba mais sobre nossa história
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Impact stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="group text-center py-7 px-4 bg-white/25 border border-white/40 rounded-2xl backdrop-blur-sm hover:bg-white/40 hover:border-white/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#010D00]/10 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-black text-[#010D00] mb-1.5">
                {h.number}
              </div>
              <div className="text-sm font-semibold text-[#0C2605]/75 leading-tight">
                {h.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Bottom wave transition ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 72 L0 32 C200 4 400 56 720 32 C1040 8 1280 52 1440 28 L1440 72 Z"
            fill="#010D00"
          />
        </svg>
      </div>
    </section>
  );
}