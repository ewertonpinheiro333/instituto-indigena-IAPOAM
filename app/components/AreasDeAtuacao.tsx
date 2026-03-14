"use client";

import Link from "next/link";

const iconDefault = (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

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
    accent: "from-[#8EBF24] to-[#548C1C]",
    iconBg: "bg-[#8EBF24]/15",
    iconColor: "text-[#8EBF24]",
    borderAccent: "border-[#8EBF24]/30",
    icon: iconDefault,
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
    accent: "from-[#548C1C] to-[#2E590E]",
    iconBg: "bg-[#548C1C]/15",
    iconColor: "text-[#8EBF24]",
    borderAccent: "border-[#548C1C]/30",
    icon: iconDefault,
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
    accent: "from-[#2E590E] to-[#0C2605]",
    iconBg: "bg-[#2E590E]/15",
    iconColor: "text-[#8EBF24]",
    borderAccent: "border-[#2E590E]/40",
    icon: iconDefault,
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
    accent: "from-[#8EBF24] to-[#548C1C]",
    iconBg: "bg-[#8EBF24]/15",
    iconColor: "text-[#8EBF24]",
    borderAccent: "border-[#8EBF24]/30",
    icon: iconDefault,
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
    accent: "from-[#548C1C] to-[#2E590E]",
    iconBg: "bg-[#548C1C]/15",
    iconColor: "text-[#8EBF24]",
    borderAccent: "border-[#548C1C]/30",
    icon: iconDefault,
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
    accent: "from-[#2E590E] to-[#0C2605]",
    iconBg: "bg-[#2E590E]/15",
    iconColor: "text-[#8EBF24]",
    borderAccent: "border-[#2E590E]/40",
    icon: iconDefault,
  },
];

const globalStats = [
  { number: "6",    label: "Áreas de Atuação" },
  { number: "35+",  label: "Etnias Atendidas" },
  { number: "253",  label: "Comunidades" },
  { number: "16+",  label: "Anos de Impacto" },
];

export default function AreasDeAtuacao() {
  return (
    <section id="areas" className="py-20 bg-[#010D00] relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2E590E]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#548C1C]/08 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0C2605]/80 border border-[#2E590E]/50 rounded-full mb-5">
            <div className="w-2 h-2 bg-[#8EBF24] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#8EBF24] tracking-wide">
              Nossas Frentes de Trabalho
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight tracking-tight">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Seis áreas fundamentais de trabalho para garantir o bem-estar,
            os direitos e a dignidade dos povos originários da Amazônia
          </p>
        </div>

        {/* ── Global stats bar ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {globalStats.map((s, i) => (
            <div
              key={i}
              className="text-center py-6 px-4 bg-[#0C2605]/50 border border-[#2E590E]/30 rounded-2xl hover:border-[#548C1C]/50 hover:bg-[#0C2605]/70 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8EBF24] to-[#548C1C] mb-1">
                {s.number}
              </div>
              <div className="text-sm font-semibold text-white/55">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Areas — full scroll layout ── */}
        <div className="space-y-8">
          {areas.map((area, index) => (
            <div
              key={area.id}
              className={`group relative bg-[#0C2605]/35 border border-[#2E590E]/30 rounded-3xl overflow-hidden hover:border-[#548C1C]/50 hover:bg-[#0C2605]/55 transition-all duration-300 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              {/* Top gradient accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${area.accent}`} />

              <div className="p-7 lg:p-9">
                <div className="grid lg:grid-cols-2 gap-8 items-start">

                  {/* ── Left: number, icon, title, description ── */}
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      {/* Number badge */}
                      <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#8EBF24]/30 to-[#548C1C]/20 leading-none select-none">
                        {area.number}
                      </span>
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-13 h-13 p-3 ${area.iconBg} ${area.iconColor} rounded-2xl flex-shrink-0`}>
                        {area.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#8EBF24] transition-colors duration-300">
                      {area.title}
                    </h3>

                    <p className="text-base text-white/65 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* ── Right: initiatives list ── */}
                  <div>
                    <p className="text-xs font-bold text-[#8EBF24]/60 uppercase tracking-[0.15em] mb-4">
                      O que fazemos
                    </p>
                    <ul className="space-y-3">
                      {area.initiatives.map((item, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-3 p-4 bg-[#010D00]/40 border ${area.borderAccent} rounded-xl hover:bg-[#010D00]/60 transition-all duration-200`}
                        >
                          {/* Bullet */}
                          <div className={`mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br ${area.accent}`}>
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-white/75 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

     

      </div>
    </section>
  );
}