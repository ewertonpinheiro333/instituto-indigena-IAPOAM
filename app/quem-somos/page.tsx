"use client";

import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

// ── Diretoria ──────────────────────────────────────────────
const diretoria = [
  {
    cargo: "Diretora Presidente",
    nome: "Kamila Katusawa Mura",
    email: "kamilamuramanaus@gmail.com",
    telefone: "(92) 99409-3222",
    destaque: true,
  },
  {
    cargo: "Secretaria Executiva",
    nome: "Maria Eleusa Leal",
    email: "secretariaexecutivaiapoam@gmail.com",
    telefone: "(92) 99227-2275",
    destaque: false,
  },
  {
    cargo: "Diretor Financeiro",
    nome: "Felipe Fernandes de Souza",
    email: "financasiapoam@gmail.com",
    telefone: "(92) 99180-3026",
    destaque: false,
  },
  {
    cargo: "Conselho Fiscal",
    nome: "Maria do Carmo de Souza",
    email: "",
    telefone: "",
    destaque: false,
  },
];

// ── Reconhecimentos ────────────────────────────────────────
const reconhecimentos = [
  {
    label: "Utilidade Pública Estadual",
    descricao: "Lei Nº 4.757 de 07 de janeiro de 2019",
  },
  {
    label: "Utilidade Pública Municipal",
    descricao: "Lei Nº 515 de 14 de março de 2022",
  },
  {
    label: "CMAS — Conselho Municipal de Assistência Social",
    descricao: "Inscrição nº 264 — Ações de Defesa e Garantia de Direitos",
  },
  {
    label: "CNEAS — Ministério do Desenvolvimento Social",
    descricao: "Inscrição junto ao MDS — Ministério do Desenvolvimento Social",
  },
];

// ── Valores ────────────────────────────────────────────────
const valores = [
  {
    titulo: "Missão",
    texto:
      "Promover a defesa intransigente dos direitos dos povos originários da Amazônia, fortalecer suas culturas e saberes ancestrais, e garantir sustentabilidade social e ambiental para as comunidades indígenas e quilombolas da região.",
  },
  {
    titulo: "Visão",
    texto:
      "Ser referência regional no campo dos direitos indígenas, contribuindo para um futuro em que os povos originários da Amazônia vivam com plena dignidade, autonomia cultural e territorial, e com suas florestas preservadas para as gerações futuras.",
  },
  {
    titulo: "Valores",
    texto:
      "Respeito à diversidade cultural, solidariedade, transparência na gestão dos recursos, comprometimento social irrestrito e amor profundo pela floresta amazônica e pelos povos que dela dependem.",
  },
];

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-[#010D00]">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════
            HERO — background image acaobg.png
        ══════════════════════════════════════════════════ */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-28">

          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/acaobg.png"
              alt="Ações do IAPOAM"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Overlay layers */}
            <div className="absolute inset-0 bg-[#010D00]/70" />
            <div className="absolute inset-0 bg-[#0C2605]/40 mix-blend-multiply" />
            {/* Vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 20%, rgba(1,13,0,0.65) 100%)",
              }}
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#010D00] to-transparent" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#8EBF24] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white/80 tracking-wide">
                Fundado em 15 de fevereiro de 2011 · Manaus/AM
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight drop-shadow-xl">
              Quem{" "}
              <span className="text-[#8EBF24]">Somos</span>
            </h1>

            <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
              Uma organização apartidária e não religiosa, nascida da convicção de que os
              povos originários da Amazônia merecem dignidade, direitos e voz.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            PLACA + APRESENTAÇÃO INSTITUCIONAL
        ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#010D00] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2E590E]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#548C1C]/08 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* Placa IAPOAM */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-lg">
                  {/* Decorative shadow frame */}
                  <div className="absolute inset-0 bg-[#8EBF24]/10 rounded-3xl translate-x-4 translate-y-4 blur-sm" />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#010D00]/60 border border-[#2E590E]/40">
                    <Image
                      src="/placaiapoam.png"
                      alt="IAPOAM — Instituto de Apoio aos Povos Originários da Amazônia"
                      width={700}
                      height={350}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* Floating credential badge */}
                  <div className="absolute -bottom-5 -right-4 bg-[#0C2605] border border-[#2E590E]/60 rounded-2xl px-4 py-3 shadow-xl">
                    <p className="text-[10px] font-bold text-[#8EBF24]/60 uppercase tracking-widest mb-0.5">
                      CNPJ
                    </p>
                    <p className="text-sm font-bold text-white">13.955.659/0001-43</p>
                  </div>
                </div>
              </div>

              {/* Texto institucional */}
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0C2605]/80 border border-[#2E590E]/50 rounded-full">
                  <div className="w-2 h-2 bg-[#8EBF24] rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-[#8EBF24] tracking-wide">
                    O Instituto
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                  Instituto de Apoio aos Povos Originários da Amazônia
                </h2>

                <p className="text-base text-white/70 leading-relaxed">
  O <span className="font-bold text-white">Instituto de Apoio aos Povos Originários da Amazônia</span>,
  também designado pela sigla <span className="font-bold text-white">IAPOAM</span>, é uma associação
  civil, pessoa jurídica de direito privado, sem fim econômico, com autonomia administrativa e
  financeira. Constituído em{" "}
  <span className="text-[#8EBF24] font-semibold">15 de fevereiro de 2011</span>, tem sede e foro
  jurídico na cidade de <span className="font-semibold text-white">Manaus, Estado do Amazonas</span>.
</p>

<p className="text-base text-white/70 leading-relaxed">
  Seus atos constitutivos foram registrados no Livro A, número A-514, sob o nº{" "}
  <span className="font-semibold text-white">28.754</span>, em{" "}
  <span className="text-[#8EBF24] font-semibold">09 de maio de 2011</span>, no Cartório de Registro
  de Títulos e Documentos e Registro Civil das Pessoas Jurídicas da Comarca de Manaus, Estado do
  Amazonas. Cadastrado no{" "}
  <span className="font-semibold text-white">CNPJ sob o nº 13.955.659/0001-43</span>, regido pelo
  presente Estatuto.
</p>

<p className="text-base text-white/70 leading-relaxed">
  Com código de atividade principal{" "}
  <span className="font-semibold text-white">9430-8-00</span> — Atividade de Associações de Defesa
  Social — o IAPOAM é reconhecido pela{" "}
  <span className="font-semibold text-white">Lei Nº 4.757 de 07 de janeiro de 2019</span> como
  Utilidade Pública Estadual, e pela{" "}
  <span className="font-semibold text-white">Lei Nº 515 de 14 de março de 2022</span> como
  Utilidade Pública Municipal.
</p>

<p className="text-base text-white/70 leading-relaxed">
  Inscrito no <span className="font-semibold text-white">Conselho Municipal de Assistência Social
  de Manaus – CMAS</span> sob o nº <span className="font-semibold text-white">264</span> para
  Ações de Defesa e Garantia de Direitos, e registrado no{" "}
  <span className="font-semibold text-white">CNEAS – Ministério do Desenvolvimento Social (MDS)</span>.
</p>

                {/* Reconhecimentos rápidos */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {["Utilidade Pública Estadual", "Utilidade Pública Municipal", "CMAS nº 264", "CNEAS/MDS"].map(
                    (tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-2 px-3 py-1.5 bg-[#2E590E]/20 border border-[#548C1C]/30 rounded-full text-xs font-semibold text-[#8EBF24]/80"
                      >
                        <svg className="w-3 h-3 text-[#8EBF24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {tag}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            MISSÃO · VISÃO · VALORES
        ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#0C2605] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/25 to-transparent" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
                Nossa Identidade
              </h2>
              <p className="text-white/55 max-w-xl mx-auto text-base">
                Os pilares que guiam cada ação, decisão e compromisso do IAPOAM
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {valores.map((v, i) => (
                <div
                  key={i}
                  className="group relative bg-[#010D00]/50 border border-[#2E590E]/40 rounded-3xl p-8 hover:border-[#548C1C]/60 hover:bg-[#010D00]/70 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8EBF24] to-[#548C1C] rounded-t-3xl opacity-50 group-hover:opacity-100 transition-opacity" />

                  <span className="text-5xl font-black text-[#8EBF24]/20 absolute top-4 right-5 select-none leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">{v.titulo}</h3>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#8EBF24] to-[#548C1C] rounded-full mb-4 group-hover:w-14 transition-all duration-300" />
                  <p className="text-sm text-white/65 leading-relaxed relative z-10">{v.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            HISTÓRICO & CONTEXTO
        ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#010D00] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2E590E]/06 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0C2605]/80 border border-[#2E590E]/50 rounded-full mb-5">
                <div className="w-2 h-2 bg-[#8EBF24] rounded-full" />
                <span className="text-sm font-semibold text-[#8EBF24] tracking-wide">
                  Nossa Trajetória
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Uma Década de Luta
              </h2>
            </div>

            <div className="space-y-8">

              {/* Timeline block */}
              {[
                {
                  ano: "2011",
                  titulo: "Fundação do IAPOAM",
                  texto:
                    "Em 15 de fevereiro de 2011, o Instituto é fundado em Manaus com a missão de apoiar os povos originários da Amazônia. Registrado em cartório em maio do mesmo ano, o IAPOAM nasce do reconhecimento de que as comunidades indígenas precisavam de uma estrutura organizacional capaz de articular suas demandas junto ao poder público.",
                },
                {
                  ano: "2019",
                  titulo: "Reconhecimento Estadual",
                  texto:
                    "Pela Lei Nº 4.757 de 07 de janeiro de 2019, o IAPOAM é reconhecido como Utilidade Pública Estadual pelo Governo do Estado do Amazonas — uma conquista que legitima oficialmente o trabalho do instituto e amplia sua capacidade de captação de recursos e parcerias institucionais.",
                },
                {
                  ano: "2022",
                  titulo: "Utilidade Pública Municipal",
                  texto:
                    "Pela Lei Nº 515 de 14 de março de 2022, o Instituto recebe o reconhecimento de Utilidade Pública Municipal pela Prefeitura de Manaus, consolidando sua presença e importância no âmbito local. Neste mesmo período, o instituto firma inscrição no CMAS — Conselho Municipal de Assistência Social — sob o número 264.",
                },
                {
                  ano: "Hoje",
                  titulo: "Referência Regional",
                  texto:
                    "Com mais de uma década de atuação, o IAPOAM se consolida como referência no campo dos direitos indígenas no Amazonas. Presente em 253 comunidades, apoiando mais de 35 etnias em 6 frentes de trabalho, o instituto segue expandindo seus programas sociais, ambientais, culturais e de cidadania junto aos povos originários da Amazônia.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  {/* Timeline left */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-14 h-14 bg-[#0C2605] border-2 border-[#2E590E]/60 group-hover:border-[#8EBF24]/60 rounded-2xl flex items-center justify-center transition-all duration-300">
                      <span className="text-xs font-black text-[#8EBF24] leading-tight text-center">
                        {item.ano}
                      </span>
                    </div>
                    {i < 3 && (
                      <div className="w-px flex-1 mt-2 bg-gradient-to-b from-[#2E590E]/50 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#8EBF24] transition-colors duration-300">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            RECONHECIMENTOS
        ══════════════════════════════════════════════════ */}
        <section className="py-16 bg-[#0C2605] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/25 to-transparent" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Reconhecimentos Oficiais
              </h2>
              <p className="text-white/50 mt-2 text-sm">
                Registros que comprovam a transparência e a seriedade do nosso trabalho
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {reconhecimentos.map((r, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 bg-[#010D00]/50 border border-[#2E590E]/35 rounded-2xl hover:border-[#548C1C]/50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#8EBF24]/12 border border-[#8EBF24]/25 rounded-xl flex items-center justify-center group-hover:bg-[#8EBF24]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#8EBF24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1 group-hover:text-[#8EBF24] transition-colors">
                      {r.label}
                    </h4>
                    <p className="text-xs text-white/55 leading-relaxed">{r.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            DIRETORIA EXECUTIVA
        ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#010D00] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#2E590E]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#548C1C]/08 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0C2605]/80 border border-[#2E590E]/50 rounded-full mb-5">
                <div className="w-2 h-2 bg-[#8EBF24] rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-[#8EBF24] tracking-wide">Gestão</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">
                Diretoria Executiva
              </h2>
              <p className="text-white/55 max-w-xl mx-auto text-base">
                Profissionais comprometidos com a transparência e a excelência na gestão do IAPOAM
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {diretoria.map((d, i) => (
                <div
                  key={i}
                  className={`relative group rounded-3xl p-7 border transition-all duration-300 overflow-hidden ${
                    d.destaque
                      ? "bg-gradient-to-br from-[#0C2605] to-[#2E590E]/80 border-[#548C1C]/50 hover:border-[#8EBF24]/50"
                      : "bg-[#0C2605]/40 border-[#2E590E]/35 hover:border-[#548C1C]/50 hover:bg-[#0C2605]/60"
                  } hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#010D00]/60`}
                >
                  {/* Top accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${
                      d.destaque ? "from-[#8EBF24] to-[#548C1C]" : "from-[#548C1C]/60 to-[#2E590E]/60"
                    } opacity-70 group-hover:opacity-100 transition-opacity`}
                  />

                  <div className="flex items-start gap-4">
                    {/* Avatar placeholder */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg ${
                        d.destaque
                          ? "bg-[#8EBF24]/20 text-[#8EBF24]"
                          : "bg-[#2E590E]/30 text-[#8EBF24]/70"
                      }`}
                    >
                      {d.nome.split(" ")[0][0]}
                      {d.nome.split(" ")[1]?.[0]}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#8EBF24]/70 uppercase tracking-widest mb-0.5">
                        {d.cargo}
                      </p>
                      <h3
                        className={`font-bold leading-tight mb-3 group-hover:text-[#8EBF24] transition-colors ${
                          d.destaque ? "text-white text-base" : "text-white/90 text-sm"
                        }`}
                      >
                        {d.nome}
                      </h3>

                      {d.email && (
                        <a
                          href={`mailto:${d.email}`}
                          className="flex items-center gap-2 text-xs text-white/50 hover:text-[#8EBF24] transition-colors mb-1.5 break-all"
                        >
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {d.email}
                        </a>
                      )}

                      {d.telefone && (
                        <a
                          href={`tel:${d.telefone.replace(/\D/g, "")}`}
                          className="flex items-center gap-2 text-xs text-white/50 hover:text-[#8EBF24] transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {d.telefone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Matriz / Coordenação */}
            <div className="mt-8 p-6 bg-[#0C2605]/40 border border-[#2E590E]/30 rounded-2xl">
              <h4 className="text-sm font-bold text-[#8EBF24]/70 uppercase tracking-widest mb-4">
                Matriz — Aldeia Uka Anamã · Comunidade Betel
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Coordenadora Geral</p>
                  <p className="text-sm font-semibold text-white/80">Tuxaua Ivete Mura</p>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Coordenador Mirim Oficial</p>
                  <p className="text-sm font-semibold text-white/80">Kirimbawa Mura</p>
                  <p className="text-xs text-white/40 mt-0.5">Projeto Guardiões da Floresta IAPOAM Oficial</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CTA FINAL
        ══════════════════════════════════════════════════ */}
        <section className="py-16 bg-gradient-to-br from-[#0C2605] to-[#2E590E] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8EBF24]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#010D00]/30 rounded-full blur-2xl" />
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Faça Parte Dessa Causa
            </h2>
            <p className="text-white/75 mb-8 text-base leading-relaxed">
              O IAPOAM depende do apoio de pessoas que acreditam que os povos originários
              merecem dignidade, direitos e futuro. Junte-se a nós.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/doacoes"
                className="px-8 py-4 bg-white text-[#2E590E] font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Apoie o Instituto
              </Link>
              <Link
                href="/#equipe"
                className="px-8 py-4 bg-white/15 text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/25 transition-all duration-300"
              >
                Conheça a Equipe
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}