"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Paleta — design system v3 ────────────────────────────────────────────────
// Seção forest/accent — vem após Direitos (dark) e usa fundo verde médio vibrante
// Antes: #016b14 (forest antigo)
// Agora: #1B5E20 (menu/forest do design system v3) — tom mais rico e coerente
// Verde vivo destaque:  #4FDE1B
// Verde claro:          #A8E6A1
// Amarelo-ouro:         #F4C430  (números de stats)
// Texto:                rgba(240,255,240,…) / #ffffff
// Barra lateral cards:  #4FDE1B
// Wave de saída:        #0f2912
// ─────────────────────────────────────────────────────────────────────────────

const areas = [
  {
    id: "cidadania",
    number: "01",
    title: "Cidadania e Inclusão",
    description:
      "Promovemos ações de cidadania e inclusão digital através de doação de computadores e capacitação tecnológica, garantindo que as comunidades indígenas tenham acesso aos seus direitos básicos.",
    initiatives: [
      "Doação de equipamentos de informática",
      "Capacitação digital nas aldeias",
      "Acesso a serviços e direitos básicos",
      "Inclusão tecnológica comunitária",
    ],
  },
  {
    id: "cultura",
    number: "02",
    title: "Cultura Indígena",
    description:
      "Preservação e promoção das tradições culturais ancestrais, fortalecendo a identidade dos povos originários e garantindo que os saberes e línguas nativas sejam transmitidos às novas gerações.",
    initiatives: [
      "Preservação das tradições ancestrais",
      "Realização de eventos culturais",
      "Valorização de línguas nativas",
      "Documentação cultural e histórica",
    ],
  },
  {
    id: "ambiente",
    number: "03",
    title: "Meio Ambiente",
    description:
      "Proteção ambiental na Amazônia com foco em desenvolvimento sustentável e conservação da biodiversidade. A floresta em pé é nossa maior riqueza e responsabilidade.",
    initiatives: [
      "Projetos de reflorestamento",
      "Educação ambiental nas comunidades",
      "Desenvolvimento sustentável local",
      "Conservação da biodiversidade amazônica",
    ],
  },
  {
    id: "habitacao",
    number: "04",
    title: "Habitação",
    description:
      "Apoio para garantir moradias dignas com infraestrutura básica nas comunidades indígenas. Toda família merece um lar seguro, saudável e adequado à sua cultura.",
    initiatives: [
      "Reforma e melhoria de moradias",
      "Infraestrutura básica comunitária",
      "Implantação de saneamento",
      "Construção com materiais sustentáveis",
    ],
  },
  {
    id: "saude",
    number: "05",
    title: "Saúde Indígena",
    description:
      "Assistência médica e prevenção integradas, respeitando e valorizando a medicina tradicional indígena ao lado das práticas modernas de saúde. Cuidamos do corpo e do espírito.",
    initiatives: [
      "Atendimento médico nas aldeias",
      "Medicina preventiva comunitária",
      "Saúde materno-infantil",
      "Valorização dos saberes tradicionais de cura",
    ],
  },
  {
    id: "social",
    number: "06",
    title: "Assistência Social",
    description:
      "Atendimento integral a famílias em vulnerabilidade com programas de apoio comunitário, segurança alimentar e fortalecimento dos laços familiares e da coesão social nas aldeias.",
    initiatives: [
      "Apoio emergencial a famílias",
      "Programas de segurança alimentar",
      "Fortalecimento dos vínculos familiares",
      "Desenvolvimento comunitário integrado",
    ],
  },
];

const globalStats = [
  { number: "6",   label: "Áreas de Atuação" },
  { number: "35+", label: "Etnias Atendidas" },
  { number: "253", label: "Comunidades"      },
  { number: "16+", label: "Anos de Impacto"  },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export default function AreasDeAtuacao() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="areas"
      className="relative overflow-hidden"
      style={{
        // #1B5E20 — verde-floresta do design system v3
        // Substitui #016b14 (forest antigo), mantendo o papel de seção "forest accent"
        background: "#1B5E20",
        paddingTop: "7rem",
        paddingBottom: "8rem",
      }}
    >

      {/* ══ ATMOSFERA ════════════════════════════════════════════════ */}

      {/* Gradiente direcional — profundidade vertical */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(175deg, rgba(10,30,14,0.60) 0%, transparent 40%, rgba(8,24,11,0.45) 100%)",
        }}
      />

      {/* Luz de dossel — verde vivo no centro-topo */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse 70% 55% at 50% 20%, rgba(79,222,27,0.12) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Blob ouro — toque de calor lateral direito */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%", right: "-140px",
          width: "420px", height: "420px",
          background: "radial-gradient(circle, rgba(244,196,48,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Âncora escura na base */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "256px",
          background: "linear-gradient(to top, rgba(8,22,10,0.65) 0%, transparent 100%)",
        }}
      />

      {/* Dot-pattern — textura orgânica */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.032 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots-areas" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="#f0ffe8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-areas)" />
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
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(8,24,11,0.45)",
              border: "1px solid rgba(79,222,27,0.30)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
              style={{ background: "#4FDE1B", boxShadow: "0 0 7px rgba(79,222,27,0.80)" }}
            />
            <span
              className="font-semibold uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.20em", color: "rgba(168,230,161,0.92)" }}
            >
              Nossas Frentes de Trabalho
            </span>
          </div>

          {/* Título h2 */}
          <h2
            className="font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
              letterSpacing: "-0.025em",
              color: "#ffffff",
              textShadow: "0 2px 20px rgba(8,24,11,0.50)",
            }}
          >
            Áreas de{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(88deg, #4FDE1B 0%, #A8E6A1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 14px rgba(79,222,27,0.28))",
              }}
            >
              Atuação
            </span>
          </h2>

          {/* Linha decorativa */}
          <div className="flex justify-center mb-5">
            <div
              className="h-0.5 w-14 rounded-full"
              style={{ background: "linear-gradient(90deg, #4FDE1B, #A8E6A1)" }}
            />
          </div>

          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(240,255,240,0.75)", lineHeight: "1.75" }}
          >
            Seis áreas fundamentais de trabalho para garantir o bem-estar, os direitos
            e a dignidade dos povos originários da Amazônia.
          </p>
        </motion.div>

        {/* ── STATS — amarelo-ouro como destaque numérico ─────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {globalStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.10, ease: [0.22, 1, 0.36, 1] }}
              className="group relative text-center overflow-hidden
                         transition-all duration-300 cursor-default hover:-translate-y-1"
              style={{
                background: "rgba(8,30,12,0.50)",
                border: "1px solid rgba(79,222,27,0.16)",
                borderRadius: "16px",
                padding: "1.75rem 1rem",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                boxShadow: "0 2px 16px rgba(8,22,10,0.30), inset 0 1px 0 rgba(79,222,27,0.05)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(79,222,27,0.38)";
                el.style.background  = "rgba(8,40,14,0.60)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(79,222,27,0.16)";
                el.style.background  = "rgba(8,30,12,0.50)";
              }}
            >
              {/* Linha topo no hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #4FDE1B, transparent)" }}
              />

              {/* Número — amarelo-ouro */}
              <div
                className="font-black mb-1.5 leading-none"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  letterSpacing: "-0.03em",
                  color: "#F4C430",
                  textShadow: "0 0 20px rgba(244,196,48,0.30)",
                }}
              >
                {s.number}
              </div>

              <div
                className="font-semibold uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.10em", color: "rgba(240,255,240,0.55)" }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CARDS DE ÁREA ───────────────────────────────────────────── */}
        <div className="space-y-5">
          {areas.map((area) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden transition-all duration-400"
              style={{
                background: "rgba(8,50,14,0.42)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "24px",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                boxShadow: "0 2px 24px rgba(8,22,10,0.28)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background  = "rgba(8,64,18,0.56)";
                el.style.borderColor = "rgba(79,222,27,0.24)";
                el.style.boxShadow   = "0 8px 40px rgba(8,22,10,0.38)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background  = "rgba(8,50,14,0.42)";
                el.style.borderColor = "rgba(255,255,255,0.09)";
                el.style.boxShadow   = "0 2px 24px rgba(8,22,10,0.28)";
              }}
            >
              {/* Barra lateral — verde vivo, cresce em full no hover */}
              <div
                className="absolute top-0 left-0 bottom-0 w-[3px]"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(79,222,27,0.70) 0%, rgba(79,222,27,0.30) 60%, transparent 100%)",
                  opacity: 0.50,
                  transition: "opacity 0.4s",
                }}
              />
              <div
                className="absolute top-0 left-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background:
                    "linear-gradient(to bottom, #4FDE1B 0%, #A8E6A1 60%, transparent 100%)",
                }}
              />

              <div
                className="p-7 lg:p-9"
                style={{ paddingLeft: "clamp(2rem, 4vw, 3rem)" }}
              >
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">

                  {/* Coluna esquerda — número + título + descrição */}
                  <div>
                    {/* Número decorativo — verde vivo em baixíssima opacidade */}
                    <div className="flex items-baseline gap-3 mb-3">
                      <span
                        className="font-black leading-none select-none"
                        style={{
                          fontSize: "clamp(3.5rem, 8vw, 5rem)",
                          letterSpacing: "-0.04em",
                          color: "rgba(79,222,27,0.16)",
                          lineHeight: 1,
                        }}
                        aria-hidden="true"
                      >
                        {area.number}
                      </span>
                    </div>

                    {/* h3 — font-semibold */}
                    <h3
                      className="font-semibold leading-snug mb-4 transition-colors duration-300"
                      style={{
                        fontSize: "clamp(1.3rem, 2.8vw, 1.75rem)",
                        letterSpacing: "-0.02em",
                        color: "#ffffff",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#4FDE1B";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#ffffff";
                      }}
                    >
                      {area.title}
                    </h3>

                    {/* Traço decorativo */}
                    <div
                      className="h-0.5 mb-4 rounded-full transition-all duration-500 group-hover:w-14"
                      style={{ width: "32px", background: "linear-gradient(90deg, #4FDE1B, #A8E6A1)" }}
                    />

                    {/* Descrição */}
                    <p
                      className="leading-relaxed"
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(240,255,240,0.80)",
                        lineHeight: "1.72",
                      }}
                    >
                      {area.description}
                    </p>
                  </div>

                  {/* Coluna direita — lista de iniciativas */}
                  <div>
                    <p
                      className="font-bold uppercase mb-4"
                      style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(168,230,161,0.62)" }}
                    >
                      O que fazemos
                    </p>

                    <ul className="space-y-2">
                      {area.initiatives.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 rounded-xl transition-all duration-250 cursor-default"
                          style={{
                            padding: "0.75rem 1rem",
                            background: "rgba(8,30,12,0.40)",
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
                            el.style.background  = "rgba(8,30,12,0.40)";
                            el.style.borderColor = "rgba(255,255,255,0.07)";
                            el.style.transform   = "translateX(0)";
                          }}
                        >
                          {/* Marcador — verde vivo */}
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{
                              background: "#4FDE1B",
                              boxShadow: "0 0 6px rgba(79,222,27,0.50)",
                            }}
                          />
                          <span
                            className="text-sm leading-relaxed"
                            style={{ color: "rgba(240,255,240,0.80)", lineHeight: "1.55" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
            d="M0 72 L0 28 C180 6 420 60 720 36 C1020 12 1260 58 1440 28 L1440 72 Z"
            fill="rgba(8,22,10,0.28)"
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