"use client";

import { useState } from "react";

// ── Tab data ─────────────────────────────────────────────
const estruturas = [
  {
    id: "diretoria",
    label: "Diretoria Executiva",
  },
  {
    id: "ceiam",
    label: "Conselho Estadual — CEIAM",
  },
  {
    id: "administrativa",
    label: "Estrutura Administrativa",
  },
  {
    id: "tecnica",
    label: "Equipe Técnica",
  },
];

// ── Shared node styles ───────────────────────────────────
const nodeBase =
  "text-white text-xs font-bold text-center px-4 py-2.5 rounded-lg leading-tight shadow-md whitespace-nowrap";
const nodeTop    = `${nodeBase} bg-[#010D00] border border-[#548C1C]/60`;
const nodeMain   = `${nodeBase} bg-[#0C2605] border border-[#2E590E]/60`;
const nodeAccent = `${nodeBase} bg-[#2E590E] border border-[#548C1C]/50`;
const nodeMid    = `${nodeBase} bg-[#2E590E] border border-[#548C1C]/50`;
const nodeSub    = `${nodeBase} bg-[#548C1C] border border-[#8EBF24]/30`;
const nodeFiscal = `${nodeBase} bg-[#0C2605] border border-[#2E590E]/70`;

// Connector styles
const line   = "w-px bg-[#548C1C]/50 flex-shrink-0";
const hline  = "h-px bg-[#548C1C]/40 flex-1";

// ── FLUXOGRAM 1 — Diretoria Executiva ───────────────────
function DiretoriaExecutiva() {
  return (
    <div className="flex flex-col items-center gap-0 w-full max-w-2xl mx-auto select-none">

      {/* Diretoria Executiva */}
      <div className={`${nodeTop} min-w-[220px]`}>DIRETORIA EXECUTIVA</div>

      <div className={`${line} h-8`} />

      {/* Diretora Presidente */}
      <div className={`${nodeMain} min-w-[200px]`}>DIRETORA PRESIDENTE</div>

      <div className={`${line} h-8`} />

      {/* Diretor Financeiro + Membros Conselho + Secretaria */}
      <div className="flex items-start gap-0 w-full max-w-xl">
        {/* Left branch */}
        <div className="flex flex-col items-center flex-1 pt-0">
          <div className="flex items-center w-full">
            <div className={`${hline}`} />
            <div className={`${line} h-8`} />
          </div>
          <div className={`${nodeSub} min-w-[160px]`}>DIRETOR FINANCEIRO</div>
        </div>

        {/* Center: connector down */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className={`${line} h-8`} />
          <div className={`${nodeAccent} min-w-[180px]`}>MEMBROS DO CONSELHO FISCAL</div>
          <div className={`${line} h-8`} />
          {/* Fiscal members */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className={`${hline} min-w-[20px]`} />
                <div className={`${line} h-8`} />
              </div>
              <div className={`${nodeFiscal} min-w-[150px]`}>1º MEMBRO CONSELHO FISCAL</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className={`${line} h-8`} />
                <div className={`${hline} min-w-[20px]`} />
              </div>
              <div className={`${nodeFiscal} min-w-[150px]`}>2º MEMBRO CONSELHO FISCAL</div>
            </div>
          </div>
          <div className={`${line} h-8`} />
          <div className={`${nodeFiscal} min-w-[150px]`}>3º MEMBRO CONSELHO FISCAL</div>
        </div>

        {/* Right branch */}
        <div className="flex flex-col items-center flex-1 pt-0">
          <div className="flex items-center w-full">
            <div className={`${line} h-8`} />
            <div className={`${hline}`} />
          </div>
          <div className={`${nodeSub} min-w-[160px]`}>SECRETARIA EXECUTIVA</div>
        </div>
      </div>
    </div>
  );
}

// ── FLUXOGRAM 2 — CEIAM ─────────────────────────────────
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

      <div className={`${nodeTop} min-w-[340px]`}>
        CONSELHO ESTADUAL INDÍGENA DO AMAZONAS — CEIAM
      </div>

      <div className={`${line} h-7`} />

      <div className={`${nodeAccent} min-w-[200px] !bg-[#2E590E]`}>COORDENADOR GERAL</div>

      <div className={`${line} h-7`} />

      <div className={`${nodeMain} min-w-[200px]`}>VICE COORDENADOR</div>

      <div className={`${line} h-7`} />

      {/* Conselheiros */}
      <div className="w-full max-w-xl space-y-3">
        {conselheiros.map((row, i) => (
          <div key={i} className={`flex ${row.length === 1 ? "justify-center" : "justify-between"} gap-4`}>
            {row.map((c) => (
              <div key={c} className={`${nodeSub} flex-1 text-center`}>{c}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── FLUXOGRAM 3 — Estrutura Administrativa ──────────────
function Administrativa() {
  const blocos = [
    {
      titulo: "Administração",
      filhos: ["Administração Financeira", "Administração Jurídica"],
    },
    {
      titulo: "Produtor Audiovisual",
      filhos: ["Serviço Social", "Psicólogo"],
    },
    {
      titulo: "Educação",
      filhos: ["Pedagogo", "Antropólogo"],
    },
    {
      titulo: "Saúde",
      filhos: ["Enfermeiro(a)", "Médico"],
    },
    {
      titulo: "Intercultural Indígena",
      filhos: ["Coordenador Geral", "Sub Coordenador"],
    },
  ];

  return (
    <div className="flex flex-col items-center gap-0 w-full max-w-xl mx-auto select-none">
      {blocos.map((bloco, i) => (
        <div key={i} className="flex flex-col items-center w-full">
          {i > 0 && <div className={`${line} h-6`} />}

          <div className={`${nodeTop} min-w-[220px] w-full max-w-[220px]`}>{bloco.titulo}</div>

          <div className={`${line} h-6`} />

          <div className="flex items-start justify-center gap-6 w-full">
            {bloco.filhos.map((f, j) => (
              <div key={j} className="flex flex-col items-center">
                {bloco.filhos.length > 1 && (
                  <div className={`${line} h-0`} />
                )}
                <div className={`${nodeSub} min-w-[160px] text-center`}>{f}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── FLUXOGRAM 4 — Equipe Técnica ────────────────────────
function EquipeTecnica() {
  const esquerda = [
    "Coordenação de Logística",
    "Coordenação de Fornecedores",
    "Coordenação de Contratos",
    "Coordenação de Contratos",
    "Coordenação de Beneficiários",
    "Coordenação de Doadores",
  ];
  const direita = [
    "Sub de Logística",
    "Coordenação de Recebedores",
    "Coordenação de Compras de Alimentos Interno",
    "Coordenação dos Associados",
    "Coordenação de Apoiadores",
    "Coordenação de Colaboradores",
  ];

  return (
    <div className="flex flex-col items-center gap-0 w-full max-w-2xl mx-auto select-none">

      <div className={`${nodeTop} min-w-[200px]`}>EQUIPE TÉCNICA</div>

      <div className={`${line} h-8`} />

      {/* Gerente + Sub Gerente */}
      <div className="flex items-center gap-16 mb-8">
        <div className={`${nodeAccent} min-w-[160px]`}>GERENTE</div>
        <div className={`${nodeAccent} min-w-[160px]`}>SUB GERENTE</div>
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="space-y-3">
          {esquerda.map((item, i) => (
            <div key={i} className={`${nodeSub} w-full`}>{item}</div>
          ))}
        </div>
        <div className="space-y-3">
          {direita.map((item, i) => (
            <div key={i} className={`${nodeSub} w-full`}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────
export function EstruturaIapoam() {
  const [ativo, setAtivo] = useState("diretoria");

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle bg decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#8EBF24]/05 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#548C1C]/04 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8EBF24]/10 border border-[#8EBF24]/25 rounded-full mb-5">
            <div className="w-2 h-2 bg-[#2E590E] rounded-full" />
            <span className="text-sm font-semibold text-[#2E590E] tracking-wide">
              Organização Interna
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#010D00] mb-4 tracking-tight">
            Estrutura do IAPOAM
          </h2>
          <p className="text-[#2E590E]/65 max-w-2xl mx-auto text-base leading-relaxed">
            Conheça a organização interna do instituto — departamentos, conselhos
            e equipes que garantem a eficiência e transparência das nossas ações.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {estruturas.map((e) => (
            <button
              key={e.id}
              onClick={() => setAtivo(e.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                ativo === e.id
                  ? "bg-[#0C2605] text-white shadow-lg shadow-[#0C2605]/20 scale-105"
                  : "bg-white text-[#0C2605] border border-[#2E590E]/30 hover:border-[#548C1C]/60 hover:bg-[#F9FAF7]"
              }`}
            >
              {e.label}
            </button>
          ))}
        </div>

        {/* Fluxogram card */}
        <div className="bg-white border border-[#8EBF24]/20 rounded-3xl shadow-xl shadow-[#548C1C]/08 p-8 lg:p-12 overflow-x-auto">
          <div className="min-w-[420px]">
            {ativo === "diretoria"    && <DiretoriaExecutiva />}
            {ativo === "ceiam"        && <Ceiam />}
            {ativo === "administrativa" && <Administrativa />}
            {ativo === "tecnica"      && <EquipeTecnica />}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-8">
          {[
            { cor: "bg-[#010D00]", label: "Nível Superior" },
            { cor: "bg-[#0C2605]", label: "Diretoria / Conselho" },
            { cor: "bg-[#2E590E]", label: "Coordenação Principal" },
            { cor: "bg-[#548C1C]", label: "Funções e Membros" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-sm ${l.cor}`} />
              <span className="text-xs text-[#2E590E]/60 font-medium">{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}