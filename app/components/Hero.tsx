"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

// ─── Paleta ───────────────────────────────────────────────────────────────────
// Background geral:   fundo de vídeo com overlays verdes
// Superfícies:        rgba(27,94,32,…) = #1B5E20
// Verde vivo:         #4FDE1B
// Verde claro:        #A8E6A1
// Amarelo-ouro:       #F4C430  (números, destaques)
// Botão primário:     #C1440E → hover #F4C430
// ─────────────────────────────────────────────────────────────────────────────

// ─── Stat Card ────────────────────────────────────────────────────────────────
function AnimatedStat({
  number,
  label,
  suffix = "",
  delay = 0,
}: {
  number: number;
  label: string;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col items-center justify-center py-5 px-3
                 rounded-2xl overflow-hidden cursor-default transition-all duration-500
                 hover:-translate-y-1"
      style={{
        background: "rgba(27,94,32,0.72)",
        border: "1px solid rgba(255,255,255,0.18)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 4px 28px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.12)",
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(193,68,14,0.18) 0%, transparent 65%)" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-10 group-hover:w-20 transition-all duration-500"
        style={{ background: "linear-gradient(90deg, transparent, #F4C430, transparent)" }} />

      <div className="relative z-10 tabular-nums leading-none mb-1.5 font-black"
        style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#F4C430", textShadow: "0 0 24px rgba(244,196,48,0.35)", letterSpacing: "-0.03em" }}>
        {inView ? (
          <CountUp end={number} duration={2.4} delay={delay} suffix={suffix} useEasing />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="w-5 h-px mb-2 group-hover:w-10 transition-all duration-500 relative z-10"
        style={{ background: "rgba(244,196,48,0.50)" }} />
      <div className="relative z-10 text-center font-semibold uppercase"
        style={{ fontSize: "9px", color: "rgba(240,255,240,0.70)", letterSpacing: "0.12em" }}>
        {label}
      </div>
    </motion.div>
  );
}

// ─── Particles ────────────────────────────────────────────────────────────────
const particlesOptions: ISourceOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 60, duration: 0.6 } },
  },
  particles: {
    number: { value: 38, density: { enable: true, width: 1920, height: 1080 } },
    color: { value: ["#ffffff", "#F4C430", "#A8E6A1"] },
    shape: { type: "circle" },
    opacity: { value: { min: 0.04, max: 0.16 }, animation: { enable: true, speed: 0.3, sync: false } },
    size: { value: { min: 1, max: 2.5 }, animation: { enable: true, speed: 0.8, sync: false } },
    move: {
      enable: true,
      speed: { min: 0.08, max: 0.35 },
      direction: "none" as const,
      random: true,
      straight: false,
      outModes: { default: "out" as const },
    },
    links: { enable: true, distance: 110, color: "#A8E6A1", opacity: 0.10, width: 1 },
  },
  detectRetina: true,
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ paddingTop: "80px" }}
    >

      {/* ══ VÍDEO BACKGROUND ══════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className="w-full h-full object-cover"
          style={{ opacity: videoLoaded ? 1 : 0, transition: "opacity 1.2s ease" }}
        >
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(34,120,40,0.55)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(27,94,32,0.72) 0%, rgba(79,222,27,0.28) 45%, rgba(18,70,24,0.75) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 55% at 50% 30%, rgba(79,222,27,0.20) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 30%, rgba(18,60,22,0.60) 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-44" style={{ background: "linear-gradient(to bottom, rgba(27,94,32,0.88) 0%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-52" style={{ background: "linear-gradient(to top, rgba(18,60,22,0.95) 0%, transparent 100%)" }} />
      </div>

      {/* ══ GRAIN ══════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none" style={{
        zIndex: 1, opacity: 0.045,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "128px",
      }} />

      {/* ══ PARTICLES ══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {particlesReady ? (
          <Particles
            id="hero-particles"
            options={particlesOptions}
            className="absolute inset-0 w-full h-full"
          />
        ) : null}
      </div>

      {/* ══ CONTEÚDO PRINCIPAL ════════════════════════════════════════ */}
      <div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
        style={{ zIndex: 10, minHeight: "100vh", paddingBottom: "2rem" }}
      >

        {/* ── PÍLULA — centralizada ── */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8 mt-4"
        >
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full"
            style={{
              background: "rgba(27,94,32,0.65)",
              border: "1px solid rgba(255,255,255,0.24)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 2px 14px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.10)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
              style={{ background: "#4FDE1B", boxShadow: "0 0 8px #4FDE1B" }} />
            <span className="font-semibold uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.20em", color: "rgba(240,255,240,0.88)" }}>
              Fundado em 15 de Fevereiro de 2011
            </span>
          </div>
        </motion.div>

        {/* ══ GRID PRINCIPAL — 2 colunas desktop, 1 coluna mobile ══════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center mb-12">

          {/* ── COLUNA ESQUERDA — textos ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full mb-6"
            >
              <span className="block font-light"
                style={{ fontSize: "clamp(1rem, 2.5vw, 1.6rem)", letterSpacing: "0.05em", color: "rgba(240,255,240,0.72)", marginBottom: "4px" }}>
                Defendendo os
              </span>
              <span className="block font-black"
                style={{
                  fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
                  lineHeight: "1.0",
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  textShadow: "0 0 40px rgba(79,222,27,0.55), 0 4px 32px rgba(0,0,0,0.35)",
                  marginBottom: "8px",
                }}>
                Povos Originários
              </span>
              <span className="block font-semibold"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 3rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.025em",
                  backgroundImage: "linear-gradient(88deg, #4FDE1B 0%, #A8E6A1 60%, #4FDE1B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 18px rgba(79,222,27,0.40))",
                }}>
                da Amazônia
              </span>
            </motion.h1>

            {/* Parágrafo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 max-w-lg"
              style={{
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                fontWeight: 400,
                color: "rgba(240,255,240,0.80)",
                lineHeight: "1.80",
              }}
            >
              O Instituto Indígena IAPOAM oferece todo o suporte necessário para que os
              povos indígenas acessem plenamente seus direitos, na defesa da floresta e
              no fortalecimento das comunidades amazônicas{" "}
              <span className="whitespace-nowrap">há mais de uma década.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              {/* Primário — laranja-terra */}
              <Link
                href="/quem-somos"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl font-bold tracking-wide transition-all duration-300"
                style={{
                  padding: "13px 28px",
                  fontSize: "0.875rem",
                  background: "linear-gradient(135deg, #C1440E 0%, #d94f16 100%)",
                  color: "#ffffff",
                  boxShadow: "0 4px 24px rgba(193,68,14,0.45), inset 0 1px 0 rgba(255,255,255,0.14)",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-2px) scale(1.02)";
                  el.style.background = "linear-gradient(135deg, #F4C430 0%, #f7d55a 100%)";
                  el.style.color = "#1A1A1A";
                  el.style.boxShadow = "0 8px 32px rgba(244,196,48,0.55)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.background = "linear-gradient(135deg, #C1440E 0%, #d94f16 100%)";
                  el.style.color = "#ffffff";
                  el.style.boxShadow = "0 4px 24px rgba(193,68,14,0.45), inset 0 1px 0 rgba(255,255,255,0.14)";
                }}
              >
                Conheça Nossa Missão
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Secundário — glass outline */}
              <Link
                href="/doacoes"
                className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-wide transition-all duration-300"
                style={{
                  padding: "12px 26px",
                  fontSize: "0.875rem",
                  background: "rgba(27,94,32,0.35)",
                  border: "1.5px solid rgba(255,255,255,0.45)",
                  color: "rgba(240,255,240,0.90)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(244,196,48,0.70)";
                  el.style.background = "rgba(244,196,48,0.12)";
                  el.style.color = "#F4C430";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.45)";
                  el.style.background = "rgba(27,94,32,0.35)";
                  el.style.color = "rgba(240,255,240,0.90)";
                  el.style.transform = "translateY(0)";
                }}
              >
                Apoie o Instituto
              </Link>
            </motion.div>

            {/* Badges institucionais */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              {["Apartidária", "Não Religiosa", "CNPJ: 13.955.659/0001-43"].map((badge) => (
                <div key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.05em",
                    background: "rgba(27,94,32,0.55)",
                    border: "1px solid rgba(255,255,255,0.20)",
                    color: "rgba(240,255,240,0.68)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}>
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(79,222,27,0.85)" }} />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── COLUNA DIREITA — PLACA IAPOAM ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.20, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[520px] lg:max-w-none">

              {/*
                ESTRATÉGIA DA PLACA:
                A placa tem fundo verde vivo (#4FDE1B) com bordas pretas.
                Para integrá-la ao Hero sem parecer "colada", aplicamos:
                1. Sombra verde intensa que funde com o fundo
                2. Bordas arredondadas suaves
                3. Animação de entrada com scale+x
                4. Leve glow esverdeado no hover
              */}
              <div
                className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{
                  borderRadius: "20px",
                  boxShadow:
                    "0 24px 80px rgba(0,0,0,0.45), 0 8px 32px rgba(27,94,32,0.60), 0 0 0 1px rgba(255,255,255,0.08)",
                }}
              >
                {/* Glow hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                  style={{
                    background: "radial-gradient(ellipse at 50% 50%, rgba(79,222,27,0.08) 0%, transparent 70%)",
                    borderRadius: "20px",
                  }}
                />

                {/*
                  A imagem: aspect-ratio próximo ao original da placa (~1.9:1)
                  Em desktop mantém proporção máxima.
                  Em mobile: max-w controlado + aspect-ratio automático.
                */}
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "1.9 / 1" }}
                >
                  <Image
                    src="/iapoam_placa2.png"
                    alt="IAPOAM — Instituto de Apoio aos Povos Originários da Amazônia"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 560px"
                  />
                </div>
              </div>

              {/* Linha decorativa abaixo da placa — verde vivo */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 mx-auto lg:mx-0"
                style={{
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, rgba(79,222,27,0.55), rgba(244,196,48,0.35), transparent)",
                  maxWidth: "80%",
                  transformOrigin: "center",
                }}
              />

              {/* Texto institucional sob a placa */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className="text-center lg:text-right mt-3"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                  color: "rgba(240,255,240,0.45)",
                  fontWeight: 500,
                }}
              >
                Instituto Indígena · Manaus, Amazonas · Desde 2011
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* ══ STATS — linha completa abaixo do grid ═════════════════════ */}
        <div className="w-full">

          {/* Divisor "Impacto em números" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex items-center gap-4 mb-5"
          >
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(168,230,161,0.45))" }} />
            <span className="font-bold uppercase whitespace-nowrap"
              style={{ fontSize: "10px", letterSpacing: "0.24em", color: "rgba(168,230,161,0.75)" }}>
              Impacto em números
            </span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(168,230,161,0.45))" }} />
          </motion.div>

          {/* Grid de stats — 4 colunas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <AnimatedStat number={253} suffix=""  label="Comunidades Atendidas" delay={0.58} />
            <AnimatedStat number={35}  suffix="+" label="Etnias Apoiadas"        delay={0.66} />
            <AnimatedStat number={16}  suffix="+" label="Anos de Atuação"        delay={0.74} />
            <AnimatedStat number={6}   suffix=""  label="Áreas de Impacto"       delay={0.82} />
          </div>
        </div>
      </div>

      {/* ══ FAIXA GRAFISMO ════════════════════════════════════════════ */}
      <motion.div
        className="relative w-full"
        style={{ zIndex: 10, paddingTop: "24px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.1, ease: "easeOut" }}
        aria-hidden="true"
      >
        <div className="relative w-full overflow-hidden" style={{ height: "52px" }}>
          <div style={{ width: "100%", height: "100%", opacity: 0.55, position: "relative" }}>
            <Image src="/faixa_grafismo.png" alt="" fill className="object-cover object-center" sizes="100vw" />
          </div>
          <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: "26px", background: "linear-gradient(to bottom, rgba(27,94,32,0.92) 0%, transparent 100%)", zIndex: 2 }} />
          <div className="absolute left-0 top-0 bottom-0 pointer-events-none" style={{ width: "140px", background: "linear-gradient(to right, rgba(27,94,32,1) 0%, transparent 100%)", zIndex: 2 }} />
          <div className="absolute right-0 top-0 bottom-0 pointer-events-none" style={{ width: "140px", background: "linear-gradient(to left, rgba(27,94,32,1) 0%, transparent 100%)", zIndex: 2 }} />
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: "22px", background: "linear-gradient(to top, rgba(18,60,22,0.95) 0%, transparent 100%)", zIndex: 2 }} />
        </div>
      </motion.div>

      {/* ══ WAVE ══════════════════════════════════════════════════════ */}
      <div className="relative pointer-events-none" style={{ zIndex: 10, marginTop: "-1px" }}>
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="w-full block" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 72 L0 30 C200 2 500 58 720 36 C940 14 1240 54 1440 26 L1440 72 Z"
            fill="rgba(18,60,22,0.38)" transform="translate(0,3)" />
          <path d="M0 72 L0 30 C200 2 500 58 720 36 C940 14 1240 54 1440 26 L1440 72 Z"
            fill="#1a3d20" />
        </svg>
      </div>

    </section>
  );
}