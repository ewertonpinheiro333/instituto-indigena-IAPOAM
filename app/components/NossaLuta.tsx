"use client";

import Image from "next/image";
import Link from "next/link";

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

export function NossaLuta() {
  return (
    <section className="py-20 bg-[#010D00] relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#548C1C] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#2E590E] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0C2605]/80 border border-[#2E590E]/50 rounded-full mb-5">
            <div className="w-2 h-2 bg-[#8EBF24] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#8EBF24] tracking-wide">
              Nossa Luta
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
            Visibilidade e{" "}
            <span className="text-[#8EBF24]">Respeito</span>
          </h2>

          <p className="text-white/55 max-w-2xl mx-auto text-base leading-relaxed">
            A realidade dos povos originários que chegam às cidades em busca de dignidade —
            e a luta do IAPOAM para garantir que seus direitos sejam respeitados.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════
            MANIFESTO BLOCK — texto + imagem dados.png
        ══════════════════════════════════════════════════ */}
        <div className="relative bg-gradient-to-br from-[#0C2605] to-[#1a3a08] border border-[#548C1C]/35 rounded-3xl overflow-hidden mb-16">

          {/* Decorative top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8EBF24] to-[#548C1C]" />
          {/* Glow decorations */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8EBF24]/06 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#2E590E]/20 rounded-full blur-3xl pointer-events-none" />
          {/* Large quote mark decoration */}
          <div className="absolute -top-2 left-7 text-[140px] leading-none text-white/03 font-serif select-none pointer-events-none">
            "
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-0">

            {/* Left: manifesto text */}
            <div className="p-8 lg:p-10 flex flex-col justify-between">
              <div className="space-y-5">
                <p className="text-white/85 text-base leading-relaxed">
                  O <span className="font-bold text-white">IAPOAM</span> luta pela inclusão,
                  visibilidade e respeito aos povos indígenas que buscam as grandes cidades
                  em busca de formação — fundamental, média, superior — ou de tratamento
                  médico. Apenas <span className="text-[#8EBF24] font-bold">10%</span> retornam às suas bases. Os demais
                  permanecem na capital, sem moradia digna, sem apoio do poder público.
                </p>

                <p className="text-white/70 text-base leading-relaxed">
                  100% das comunidades e aldeias urbanas foram criadas através de
                  assentamentos e invasões. Prefeitura e Governo Estadual não buscam
                  inclusão nem moradia digna para os povos indígenas.
                </p>

                {/* Quote highlight */}
                <div className="border-l-4 border-[#8EBF24]/60 pl-4 py-1">
                  <p className="text-white/80 text-sm italic leading-relaxed">
                    "Quem não tem casa não tem saúde, não tem educação.
                    Quem não tem casa não tem direito de ser feliz."
                  </p>
                </div>

                <p className="text-[#8EBF24] font-bold text-sm tracking-wide">
                  O IAPOAM irá lutar sempre pela qualidade de vida melhor
                  para a nação indígena do Amazonas.
                </p>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3 mt-8">
                {[
                  { valor: "71.713", legenda: "Indígenas em Manaus" },
                  { valor: "3,48%", legenda: "Da população total" },
                  { valor: "100%", legenda: "Aldeias por assentamento" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="bg-[#010D00]/50 border border-[#2E590E]/40 rounded-xl p-3 text-center"
                  >
                    <div className="text-lg font-black text-[#8EBF24] leading-tight">
                      {s.valor}
                    </div>
                    <div className="text-[10px] text-white/45 mt-0.5 leading-tight font-medium">
                      {s.legenda}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: dados.png image */}
            <div className="relative lg:border-l border-[#548C1C]/20">
              {/* On mobile, add top border */}
              <div className="lg:hidden absolute top-0 left-8 right-8 h-px bg-[#548C1C]/25" />

              <div className="p-6 lg:p-8 h-full flex flex-col">
                {/* Label */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-[#2E590E]/40" />
                  <span className="text-[10px] font-bold text-[#8EBF24]/60 uppercase tracking-[0.18em]">
                    Dados — IBGE
                  </span>
                  <div className="h-px flex-1 bg-[#2E590E]/40" />
                </div>

                {/* Image card */}
                <div className="relative flex-1 min-h-[280px] rounded-2xl overflow-hidden border border-[#548C1C]/30 shadow-xl shadow-[#010D00]/40 bg-white">
                  <Image
                    src="/dados.png"
                    alt="Mapa — População indígena por cidade — Fonte: IBGE / G1"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Source caption */}
                <p className="text-[10px] text-white/30 text-right mt-2.5 font-medium">
                  Fonte: IBGE / G1 — Manaus-AM · 71.713 indígenas · 3,48%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            O QUE FAZEMOS
        ══════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left: heading + intro + CTA */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#010D00]/80 border border-[#2E590E]/50 rounded-full mb-5 w-fit">
              <span className="text-sm font-medium text-[#8EBF24]">Serviços</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight tracking-tight">
              O Que Fazemos
            </h3>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Cinco frentes de atuação direta para garantir que nenhum indígena
              que chega à cidade fique desamparado — sem orientação, sem direitos
              e sem voz.
            </p>
            <Link
              href="/doacoes"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-[#2E590E] to-[#548C1C] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#548C1C]/25 hover:scale-105 active:scale-100 transition-all duration-300 w-fit text-sm"
            >
              Apoie Nossa Causa
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: services list */}
          <div className="bg-[#010D00]/60 border border-[#2E590E]/40 rounded-3xl p-7 space-y-3">
            {servicos.map((s) => (
              <div
                key={s.numero}
                className="group flex items-start gap-4 p-4 bg-[#0C2605]/60 border border-[#2E590E]/30 rounded-xl hover:border-[#548C1C]/50 hover:bg-[#0C2605]/80 transition-all duration-300"
              >
                {/* Number badge */}
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#2E590E] to-[#548C1C] rounded-lg flex items-center justify-center">
                  <span className="text-[10px] font-black text-white">{s.numero}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white mb-1.5 leading-snug group-hover:text-[#8EBF24] transition-colors duration-300">
                    {s.titulo}
                  </h4>
                  <p className="text-xs text-white/55 leading-relaxed">
                    {s.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots decoration */}
        <div className="flex justify-center gap-2 mt-12">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`rounded-full ${
                i === 1 ? "w-8 h-2.5 bg-[#8EBF24]" : "w-2.5 h-2.5 bg-[#2E590E]/60"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}