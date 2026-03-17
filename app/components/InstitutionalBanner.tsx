"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const values = [
  {
    title: "Missão",
    text: "Promover a defesa dos direitos dos povos originários, fortalecer suas culturas e garantir sustentabilidade para as comunidades amazônicas.",
  },
  {
    title: "Visão",
    text: "Um futuro onde os povos indígenas da Amazônia vivem com dignidade, autonomia e com suas terras e culturas preservadas para as próximas gerações.",
  },
  {
    title: "Valores",
    text: "Respeito à diversidade cultural, transparência, solidariedade, comprometimento social e amor incondicional pela floresta e seus povos.",
  },
];

const highlights = [
  { number: "2011", label: "Ano de Fundação" },
  { number: "253",  label: "Comunidades"     },
  { number: "35+",  label: "Etnias"          },
  { number: "16+",  label: "Anos de Impacto" },
];

// ─── Tokens — design system v3 (paleta nova) ─────────────────────────────────
// Esta seção é "seção clara" — usa #F5F5F0 como fundo (tom neutro quente da paleta)
// Acento principal:  #4FDE1B (verde vivo)
// Acento secundário: #A8E6A1 (verde claro)
// Números destaque:  #F4C430 (amarelo-ouro)
// Botão primário:    #C1440E → hover #F4C430
// Texto principal:   #1A1A1A
// Menu/dark surface: #1B5E20
// Wave de saída:     #0f2912 (continua o fluxo do NossaLuta)

const BG   = "#F5F5F0";   // seção alternada clara da paleta
const INK  = "#1A1A1A";   // texto principal
const DARK = "#0f2912";   // wave de saída

// ─── FadeIn helper ────────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Componente ───────────────────────────────────────────────────────────────
export function InstitutionalBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: BG }}
    >

      {/* ══ ATMOSFERA ════════════════════════════════════════════════ */}

      {/* Dot-pattern sutil */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.045 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots-inst" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="#1B5E20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-inst)" />
      </svg>

      {/* Blob direito — verde vivo */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-140px", right: "-180px",
          width: "540px", height: "540px",
          background: "radial-gradient(circle, rgba(79,222,27,0.10) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      {/* Blob esquerdo — ouro suave */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-110px", left: "-160px",
          width: "460px", height: "460px",
          background: "radial-gradient(circle, rgba(244,196,48,0.09) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ══ FAIXA DE ENTRADA — linha + grafismo + respiro ════════════ */}
      <div className="relative w-full z-10" aria-hidden="true">

        {/* Linha de entrada — verde vivo */}
        <div
          style={{
            height: "3px",
            background: `linear-gradient(90deg,
              transparent 0%,
              #1B5E20 10%,
              #4FDE1B 35%,
              #A8E6A1 50%,
              #4FDE1B 65%,
              #1B5E20 90%,
              transparent 100%)`,
            opacity: 0.65,
          }}
        />

        {/* Faixa grafismo de entrada */}
        <motion.div
          className="relative w-full overflow-hidden"
          style={{ height: "44px" }}
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ width: "100%", height: "100%", opacity: 0.68, position: "relative" }}>
            <Image
              src="/faixa_grafismo.png"
              alt="Grafismo indígena amazônico"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          {/* Fades — usando BG (#F5F5F0) */}
          <div className="absolute left-0 top-0 bottom-0 pointer-events-none"
            style={{ width: "80px", background: `linear-gradient(to right, ${BG} 0%, transparent 100%)`, zIndex: 2 }} />
          <div className="absolute right-0 top-0 bottom-0 pointer-events-none"
            style={{ width: "80px", background: `linear-gradient(to left, ${BG} 0%, transparent 100%)`, zIndex: 2 }} />
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ height: "28px", background: `linear-gradient(to top, ${BG} 0%, transparent 100%)`, zIndex: 2 }} />
        </motion.div>

        {/* Respiro */}
        <div style={{ height: "36px" }} />
      </div>

      {/* ══ CONTEÚDO ══════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── CABEÇALHO ──────────────────────────────────────────────── */}
        <FadeIn className="text-center mb-14">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(27,94,32,0.08)",          // #1B5E20 translúcido
              border: "1px solid rgba(27,94,32,0.24)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
              style={{ background: "#4FDE1B", boxShadow: "0 0 6px rgba(79,222,27,0.60)" }}
            />
            <span
              className="font-semibold uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.20em", color: "rgba(27,94,32,0.85)" }}
            >
              Sobre o Instituto
            </span>
          </div>

          {/* Título h2 */}
          <h2
            className="font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
              letterSpacing: "-0.025em",
              color: INK,
            }}
          >
            Quem{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #1B5E20 0%, #4FDE1B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Somos
            </span>
          </h2>

          {/* Linha decorativa */}
          <div className="flex justify-center mb-6">
            <div
              className="h-0.5 w-16 rounded-full"
              style={{ background: "linear-gradient(90deg, #1B5E20, #4FDE1B)" }}
            />
          </div>

          {/* Subtítulo */}
          <p
            className="text-base max-w-3xl mx-auto leading-relaxed"
            style={{ color: `rgba(26,26,26,0.68)`, lineHeight: "1.80" }}
          >
            O{" "}
            <strong style={{ color: INK, fontWeight: 700 }}>
              Instituto de Apoio aos Povos Originários da Amazônia (IAPOAM)
            </strong>{" "}
            é uma organização apartidária e não religiosa, dedicada à luta pelos direitos
            dos povos indígenas e quilombolas e à preservação da floresta amazônica desde 2011.
          </p>
        </FadeIn>

        {/* ── STATS ──────────────────────────────────────────────────── */}
        <FadeIn delay={0.10}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="group relative text-center py-7 px-4 overflow-hidden
                           cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,26,26,0.08)",
                  borderRadius: "16px",
                  boxShadow: "0 2px 16px rgba(26,26,26,0.06)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(79,222,27,0.35)";
                  el.style.boxShadow   = "0 10px 32px rgba(26,26,26,0.10), 0 0 0 1px rgba(79,222,27,0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(26,26,26,0.08)";
                  el.style.boxShadow   = "0 2px 16px rgba(26,26,26,0.06)";
                }}
              >
                {/* Barra topo — verde vivo no hover */}
                <div
                  className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100
                             transition-opacity duration-300"
                  style={{
                    height: "3px",
                    background: "linear-gradient(90deg, #1B5E20, #4FDE1B)",
                  }}
                />

                {/* Número — amarelo-ouro como no Hero/NossaLuta */}
                <div
                  className="font-black mb-1.5"
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    letterSpacing: "-0.03em",
                    color: "#F4C430",                // amarelo-ouro
                    textShadow: "0 0 18px rgba(244,196,48,0.22)",
                  }}
                >
                  {h.number}
                </div>
                <div
                  className="font-semibold uppercase"
                  style={{ fontSize: "11px", letterSpacing: "0.10em", color: "rgba(26,26,26,0.50)" }}
                >
                  {h.label}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* ── CARDS MISSÃO / VISÃO / VALORES ─────────────────────────── */}
        <FadeIn delay={0.15}>
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.60, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden cursor-default
                           transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,26,26,0.08)",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "0 2px 20px rgba(26,26,26,0.06)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow   = "0 12px 36px rgba(26,26,26,0.12)";
                  el.style.borderColor = "rgba(79,222,27,0.32)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow   = "0 2px 20px rgba(26,26,26,0.06)";
                  el.style.borderColor = "rgba(26,26,26,0.08)";
                }}
              >
                {/* Barra topo — verde vivo → verde claro */}
                <div
                  className="absolute top-0 left-0 right-0 opacity-70 group-hover:opacity-100
                             transition-opacity duration-300"
                  style={{
                    height: "3px",
                    background: "linear-gradient(90deg, #1B5E20 0%, #4FDE1B 50%, #A8E6A1 100%)",
                  }}
                />

                {/* Número decorativo de fundo */}
                <div
                  className="font-black leading-none mb-3 select-none pointer-events-none"
                  style={{
                    fontSize: "56px",
                    letterSpacing: "-0.05em",
                    color: "rgba(79,222,27,0.07)",   // verde vivo em baixíssima opacidade
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  0{index + 1}
                </div>

                {/* Título h3 */}
                <h3
                  className="font-semibold mb-3 leading-snug"
                  style={{
                    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                    letterSpacing: "-0.015em",
                    color: INK,
                  }}
                >
                  {item.title}
                </h3>

                {/* Linha decorativa — expande no hover */}
                <div
                  className="mb-4 rounded-full transition-all duration-500 group-hover:w-14"
                  style={{
                    width: "32px",
                    height: "2px",
                    background: "linear-gradient(90deg, #1B5E20, #4FDE1B)",
                  }}
                />

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(26,26,26,0.65)", lineHeight: "1.70" }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* ── QUOTE ESCURA ────────────────────────────────────────────── */}
        <FadeIn delay={0.20}>
          <div
            className="relative overflow-hidden mb-12"
            style={{
              background: "linear-gradient(135deg, #1B5E20 0%, #2d7a35 60%, #1B5E20 100%)",
              borderRadius: "24px",
              padding: "clamp(2.5rem, 5vw, 3.5rem)",
              boxShadow: "0 4px 40px rgba(27,94,32,0.22)",
            }}
          >
            {/* Glow ouro de fundo */}
            <div
              className="absolute top-0 right-0 pointer-events-none"
              style={{
                width: "300px", height: "300px",
                background: "radial-gradient(circle, rgba(244,196,48,0.10) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />
            {/* Glow verde vivo esquerdo */}
            <div
              className="absolute bottom-0 left-0 pointer-events-none"
              style={{
                width: "240px", height: "240px",
                background: "radial-gradient(circle, rgba(79,222,27,0.12) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />
            {/* Aspa decorativa */}
            <div
              className="absolute -top-2 left-8 font-serif select-none pointer-events-none leading-none"
              style={{ fontSize: "140px", color: "rgba(79,222,27,0.07)", lineHeight: 1 }}
              aria-hidden="true"
            >
              "
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p
                className="italic font-light leading-relaxed mb-8"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                  color: "rgba(240,255,240,0.90)",
                  lineHeight: "1.80",
                }}
              >
                Com mais de uma década de atuação, reafirmamos nosso compromisso com a
                justiça social, a valorização dos povos indígenas e a manutenção da floresta em pé.
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-10" style={{ background: "rgba(79,222,27,0.40)" }} />
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
                  style={{
                    border: "1px solid rgba(79,222,27,0.30)",
                    background: "rgba(79,222,27,0.10)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
                    style={{ background: "#4FDE1B", boxShadow: "0 0 6px rgba(79,222,27,0.80)" }}
                  />
                  <span
                    className="font-bold uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#A8E6A1" }}
                  >
                    IAPOAM
                  </span>
                </div>
                <div className="h-px w-10" style={{ background: "rgba(79,222,27,0.40)" }} />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── CTA + BADGES ────────────────────────────────────────────── */}
        <FadeIn delay={0.25} className="text-center pb-16">

          {/*
           * Botão primário — laranja-terra #C1440E
           * Hover: amarelo-ouro #F4C430 + texto #1A1A1A
           */}
          <Link
            href="/quem-somos"
            className="group inline-flex items-center gap-3 rounded-xl font-bold
                       tracking-wide transition-all duration-300"
            style={{
              padding: "14px 32px",
              fontSize: "0.875rem",
              letterSpacing: "0.02em",
              background: "linear-gradient(135deg, #C1440E 0%, #d94f16 100%)",
              color: "#ffffff",
              boxShadow: "0 4px 20px rgba(193,68,14,0.38)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform  = "translateY(-2px) scale(1.02)";
              el.style.background = "linear-gradient(135deg, #F4C430 0%, #f7d55a 100%)";
              el.style.color      = "#1A1A1A";
              el.style.boxShadow  = "0 8px 28px rgba(244,196,48,0.50)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform  = "translateY(0) scale(1)";
              el.style.background = "linear-gradient(135deg, #C1440E 0%, #d94f16 100%)";
              el.style.color      = "#ffffff";
              el.style.boxShadow  = "0 4px 20px rgba(193,68,14,0.38)";
            }}
          >
            Conheça Nossa História Completa
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Badges institucionais */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {["Apartidária", "Não Religiosa", "Transparência Total", "CNPJ: 13.955.659/0001-43"].map(
              (item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-semibold"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.05em",
                    background: "rgba(27,94,32,0.08)",
                    border: "1px solid rgba(27,94,32,0.22)",
                    color: "rgba(27,94,32,0.82)",
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "rgba(79,222,27,0.70)" }}
                  />
                  {item}
                </div>
              )
            )}
          </div>
        </FadeIn>
      </div>

      {/* ══ FAIXA DE SAÍDA — respiro + grafismo + linha + wave ═══════ */}
      <div className="relative w-full z-10" aria-hidden="true">

        <div style={{ height: "40px" }} />

        {/* Faixa grafismo de fechamento */}
        <motion.div
          className="relative w-full overflow-hidden"
          style={{ height: "44px" }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ width: "100%", height: "100%", opacity: 0.55, position: "relative" }}>
            <Image src="/faixa_grafismo.png" alt="" fill className="object-cover object-center" sizes="100vw" />
          </div>
          <div className="absolute left-0 top-0 bottom-0 pointer-events-none"
            style={{ width: "80px", background: `linear-gradient(to right, ${BG} 0%, transparent 100%)`, zIndex: 2 }} />
          <div className="absolute right-0 top-0 bottom-0 pointer-events-none"
            style={{ width: "80px", background: `linear-gradient(to left, ${BG} 0%, transparent 100%)`, zIndex: 2 }} />
          <div className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{ height: "20px", background: `linear-gradient(to bottom, ${BG} 0%, transparent 100%)`, zIndex: 2 }} />
          {/* Fade inferior dissolve diretamente no dark */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ height: "20px", background: `linear-gradient(to top, ${DARK} 0%, transparent 100%)`, zIndex: 2 }} />
        </motion.div>

        {/* Linha de fechamento */}
        <div
          style={{
            height: "2px",
            background: `linear-gradient(90deg,
              transparent 0%,
              #1B5E20 10%,
              #4FDE1B 35%,
              #A8E6A1 50%,
              #4FDE1B 65%,
              #1B5E20 90%,
              transparent 100%)`,
            opacity: 0.50,
          }}
        />
      </div>

      {/* ══ WAVE DE SAÍDA ════════════════════════════════════════════ */}
      <div className="pointer-events-none" style={{ marginTop: "-1px" }}>
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 72 L0 32 C200 4 400 56 720 32 C1040 8 1280 52 1440 28 L1440 72 Z"
            fill="rgba(8,22,10,0.28)"
            transform="translate(0, 3)"
          />
          <path
            d="M0 72 L0 32 C200 4 400 56 720 32 C1040 8 1280 52 1440 28 L1440 72 Z"
            fill="#0f2912"
          />
        </svg>
      </div>
    </section>
  );
}