"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Paleta — design system v3 ────────────────────────────────────────────────
// Esta é a seção de DESTAQUE MÁXIMO — única com fundo vibrante no site.
// Antes usava #b3f801 (neon). Agora usa #4FDE1B (verde vivo da paleta nova).
// Botão primário: #C1440E → hover #F4C430
// Texto sobre verde vivo: #1A1A1A (ink)
// Badge flutuante: #1B5E20 com texto #4FDE1B
// Wave de saída: #0f2912 (continua o fluxo dark)
// ─────────────────────────────────────────────────────────────────────────────

const highlights = [
  { number: "16+", label: "Anos de Liderança"      },
  { number: "253", label: "Comunidades Impactadas" },
  { number: "35+", label: "Etnias Representadas"   },
  { number: "6",   label: "Programas Fundados"     },
];

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
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Componente ───────────────────────────────────────────────────────────────
export function Presidente() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        // Seção accent única — fundo verde vivo #4FDE1B (substitui neon #b3f801)
        background: "#4FDE1B",
        paddingTop: "6rem",
        paddingBottom: "8rem",
      }}
    >

      {/* ══ ATMOSFERA ════════════════════════════════════════════════ */}

      {/* Dot-pattern escuro sobre verde vivo */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.045 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots-pres" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#1A1A1A" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-pres)" />
      </svg>

      {/* Blob topo-direito — #A8E6A1 (verde claro) para dar profundidade sem sair da paleta */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-140px", right: "-160px",
          width: "540px", height: "540px",
          background: "radial-gradient(circle, rgba(168,230,161,0.70) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(2px)",
        }}
      />

      {/* Blob base-esquerdo — #1B5E20 (floresta escuro) */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-100px", left: "-120px",
          width: "460px", height: "460px",
          background: "radial-gradient(circle, rgba(27,94,32,0.28) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(1px)",
        }}
      />

      {/* Blob central ouro — toque de #F4C430 muito suave para calor */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%", left: "55%",
          width: "380px", height: "380px",
          background: "radial-gradient(circle, rgba(244,196,48,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Linha de topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "rgba(26,26,26,0.14)" }}
      />

      {/* ══ CONTEÚDO ══════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── CABEÇALHO ──────────────────────────────────────────────── */}
        <FadeIn className="text-center mb-14">

          {/* Badge escuro sobre verde vivo */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6"
            style={{
              background: "rgba(26,26,26,0.10)",
              border: "1px solid rgba(26,26,26,0.20)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "rgba(26,26,26,0.55)" }}
            />
            <span
              className="font-semibold uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.20em", color: "rgba(26,26,26,0.62)" }}
            >
              Liderança & Fundação
            </span>
          </div>

          {/* Título h2 — ink sobre verde vivo */}
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              letterSpacing: "-0.025em",
              color: "#1A1A1A",
            }}
          >
            A Fundadora do IAPOAM
          </h2>

          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(26,26,26,0.65)", lineHeight: "1.75" }}
          >
            Por trás do instituto, uma história de coragem, dedicação e amor inabalável
            pelos povos da floresta
          </p>
        </FadeIn>

        {/* ── GRID FOTO + TEXTO ───────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center mb-14">

          {/* ── Foto ── */}
          <FadeIn delay={0.10} className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[360px]">

              {/* Sombra decorativa deslocada — #1B5E20 */}
              <div
                className="absolute inset-0 translate-x-4 translate-y-4"
                style={{
                  borderRadius: "24px",
                  border: "2px solid rgba(27,94,32,0.35)",
                  background: "rgba(27,94,32,0.15)",
                }}
              />

              {/* Frame */}
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "24px",
                  border: "2px solid rgba(26,26,26,0.22)",
                  background: "#1B5E20",
                }}
              >
                <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/kamilaperfil.png"
                    alt="Kamila Silva Prestes — Presidente e Fundadora do IAPOAM"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 90vw, 360px"
                  />
                  {/* Gradiente caption */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.10) 52%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Label sobre a foto */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Pílula — laranja-terra #C1440E, único acento quente sobre o verde */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2"
                    style={{ background: "#C1440E" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.80)" }}
                    />
                    <span
                      className="font-black uppercase"
                      style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#ffffff" }}
                    >
                      Fundadora & Presidente
                    </span>
                  </div>
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
                      letterSpacing: "-0.02em",
                      color: "#ffffff",
                    }}
                  >
                    Kamila Silva Prestes
                  </h3>
                </div>
              </div>

              {/* Badge flutuante — #1B5E20 escuro com número ouro */}
              <div
                className="absolute -bottom-4 -right-4 flex flex-col items-center justify-center w-20 h-20"
                style={{
                  background: "#1B5E20",
                  border: "2px solid rgba(79,222,27,0.45)",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(27,94,32,0.40)",
                }}
              >
                <span
                  className="font-black leading-none"
                  style={{ fontSize: "22px", color: "#F4C430", letterSpacing: "-0.03em" }}
                >
                  16+
                </span>
                <span
                  className="font-semibold uppercase text-center leading-tight mt-0.5"
                  style={{ fontSize: "9px", letterSpacing: "0.10em", color: "rgba(240,255,240,0.55)" }}
                >
                  Anos de<br />Luta
                </span>
              </div>
            </div>
          </FadeIn>

          {/* ── Texto ── */}
          <FadeIn delay={0.20} className="space-y-5">

            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(26,26,26,0.92)", lineHeight: "1.80" }}
            >
              <strong style={{ fontWeight: 700 }}>Kamila Silva Prestes</strong> é a presidente
              e fundadora do IAPOAM — uma mulher cuja trajetória é marcada por um comprometimento
              profundo com a causa dos povos originários da Amazônia.
            </p>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(26,26,26,0.72)", lineHeight: "1.75" }}
            >
              Nascida e criada com os valores de respeito à natureza e às culturas tradicionais,
              Kamila dedicou sua vida à construção de pontes entre as comunidades indígenas e o
              mundo externo, lutando incansavelmente pela garantia de direitos básicos e pela
              preservação da floresta.
            </p>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(26,26,26,0.72)", lineHeight: "1.75" }}
            >
              Em 2011, motivada pela urgência das demandas sociais e ambientais que presenciava
              nas aldeias, fundou o IAPOAM com a missão de transformar a realidade de dezenas de
              etnias amazônicas. Sob sua liderança, o instituto cresceu de uma pequena organização
              local para uma referência regional no campo dos direitos indígenas.
            </p>

            {/* Citação — borda #1B5E20 */}
            <div
              className="pl-5 py-1"
              style={{ borderLeft: "2px solid rgba(27,94,32,0.40)" }}
            >
              <p
                className="text-base italic leading-relaxed"
                style={{ color: "rgba(26,26,26,0.75)", lineHeight: "1.70" }}
              >
                A floresta não é apenas um ecossistema — ela é casa, memória e futuro para
                milhares de famílias. Protegê-la é proteger a humanidade.
              </p>
              <p
                className="text-sm font-bold mt-3"
                style={{ color: "#1A1A1A" }}
              >
                — Kamila Silva Prestes
              </p>
            </div>

            {/*
             * CTA principal — laranja-terra #C1440E
             * Hover: #F4C430 amarelo-ouro + texto #1A1A1A
             * Contraste máximo sobre o fundo #4FDE1B
             */}
            <div className="pt-1 flex flex-col sm:flex-row gap-3 items-start">
              <Link
                href="/quem-somos"
                className="group inline-flex items-center gap-2.5 rounded-xl font-bold
                           tracking-wide transition-all duration-300"
                style={{
                  padding: "13px 28px",
                  fontSize: "0.875rem",
                  letterSpacing: "0.02em",
                  background: "linear-gradient(135deg, #C1440E 0%, #d94f16 100%)",
                  color: "#ffffff",
                  boxShadow: "0 4px 20px rgba(193,68,14,0.40)",
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
                  el.style.boxShadow  = "0 4px 20px rgba(193,68,14,0.40)";
                }}
              >
                Saiba mais sobre nossa história
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* ── STATS ──────────────────────────────────────────────────── */}
        <FadeIn delay={0.30}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.50, delay: i * 0.10 }}
                className="group text-center cursor-default transition-all duration-300"
                style={{
                  padding: "1.75rem 1rem",
                  background: "rgba(27,94,32,0.14)",   // #1B5E20 translúcido sobre #4FDE1B
                  border: "1px solid rgba(27,94,32,0.22)",
                  borderRadius: "16px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(27,94,32,0.24)";
                  el.style.transform  = "translateY(-3px)";
                  el.style.boxShadow  = "0 10px 28px rgba(27,94,32,0.20)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(27,94,32,0.14)";
                  el.style.transform  = "translateY(0)";
                  el.style.boxShadow  = "none";
                }}
              >
                {/* Número — ink #1A1A1A para máximo contraste sobre verde vivo */}
                <div
                  className="font-black leading-none mb-1.5"
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    letterSpacing: "-0.03em",
                    color: "#1A1A1A",
                  }}
                >
                  {h.number}
                </div>
                <div
                  className="font-semibold uppercase leading-tight"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.10em",
                    color: "rgba(26,26,26,0.58)",
                  }}
                >
                  {h.label}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* ══ WAVE DE SAÍDA → dark ══════════════════════════════════════ */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 72 L0 32 C200 4 400 56 720 32 C1040 8 1280 52 1440 28 L1440 72 Z"
            fill="rgba(8,22,10,0.20)"
            transform="translate(0,3)"
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