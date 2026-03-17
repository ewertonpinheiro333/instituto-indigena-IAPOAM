"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Paleta — design system v3 ────────────────────────────────────────────────
// Seção clara (alternada após ProjetosAcoes escuro): #F5F5F0
// Painel org-chart:   #163d1c  (verde-floresta escuro — substitui o preto)
// Verde vivo:         #4FDE1B
// Verde claro:        #A8E6A1
// Amarelo-ouro:       #F4C430  (reservado p/ números, não aparece aqui)
// Tab ativo:          #1B5E20 bg + #4FDE1B texto
// Texto:              #1A1A1A
// ─────────────────────────────────────────────────────────────────────────────

// ─── Classes dos nós ─────────────────────────────────────────────────────────
const nodeBase =
  "text-[#f0ffe8] text-[11px] font-semibold text-center px-3.5 py-2.5 rounded-lg leading-snug whitespace-nowrap";

// Nível superior — #1B5E20 com borda verde vivo
const nodeTop    = `${nodeBase} bg-[#1B5E20]    border border-[#4FDE1B]/35`;
// Diretoria / main — tom levemente mais escuro
const nodeMain   = `${nodeBase} bg-[#164d1a]    border border-[#4FDE1B]/22`;
// Coordenação principal — verde vivo translúcido (destaque)
const nodeAccent = `${nodeBase} bg-[#4FDE1B]/18 border border-[#4FDE1B]/48`;
// Funções / membros — verde médio
const nodeSub    = `${nodeBase} bg-[#1e6624]    border border-[#4FDE1B]/20 text-[#f0ffe8]/85`;
// Conselho fiscal — mais suave
const nodeFiscal = `${nodeBase} bg-[#1B5E20]/70 border border-[#A8E6A1]/18 text-[#f0ffe8]/65`;

// Conectores
const line  = "w-px bg-[#4FDE1B]/28 flex-shrink-0";
const hline = "h-px bg-[#4FDE1B]/18 flex-1";

// ─── Sub-componentes ──────────────────────────────────────────────────────────
function DiretoriaExecutiva() {
  return (
    <div className="flex flex-col items-center gap-0 w-full max-w-2xl mx-auto select-none">
      <div className={`${nodeTop} min-w-[210px]`}>DIRETORIA EXECUTIVA</div>
      <div className={`${line} h-8`} />
      <div className={`${nodeMain} min-w-[196px]`}>DIRETORA PRESIDENTE</div>
      <div className={`${line} h-8`} />
      <div className="flex items-start gap-0 w-full max-w-xl">

        {/* Financeiro */}
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center w-full">
            <div className={hline} />
            <div className={`${line} h-8`} />
          </div>
          <div className={`${nodeSub} min-w-[148px]`}>DIRETOR FINANCEIRO</div>
        </div>

        {/* Conselho fiscal */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className={`${line} h-8`} />
          <div className={`${nodeAccent} min-w-[172px]`}>MEMBROS DO CONSELHO FISCAL</div>
          <div className={`${line} h-8`} />
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className={`${hline} min-w-[16px]`} />
                <div className={`${line} h-8`} />
              </div>
              <div className={`${nodeFiscal} min-w-[128px]`}>1º MEMBRO CONSELHO</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className={`${line} h-8`} />
                <div className={`${hline} min-w-[16px]`} />
              </div>
              <div className={`${nodeFiscal} min-w-[128px]`}>2º MEMBRO CONSELHO</div>
            </div>
          </div>
          <div className={`${line} h-8`} />
          <div className={`${nodeFiscal} min-w-[128px]`}>3º MEMBRO CONSELHO</div>
        </div>

        {/* Secretaria */}
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center w-full">
            <div className={`${line} h-8`} />
            <div className={hline} />
          </div>
          <div className={`${nodeSub} min-w-[148px]`}>SECRETARIA EXECUTIVA</div>
        </div>
      </div>
    </div>
  );
}

function Ceiam() {
  const conselheiros = [
    ["1º CONSELHEIRO INDÍGENA", "2º CONSELHEIRO INDÍGENA"],
    ["3º CONSELHEIRO INDÍGENA"],
    ["4º CONSELHEIRO INDÍGENA", "5º CONSELHEIRO INDÍGENA"],
    ["6º CONSELHEIRO INDÍGENA"],
    ["7º CONSELHEIRO INDÍGENA", "8º CONSELHEIRO INDÍGENA"],
    ["9º CONSELHEIRO INDÍGENA", "10º CONSELHEIRO INDÍGENA"],
  ];
  return (
    <div className="flex flex-col items-center gap-0 w-full max-w-2xl mx-auto select-none">
      <div className={`${nodeTop} min-w-[320px]`}>CONSELHO ESTADUAL INDÍGENA DO AMAZONAS — CEIAM</div>
      <div className={`${line} h-7`} />
      <div className={`${nodeAccent} min-w-[180px]`}>COORDENADOR GERAL</div>
      <div className={`${line} h-7`} />
      <div className={`${nodeMain} min-w-[180px]`}>VICE COORDENADOR</div>
      <div className={`${line} h-7`} />
      <div className="w-full max-w-xl space-y-2.5">
        {conselheiros.map((row, i) => (
          <div key={i} className={`flex gap-3 ${row.length === 1 ? "justify-center" : "justify-between"}`}>
            {row.map((c) => (
              <div key={c} className={`${nodeSub} flex-1 text-center`}>{c}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Administrativa() {
  const blocos = [
    { titulo: "Administração",          filhos: ["Administração Financeira", "Administração Jurídica"] },
    { titulo: "Produtor Audiovisual",   filhos: ["Serviço Social", "Psicólogo"] },
    { titulo: "Educação",               filhos: ["Pedagogo", "Antropólogo"] },
    { titulo: "Saúde",                  filhos: ["Enfermeiro(a)", "Médico"] },
    { titulo: "Intercultural Indígena", filhos: ["Coordenador Geral", "Sub Coordenador"] },
  ];
  return (
    <div className="flex flex-col items-center gap-0 w-full max-w-xl mx-auto select-none">
      {blocos.map((bloco, i) => (
        <div key={i} className="flex flex-col items-center w-full">
          {i > 0 && <div className={`${line} h-6`} />}
          <div className={`${nodeTop} min-w-[200px] w-full max-w-[200px]`}>{bloco.titulo}</div>
          <div className={`${line} h-6`} />
          <div className="flex items-start justify-center gap-5 w-full">
            {bloco.filhos.map((f, j) => (
              <div key={j} className={`${nodeSub} min-w-[140px] text-center`}>{f}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function EquipeTecnica() {
  const esquerda = [
    "Coordenação de Logística",
    "Coordenação de Fornecedores",
    "Coordenação de Contratos",
    "Coordenação de Beneficiários",
    "Coordenação de Doadores",
  ];
  const direita = [
    "Sub de Logística",
    "Coordenação de Recebedores",
    "Coordenação de Compras",
    "Coordenação dos Associados",
    "Coordenação de Colaboradores",
  ];
  return (
    <div className="flex flex-col items-center gap-0 w-full max-w-2xl mx-auto select-none">
      <div className={`${nodeTop} min-w-[180px]`}>EQUIPE TÉCNICA</div>
      <div className={`${line} h-8`} />
      <div className="flex items-center gap-12 mb-7">
        <div className={`${nodeAccent} min-w-[140px]`}>GERENTE</div>
        <div className={`${nodeAccent} min-w-[140px]`}>SUB GERENTE</div>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full">
        <div className="space-y-2.5">
          {esquerda.map((item, i) => <div key={i} className={`${nodeSub} w-full`}>{item}</div>)}
        </div>
        <div className="space-y-2.5">
          {direita.map((item, i) => <div key={i} className={`${nodeSub} w-full`}>{item}</div>)}
        </div>
      </div>
    </div>
  );
}

// ─── Abas ─────────────────────────────────────────────────────────────────────
const estruturas = [
  { id: "diretoria",      short: "Diretoria",     full: "Diretoria Executiva"       },
  { id: "ceiam",          short: "CEIAM",          full: "Conselho Est. — CEIAM"    },
  { id: "administrativa", short: "Administrativa", full: "Estrutura Administrativa" },
  { id: "tecnica",        short: "Equipe Técnica", full: "Equipe Técnica"            },
];

// ─── Componente principal ─────────────────────────────────────────────────────
export function EstruturaIapoam() {
  const [ativo, setAtivo] = useState("diretoria");

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F5F5F0", paddingTop: "6rem", paddingBottom: "6rem" }}
    >

      {/* ══ ATMOSFERA ════════════════════════════════════════════════ */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.04 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots-estr" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="#1B5E20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-estr)" />
      </svg>

      {/* Blob direito — verde vivo */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-130px", right: "-200px",
          width: "560px", height: "560px",
          background: "radial-gradient(circle, rgba(79,222,27,0.10) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      {/* Blob esquerdo — ouro suave */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-110px", left: "-170px",
          width: "480px", height: "480px",
          background: "radial-gradient(circle, rgba(244,196,48,0.09) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      {/* Linha de entrada no topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(79,222,27,0.35) 50%, transparent)",
        }}
      />

      {/* ══ CONTEÚDO ══════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── CABEÇALHO ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6"
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
              Organização Interna
            </span>
          </div>

          {/* Título h2 */}
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
              letterSpacing: "-0.025em",
              color: "#1A1A1A",
            }}
          >
            Estrutura do{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #1B5E20 0%, #4FDE1B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              IAPOAM
            </span>
          </h2>

          {/* Linha decorativa */}
          <div className="flex justify-center mb-5">
            <div
              className="h-0.5 w-16 rounded-full"
              style={{ background: "linear-gradient(90deg, #1B5E20, #4FDE1B)" }}
            />
          </div>

          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(26,26,26,0.52)", lineHeight: "1.75" }}
          >
            Conheça a organização interna do instituto — departamentos, conselhos e equipes
            que garantem a eficiência e transparência das nossas ações.
          </p>
        </motion.div>

        {/* ── TABS ───────────────────────────────────────────────────── */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-9"
          role="tablist"
          aria-label="Estrutura organizacional do IAPOAM"
        >
          {estruturas.map((e) => {
            const isAtivo = ativo === e.id;
            return (
              <button
                key={e.id}
                role="tab"
                aria-selected={isAtivo}
                aria-controls={`painel-${e.id}`}
                id={`tab-${e.id}`}
                onClick={() => setAtivo(e.id)}
                className="px-5 py-2.5 rounded-xl font-semibold text-sm
                           transition-all duration-250 outline-none
                           focus-visible:ring-2 focus-visible:ring-[#4FDE1B] focus-visible:ring-offset-2"
                style={{
                  letterSpacing: "0.01em",
                  background: isAtivo ? "#1B5E20"                         : "#ffffff",
                  color:      isAtivo ? "#4FDE1B"                         : "rgba(26,26,26,0.52)",
                  border:     isAtivo ? "1px solid transparent"           : "1px solid rgba(26,26,26,0.10)",
                  boxShadow:  isAtivo ? "0 4px 16px rgba(27,94,32,0.28)"  : "none",
                  transform:  isAtivo ? "scale(1.03)"                     : "scale(1)",
                }}
                onMouseEnter={(e) => {
                  if (!isAtivo) {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,222,27,0.30)";
                    (e.currentTarget as HTMLElement).style.color       = "rgba(26,26,26,0.80)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isAtivo) {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,26,26,0.10)";
                    (e.currentTarget as HTMLElement).style.color       = "rgba(26,26,26,0.52)";
                  }
                }}
              >
                <span className="hidden sm:inline">{e.full}</span>
                <span className="sm:hidden">{e.short}</span>
              </button>
            );
          })}
        </div>

        {/* ── PAINEL org-chart ─────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={ativo}
            id={`painel-${ativo}`}
            role="tabpanel"
            aria-labelledby={`tab-${ativo}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.30, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-x-auto"
            style={{
              background: "#163d1c",                      // verde-floresta escuro — substitui #0d1610
              border: "1px solid rgba(79,222,27,0.14)",
              borderRadius: "24px",
              padding: "clamp(1.5rem, 4vw, 3rem)",
              boxShadow: "0 8px 40px rgba(8,22,10,0.28)",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="min-w-[400px]">
              {ativo === "diretoria"      && <DiretoriaExecutiva />}
              {ativo === "ceiam"          && <Ceiam />}
              {ativo === "administrativa" && <Administrativa />}
              {ativo === "tecnica"        && <EquipeTecnica />}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── LEGENDA ─────────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-7">
          {[
            { bg: "#1B5E20",               border: "rgba(79,222,27,0.30)",  label: "Nível Superior"        },
            { bg: "#164d1a",               border: "rgba(79,222,27,0.20)",  label: "Diretoria / Conselho"  },
            { bg: "rgba(79,222,27,0.18)",  border: "rgba(79,222,27,0.48)",  label: "Coordenação Principal" },
            { bg: "#1e6624",               border: "rgba(79,222,27,0.18)",  label: "Funções e Membros"     },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm flex-shrink-0"
                style={{ background: l.bg, border: `1px solid ${l.border}` }}
              />
              <span
                className="font-medium"
                style={{ fontSize: "11px", color: "rgba(26,26,26,0.44)", letterSpacing: "0.04em" }}
              >
                {l.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}