"use client";

import Link from "next/link";

const donationValues = [
  {
    amount: "R$ 10",
    impact: "Contribui com materiais escolares para crianças indígenas",
    highlight: false,
  },
  {
    amount: "R$ 20",
    impact: "Apoia a distribuição de alimentos para famílias em situação de vulnerabilidade",
    highlight: false,
  },
  {
    amount: "R$ 30",
    impact: "Colabora com kits de higiene e cuidados básicos para comunidades",
    highlight: true,
  },
  {
    amount: "R$ 50",
    impact: "Financia atividades culturais e de preservação da identidade indígena",
    highlight: false,
  },
];

const trustItems = [
  {
    title: "Organização registrada",
    description: "CNPJ 13.955.659/0001-43, com situação cadastral regular e ativa.",
  },
  {
    title: "Utilidade Pública",
    description: "Reconhecida como Utilidade Pública Municipal e Estadual pelo governo do Amazonas.",
  },
  {
    title: "Transparência total",
    description: "Relatórios financeiros e prestação de contas disponíveis publicamente para consulta.",
  },
  {
    title: "Doação segura",
    description: "Todos os recursos recebidos são integralmente destinados aos projetos e comunidades atendidas.",
  },
];

export default function DonationCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#8EBF24]/06 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#548C1C]/05 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8EBF24]/12 border border-[#8EBF24]/30 rounded-full mb-5">
            <div className="w-2 h-2 bg-[#548C1C] rounded-full" />
            <span className="text-sm font-semibold text-[#2E590E] tracking-wide">
              Faça a Diferença
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#010D00] mb-5 leading-tight tracking-tight">
            Apoie Nossos Projetos
          </h2>

          <p className="text-lg text-[#2E590E]/75 max-w-2xl mx-auto leading-relaxed">
            Cada contribuição, por menor que seja, chega diretamente às comunidades
            indígenas da Amazônia e fortalece a defesa dos direitos dos povos originários.
          </p>
        </div>

        {/* ── Donation value cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {donationValues.map((card, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                card.highlight
                  ? "bg-[#0C2605] border-[#0C2605] shadow-lg shadow-[#0C2605]/15"
                  : "bg-white border-[#8EBF24]/25 hover:border-[#548C1C]/45 hover:shadow-[#548C1C]/08"
              }`}
            >
              {/* Most popular label */}
              {card.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#8EBF24] rounded-full">
                  <span className="text-[10px] font-bold text-[#010D00] uppercase tracking-wider whitespace-nowrap">
                    Mais escolhido
                  </span>
                </div>
              )}

              <div className={`text-3xl font-black mb-3 ${card.highlight ? "text-[#8EBF24]" : "text-[#0C2605]"}`}>
                {card.amount}
              </div>

              <div className={`w-6 h-0.5 rounded-full mb-3 ${card.highlight ? "bg-[#8EBF24]/50" : "bg-[#8EBF24]/40"}`} />

              <p className={`text-sm leading-relaxed ${card.highlight ? "text-white/80" : "text-[#2E590E]/70"}`}>
                {card.impact}
              </p>
            </div>
          ))}
        </div>

        {/* Note about larger donations */}
        <div className="flex items-start gap-3 px-5 py-4 bg-[#8EBF24]/08 border border-[#8EBF24]/20 rounded-xl mb-10">
          <div className="w-1 h-full min-h-[20px] bg-[#548C1C] rounded-full flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#2E590E]/80 leading-relaxed">
            <span className="font-bold text-[#0C2605]">Deseja contribuir com valores acima de R$ 50?</span>{" "}
            Para doações maiores, convidamos você a participar de um de nossos programas sociais.
            Entre em contato conosco e nossa equipe terá prazer em orientá-lo.{" "}
            <Link href="/contato" className="font-bold text-[#2E590E] underline underline-offset-2 hover:text-[#0C2605] transition-colors">
              Fale conosco
            </Link>
            .
          </p>
        </div>

        {/* ── Main CTA button ── */}
        <div className="text-center mb-16">
          <Link
            href="/doacoes"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0C2605] text-white font-bold text-lg rounded-xl shadow-xl shadow-[#0C2605]/20 hover:bg-[#2E590E] hover:shadow-2xl hover:shadow-[#2E590E]/25 hover:scale-105 active:scale-100 transition-all duration-300"
          >
            Fazer uma Doação
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-[#548C1C]/60 text-sm mt-3 font-medium">
            100% do valor doado é destinado diretamente aos nossos projetos
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-[#8EBF24]/20" />
          <span className="text-xs font-bold text-[#548C1C]/50 uppercase tracking-widest">
            Por que confiar no IAPOAM
          </span>
          <div className="flex-1 h-px bg-[#8EBF24]/20" />
        </div>

        {/* ── Trust grid ── */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 bg-white border border-[#8EBF24]/20 rounded-2xl shadow-sm hover:shadow-md hover:border-[#548C1C]/35 transition-all duration-300"
            >
              {/* Check circle */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8EBF24]/15 flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-[#2E590E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#010D00] text-sm mb-1">{item.title}</h4>
                <p className="text-sm text-[#2E590E]/65 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom credentials bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-[#8EBF24]/15">
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold text-[#010D00]/40 uppercase tracking-wider mb-0.5">
              CNPJ
            </p>
            <p className="text-sm font-semibold text-[#0C2605]">13.955.659/0001-43</p>
          </div>

          <div className="hidden sm:block w-px h-8 bg-[#8EBF24]/20" />

          <div className="text-center">
            <p className="text-xs font-bold text-[#010D00]/40 uppercase tracking-wider mb-0.5">
              Fundação
            </p>
            <p className="text-sm font-semibold text-[#0C2605]">15 de fevereiro de 2011</p>
          </div>

          <div className="hidden sm:block w-px h-8 bg-[#8EBF24]/20" />

          <div className="text-center">
            <p className="text-xs font-bold text-[#010D00]/40 uppercase tracking-wider mb-0.5">
              Reconhecimento
            </p>
            <p className="text-sm font-semibold text-[#0C2605]">Utilidade Pública Municipal e Estadual</p>
          </div>
        </div>

      </div>
    </section>
  );
}