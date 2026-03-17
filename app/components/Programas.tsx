"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ─── Paleta — design system v3 ────────────────────────────────────────────────
// Seção dark — continua o fluxo escuro após Equipe
// Background:        #0f2912  (wave de saída do Equipe)
// Superfícies card:  rgba(22,61,28,…) derivado de #163d1c
// Verde vivo:        #4FDE1B
// Verde claro:       #A8E6A1
// Amarelo-ouro:      #F4C430  (marcadores de ação, sparkle impacto)
// Botão primário:    #C1440E → hover #F4C430
// Texto:             rgba(240,255,240,…) branco-esverdeado
// Wave de saída:     #0f2912
// ─────────────────────────────────────────────────────────────────────────────

const programs = [
  {
    id: "maloca-digital",
    title: "Maloca Digital",
    subtitle: "Inclusão Tecnológica Indígena",
    description:
      "O programa Maloca Digital nasce da convicção de que o acesso à tecnologia é um direito de todos, incluindo os povos originários. Por meio da doação e instalação de computadores, criação de pontos de conectividade e capacitação em informática básica, o IAPOAM leva o mundo digital até as aldeias sem que estas percam sua identidade cultural.",
    actions: [
      "Doação e instalação de computadores nas aldeias",
      "Capacitação em informática básica e internet",
      "Criação de pontos de conectividade comunitários",
      "Oficinas de uso de ferramentas digitais para cidadania",
      "Acesso a serviços públicos online para comunidades",
    ],
    impact: "Mais de 200 famílias indígenas capacitadas digitalmente",
  },
  {
    id: "pescadores",
    title: "Pescadores",
    subtitle: "Pesca Artesanal Indígena",
    description:
      "Os rios da Amazônia são a fonte de vida e sustento de milhares de famílias indígenas. O programa de apoio aos Pescadores do IAPOAM atua na garantia dos territórios pesqueiros tradicionais, no fortalecimento das técnicas ancestrais de pesca e na inserção responsável da produção no mercado, sempre respeitando os ciclos naturais e a sustentabilidade ambiental.",
    actions: [
      "Suporte técnico para técnicas de pesca sustentável",
      "Defesa dos territórios e direitos pesqueiros tradicionais",
      "Apoio à comercialização ética da produção pesqueira",
      "Capacitação em manejo e conservação dos recursos hídricos",
      "Documentação e preservação dos saberes da pesca ancestral",
    ],
    impact: "Apoio a dezenas de famílias ribeirinhas e pescadores indígenas",
  },
  {
    id: "agricultores",
    title: "Agricultores",
    subtitle: "Agricultura Sustentável Indígena",
    description:
      "A terra é sagrada para os povos indígenas. O programa de apoio aos Agricultores do IAPOAM valoriza as práticas tradicionais de cultivo e promove a segurança alimentar das comunidades, aliando os conhecimentos ancestrais com técnicas agroecológicas modernas.",
    actions: [
      "Assessoria técnica em agroecologia e agricultura orgânica",
      "Fortalecimento de hortas e roças comunitárias",
      "Apoio à comercialização de produtos da floresta",
      "Capacitação em técnicas de conservação do solo",
      "Promoção de feiras e mercados locais indígenas",
    ],
    impact: "Segurança alimentar fortalecida em diversas comunidades",
  },
  {
    id: "artesaos",
    title: "Artesãos",
    subtitle: "Arte e Cultura dos Povos Originários",
    description:
      "O artesanato indígena é muito mais do que um produto — é uma linguagem cultural que transmite histórias, espiritualidade e identidade dos povos originários. O programa fortalece a produção, preserva as técnicas tradicionais e abre novos canais de comercialização que valorizam de forma justa o trabalho dos artistas indígenas.",
    actions: [
      "Fortalecimento das técnicas tradicionais de artesanato",
      "Criação de canais justos de comercialização e exposição",
      "Oficinas de criação com materiais naturais da floresta",
      "Documentação e preservação das artes tradicionais indígenas",
      "Feiras culturais e exposições para valorização da arte ancestral",
    ],
    impact: "Geração de renda e valorização da identidade cultural indígena",
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export function Programas() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="programas"
      className="relative overflow-hidden scroll-mt-24"
      style={{
        background: "#0f2912",          // continua do wave de saída do Equipe
        paddingTop: "7rem",
        paddingBottom: "8rem",
      }}
    >

      {/* ══ ATMOSFERA ════════════════════════════════════════════════ */}

      {/* Blob verde vivo topo-direito */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-160px", right: "-200px",
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(79,222,27,0.08) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Blob ouro base-esquerdo */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-120px", left: "-160px",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(244,196,48,0.07) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Gradiente direcional */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(8,22,10,0.35) 0%, transparent 50%, rgba(5,14,7,0.25) 100%)",
        }}
      />

      {/* Dot-pattern — verde vivo */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.026 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots-prog" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#4FDE1B" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-prog)" />
      </svg>

      {/* Linha de entrada — verde vivo */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(79,222,27,0.22) 30%, rgba(79,222,27,0.48) 50%, rgba(79,222,27,0.22) 70%, transparent)",
        }}
      />

      {/* ══ CONTEÚDO ══════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── CABEÇALHO ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(27,94,32,0.50)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
              style={{ background: "#4FDE1B", boxShadow: "0 0 6px rgba(79,222,27,0.75)" }}
            />
            <span
              className="font-semibold uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.20em", color: "rgba(168,230,161,0.88)" }}
            >
              Programas
            </span>
          </div>

          {/* Título h2 */}
          <h2
            className="font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
              letterSpacing: "-0.025em",
              color: "#ffffff",
            }}
          >
            Nossos{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(88deg, #4FDE1B 0%, #A8E6A1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 14px rgba(79,222,27,0.25))",
              }}
            >
              Programas
            </span>
          </h2>

          {/* Linha decorativa */}
          <div className="flex justify-center mb-5">
            <div
              className="h-0.5 w-14 rounded-full"
              style={{ background: "linear-gradient(90deg, #1B5E20, #4FDE1B)" }}
            />
          </div>

          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(240,255,240,0.52)", lineHeight: "1.75" }}
          >
            Iniciativas estruturadas para fortalecer a autonomia, dignidade e
            sustentabilidade das comunidades indígenas
          </p>
        </motion.div>

        {/* ── TABS ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-2.5 mb-10"
          role="tablist"
          aria-label="Programas do IAPOAM"
        >
          {programs.map((p, i) => {
            const isAtivo = active === i;
            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={isAtivo}
                onClick={() => setActive(i)}
                className="px-6 py-2.5 rounded-xl font-semibold text-sm
                           transition-all duration-300 outline-none
                           focus-visible:ring-2 focus-visible:ring-[#4FDE1B] focus-visible:ring-offset-2
                           focus-visible:ring-offset-[#0f2912]"
                style={{
                  letterSpacing: "0.01em",
                  // Ativo: #1B5E20 fundo + #4FDE1B texto (mesmo padrão do EstruturaIapoam)
                  background: isAtivo ? "#1B5E20"                         : "rgba(27,94,32,0.35)",
                  color:      isAtivo ? "#4FDE1B"                         : "rgba(240,255,240,0.55)",
                  border:     isAtivo ? "1px solid rgba(79,222,27,0.30)"  : "1px solid rgba(255,255,255,0.10)",
                  boxShadow:  isAtivo ? "0 4px 20px rgba(27,94,32,0.40)"  : "none",
                  transform:  isAtivo ? "scale(1.04)"                     : "scale(1)",
                }}
                onMouseEnter={(e) => {
                  if (!isAtivo) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background  = "rgba(27,94,32,0.55)";
                    el.style.color       = "rgba(240,255,240,0.88)";
                    el.style.borderColor = "rgba(79,222,27,0.22)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isAtivo) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background  = "rgba(27,94,32,0.35)";
                    el.style.color       = "rgba(240,255,240,0.55)";
                    el.style.borderColor = "rgba(255,255,255,0.10)";
                  }
                }}
              >
                {p.title}
              </button>
            );
          })}
        </motion.div>

        {/* ── PAINEL DO PROGRAMA ATIVO ────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.40, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-5"
          >

            {/* ── Card esquerdo — descrição + impacto ── */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "rgba(22,61,28,0.85)",              // #163d1c com alpha
                border: "1px solid rgba(79,222,27,0.14)",
                borderRadius: "24px",
                padding: "2rem",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                boxShadow: "0 4px 32px rgba(8,22,10,0.32), inset 0 1px 0 rgba(79,222,27,0.05)",
              }}
            >
              {/* Glow topo-direito — ouro suave */}
              <div
                className="absolute top-0 right-0 pointer-events-none"
                style={{
                  width: "200px", height: "200px",
                  background: "radial-gradient(circle, rgba(244,196,48,0.07) 0%, transparent 65%)",
                }}
              />

              {/* Linha topo — verde vivo → floresta */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: "2px",
                  background: "linear-gradient(90deg, #4FDE1B 0%, #1B5E20 60%, transparent 100%)",
                  opacity: 0.65,
                }}
              />

              <div className="relative z-10">
                {/* Badge subtitle — verde vivo */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-5"
                  style={{
                    background: "rgba(79,222,27,0.10)",
                    border: "1px solid rgba(79,222,27,0.26)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#4FDE1B" }}
                  />
                  <span
                    className="font-semibold"
                    style={{ fontSize: "11px", letterSpacing: "0.06em", color: "#4FDE1B" }}
                  >
                    {programs[active].subtitle}
                  </span>
                </div>

                {/* Título do programa h3 */}
                <h3
                  className="font-semibold leading-snug mb-4"
                  style={{
                    fontSize: "clamp(1.3rem, 2.8vw, 1.7rem)",
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                  }}
                >
                  {programs[active].title}
                </h3>

                {/* Traço decorativo */}
                <div
                  className="w-8 h-0.5 mb-5 rounded-full"
                  style={{ background: "linear-gradient(90deg, #4FDE1B, #A8E6A1)" }}
                />

                {/* Descrição */}
                <p
                  className="text-sm leading-relaxed mb-7"
                  style={{ color: "rgba(240,255,240,0.80)", lineHeight: "1.75" }}
                >
                  {programs[active].description}
                </p>

                {/* Box impacto — ouro como destaque */}
                <div
                  className="flex items-start gap-3 rounded-2xl p-4"
                  style={{
                    background: "rgba(244,196,48,0.07)",
                    border: "1px solid rgba(244,196,48,0.20)",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(244,196,48,0.14)",
                      border: "1px solid rgba(244,196,48,0.28)",
                    }}
                  >
                    <span style={{ color: "#F4C430", fontSize: "12px" }} aria-hidden="true">✦</span>
                  </div>
                  <div>
                    <p
                      className="font-bold uppercase mb-1"
                      style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(244,196,48,0.65)" }}
                    >
                      Impacto
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "rgba(240,255,240,0.82)", lineHeight: "1.55" }}
                    >
                      {programs[active].impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Card direito — lista de ações + CTA ── */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "rgba(22,61,28,0.85)",
                border: "1px solid rgba(79,222,27,0.14)",
                borderRadius: "24px",
                padding: "2rem",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                boxShadow: "0 4px 32px rgba(8,22,10,0.32), inset 0 1px 0 rgba(168,230,161,0.04)",
              }}
            >
              {/* Linha topo — verde claro, distingue dos dois cards */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: "2px",
                  background: "linear-gradient(90deg, transparent 0%, #A8E6A1 50%, #4FDE1B 100%)",
                  opacity: 0.55,
                }}
              />

              <div className="relative z-10 flex flex-col h-full">

                <p
                  className="font-bold uppercase mb-5"
                  style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(168,230,161,0.60)" }}
                >
                  Nossas Ações
                </p>

                {/* Lista de ações */}
                <div className="space-y-2.5 mb-7 flex-1">
                  {programs[active].actions.map((action, i) => (
                    <motion.div
                      key={`${active}-${i}`}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: i * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-start gap-3 rounded-xl transition-all duration-250 cursor-default"
                      style={{
                        padding: "0.875rem",
                        background: "rgba(15,41,18,0.65)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background  = "rgba(27,94,32,0.55)";
                        el.style.borderColor = "rgba(79,222,27,0.24)";
                        el.style.transform   = "translateX(3px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background  = "rgba(15,41,18,0.65)";
                        el.style.borderColor = "rgba(255,255,255,0.07)";
                        el.style.transform   = "translateX(0)";
                      }}
                    >
                      {/* Marcador — verde vivo */}
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{
                          background: "#4FDE1B",
                          boxShadow: "0 0 5px rgba(79,222,27,0.48)",
                        }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(240,255,240,0.75)", lineHeight: "1.60" }}
                      >
                        {action}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/*
                 * CTA — laranja-terra #C1440E
                 * Hover: amarelo-ouro #F4C430 + texto #1A1A1A
                 */}
                <Link
                  href="/o-que-fazemos"
                  className="group flex items-center justify-center gap-2.5 w-full rounded-xl
                             font-bold tracking-wide transition-all duration-300"
                  style={{
                    padding: "14px 20px",
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
                  Saiba Mais Sobre Nossos Programas
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── DOTS DE PAGINAÇÃO ───────────────────────────────────────── */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {programs.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Programa ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width:      i === active ? "28px" : "8px",
                height:     "8px",
                background: i === active ? "#4FDE1B" : "rgba(240,255,240,0.20)",
                boxShadow:  i === active ? "0 0 8px rgba(79,222,27,0.48)" : "none",
              }}
              onMouseEnter={(e) => {
                if (i !== active) {
                  (e.currentTarget as HTMLElement).style.background = "rgba(79,222,27,0.40)";
                }
              }}
              onMouseLeave={(e) => {
                if (i !== active) {
                  (e.currentTarget as HTMLElement).style.background = "rgba(240,255,240,0.20)";
                }
              }}
            />
          ))}
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
            d="M0 72 L0 32 C200 4 400 56 720 32 C1040 8 1280 52 1440 28 L1440 72 Z"
            fill="rgba(8,22,10,0.30)"
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