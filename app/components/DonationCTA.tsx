"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Paleta — design system v3 ────────────────────────────────────────────────
// Seção CLARA — quebra o ritmo dark após AreasDeAtuacao (forest #1B5E20)
// Ritmo: AreasDeAtuacao(forest) → DonationCTA(claro #F5F5F0) → Footer(dark)
//
// Background:          #F5F5F0  (seção alternada clara da paleta)
// Cards doação:        #ffffff  com sombra suave
// Card destaque:       #1B5E20  (forest) — ainda mais contraste
// Texto principal:     #1A1A1A  (ink)
// Acento:              #1B5E20 / #4FDE1B (verde vivo)
// Ouro destaque:       #F4C430
// Botão CTA:           #C1440E → hover #F4C430
// Trust cards:         #ffffff
// Wave entrada:        vem de #1B5E20 (AreasDeAtuacao)
// Wave saída:          #0f2912 (Footer dark)
// ─────────────────────────────────────────────────────────────────────────────

const BG   = "#F5F5F0";
const INK  = "#1A1A1A";
const DARK = "#0f2912";

const donationValues = [
  { amount: "R$ 10", impact: "Materiais escolares para crianças indígenas",        highlight: false },
  { amount: "R$ 20", impact: "Alimentos para famílias em vulnerabilidade",          highlight: false },
  { amount: "R$ 30", impact: "Kits de higiene e cuidados para comunidades",         highlight: true  },
  { amount: "R$ 50", impact: "Atividades culturais e de preservação da identidade", highlight: false },
];

const trustItems = [
  {
    icon: "✦",
    title: "Organização registrada",
    description: "CNPJ 13.955.659/0001-43, com situação cadastral regular e ativa.",
  },
  {
    icon: "◈",
    title: "Utilidade Pública",
    description: "Reconhecida como Utilidade Pública Municipal e Estadual pelo governo do Amazonas.",
  },
  {
    icon: "◉",
    title: "Transparência total",
    description: "Relatórios financeiros e prestação de contas disponíveis publicamente para consulta.",
  },
  {
    icon: "◆",
    title: "Doação segura",
    description: "Todos os recursos recebidos são integralmente destinados aos projetos e comunidades atendidas.",
  },
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
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Componente ───────────────────────────────────────────────────────────────
export default function DonationCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: BG, paddingTop: 0, paddingBottom: 0 }}
    >

      {/* ══ WAVE DE ENTRADA — vem do AreasDeAtuacao (#1B5E20) ════════ */}
      <div className="pointer-events-none" style={{ marginBottom: "-2px" }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 0 L0 44 C200 72 500 16 720 40 C940 64 1240 24 1440 52 L1440 0 Z"
            fill="rgba(8,22,10,0.28)"
            transform="translate(0,-3)"
          />
          <path
            d="M0 0 L0 44 C200 72 500 16 720 40 C940 64 1240 24 1440 52 L1440 0 Z"
            fill="#1B5E20"
          />
        </svg>
      </div>

      {/* ══ ATMOSFERA ════════════════════════════════════════════════ */}

      {/* Dot-pattern sutil */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.040 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots-don" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="#1B5E20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-don)" />
      </svg>

      {/* Blob verde vivo topo-direito */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "5%", right: "-160px",
          width: "520px", height: "520px",
          background: "radial-gradient(circle, rgba(79,222,27,0.09) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      {/* Blob ouro base-esquerdo */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%", left: "-140px",
          width: "460px", height: "460px",
          background: "radial-gradient(circle, rgba(244,196,48,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ══ CONTEÚDO ══════════════════════════════════════════════════ */}
      <div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ paddingTop: "5rem", paddingBottom: "6rem" }}
      >

        {/* ── CABEÇALHO ──────────────────────────────────────────────── */}
        <FadeIn className="text-center mb-16">

          {/* Badge claro */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(27,94,32,0.08)",
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
              Faça a Diferença
            </span>
          </div>

          {/* Título h2 */}
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
              letterSpacing: "-0.025em",
              color: INK,
            }}
          >
            Apoie Nossos{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #1B5E20 0%, #4FDE1B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projetos
            </span>
          </h2>

          {/* Linha decorativa */}
          <div className="flex justify-center mb-6">
            <div
              className="h-0.5 w-16 rounded-full"
              style={{ background: "linear-gradient(90deg, #1B5E20, #4FDE1B)" }}
            />
          </div>

          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(26,26,26,0.60)", lineHeight: "1.80" }}
          >
            Cada contribuição chega diretamente às comunidades indígenas da Amazônia
            e fortalece a defesa dos direitos dos povos originários.
          </p>
        </FadeIn>

        {/* ── CARDS DE VALOR ─────────────────────────────────────────── */}
        <FadeIn delay={0.10}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {donationValues.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden transition-all duration-300 cursor-default"
                style={{
                  borderRadius: "18px",
                  padding: "1.75rem 1.25rem",
                  // Destaque: #1B5E20 forest escuro — máximo contraste no claro
                  // Normal: branco com sombra suave
                  background: card.highlight ? "#1B5E20"  : "#ffffff",
                  border: card.highlight
                    ? "2px solid rgba(79,222,27,0.30)"
                    : "1px solid rgba(26,26,26,0.08)",
                  boxShadow: card.highlight
                    ? "0 8px 36px rgba(27,94,32,0.28)"
                    : "0 2px 20px rgba(26,26,26,0.07)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-5px)";
                  if (!card.highlight) {
                    el.style.borderColor = "rgba(79,222,27,0.32)";
                    el.style.boxShadow   = "0 12px 36px rgba(26,26,26,0.14)";
                  } else {
                    el.style.boxShadow = "0 14px 44px rgba(27,94,32,0.40)";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  if (!card.highlight) {
                    el.style.borderColor = "rgba(26,26,26,0.08)";
                    el.style.boxShadow   = "0 2px 20px rgba(26,26,26,0.07)";
                  } else {
                    el.style.boxShadow = "0 8px 36px rgba(27,94,32,0.28)";
                  }
                }}
              >
                {/* Barra topo nos cards brancos — aparece no hover */}
                {!card.highlight && (
                  <div
                    className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      height: "3px",
                      background: "linear-gradient(90deg, #1B5E20, #4FDE1B)",
                      borderRadius: "18px 18px 0 0",
                    }}
                  />
                )}

                {/* Badge "Mais escolhido" — ouro */}
                {card.highlight && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full"
                    style={{
                      background: "#F4C430",
                      boxShadow: "0 2px 10px rgba(244,196,48,0.45)",
                    }}
                  >
                    <span
                      className="font-black uppercase whitespace-nowrap"
                      style={{ fontSize: "10px", letterSpacing: "0.10em", color: "#1A1A1A" }}
                    >
                      Mais escolhido
                    </span>
                  </div>
                )}

                {/* Valor */}
                <div
                  className="font-black mb-3 leading-none"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2rem)",
                    letterSpacing: "-0.03em",
                    // Destaque: ouro sobre verde floresta
                    // Normal: ink sobre branco
                    color: card.highlight ? "#F4C430" : INK,
                    textShadow: card.highlight ? "0 0 18px rgba(244,196,48,0.30)" : "none",
                  }}
                >
                  {card.amount}
                </div>

                {/* Divisor */}
                <div
                  className="w-6 h-px rounded-full mb-3"
                  style={{
                    background: card.highlight
                      ? "rgba(244,196,48,0.45)"
                      : "rgba(26,26,26,0.14)",
                  }}
                />

                {/* Descrição */}
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: card.highlight
                      ? "rgba(240,255,240,0.78)"
                      : "rgba(26,26,26,0.58)",
                    lineHeight: "1.65",
                  }}
                >
                  {card.impact}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* ── NOTA VALORES MAIORES ────────────────────────────────────── */}
        <FadeIn delay={0.15}>
          <div
            className="flex items-start gap-3 rounded-xl mb-14"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(26,26,26,0.08)",
              borderLeft: "3px solid rgba(79,222,27,0.55)",
              padding: "1rem 1.25rem",
              boxShadow: "0 2px 12px rgba(26,26,26,0.06)",
            }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(26,26,26,0.62)", lineHeight: "1.65" }}
            >
              <strong style={{ color: INK, fontWeight: 600 }}>
                Deseja contribuir com valores acima de R$ 50?
              </strong>{" "}
              Entre em contato e nossa equipe terá prazer em orientá-lo.{" "}
              <Link
                href="/contato"
                className="font-semibold underline underline-offset-2 transition-colors duration-200"
                style={{ color: "#1B5E20" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#4FDE1B"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#1B5E20"; }}
              >
                Fale conosco
              </Link>
              .
            </p>
          </div>
        </FadeIn>

        {/* ── CTA PRINCIPAL — bloco destacado ─────────────────────────── */}
        <FadeIn delay={0.18}>
          <div
            className="relative overflow-hidden rounded-3xl mb-16 text-center"
            style={{
              background: "linear-gradient(135deg, #1B5E20 0%, #2d7a35 60%, #1B5E20 100%)",
              padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 3rem)",
              boxShadow: "0 8px 48px rgba(27,94,32,0.28)",
            }}
          >
            {/* Blobs internos */}
            <div
              className="absolute top-0 right-0 pointer-events-none"
              style={{
                width: "300px", height: "300px",
                background: "radial-gradient(circle, rgba(244,196,48,0.10) 0%, transparent 65%)",
                borderRadius: "50%",
              }}
            />
            <div
              className="absolute bottom-0 left-0 pointer-events-none"
              style={{
                width: "250px", height: "250px",
                background: "radial-gradient(circle, rgba(79,222,27,0.12) 0%, transparent 65%)",
                borderRadius: "50%",
              }}
            />
            {/* Linha topo */}
            <div
              className="absolute top-0 left-0 right-0"
              style={{
                height: "2px",
                background: "linear-gradient(90deg, transparent, #4FDE1B 40%, #A8E6A1 100%)",
                opacity: 0.55,
              }}
            />

            <div className="relative z-10">
              {/* Ícone coração */}
              

              <h3
                className="font-bold mb-3"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                }}
              >
                Sua doação transforma vidas na Amazônia
              </h3>

              <div
                className="w-10 h-px mx-auto mb-5 rounded-full"
                style={{ background: "rgba(79,222,27,0.50)" }}
              />

              <p
                className="text-sm max-w-lg mx-auto mb-8 leading-relaxed"
                style={{ color: "rgba(240,255,240,0.75)", lineHeight: "1.75" }}
              >
                100% do valor doado é destinado diretamente aos nossos projetos,
                chegando às mãos de quem mais precisa.
              </p>

              {/* Botão CTA — laranja-terra #C1440E → hover ouro */}
              <Link
                href="/doacoes"
                className="group inline-flex items-center justify-center gap-3 rounded-xl
                           font-bold tracking-wide transition-all duration-300"
                style={{
                  padding: "16px 44px",
                  fontSize: "1rem",
                  letterSpacing: "0.02em",
                  background: "linear-gradient(135deg, #C1440E 0%, #d94f16 100%)",
                  color: "#ffffff",
                  boxShadow: "0 6px 28px rgba(193,68,14,0.45)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform  = "translateY(-2px) scale(1.02)";
                  el.style.background = "linear-gradient(135deg, #F4C430 0%, #f7d55a 100%)";
                  el.style.color      = "#1A1A1A";
                  el.style.boxShadow  = "0 10px 36px rgba(244,196,48,0.55)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform  = "translateY(0) scale(1)";
                  el.style.background = "linear-gradient(135deg, #C1440E 0%, #d94f16 100%)";
                  el.style.color      = "#ffffff";
                  el.style.boxShadow  = "0 6px 28px rgba(193,68,14,0.45)";
                }}
              >
                Fazer uma Doação Agora
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Microcopy */}
              <p
                className="text-xs mt-4"
                style={{ color: "rgba(240,255,240,0.45)" }}
              >
                Doação segura • Transparência total • CNPJ 13.955.659/0001-43
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ── DIVISOR "POR QUE CONFIAR" ──────────────────────────────── */}
        <div className="flex items-center gap-4 mb-10">
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(27,94,32,0.22))" }}
          />
          <span
            className="font-bold uppercase whitespace-nowrap"
            style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(27,94,32,0.50)" }}
          >
            Por que confiar no IAPOAM
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(to left, transparent, rgba(27,94,32,0.22))" }}
          />
        </div>

        {/* ── GRID DE CONFIANÇA — 2×2 sobre fundo claro ──────────────── */}
        <FadeIn delay={0.22}>
          <div className="grid md:grid-cols-2 gap-4 mb-14">
            {trustItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex items-start gap-4 overflow-hidden
                           transition-all duration-300 cursor-default"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,26,26,0.08)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 16px rgba(26,26,26,0.06)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(79,222,27,0.32)";
                  el.style.boxShadow   = "0 8px 28px rgba(26,26,26,0.12)";
                  el.style.transform   = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(26,26,26,0.08)";
                  el.style.boxShadow   = "0 2px 16px rgba(26,26,26,0.06)";
                  el.style.transform   = "translateY(0)";
                }}
              >
                {/* Barra topo — aparece no hover */}
                <div
                  className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    height: "3px",
                    background: "linear-gradient(90deg, #1B5E20, #4FDE1B)",
                    borderRadius: "16px 16px 0 0",
                  }}
                />

                {/* Ícone — verde floresta sobre fundo verde claro */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                  style={{
                    background: "rgba(27,94,32,0.08)",
                    border: "1px solid rgba(27,94,32,0.18)",
                  }}
                >
                  <span style={{ color: "#1B5E20", fontSize: "14px" }} aria-hidden="true">
                    {item.icon}
                  </span>
                </div>

                <div>
                  <h4
                    className="font-semibold mb-1.5"
                    style={{
                      fontSize: "0.9375rem",
                      letterSpacing: "-0.01em",
                      color: INK,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(26,26,26,0.58)", lineHeight: "1.65" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* ── BARRA DE CREDENCIAIS ────────────────────────────────────── */}
        <FadeIn delay={0.28}>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 py-8 rounded-2xl"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(26,26,26,0.08)",
              boxShadow: "0 2px 16px rgba(26,26,26,0.06)",
            }}
          >
            {[
              { label: "CNPJ",           value: "13.955.659/0001-43"                     },
              { label: "Fundação",       value: "15 de fevereiro de 2011"                },
              { label: "Reconhecimento", value: "Utilidade Pública Municipal e Estadual" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5">
                {i > 0 && (
                  <div
                    className="hidden sm:block w-px h-8"
                    style={{ background: "rgba(27,94,32,0.16)" }}
                  />
                )}
                <div className="text-center">
                  <p
                    className="font-bold uppercase mb-1"
                    style={{ fontSize: "10px", letterSpacing: "0.16em", color: "rgba(27,94,32,0.55)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "rgba(26,26,26,0.65)" }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* ══ FAIXA GRAFISMO DE SAÍDA ══════════════════════════════════ */}
      <motion.div
        className="relative w-full overflow-hidden pointer-events-none"
        style={{ height: "44px", marginBottom: "-1px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        aria-hidden="true"
      >
        {/* Fade esq/dir para dissolver com o BG */}
        <div className="absolute left-0 top-0 bottom-0 pointer-events-none"
          style={{ width: "80px", background: `linear-gradient(to right, ${BG} 0%, transparent 100%)`, zIndex: 2 }} />
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none"
          style={{ width: "80px", background: `linear-gradient(to left, ${BG} 0%, transparent 100%)`, zIndex: 2 }} />
        <div className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{ height: "20px", background: `linear-gradient(to bottom, ${BG} 0%, transparent 100%)`, zIndex: 2 }} />
        {/* Fade inferior dissolve no dark do footer */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "20px", background: `linear-gradient(to top, ${DARK} 0%, transparent 100%)`, zIndex: 2 }} />
      </motion.div>

      {/* ══ WAVE DE SAÍDA → dark (Footer) ════════════════════════════ */}
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
            d="M0 72 L0 28 C180 6 420 60 720 36 C1020 12 1260 58 1440 28 L1440 72 Z"
            fill="rgba(8,22,10,0.22)"
            transform="translate(0,3)"
          />
          <path
            d="M0 72 L0 28 C180 6 420 60 720 36 C1020 12 1260 58 1440 28 L1440 72 Z"
            fill="#0f2912"
          />
        </svg>
      </div>
    </section>
  );
}