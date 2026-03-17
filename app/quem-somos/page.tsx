"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

// ─── Paleta — design system v3 ────────────────────────────────────────────────
// Seções forest/dark:  #1B5E20 (substitui #016b14)
// Seções dark profundo: #0f2912 / #163d1c
// Seções escuro alt:   #1a3d20 (substitui rgba(0,42,8,...))
// Verde vivo:          #4FDE1B  (substitui #d0ff00 / #b3f801 como acento primário)
// Verde claro:         #A8E6A1  (substitui #b3f801 em contextos secundários)
// Amarelo-ouro:        #F4C430  (números, badges flutuantes, destaques críticos)
// Botão primário:      #C1440E → hover #F4C430
// Texto mineral:       #f0ffe8 / rgba(240,255,240,…)
// Superfícies card:    rgba(8,50,14,…) / rgba(27,94,32,…)
// ─────────────────────────────────────────────────────────────────────────────

// ─── Data ─────────────────────────────────────────────────────────────────────
const diretoria = [
  { cargo: "Diretora Presidente",    nome: "Kamila Katusawa Mura",     email: "kamilamuramanaus@gmail.com",          telefone: "(92) 99409-3222", destaque: true  },
  { cargo: "Secretaria Executiva",   nome: "Maria Eleusa Leal",        email: "secretariaexecutivaiapoam@gmail.com", telefone: "(92) 99227-2275", destaque: false },
  { cargo: "Coordenador de Cultura", nome: "Felipe Fernandes de Souza",email: "financasiapoam@gmail.com",            telefone: "(92) 99180-3026", destaque: false },
  { cargo: "Conselho Fiscal",        nome: "Maria do Carmo de Souza",  email: "",                                    telefone: "",               destaque: false },
];

const reconhecimentos = [
  { label: "Utilidade Pública Estadual",                      descricao: "Lei Nº 4.757 de 07 de janeiro de 2019" },
  { label: "Utilidade Pública Municipal",                     descricao: "Lei Nº 515 de 14 de março de 2022" },
  { label: "CMAS — Conselho Municipal de Assistência Social", descricao: "Inscrição nº 264 — Ações de Defesa e Garantia de Direitos" },
  { label: "CNEAS — Ministério do Desenvolvimento Social",    descricao: "Inscrição junto ao MDS — Ministério do Desenvolvimento Social" },
];

const valores = [
  { titulo: "Missão",  numero: "01", texto: "Promover a defesa intransigente dos direitos dos povos originários da Amazônia, fortalecer suas culturas e saberes ancestrais, e garantir sustentabilidade social e ambiental para as comunidades indígenas e quilombolas da região." },
  { titulo: "Visão",   numero: "02", texto: "Ser referência regional no campo dos direitos indígenas, contribuindo para um futuro em que os povos originários da Amazônia vivam com plena dignidade, autonomia cultural e territorial, e com suas florestas preservadas para as gerações futuras." },
  { titulo: "Valores", numero: "03", texto: "Respeito à diversidade cultural, solidariedade, transparência na gestão dos recursos, comprometimento social irrestrito e amor profundo pela floresta amazônica e pelos povos que dela dependem." },
];

const timeline = [
  { ano: "2011", titulo: "Fundação do IAPOAM",         texto: "Em 15 de fevereiro de 2011, o Instituto é fundado em Manaus com a missão de apoiar os povos originários da Amazônia. Registrado em cartório em maio do mesmo ano, o IAPOAM nasce do reconhecimento de que as comunidades indígenas precisavam de uma estrutura organizacional capaz de articular suas demandas junto ao poder público." },
  { ano: "2019", titulo: "Reconhecimento Estadual",     texto: "Pela Lei Nº 4.757 de 07 de janeiro de 2019, o IAPOAM é reconhecido como Utilidade Pública Estadual pelo Governo do Estado do Amazonas — uma conquista que legitima oficialmente o trabalho do instituto e amplia sua capacidade de captação de recursos e parcerias institucionais." },
  { ano: "2022", titulo: "Utilidade Pública Municipal", texto: "Pela Lei Nº 515 de 14 de março de 2022, o Instituto recebe o reconhecimento de Utilidade Pública Municipal pela Prefeitura de Manaus. Neste mesmo período, o instituto firma inscrição no CMAS — Conselho Municipal de Assistência Social — sob o número 264." },
  { ano: "Hoje", titulo: "Referência Regional",         texto: "Com mais de uma década de atuação, o IAPOAM se consolida como referência no campo dos direitos indígenas no Amazonas. Presente em 253 comunidades, apoiando mais de 35 etnias em 6 frentes de trabalho, o instituto segue expandindo seus programas sociais, ambientais, culturais e de cidadania." },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

// ─── AtmosferaVerde — layers de profundidade (v3) ─────────────────────────────
const AtmosferaVerde = ({ dots = "dots-qs" }: { dots?: string }) => (
  <>
    {/* Gradiente direcional */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: "linear-gradient(175deg, rgba(10,30,14,0.60) 0%, transparent 40%, rgba(8,24,11,0.45) 100%)",
    }} />
    {/* Luz de dossel — verde vivo no centro-topo */}
    <div className="absolute pointer-events-none" style={{
      top: "-80px", left: "50%", transform: "translateX(-50%)",
      width: "900px", height: "600px",
      background: "radial-gradient(ellipse 70% 55% at 50% 20%, rgba(79,222,27,0.10) 0%, transparent 65%)",
      borderRadius: "50%",
    }} />
    {/* Âncora escura na base */}
    <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none" style={{
      background: "linear-gradient(to top, rgba(8,22,10,0.65) 0%, transparent 100%)",
    }} />
    {/* Dot-pattern */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.030 }}>
      <defs>
        <pattern id={dots} x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill="#f0ffe8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${dots})`} />
    </svg>
    {/* Linha de entrada — verde vivo */}
    <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{
      background: "linear-gradient(to right, transparent, rgba(79,222,27,0.20) 30%, rgba(79,222,27,0.42) 50%, rgba(79,222,27,0.20) 70%, transparent)",
    }} />
  </>
);

// ─── FaixaGrafismo — reutilizável ─────────────────────────────────────────────
function FaixaGrafismo({ opacity = 0.65, fadeColor = "#1B5E20", fadeWidth = 100 }: {
  opacity?: number; fadeColor?: string; fadeWidth?: number;
}) {
  return (
    <div className="relative w-full overflow-hidden pointer-events-none" style={{ height: "44px" }} aria-hidden="true">
      <div style={{ width: "100%", height: "100%", opacity, position: "relative" }}>
        <Image src="/faixa_grafismo.png" alt="" fill className="object-cover object-center" sizes="100vw" />
      </div>
      <div className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: "16px", background: `linear-gradient(to bottom, ${fadeColor} 0%, transparent 100%)`, zIndex: 2 }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: "16px", background: `linear-gradient(to top, ${fadeColor} 0%, transparent 100%)`, zIndex: 2 }} />
      <div className="absolute left-0 top-0 bottom-0 pointer-events-none"
        style={{ width: `${fadeWidth}px`, background: `linear-gradient(to right, ${fadeColor} 0%, transparent 100%)`, zIndex: 2 }} />
      <div className="absolute right-0 top-0 bottom-0 pointer-events-none"
        style={{ width: `${fadeWidth}px`, background: `linear-gradient(to left, ${fadeColor} 0%, transparent 100%)`, zIndex: 2 }} />
    </div>
  );
}

// Linha decorativa — verde vivo (v3)
function LinhaVerde({ opacity = 0.55 }: { opacity?: number }) {
  return (
    <div style={{
      height: "2px",
      background: "linear-gradient(90deg, transparent 0%, #1B5E20 10%, #4FDE1B 35%, #A8E6A1 50%, #4FDE1B 65%, #1B5E20 90%, transparent 100%)",
      opacity,
    }} />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function QuemSomos() {
  return (
    <div className="min-h-screen" style={{ background: "#1B5E20" }}>
      <Header />
      <main>

        {/* ══════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28">
          <div className="absolute inset-0 z-0">
            <Image src="/acaobg.png" alt="Ações do IAPOAM" fill className="object-cover object-center" priority />
            <div className="absolute inset-0" style={{ background: "rgba(10,30,14,0.55)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(10,35,14,0.60) 0%, rgba(27,94,32,0.38) 50%, rgba(8,26,11,0.58) 100%)" }} />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 50% at 50% 28%, rgba(79,222,27,0.10) 0%, transparent 65%)" }} />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 30%, rgba(5,18,8,0.55) 100%)" }} />
            <div className="absolute top-0 left-0 right-0 h-44" style={{ background: "linear-gradient(to bottom, rgba(10,30,14,0.78) 0%, transparent 100%)" }} />
            {/* Fade para o #1B5E20 da seção seguinte */}
            <div className="absolute bottom-0 left-0 right-0 h-52" style={{ background: "linear-gradient(to top, #1B5E20 0%, transparent 100%)" }} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Pílula */}
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full mb-6 sm:mb-7"
                style={{ background: "rgba(8,24,11,0.50)", border: "1px solid rgba(79,222,27,0.30)", backdropFilter: "blur(10px)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#4FDE1B", boxShadow: "0 0 7px rgba(79,222,27,0.75)" }} />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em]"
                  style={{ color: "rgba(168,230,161,0.90)" }}>
                  Fundado em 15 de fevereiro de 2011 · Manaus/AM
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-black leading-[1.04] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.5rem, 9vw, 6rem)", color: "#ffffff", textShadow: "0 2px 28px rgba(5,18,8,0.65)" }}>
              Quem{" "}
              <span style={{
                backgroundImage: "linear-gradient(88deg, #4FDE1B 0%, #A8E6A1 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                filter: "drop-shadow(0 0 18px rgba(79,222,27,0.32))",
              }}>
                Somos
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium px-2"
              style={{ color: "rgba(240,255,240,0.80)", textShadow: "0 1px 12px rgba(5,18,8,0.50)" }}>
              Uma organização apartidária e não religiosa, nascida da convicção de que os
              povos originários da Amazônia merecem dignidade, direitos e voz.
            </motion.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FAIXA GRAFISMO — separador após Hero
        ══════════════════════════════════════════════════════════════ */}
        <div className="relative z-10" aria-hidden="true">
          <LinhaVerde opacity={0.48} />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}>
            <FaixaGrafismo opacity={0.65} fadeColor="#1B5E20" fadeWidth={110} />
          </motion.div>
          <LinhaVerde opacity={0.32} />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            ILUSTRAÇÃO DA PRESIDENTE + APRESENTAÇÃO INSTITUCIONAL
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" style={{ background: "#1B5E20" }}>
          <AtmosferaVerde dots="dots-placa" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

              {/* ── Coluna esquerda: foto ── */}
              <FadeIn className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
                  <div className="relative overflow-hidden" style={{
                    borderRadius: "24px",
                    boxShadow: "0 16px 60px rgba(5,18,8,0.55), 0 4px 20px rgba(5,14,8,0.40)",
                    border: "1px solid rgba(79,222,27,0.18)",
                  }}>
                    <div className="relative w-full" style={{ aspectRatio: "0.62" }}>
                      <Image src="/kamila_iapoam.png"
                        alt="Kamila Katusawa Mura — Diretora Presidente do IAPOAM"
                        fill className="object-cover object-top"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 45vw" priority />
                      {/* Gradientes de fusão */}
                      <div className="absolute inset-0 pointer-events-none" style={{
                        background: "linear-gradient(to right, rgba(10,50,14,0.35) 0%, transparent 20%, transparent 80%, rgba(10,50,14,0.35) 100%)",
                      }} />
                      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{
                        height: "40%",
                        background: "linear-gradient(to top, rgba(8,40,12,0.88) 0%, rgba(8,40,12,0.40) 50%, transparent 100%)",
                      }} />
                    </div>

                    {/* Badge rodapé da foto */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-6 py-4 sm:py-5"
                      style={{ background: "linear-gradient(to top, rgba(5,18,8,0.95) 0%, rgba(5,18,8,0.70) 70%, transparent 100%)" }}>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                        style={{ color: "rgba(168,230,161,0.70)" }}>
                        Diretora Presidente
                      </p>
                      <h3 className="text-base sm:text-lg font-black" style={{ color: "#ffffff" }}>
                        Kamila Katusawa Mura
                      </h3>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(79,222,27,0.65)" }}>
                        Etnia Mura · IAPOAM
                      </p>
                    </div>
                  </div>

                  {/* Badge CNPJ flutuante — amarelo-ouro */}
                  <div className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-4 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 hidden sm:block"
                    style={{
                      background: "#1B5E20",
                      border: "1px solid rgba(79,222,27,0.28)",
                      backdropFilter: "blur(8px)",
                      boxShadow: "0 4px 20px rgba(5,18,8,0.45)",
                    }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                      style={{ color: "rgba(168,230,161,0.60)" }}>CNPJ</p>
                    <p className="text-xs sm:text-sm font-bold" style={{ color: "#F4C430" }}>
                      13.955.659/0001-43
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* ── Coluna direita: texto institucional ── */}
              <FadeIn delay={0.15} className="space-y-4 sm:space-y-5 pt-0 lg:pt-4">

                {/* Pílula */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
                  style={{ background: "rgba(8,24,11,0.42)", border: "1px solid rgba(79,222,27,0.24)" }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4FDE1B" }} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em]"
                    style={{ color: "rgba(168,230,161,0.82)" }}>O Instituto</span>
                </div>

                <h2 className="font-black leading-tight tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", color: "#ffffff" }}>
                  Instituto de Apoio aos Povos Originários da Amazônia
                </h2>

                {/* Linha decorativa */}
                <div className="w-12 h-0.5 rounded-full"
                  style={{ background: "linear-gradient(90deg, #4FDE1B, #A8E6A1)" }} />

                {/* Parágrafos */}
                {[
                  <>O <strong style={{ color: "#ffffff" }}>Instituto de Apoio aos Povos Originários da Amazônia</strong>, também designado pela sigla <strong style={{ color: "#ffffff" }}>IAPOAM</strong>, é uma associação civil, pessoa jurídica de direito privado, sem fim econômico, com autonomia administrativa e financeira. Constituído em <span style={{ color: "#F4C430", fontWeight: 700 }}>15 de fevereiro de 2011</span>, tem sede e foro jurídico na cidade de <strong style={{ color: "#ffffff" }}>Manaus, Estado do Amazonas</strong>.</>,
                  <>Seus atos constitutivos foram registrados no Livro A, número A-514, sob o nº <strong style={{ color: "#ffffff" }}>28.754</strong>, em <span style={{ color: "#F4C430", fontWeight: 700 }}>09 de maio de 2011</span>. Cadastrado no <strong style={{ color: "#ffffff" }}>CNPJ sob o nº 13.955.659/0001-43</strong>.</>,
                  <>Com código de atividade principal <strong style={{ color: "#ffffff" }}>9430-8-00</strong> — o IAPOAM é reconhecido pela <strong style={{ color: "#ffffff" }}>Lei Nº 4.757 de 2019</strong> como Utilidade Pública Estadual e pela <strong style={{ color: "#ffffff" }}>Lei Nº 515 de 2022</strong> como Utilidade Pública Municipal.</>,
                  <>Inscrito no <strong style={{ color: "#ffffff" }}>CMAS</strong> sob o nº <strong style={{ color: "#ffffff" }}>264</strong> para Ações de Defesa e Garantia de Direitos, e registrado no <strong style={{ color: "#ffffff" }}>CNEAS – Ministério do Desenvolvimento Social</strong>.</>,
                ].map((p, i) => (
                  <p key={i} className="text-sm sm:text-base leading-relaxed"
                    style={{ color: "rgba(240,255,240,0.78)" }}>{p}</p>
                ))}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1">
                  {["Utilidade Pública Estadual", "Utilidade Pública Municipal", "CMAS nº 264", "CNEAS/MDS"].map((tag) => (
                    <div key={tag} className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold"
                      style={{ background: "rgba(8,24,11,0.50)", border: "1px solid rgba(79,222,27,0.22)", color: "rgba(168,230,161,0.80)" }}>
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {tag}
                    </div>
                  ))}
                </div>

                {/* CNPJ mobile */}
                <div className="sm:hidden p-3 rounded-xl"
                  style={{ background: "rgba(8,24,11,0.60)", border: "1px solid rgba(79,222,27,0.20)" }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                    style={{ color: "rgba(168,230,161,0.60)" }}>CNPJ</p>
                  <p className="text-sm font-bold" style={{ color: "#F4C430" }}>13.955.659/0001-43</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            MISSÃO · VISÃO · VALORES — seção alternada clara
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
          style={{ background: "#F5F5F0" }}>
          {/* Linha entrada */}
          <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{
            background: "linear-gradient(to right, transparent, rgba(79,222,27,0.30) 50%, transparent)",
          }} />
          {/* Linha saída */}
          <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none" style={{
            background: "linear-gradient(to right, transparent, rgba(27,94,32,0.22) 50%, transparent)",
          }} />
          {/* Blobs */}
          <div className="absolute pointer-events-none" style={{
            top: "-80px", left: "50%", transform: "translateX(-50%)",
            width: "700px", height: "400px",
            background: "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(79,222,27,0.08) 0%, transparent 65%)",
            borderRadius: "50%",
          }} />
          <div className="absolute pointer-events-none" style={{
            bottom: "-60px", right: "-100px", width: "400px", height: "400px",
            background: "radial-gradient(circle, rgba(244,196,48,0.07) 0%, transparent 70%)",
            borderRadius: "50%",
          }} />
          {/* Dot-pattern */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.038 }}>
            <defs><pattern id="dots-mvv" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="#1B5E20" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#dots-mvv)" />
          </svg>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn className="text-center mb-10 sm:mb-14">

              {/* Badge claro */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6"
                style={{ background: "rgba(27,94,32,0.08)", border: "1px solid rgba(27,94,32,0.24)" }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
                  style={{ background: "#4FDE1B", boxShadow: "0 0 6px rgba(79,222,27,0.60)" }} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.20em]"
                  style={{ color: "rgba(27,94,32,0.85)" }}>Nossa Identidade</span>
              </div>

              <h2 className="font-bold tracking-tight mb-4"
                style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "#1A1A1A", letterSpacing: "-0.025em" }}>
                Missão,{" "}
                <span style={{
                  backgroundImage: "linear-gradient(90deg, #1B5E20 0%, #4FDE1B 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>Visão e Valores</span>
              </h2>

              {/* Linha decorativa */}
              <div className="flex justify-center mb-5">
                <div className="h-0.5 w-14 rounded-full"
                  style={{ background: "linear-gradient(90deg, #1B5E20, #4FDE1B)" }} />
              </div>

              <p className="max-w-xl mx-auto text-sm sm:text-base" style={{ color: "rgba(26,26,26,0.60)" }}>
                Os pilares que guiam cada ação, decisão e compromisso do IAPOAM
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {valores.map((v, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-400 cursor-default"
                  style={{ background: "#ffffff", border: "1px solid rgba(26,26,26,0.08)", boxShadow: "0 2px 20px rgba(26,26,26,0.07)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,222,27,0.32)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(26,26,26,0.12)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,26,26,0.08)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(26,26,26,0.07)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}>
                  {/* Barra topo */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(90deg, #1B5E20 0%, #4FDE1B 50%, #A8E6A1 100%)", borderRadius: "12px 12px 0 0" }} />
                  {/* Número decorativo */}
                  <span className="absolute top-4 right-5 font-black leading-none select-none"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "rgba(79,222,27,0.08)" }}>{v.numero}</span>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 relative z-10" style={{ color: "#1A1A1A" }}>{v.titulo}</h3>
                  <div className="w-8 h-0.5 mb-4 rounded-full group-hover:w-14 transition-all duration-400"
                    style={{ background: "linear-gradient(90deg, #1B5E20, #4FDE1B)" }} />
                  <p className="text-sm leading-relaxed relative z-10" style={{ color: "rgba(26,26,26,0.65)" }}>{v.texto}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            HISTÓRICO & TRAJETÓRIA
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" style={{ background: "#1B5E20" }}>
          <AtmosferaVerde dots="dots-hist" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn className="text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6 sm:mb-7"
                style={{ background: "rgba(8,24,11,0.42)", border: "1px solid rgba(79,222,27,0.26)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4FDE1B" }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: "rgba(168,230,161,0.82)" }}>Nossa Trajetória</span>
              </div>
              <h2 className="font-black tracking-tight mb-3"
                style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", color: "#ffffff" }}>
                Uma Década de{" "}
                <span style={{
                  backgroundImage: "linear-gradient(88deg, #4FDE1B 0%, #A8E6A1 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>Luta</span>
              </h2>
            </FadeIn>

            <div className="space-y-4 sm:space-y-6">
              {timeline.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex gap-4 sm:gap-6">

                  {/* Coluna de ano */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{ background: "rgba(8,30,12,0.55)", border: "1px solid rgba(79,222,27,0.22)" }}>
                      <span className="text-[10px] sm:text-xs font-black leading-tight text-center"
                        style={{ color: "#F4C430" }}>{item.ano}</span>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 mt-2"
                        style={{ background: "linear-gradient(to bottom, rgba(79,222,27,0.28), transparent)" }} />
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className="pb-4 sm:pb-6 flex-1 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-default"
                    style={{ background: "rgba(8,50,14,0.42)", border: "1px solid rgba(255,255,255,0.07)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,222,27,0.24)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(27,94,32,0.55)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(8,50,14,0.42)";
                    }}>
                    <h3 className="text-sm sm:text-base font-bold mb-2 transition-colors duration-300 group-hover:text-[#4FDE1B]"
                      style={{ color: "#ffffff" }}>{item.titulo}</h3>
                    <div className="w-6 h-0.5 mb-3 rounded-full"
                      style={{ background: "rgba(79,222,27,0.45)" }} />
                    <p className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: "rgba(240,255,240,0.75)" }}>{item.texto}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FAIXA GRAFISMO — separador antes dos reconhecimentos
        ══════════════════════════════════════════════════════════════ */}
        <div aria-hidden="true" style={{ background: "#1a3d20" }}>
          <LinhaVerde opacity={0.28} />
          <FaixaGrafismo opacity={0.50} fadeColor="#1a3d20" fadeWidth={100} />
          <LinhaVerde opacity={0.38} />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            RECONHECIMENTOS OFICIAIS — seção clara alternada
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: "#F5F5F0" }}>
          {/* Linhas topo/base */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(79,222,27,0.28) 50%, transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(27,94,32,0.20) 50%, transparent)" }} />
          {/* Dot-pattern */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.036 }}>
            <defs><pattern id="dots-rec" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="#1B5E20" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#dots-rec)" />
          </svg>
          {/* Blob */}
          <div className="absolute pointer-events-none" style={{ top: "-60px", right: "-120px", width: "420px", height: "420px", background: "radial-gradient(circle, rgba(79,222,27,0.09) 0%, transparent 70%)", borderRadius: "50%" }} />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn className="text-center mb-10 sm:mb-12">
              <h2 className="font-bold tracking-tight mb-3"
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", color: "#1A1A1A", letterSpacing: "-0.025em" }}>
                Reconhecimentos{" "}
                <span style={{
                  backgroundImage: "linear-gradient(90deg, #1B5E20 0%, #4FDE1B 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>Oficiais</span>
              </h2>
              {/* Linha decorativa */}
              <div className="flex justify-center mb-4">
                <div className="h-0.5 w-14 rounded-full" style={{ background: "linear-gradient(90deg, #1B5E20, #4FDE1B)" }} />
              </div>
              <p className="text-xs sm:text-sm" style={{ color: "rgba(26,26,26,0.58)" }}>
                Registros que comprovam a transparência e a seriedade do nosso trabalho
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {reconhecimentos.map((r, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-default"
                  style={{ background: "#ffffff", border: "1px solid rgba(26,26,26,0.08)", boxShadow: "0 2px 16px rgba(26,26,26,0.06)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,222,27,0.32)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(26,26,26,0.12)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,26,26,0.08)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(26,26,26,0.06)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}>
                  {/* Barra topo */}
                  <div className="absolute hidden" />
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(27,94,32,0.10)", border: "1px solid rgba(27,94,32,0.22)" }}>
                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="#1B5E20" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm mb-1 transition-colors duration-300 group-hover:text-[#1B5E20]"
                      style={{ color: "#1A1A1A" }}>{r.label}</h4>
                    <p className="text-[11px] sm:text-xs leading-relaxed" style={{ color: "rgba(26,26,26,0.60)" }}>{r.descricao}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            DIRETORIA EXECUTIVA
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" style={{ background: "#1B5E20" }}>
          <AtmosferaVerde dots="dots-dir" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn className="text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6 sm:mb-7"
                style={{ background: "rgba(8,24,11,0.42)", border: "1px solid rgba(79,222,27,0.26)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4FDE1B" }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: "rgba(168,230,161,0.82)" }}>Gestão</span>
              </div>
              <h2 className="font-black tracking-tight mb-3"
                style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", color: "#ffffff" }}>
                Diretoria{" "}
                <span style={{
                  backgroundImage: "linear-gradient(88deg, #4FDE1B 0%, #A8E6A1 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>Executiva</span>
              </h2>
              <p className="max-w-xl mx-auto text-sm sm:text-base" style={{ color: "rgba(240,255,240,0.62)" }}>
                Profissionais comprometidos com a transparência e a excelência na gestão do IAPOAM
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {diretoria.map((d, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 overflow-hidden transition-all duration-400 cursor-default"
                  style={d.destaque
                    ? { background: "#163d1c", border: "1px solid rgba(79,222,27,0.26)", boxShadow: "0 4px 32px rgba(5,18,8,0.40)" }
                    : { background: "rgba(8,50,14,0.42)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 20px rgba(5,18,8,0.20)" }
                  }
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,222,27,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.borderColor = d.destaque ? "rgba(79,222,27,0.26)" : "rgba(255,255,255,0.08)";
                  }}>
                  {/* Barra topo */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: d.destaque ? "linear-gradient(90deg, #4FDE1B 0%, #A8E6A1 100%)" : "linear-gradient(90deg, rgba(79,222,27,0.50) 0%, rgba(168,230,161,0.30) 100%)" }} />

                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Avatar inicial */}
                    <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-base sm:text-lg"
                      style={{
                        background: d.destaque ? "rgba(79,222,27,0.14)" : "rgba(8,30,12,0.55)",
                        border: `1px solid ${d.destaque ? "rgba(79,222,27,0.30)" : "rgba(79,222,27,0.18)"}`,
                        color: d.destaque ? "#4FDE1B" : "rgba(168,230,161,0.70)",
                      }}>
                      {d.nome.split(" ")[0][0]}{d.nome.split(" ")[1]?.[0]}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-0.5"
                        style={{ color: "rgba(168,230,161,0.65)" }}>{d.cargo}</p>
                      <h3 className="font-bold leading-tight mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-[#4FDE1B]"
                        style={{ color: "#ffffff", fontSize: d.destaque ? "0.95rem" : "0.875rem" }}>
                        {d.nome}
                      </h3>

                      {d.email && (
                        <a href={`mailto:${d.email}`}
                          className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs mb-1.5 break-all transition-colors duration-200"
                          style={{ color: "rgba(240,255,240,0.50)" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#4FDE1B"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,255,240,0.50)"; }}>
                          <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="truncate">{d.email}</span>
                        </a>
                      )}
                      {d.telefone && (
                        <a href={`tel:${d.telefone.replace(/\D/g, "")}`}
                          className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs transition-colors duration-200"
                          style={{ color: "rgba(240,255,240,0.50)" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#4FDE1B"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,255,240,0.50)"; }}>
                          <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {d.telefone}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Matriz */}
            <FadeIn delay={0.2}>
              <div className="mt-5 sm:mt-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl"
                style={{ background: "rgba(8,30,12,0.50)", border: "1px solid rgba(79,222,27,0.14)" }}>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4"
                  style={{ color: "rgba(168,230,161,0.60)" }}>
                  Matriz — Aldeia Uka Anamã · Comunidade Betel
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider mb-0.5"
                      style={{ color: "rgba(240,255,240,0.38)" }}>Coordenadora Geral</p>
                    <p className="text-sm font-semibold" style={{ color: "rgba(240,255,240,0.80)" }}>Tuxaua Ivete Mura</p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider mb-0.5"
                      style={{ color: "rgba(240,255,240,0.38)" }}>Coordenador Mirim Oficial</p>
                    <p className="text-sm font-semibold" style={{ color: "rgba(240,255,240,0.80)" }}>Kirimbawa Mura</p>
                    <p className="text-[11px] mt-0.5" style={{ color: "rgba(240,255,240,0.38)" }}>
                      Projeto Guardiões da Floresta IAPOAM Oficial
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FAIXA GRAFISMO — separador antes do CTA final
        ══════════════════════════════════════════════════════════════ */}
        <div aria-hidden="true" style={{ background: "#1B5E20" }}>
          <LinhaVerde opacity={0.32} />
          <FaixaGrafismo opacity={0.52} fadeColor="#1B5E20" fadeWidth={100} />
          <LinhaVerde opacity={0.42} />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            CTA FINAL — seção clara #F5F5F0 (mesmo padrão DonationCTA)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: "#F5F5F0" }}>
          {/* Linha entrada */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(79,222,27,0.30) 50%, transparent)" }} />
          {/* Blobs */}
          <div className="absolute pointer-events-none" style={{ top: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle, rgba(79,222,27,0.09) 0%, transparent 65%)", borderRadius: "50%" }} />
          <div className="absolute pointer-events-none" style={{ bottom: 0, left: 0, width: "260px", height: "260px", background: "radial-gradient(circle, rgba(244,196,48,0.08) 0%, transparent 65%)", borderRadius: "50%" }} />
          {/* Dot-pattern */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.038 }}>
            <defs><pattern id="dots-cta" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="#1B5E20" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#dots-cta)" />
          </svg>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <FadeIn>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-7"
                style={{ background: "rgba(27,94,32,0.08)", border: "1px solid rgba(27,94,32,0.24)" }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
                  style={{ background: "#4FDE1B", boxShadow: "0 0 6px rgba(79,222,27,0.60)" }} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.20em]"
                  style={{ color: "rgba(27,94,32,0.85)" }}>Faça Parte Dessa Causa</span>
              </div>

              <h2 className="font-bold mb-4 tracking-tight"
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", color: "#1A1A1A", letterSpacing: "-0.025em" }}>
                Junte-se ao{" "}
                <span style={{
                  backgroundImage: "linear-gradient(90deg, #1B5E20 0%, #4FDE1B 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>IAPOAM</span>
              </h2>

              {/* Linha decorativa */}
              <div className="flex justify-center mb-6">
                <div className="h-0.5 w-12 rounded-full"
                  style={{ background: "linear-gradient(90deg, #1B5E20, #4FDE1B)" }} />
              </div>

              <p className="mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed px-2"
                style={{ color: "rgba(26,26,26,0.62)", lineHeight: "1.80" }}>
                O IAPOAM depende do apoio de pessoas que acreditam que os povos originários
                merecem dignidade, direitos e futuro. Junte-se a nós.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                {/* Botão primário — laranja-terra */}
                <Link href="/doacoes"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 font-bold rounded-xl transition-all duration-300 tracking-wide text-sm sm:text-base"
                  style={{
                    background: "linear-gradient(135deg, #C1440E 0%, #d94f16 100%)",
                    color: "#ffffff",
                    boxShadow: "0 4px 20px rgba(193,68,14,0.38)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "linear-gradient(135deg, #F4C430 0%, #f7d55a 100%)";
                    el.style.color = "#1A1A1A";
                    el.style.transform = "translateY(-2px) scale(1.02)";
                    el.style.boxShadow = "0 8px 28px rgba(244,196,48,0.50)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "linear-gradient(135deg, #C1440E 0%, #d94f16 100%)";
                    el.style.color = "#ffffff";
                    el.style.transform = "translateY(0) scale(1)";
                    el.style.boxShadow = "0 4px 20px rgba(193,68,14,0.38)";
                  }}>
                  Apoie o Instituto
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                {/* Botão secundário — outline */}
                <Link href="/#equipe"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 font-semibold rounded-xl transition-all duration-300 tracking-wide text-sm sm:text-base"
                  style={{
                    background: "rgba(27,94,32,0.08)",
                    color: "#1B5E20",
                    border: "1.5px solid rgba(27,94,32,0.30)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(79,222,27,0.50)";
                    el.style.background = "rgba(79,222,27,0.10)";
                    el.style.color = "#1B5E20";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(27,94,32,0.30)";
                    el.style.background = "rgba(27,94,32,0.08)";
                    el.style.transform = "translateY(0)";
                  }}>
                  Conheça a Equipe
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Wave de saída → Footer dark */}
          <div className="pointer-events-none" style={{ marginTop: "4rem", marginBottom: "-1px" }}>
            <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="w-full block" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 72 L0 28 C180 6 420 60 720 36 C1020 12 1260 58 1440 28 L1440 72 Z"
                fill="rgba(8,22,10,0.22)" transform="translate(0,3)" />
              <path d="M0 72 L0 28 C180 6 420 60 720 36 C1020 12 1260 58 1440 28 L1440 72 Z"
                fill="#0f2912" />
            </svg>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}