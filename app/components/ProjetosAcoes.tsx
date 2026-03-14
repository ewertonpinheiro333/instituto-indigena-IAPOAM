"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// ─────────────────────────────────────────────
// Adicione ou remova imagens nesta lista.
// Apenas o "src" e "alt" são necessários.
// ─────────────────────────────────────────────
const images = [
  { src: "/images/projects/acao_001.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_002.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_003.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_004.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_005.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_006.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_008.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_009.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_010.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_011.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_012.jfif", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_013.jfif", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_014.jfif", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_015.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_016.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_017.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_018.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_019.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_020.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_021.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_022.jpg", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_023.jpg", alt: "Ação IAPOAM" },
 
];

export function ProjetosAcoes() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const prev = () => {
    setIsPlaying(false);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  const next = () => {
    setIsPlaying(false);
    setCurrent((c) => (c + 1) % images.length);
  };

  const goTo = (i: number) => {
    setIsPlaying(false);
    setCurrent(i);
  };

  return (
    <section className="py-20 bg-[#010D00] relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#2E590E] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#548C1C] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#0C2605]/80 border border-[#2E590E]/50 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#8EBF24] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#8EBF24] tracking-wide">
              Galeria
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Projetos e Ações
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Registros das nossas ações junto às comunidades indígenas da Amazônia
          </p>
        </div>

        {/* ── Main slider ── */}
        <div className="relative rounded-3xl overflow-hidden border border-[#2E590E]/40 shadow-2xl shadow-[#010D00]/60 mb-5">

          {/* Images */}
          <div className="relative aspect-[16/9] bg-[#0C2605]">
            {images.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#010D00]/80 via-transparent to-transparent" />

            {/* ── Universal caption — same for all photos ── */}
            <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8EBF24]/20 border border-[#8EBF24]/30 text-[#8EBF24] text-xs font-bold uppercase tracking-widest rounded-full mb-3 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-[#8EBF24] rounded-full" />
                IAPOAM em Campo
              </span>
              <p className="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed">
                Atuando diretamente junto às comunidades indígenas da Amazônia na defesa
                de direitos, fortalecimento cultural e promoção do bem-estar social.
              </p>
            </div>

            {/* Prev / Next */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-[#010D00]/70 border border-[#2E590E]/50 text-white rounded-full hover:bg-[#2E590E] transition-all duration-200 hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-[#010D00]/70 border border-[#2E590E]/50 text-white rounded-full hover:bg-[#2E590E] transition-all duration-200 hover:scale-110"
              aria-label="Próxima"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Top-right: counter + play/pause */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 flex items-center justify-center bg-[#010D00]/70 border border-[#2E590E]/50 text-white rounded-full hover:bg-[#2E590E] transition-all duration-200"
                aria-label={isPlaying ? "Pausar" : "Reproduzir"}
              >
                {isPlaying
                  ? <Pause className="w-4 h-4" />
                  : <Play className="w-4 h-4 ml-0.5" />
                }
              </button>
              <span className="px-3 py-1.5 bg-[#010D00]/70 border border-[#2E590E]/50 text-white text-sm font-semibold rounded-full">
                {current + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-1 bg-[#0C2605]">
            <div
              className="h-full bg-gradient-to-r from-[#2E590E] to-[#8EBF24] transition-all duration-300"
              style={{ width: `${((current + 1) / images.length) * 100}%` }}
            />
          </div>
        </div>

        {/* ── Thumbnails ── */}
        <div className="grid grid-cols-4 md:grid-cols-7 gap-2.5 mb-5">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                i === current
                  ? "ring-2 ring-[#8EBF24] scale-105 shadow-lg shadow-[#8EBF24]/20"
                  : "opacity-55 hover:opacity-90 ring-1 ring-[#2E590E]/40 hover:ring-[#548C1C]/60 hover:scale-105"
              }`}
              aria-label={`Foto ${i + 1}`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
              {i === current && (
                <div className="absolute inset-0 bg-[#8EBF24]/10" />
              )}
            </button>
          ))}
        </div>

        {/* ── Dots ── */}
        <div className="flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-[#8EBF24]"
                  : "w-2.5 h-2.5 bg-[#2E590E]/60 hover:bg-[#548C1C]/60"
              }`}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}