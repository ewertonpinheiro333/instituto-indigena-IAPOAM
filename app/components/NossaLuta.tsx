"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Paleta (mesmo design system do Hero) ─────────────────────────────────────
// Background seção:   #1a3d20  (verde floresta escuro — continuação do wave do Hero)
// Cards / surfaces:   rgba(27,94,32,…) = #1B5E20
// Destaque texto:     #4FDE1B  (verde vivo) / #A8E6A1 (verde claro suave)
// Números / glow:     #F4C430  (amarelo-ouro)
// Botão primário:     #C1440E → hover #F4C430
// Texto corpo:        rgba(240,255,240, …)  branco-esverdeado
// Linha topo neon:    #4FDE1B
// ─────────────────────────────────────────────────────────────────────────────

// ─── Data ─────────────────────────────────────────────────────────────────────
const servicos = [
  {
    numero: "01",
    titulo: "Atendimento Social — Equipe Técnica Indígena",
    descricao:
      "Nossa equipe técnica especializada realiza atendimento humanizado e culturalmente sensível aos indígenas que chegam às cidades, compreendendo suas necessidades específicas e construindo junto a eles um plano de ação personalizado.",
  },
  {
    numero: "02",
    titulo: "Encaminhamento Social",
    descricao:
      "Conectamos os indígenas atendidos aos serviços e programas sociais disponíveis nas esferas municipal, estadual e federal, garantindo que cada pessoa acesse os benefícios, assistências e programas de moradia aos quais tem direito.",
  },
  {
    numero: "03",
    titulo: "Orientação Social",
    descricao:
      "Oferecemos orientação clara e acessível sobre direitos, deveres e caminhos disponíveis para os indígenas que buscam formação educacional, tratamento médico ou regularização de sua situação nos centros urbanos.",
  },
  {
    numero: "04",
    titulo: "Consultoria Jurídica",
    descricao:
      "Contamos com advogados especializados em direitos indígenas para oferecer suporte jurídico nas demandas por moradia digna, regularização fundiária, acesso à saúde e educação e na defesa contra violações de direitos.",
  },
  {
    numero: "05",
    titulo: "Defesa de Direitos e Garantias",
    descricao:
      "Atuamos ativamente na defesa dos direitos constitucionais dos povos originários junto aos poderes públicos municipais e estaduais, exigindo políticas de inclusão, moradia digna e respeito à identidade cultural nas cidades.",
  },
];

const statsManifesto = [
  { valor: "71.713", legenda: "Indígenas em Manaus" },
  { valor: "3,48%",  legenda: "Da população total"  },
  { valor: "100%",   legenda: "Aldeias por assentamento" },
];

// ─── FadeIn helper ─────────────────────────────────────────────────────────────
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
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export function NossaLuta() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#1a3d20",   // continua direto do wave final do Hero
        paddingTop: "7rem",
        paddingBottom: "8rem",
      }}
    >

      {/* ══ CAMADAS DE ATMOSFERA ══════════════════════════════════════ */}

      {/* Gradiente direcional — profundidade vertical */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(170deg, rgba(10,30,14,0.60) 0%, transparent 45%, rgba(8,24,11,0.45) 100%)",
        }}
      />

      {/* Luz de dossel — verde vivo no centro-topo */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "860px",
          height: "560px",
          background:
            "radial-gradient(ellipse 65% 50% at 50% 20%, rgba(79,222,27,0.11) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Blob lateral direito — ouro suave */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "25%",
          right: "-180px",
          width: "480px",
          height: "480px",
          background: "radial-gradient(circle, rgba(244,196,48,0.07) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Âncora escura na base */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "220px",
          background: "linear-gradient(to top, rgba(8,22,10,0.65) 0%, transparent 100%)",
        }}
      />

      {/* Dot-pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.03 }}
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="dots-luta"
            x="0" y="0" width="28" height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="#f0ffe8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-luta)" />
      </svg>

      {/* Linha de entrada no topo — verde vivo */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(79,222,27,0.20) 30%, rgba(79,222,27,0.48) 50%, rgba(79,222,27,0.20) 70%, transparent)",
        }}
      />

      {/* ══ CONTEÚDO ══════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── CABEÇALHO ───────────────────────────────────────────────── */}
        <FadeIn className="text-center mb-16">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(27,94,32,0.55)",          // #1B5E20 translúcido
              border: "1px solid rgba(255,255,255,0.20)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
              style={{ background: "#4FDE1B", boxShadow: "0 0 7px rgba(79,222,27,0.80)" }}
            />
            <span
              className="font-bold uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(168,230,161,0.90)" }}
            >
              Nossa Luta
            </span>
          </div>

          {/* Título h2 */}
          <h2
            className="font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
              letterSpacing: "-0.025em",
              color: "#ffffff",
              textShadow: "0 2px 20px rgba(8,28,12,0.55)",
            }}
          >
            Visibilidade e{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(88deg, #4FDE1B 0%, #A8E6A1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 14px rgba(79,222,27,0.28))",
              }}
            >
              Respeito
            </span>
          </h2>

          {/* Linha decorativa */}
          <div className="flex justify-center mb-5">
            <div
              className="h-0.5 w-16 rounded-full"
              style={{ background: "linear-gradient(90deg, #4FDE1B, #A8E6A1)" }}
            />
          </div>

          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(240,255,240,0.70)" }}
          >
            A realidade dos povos originários que chegam às cidades em busca de dignidade —
            e a luta do IAPOAM para garantir que seus direitos sejam respeitados.
          </p>
        </FadeIn>

        {/* ── CARD MANIFESTO ───────────────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <div
            className="relative rounded-3xl overflow-hidden mb-16"
            style={{
              background: "rgba(27,94,32,0.45)",          // #1B5E20 com alpha
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 4px 40px rgba(8,22,10,0.40), inset 0 1px 0 rgba(79,222,27,0.06)",
            }}
          >
            {/* Linha superior — verde vivo */}
            <div
              className="absolute top-0 left-0 right-0"
              style={{
                height: "2px",
                background:
                  "linear-gradient(90deg, #4FDE1B 0%, #A8E6A1 50%, transparent 100%)",
                opacity: 0.65,
              }}
            />

            <div className="grid lg:grid-cols-2 gap-0">

              {/* Coluna esquerda — texto + stats */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div className="space-y-5">

                  <p className="text-base leading-relaxed" style={{ color: "rgba(240,255,240,0.85)" }}>
                    O{" "}
                    <strong style={{ color: "#ffffff", fontWeight: 700 }}>IAPOAM</strong>{" "}
                    luta pela inclusão, visibilidade e respeito aos povos indígenas que
                    buscam as grandes cidades. Apenas{" "}
                    <span
                      style={{
                        color: "#F4C430",                 // amarelo-ouro como destaque numérico
                        fontWeight: 700,
                        textShadow: "0 0 10px rgba(244,196,48,0.32)",
                      }}
                    >
                      10%
                    </span>{" "}
                    retornam às suas bases. Os demais permanecem na capital, sem moradia
                    digna, sem apoio do poder público.
                  </p>

                  <p className="text-base leading-relaxed" style={{ color: "rgba(240,255,240,0.68)" }}>
                    100% das comunidades e aldeias urbanas foram criadas através de
                    assentamentos e invasões. Prefeitura e Governo Estadual não buscam
                    inclusão nem moradia digna para os povos indígenas.
                  </p>

                  {/* Citação — borda verde vivo */}
                  <div
                    className="pl-5 py-1"
                    style={{ borderLeft: "2px solid rgba(79,222,27,0.50)" }}
                  >
                    <p
                      className="text-sm italic leading-relaxed"
                      style={{ color: "rgba(240,255,240,0.74)" }}
                    >
                      "Quem não tem casa não tem saúde, não tem educação.
                      Quem não tem casa não tem direito de ser feliz."
                    </p>
                  </div>

                  {/* Frase de reforço — verde vivo */}
                  <p
                    className="text-sm font-semibold leading-snug"
                    style={{ color: "#4FDE1B" }}
                  >
                    O IAPOAM irá lutar sempre pela qualidade de vida melhor
                    para a nação indígena do Amazonas.
                  </p>
                </div>

                {/* Mini stats — números em amarelo-ouro */}
                <div className="grid grid-cols-3 gap-3 mt-8">
                  {statsManifesto.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-3 text-center"
                      style={{
                        background: "rgba(27,94,32,0.55)",
                        border: "1px solid rgba(255,255,255,0.14)",
                      }}
                    >
                      <div
                        className="font-black leading-tight"
                        style={{
                          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                          color: "#F4C430",               // amarelo-ouro
                          textShadow: "0 0 14px rgba(244,196,48,0.30)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {s.valor}
                      </div>
                      <div
                        className="mt-0.5 leading-tight font-medium"
                        style={{ fontSize: "10px", color: "rgba(240,255,240,0.52)" }}
                      >
                        {s.legenda}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna direita — mapa IBGE */}
              <div
                className="relative"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* Divisor vertical lg */}
                <div
                  className="hidden lg:block absolute left-0 top-0 bottom-0 w-px"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(79,222,27,0.18) 30%, rgba(79,222,27,0.18) 70%, transparent)",
                  }}
                />

                <div className="p-6 lg:p-10 h-full flex flex-col">
                  {/* Divisor "Dados — IBGE" */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="flex-1 h-px"
                      style={{ background: "rgba(79,222,27,0.18)" }}
                    />
                    <span
                      className="font-bold uppercase whitespace-nowrap"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.22em",
                        color: "rgba(168,230,161,0.55)",
                      }}
                    >
                      Dados — IBGE
                    </span>
                    <div
                      className="flex-1 h-px"
                      style={{ background: "rgba(79,222,27,0.18)" }}
                    />
                  </div>

                  {/* Frame da imagem */}
                  <div
                    className="relative flex-1 min-h-[280px] rounded-2xl overflow-hidden"
                    style={{
                      background: "#e9ebea",
                      border: "1px solid rgba(79,222,27,0.22)",
                      boxShadow: "0 2px 20px rgba(8,22,10,0.40)",
                    }}
                  >
                    <Image
                      src="/dados.png"
                      alt="Mapa — População indígena por cidade — Fonte: IBGE / G1"
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <p
                    className="text-right mt-2.5 font-medium"
                    style={{ fontSize: "10px", color: "rgba(240,255,240,0.30)" }}
                  >
                    Fonte: IBGE / G1 — Manaus-AM · 71.713 indígenas · 3,48%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── GRID SERVIÇOS ────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Coluna esquerda — texto editorial + CTA */}
          <FadeIn delay={0.15} className="flex flex-col justify-center">

            <p
              className="font-bold uppercase mb-3"
              style={{
                fontSize: "10px",
                letterSpacing: "0.22em",
                color: "rgba(168,230,161,0.65)",          // #A8E6A1 suave
              }}
            >
              Serviços
            </p>

            <h3
              className="font-semibold leading-tight mb-5"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              O Que{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(88deg, #4FDE1B 0%, #A8E6A1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Fazemos
              </span>
            </h3>

            {/* Linha decorativa */}
            <div
              className="w-10 mb-5 rounded-full"
              style={{
                height: "2px",
                background: "linear-gradient(90deg, #4FDE1B, #A8E6A1)",
              }}
            />

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(240,255,240,0.70)", lineHeight: "1.75" }}
            >
              Cinco frentes de atuação direta para garantir que nenhum indígena que
              chega à cidade fique desamparado — sem orientação, sem direitos e sem voz.
            </p>

            {/*
             * CTA — laranja-terra #C1440E
             * Hover: amarelo-ouro #F4C430 + texto escuro #1A1A1A
             */}
            <Link
              href="/doacoes"
              className="group inline-flex items-center gap-2.5 rounded-xl font-bold
                         tracking-wide transition-all duration-300 w-fit"
              style={{
                padding: "14px 28px",
                fontSize: "0.875rem",
                letterSpacing: "0.02em",
                background: "linear-gradient(135deg, #C1440E 0%, #d94f16 100%)",
                color: "#ffffff",
                boxShadow: "0 4px 20px rgba(193,68,14,0.40)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px) scale(1.02)";
                el.style.background = "linear-gradient(135deg, #F4C430 0%, #f7d55a 100%)";
                el.style.color = "#1A1A1A";
                el.style.boxShadow = "0 8px 28px rgba(244,196,48,0.50)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.background = "linear-gradient(135deg, #C1440E 0%, #d94f16 100%)";
                el.style.color = "#ffffff";
                el.style.boxShadow = "0 4px 20px rgba(193,68,14,0.40)";
              }}
            >
              Apoie Nossa Causa
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>

          {/* Coluna direita — lista de serviços */}
          <FadeIn delay={0.2}>
            <div className="space-y-2.5">
              {servicos.map((s, i) => (
                <motion.div
                  key={s.numero}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(27,94,32,0.40)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(27,94,32,0.65)";
                    el.style.borderColor = "rgba(79,222,27,0.28)";
                    el.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(27,94,32,0.40)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.transform = "translateX(0)";
                  }}
                >
                  {/* Badge numérico — verde vivo */}
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(79,222,27,0.14)",
                      border: "1px solid rgba(79,222,27,0.30)",
                    }}
                  >
                    <span
                      className="font-black"
                      style={{ fontSize: "10px", color: "#4FDE1B" }}
                    >
                      {s.numero}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4
                      className="font-semibold mb-1.5 leading-snug"
                      style={{ fontSize: "0.875rem", color: "#ffffff" }}
                    >
                      {s.titulo}
                    </h4>
                    <p
                      className="leading-relaxed"
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(240,255,240,0.70)",
                        lineHeight: "1.65",
                      }}
                    >
                      {s.descricao}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ══ WAVE DE SAÍDA ════════════════════════════════════════════ */}
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
            d="M0 72 L0 28 C180 6 420 60 720 36 C1020 12 1260 58 1440 28 L1440 72 Z"
            fill="rgba(8,22,10,0.32)"
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