"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Paleta — design system v3 ────────────────────────────────────────────────
// Seção dark — continua o fluxo escuro após Programas
// Background:        #0f2912  (wave de saída do Programas)
// Superfícies card:  #163d1c  (verde-floresta escuro)
// Verde vivo:        #4FDE1B
// Verde claro:       #A8E6A1
// Amarelo-ouro:      #F4C430  (números de stats, destaques críticos)
// Botão primário:    #C1440E → hover #F4C430
// Texto:             rgba(240,255,240,…) branco-esverdeado
// Wave de saída:     #0f2912
// ─────────────────────────────────────────────────────────────────────────────

const stats = [
  { value: "91,5%", label: "do eleitorado de São Gabriel da Cachoeira é indígena",     source: "TSE" },
  { value: "81,2%", label: "dos eleitores de São Paulo de Olivença são indígenas",     source: "TSE" },
  { value: "79,3%", label: "dos eleitores de Santa Isabel do Rio Negro são indígenas", source: "TSE" },
];

const direitos = [
  {
    title: "O Kokar antes da Coroa",
    text: "Antes da chegada dos portugueses, o Brasil já era habitado por centenas de povos com suas próprias formas de organização, territórios respeitados e lideranças. O Kokar — coroa de penas indígena — representa séculos de soberania e sabedoria que antecede qualquer constituição.",
  },
  {
    title: "O Voto como Instrumento de Poder",
    text: "No século XX nasceu a modernidade brasileira: o sindicato, o partido, a democracia representativa. Hoje, com a lei de cotas indígenas aprovada e o ano eleitoral de 2026 se aproximando, o voto é a arma mais poderosa que o povo originário tem para escolher seus próprios representantes.",
  },
  {
    title: "Parente Vota em Parente",
    text: "A lei de cotas indígenas garante representatividade nos espaços de poder. Votar em candidatos indígenas é fortalecer a voz dos povos originários nas câmaras, assembleias e no congresso. Cada voto consciente é um passo rumo à autodeterminação.",
  },
  {
    title: "Venda de Voto é Crime Eleitoral",
    text: "Trocar seu voto por cesta básica, dinheiro ou qualquer benefício é crime eleitoral previsto no Código Eleitoral Brasileiro — com pena de reclusão e multa. Não se deixe enganar. Seu voto vale muito mais do que qualquer oferta.",
  },
];

const comoVotar = [
  {
    step: "01",
    title: "Tire seu Título de Eleitor",
    desc: "Procure o cartório eleitoral mais próximo ou acesse o site do TSE. O título é gratuito e obrigatório para votar.",
  },
  {
    step: "02",
    title: "Confira seu Local de Votação",
    desc: "Use o app e-Título ou acesse o site do TRE-AM para saber onde votar. A Justiça Eleitoral leva as urnas até comunidades remotas.",
  },
  {
    step: "03",
    title: "Pesquise os Candidatos",
    desc: "Conheça as propostas. Priorize candidatos que defendam terras indígenas, saúde, educação diferenciada e direitos dos povos originários.",
  },
  {
    step: "04",
    title: "Vote com Consciência",
    desc: "No dia da eleição, leve seu documento com foto. Não aceite propostas de troca de voto — denuncie pelo app Pardal do TSE.",
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export function Direitos() {
  const [activeTab, setActiveTab] = useState<"por-que" | "como">("por-que");

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#0f2912",          // continua wave de saída do Programas
        paddingTop: "7rem",
        paddingBottom: "8rem",
      }}
    >

      {/* ══ ATMOSFERA ════════════════════════════════════════════════ */}

      {/* Blob verde vivo topo-direito */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-160px", right: "-180px",
          width: "560px", height: "560px",
          background: "radial-gradient(circle, rgba(79,222,27,0.08) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />
      {/* Blob ouro base-esquerdo */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-120px", left: "-150px",
          width: "460px", height: "460px",
          background: "radial-gradient(circle, rgba(244,196,48,0.07) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Gradiente direcional */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(79,222,27,0.04) 0%, transparent 50%, rgba(27,94,32,0.05) 100%)",
        }}
      />

      {/* Dot-pattern — verde vivo */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.028 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots-dir" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#4FDE1B" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-dir)" />
      </svg>

      {/* Linha de entrada */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(79,222,27,0.20) 30%, rgba(79,222,27,0.42) 50%, rgba(79,222,27,0.20) 70%, transparent)",
        }}
      />

      {/* ══ CONTEÚDO ══════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── CABEÇALHO ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
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
              className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
              style={{ background: "#4FDE1B", boxShadow: "0 0 6px rgba(79,222,27,0.75)" }}
            />
            <span
              className="font-semibold uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.20em", color: "rgba(168,230,161,0.88)" }}
            >
              Direitos Políticos
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
            Por que{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(88deg, #4FDE1B 0%, #A8E6A1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 12px rgba(79,222,27,0.24))",
              }}
            >
              Votar?
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
            Antes da coroa dos reis, existia o Kokar — a coroa de penas dos povos originários.
            O voto consciente é a continuidade dessa soberania.
          </p>
        </motion.div>

        {/* ── STATS — números em amarelo-ouro ────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.10, ease: [0.22, 1, 0.36, 1] }}
              className="group relative text-center overflow-hidden transition-all duration-300 cursor-default"
              style={{
                background: "#163d1c",
                border: "1px solid rgba(79,222,27,0.10)",
                borderRadius: "16px",
                padding: "1.75rem 1.25rem",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform   = "translateY(-4px)";
                el.style.borderColor = "rgba(79,222,27,0.28)";
                el.style.boxShadow   = "0 12px 36px rgba(8,22,10,0.32)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform   = "translateY(0)";
                el.style.borderColor = "rgba(79,222,27,0.10)";
                el.style.boxShadow   = "none";
              }}
            >
              {/* Barra topo no hover */}
              <div
                className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  height: "3px",
                  background: "linear-gradient(90deg, #1B5E20, #4FDE1B)",
                }}
              />

              {/* Número — amarelo-ouro (destaque máximo de dado numérico) */}
              <div
                className="font-black mb-2"
                style={{
                  fontSize: "clamp(2rem, 5vw, 2.6rem)",
                  letterSpacing: "-0.03em",
                  color: "#F4C430",
                  textShadow: "0 0 20px rgba(244,196,48,0.28)",
                }}
              >
                {stat.value}
              </div>

              <p
                className="text-sm leading-snug mb-3"
                style={{ color: "rgba(240,255,240,0.62)", lineHeight: "1.55" }}
              >
                {stat.label}
              </p>

              {/* Badge fonte */}
              <span
                className="inline-block font-bold uppercase px-2.5 py-1 rounded-full"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  background: "rgba(79,222,27,0.09)",
                  border: "1px solid rgba(79,222,27,0.22)",
                  color: "rgba(168,230,161,0.70)",
                }}
              >
                Fonte: {stat.source}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── TABS ───────────────────────────────────────────────────── */}
        <div
          className="flex justify-center gap-2.5 mb-10"
          role="tablist"
          aria-label="Conteúdo sobre direitos políticos"
        >
          {([
            { id: "por-que" as const, label: "Por que votar?" },
            { id: "como"   as const, label: "Como votar?"    },
          ] as const).map((tab) => {
            const isAtivo = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isAtivo}
                aria-controls={`painel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold
                           transition-all duration-300 outline-none
                           focus-visible:ring-2 focus-visible:ring-[#4FDE1B]
                           focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f2912]"
                style={{
                  letterSpacing: "0.01em",
                  background: isAtivo ? "#1B5E20"                         : "rgba(27,94,32,0.35)",
                  color:      isAtivo ? "#4FDE1B"                         : "rgba(240,255,240,0.55)",
                  border:     isAtivo ? "1px solid rgba(79,222,27,0.30)"  : "1px solid rgba(255,255,255,0.10)",
                  boxShadow:  isAtivo ? "0 4px 16px rgba(27,94,32,0.40)"  : "none",
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
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── PAINÉIS DE CONTEÚDO ─────────────────────────────────────── */}
        <AnimatePresence mode="wait">

          {/* Tab: Por que votar */}
          {activeTab === "por-que" && (
            <motion.div
              key="por-que"
              id="painel-por-que"
              role="tabpanel"
              aria-labelledby="tab-por-que"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-4"
            >
              {direitos.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.40, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden transition-all duration-300 cursor-default"
                  style={{
                    background: "#163d1c",
                    border: "1px solid rgba(79,222,27,0.10)",
                    borderRadius: "20px",
                    padding: "1.75rem",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform   = "translateY(-3px)";
                    el.style.borderColor = "rgba(79,222,27,0.26)";
                    el.style.boxShadow   = "0 12px 32px rgba(8,22,10,0.30)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform   = "translateY(0)";
                    el.style.borderColor = "rgba(79,222,27,0.10)";
                    el.style.boxShadow   = "none";
                  }}
                >
                  {/* Barra topo */}
                  <div
                    className="absolute top-0 left-0 right-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      height: "3px",
                      background: "linear-gradient(90deg, #4FDE1B 0%, #1B5E20 100%)",
                    }}
                  />

                  {/* Título h3 */}
                  <h3
                    className="font-semibold leading-snug mb-3"
                    style={{
                      fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
                      letterSpacing: "-0.01em",
                      color: "#ffffff",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Traço decorativo */}
                  <div
                    className="h-0.5 mb-3 rounded-full transition-all duration-400 group-hover:w-12"
                    style={{ width: "24px", background: "linear-gradient(90deg, #4FDE1B, #A8E6A1)" }}
                  />

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(240,255,240,0.62)", lineHeight: "1.70" }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Tab: Como votar */}
          {activeTab === "como" && (
            <motion.div
              key="como"
              id="painel-como"
              role="tabpanel"
              aria-labelledby="tab-como"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              {comoVotar.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.40, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-start gap-5 transition-all duration-300 cursor-default"
                  style={{
                    background: "#163d1c",
                    border: "1px solid rgba(79,222,27,0.10)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform   = "translateX(4px)";
                    el.style.borderColor = "rgba(79,222,27,0.26)";
                    el.style.boxShadow   = "0 6px 24px rgba(8,22,10,0.24)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform   = "translateX(0)";
                    el.style.borderColor = "rgba(79,222,27,0.10)";
                    el.style.boxShadow   = "none";
                  }}
                >
                  {/*
                   * Badge numérico — laranja-terra #C1440E
                   * Contraste vibrante sobre o verde-floresta escuro
                   * Transmite urgência/ação, diferencia dos badges de etnia (ouro)
                   */}
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #C1440E 0%, #d94f16 100%)",
                      boxShadow: "0 3px 12px rgba(193,68,14,0.35)",
                    }}
                  >
                    <span
                      className="font-black"
                      style={{ fontSize: "11px", color: "#ffffff" }}
                    >
                      {item.step}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="font-semibold leading-snug mb-1.5"
                      style={{
                        fontSize: "0.9375rem",
                        letterSpacing: "-0.01em",
                        color: "#ffffff",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(240,255,240,0.62)", lineHeight: "1.65" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── ALERT: Venda de voto ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex items-start gap-4 relative overflow-hidden"
          style={{
            background: "#163d1c",
            border: "1px solid rgba(193,68,14,0.22)",
            borderLeft: "4px solid #C1440E",       // laranja-terra como alerta visual
            borderRadius: "16px",
            padding: "2rem",
          }}
        >
          {/* Ícone alerta — laranja */}
          <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
            style={{
              background: "rgba(193,68,14,0.14)",
              border: "1px solid rgba(193,68,14,0.30)",
            }}
          >
            <span style={{ color: "#C1440E", fontSize: "16px" }} aria-hidden="true">⚠</span>
          </div>

          <div>
            <h3
              className="font-semibold mb-2"
              style={{ fontSize: "1rem", letterSpacing: "-0.01em", color: "#ffffff" }}
            >
              Venda de Voto é Crime!
            </h3>
            <p
              className="text-sm leading-relaxed max-w-2xl"
              style={{ color: "rgba(240,255,240,0.65)", lineHeight: "1.70" }}
            >
              Trocar seu voto por cesta básica, dinheiro ou qualquer benefício é{" "}
              {/* Destaque crítico em amarelo-ouro — máxima legibilidade */}
              <strong style={{ color: "#F4C430", fontWeight: 600 }}>crime eleitoral</strong>{" "}
              — com pena de reclusão de até 4 anos e multa. Não venda sua voz. Denuncie
              pelo app{" "}
              <strong style={{ color: "#F4C430", fontWeight: 600 }}>Pardal</strong> do TSE
              ou ligue{" "}
              <strong style={{ color: "#F4C430", fontWeight: 600 }}>0800 978 0011</strong>.
            </p>
          </div>
        </motion.div>

        {/* ── CTA: IAPOAM ao seu lado ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.10, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1B5E20 0%, #2d7a35 60%, #1B5E20 100%)",
            borderRadius: "20px",
            padding: "clamp(2rem, 5vw, 3rem)",
            boxShadow: "0 4px 40px rgba(8,22,10,0.35)",
          }}
        >
          {/* Blob interno — ouro suave */}
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: "260px", height: "260px",
              background: "radial-gradient(circle, rgba(244,196,48,0.09) 0%, transparent 65%)",
              borderRadius: "50%",
            }}
          />
          {/* Blob verde vivo esquerdo */}
          <div
            className="absolute bottom-0 left-0 pointer-events-none"
            style={{
              width: "200px", height: "200px",
              background: "radial-gradient(circle, rgba(79,222,27,0.10) 0%, transparent 65%)",
              borderRadius: "50%",
            }}
          />

          {/* Linha topo */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "2px",
              background: "linear-gradient(90deg, transparent 0%, #4FDE1B 40%, #A8E6A1 100%)",
              opacity: 0.55,
            }}
          />

          <div className="relative z-10">
            <h3
              className="font-semibold mb-3"
              style={{
                fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)",
                letterSpacing: "-0.015em",
                color: "#ffffff",
              }}
            >
              O IAPOAM Está ao Seu Lado
            </h3>

            <div
              className="w-10 h-px mx-auto mb-5"
              style={{ background: "rgba(79,222,27,0.45)" }}
            />

            <p
              className="text-sm leading-relaxed max-w-2xl mx-auto mb-7"
              style={{ color: "rgba(240,255,240,0.72)", lineHeight: "1.75" }}
            >
              O Instituto de Apoio aos Povos Originários da Amazônia trabalha para que cada
              indígena conheça e exerça seus direitos políticos. Ajudamos comunidades a se
              cadastrar como eleitores, a entender os processos eleitorais e a denunciar
              irregularidades. Parente indígena vota em parente — com consciência e liberdade.
            </p>

            {/*
             * CTA — laranja-terra #C1440E
             * Hover: amarelo-ouro #F4C430 + texto #1A1A1A
             * Máximo contraste sobre fundo #1B5E20
             */}
            <a
              href="https://wa.me/5592985220682"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl font-bold
                         tracking-wide transition-all duration-300"
              style={{
                padding: "14px 32px",
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
              Fale com o IAPOAM
              <svg
                className="w-4 h-4"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* ── Rodapé de fonte ─────────────────────────────────────────── */}
        <div className="mt-8 text-center">
          <p
            className="text-xs"
            style={{ color: "rgba(240,255,240,0.30)", letterSpacing: "0.03em" }}
          >
            Dados: TRE-AM e TSE — Abril/2025 •{" "}
            <a
              href="https://www.tre-am.jus.br/comunicacao/noticias/2025/Abril/justica-eleitoral-garante-a-participacao-democratica-dos-povos-indigenas-por-meio-do-voto"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors duration-200"
              style={{ color: "rgba(240,255,240,0.30)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#4FDE1B";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(240,255,240,0.30)";
              }}
            >
              Leia a notícia completa
            </a>
          </p>
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