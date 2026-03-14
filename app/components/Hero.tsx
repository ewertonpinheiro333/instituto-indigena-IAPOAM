"use client";

import Link from "next/link";

const stats = [
  { number: "253", label: "Comunidades Atendidas" },
  { number: "35+", label: "Etnias Apoiadas" },
  { number: "16+", label: "Anos de Atuação" },
  { number: "6",   label: "Áreas de Impacto" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">

      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>

        {/* Multi-layer overlay — preserves readability while letting video breathe */}
        {/* Base dark green tint — ties video to brand palette */}
        <div className="absolute inset-0 bg-[#010D00]/55" />
        {/* Green brand wash — blends video tones with #8EBF24 identity */}
        <div className="absolute inset-0 bg-[#2E590E]/30 mix-blend-multiply" />
        {/* Vignette — darkens edges, keeps center bright for content */}
        <div className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 30%, rgba(1,13,0,0.55) 100%)"
          }}
        />
        {/* Bottom fade — smooth transition into the wave */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0C2605] to-transparent" />
      </div>

      {/* ── Decorative overlay elements ── */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {/* Subtle dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Soft green glow — top right corner */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#8EBF24]/10 rounded-full blur-[100px]" />
        {/* Soft green glow — bottom left */}
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#548C1C]/10 rounded-full blur-[90px]" />

        {/* Vertical accent lines */}
        <div className="absolute top-0 right-[22%] w-px h-full bg-gradient-to-b from-transparent via-white/05 to-transparent" />
        <div className="absolute top-0 left-[22%] w-px h-full bg-gradient-to-b from-transparent via-white/04 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full mb-5 mt-9 backdrop-blur-sm">
          <div className="w-2 h-2 bg-[#8EBF24] rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-white/85 tracking-wide">
            Fundado em 15 de Fevereiro de 2011
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tight drop-shadow-xl">
          Defendendo os{" "}
          <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="text-[#8EBF24]">Povos Originários</span>
            {/* Underline accent */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 400 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8 C80 2, 160 10, 240 6 C320 2, 370 9, 398 7"
                stroke="#8EBF24"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
          </span>
          <br />
          <span className="text-white/90">da Amazônia</span>
        </h1>

        <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
          O IAPOAM atua na defesa dos direitos indígenas, preservação da floresta
          e fortalecimento das comunidades amazônicas há mais de uma década.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            href="/quem-somos"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8EBF24] text-[#010D00] font-black text-base rounded-xl shadow-xl shadow-[#010D00]/40 hover:bg-[#548C1C] hover:text-white hover:shadow-2xl hover:scale-105 active:scale-100 transition-all duration-300"
          >
            Conheça Nossa Missão
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            href="/doacoes"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 text-white font-bold text-base rounded-xl border-2 border-white/30 hover:bg-white/25 hover:border-white/50 hover:shadow-lg hover:scale-105 active:scale-100 transition-all duration-300 backdrop-blur-sm"
          >
            Apoie o Instituto
          </Link>
        </div>

        {/* ── Impact Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/35 hover:shadow-xl hover:shadow-[#010D00]/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-black text-white mb-1.5 tracking-tight drop-shadow-md">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-white/65 leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          {[
            "Organização Apartidária",
            "Não Religiosa",
            "CNPJ: 13.955.659/0001-43",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-4 py-2 bg-white/08 border border-white/15 rounded-full text-xs font-semibold text-white/55 backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 bg-[#8EBF24]/70 rounded-full" />
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom wave transition ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80 L0 40 C240 0 480 60 720 40 C960 20 1200 55 1440 35 L1440 80 Z"
            fill="#0C2605"
          />
        </svg>
      </div>
    </section>
  );
}