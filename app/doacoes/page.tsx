"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

// ─── Data ─────────────────────────────────────────────────────────────────────
const valores = [
  { valor: 10,  impacto: "Materiais escolares para crianças indígenas",        destaque: false },
  { valor: 20,  impacto: "Alimentos para famílias em vulnerabilidade",          destaque: false },
  { valor: 30,  impacto: "Kits de higiene e cuidados para comunidades",         destaque: true  },
  { valor: 50,  impacto: "Atividades culturais e de preservação da identidade", destaque: false },
];

const usos = [
  { numero: "01", titulo: "Segurança Alimentar",   descricao: "Compra e distribuição de cestas básicas e kits de alimentos para famílias indígenas em situação de vulnerabilidade nas aldeias." },
  { numero: "02", titulo: "Inclusão Digital",      descricao: "Aquisição de equipamentos, infraestrutura de conectividade e capacitação tecnológica para comunidades sem acesso à internet." },
  { numero: "03", titulo: "Cultura e Identidade",  descricao: "Realização de eventos culturais, documentação de línguas e tradições ancestrais, e valorização das artes dos povos originários." },
  { numero: "04", titulo: "Cidadania e Direitos",  descricao: "Assistência jurídica, emissão de documentos, acesso a serviços públicos e defesa dos territórios e direitos indígenas." },
];

const trustItems = [
  { titulo: "Organização registrada",  descricao: "CNPJ 13.955.659/0001-43, com situação cadastral regular e ativa perante a Receita Federal do Brasil." },
  { titulo: "Utilidade Pública",       descricao: "Reconhecida como Utilidade Pública Municipal (Lei 515/2022) e Estadual (Lei 4.757/2019) pelo Governo do Amazonas." },
  { titulo: "Transparência total",     descricao: "Relatórios financeiros e prestação de contas disponíveis para consulta pública. Gestão auditável e responsável." },
  { titulo: "Doação 100% destinada",   descricao: "Todos os recursos recebidos são integralmente aplicados nos projetos e comunidades atendidas pelo instituto." },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Faixa Grafismo — reutilizável ───────────────────────────────────────────
/*
  Componente isolado da faixa indígena.
  fadeColor deve ser a cor de fundo da seção em que a faixa é usada.
  Isso garante que os gradientes de dissolução casem perfeitamente.
*/
function FaixaGrafismo({
  opacity = 0.72,
  fadeColor = "#e8f5e9",
  fadeWidth = 80,
  className = "",
}: {
  opacity?: number;
  fadeColor?: string;
  fadeWidth?: number;
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none ${className}`} style={{ height: "44px" }} aria-hidden="true">
      <div style={{ width: "100%", height: "100%", opacity, position: "relative" }}>
        <Image src="/faixa_grafismo.png" alt="" fill className="object-cover object-center" sizes="100vw" />
      </div>
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: "16px", background: `linear-gradient(to bottom, ${fadeColor} 0%, transparent 100%)`, zIndex: 2 }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: "16px", background: `linear-gradient(to top, ${fadeColor} 0%, transparent 100%)`, zIndex: 2 }} />
      <div className="absolute left-0 top-0 bottom-0 pointer-events-none" style={{ width: `${fadeWidth}px`, background: `linear-gradient(to right, ${fadeColor} 0%, transparent 100%)`, zIndex: 2 }} />
      <div className="absolute right-0 top-0 bottom-0 pointer-events-none" style={{ width: `${fadeWidth}px`, background: `linear-gradient(to left, ${fadeColor} 0%, transparent 100%)`, zIndex: 2 }} />
    </div>
  );
}

// ─── Shared: linha separadora verde ───────────────────────────────────────────
function LinhaVerde({ opacity = 0.6 }: { opacity?: number }) {
  return (
    <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #028c10 10%, #02c718 35%, #b3f801 50%, #02c718 65%, #028c10 90%, transparent 100%)", opacity }} />
  );
}

// ─── Shared: atmosfera de seção clara ────────────────────────────────────────
function AtmosferaClara({ patternId }: { patternId: string }) {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(160deg, rgba(179,248,1,0.06) 0%, transparent 50%, rgba(2,199,24,0.04) 100%)" }} />
      <div className="absolute pointer-events-none" style={{ top: "-140px", right: "-160px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(2,199,24,0.09) 0%, transparent 65%)", borderRadius: "50%" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "-100px", left: "-130px", width: "420px", height: "420px", background: "radial-gradient(circle, rgba(208,255,0,0.08) 0%, transparent 65%)", borderRadius: "50%" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.038 }}>
        <defs><pattern id={patternId} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#02391a" /></pattern></defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </>
  );
}

// ─── Copy Button ──────────────────────────────────────────────────────────────
function CopyBtn({ texto, chave, copiado, onCopy }: { texto: string; chave: string; copiado: string; onCopy: (t: string, k: string) => void }) {
  return (
    <button onClick={() => onCopy(texto, chave)} className="flex-shrink-0 p-1.5 rounded-lg transition-colors"
      style={{ color: copiado === chave ? "#028c10" : "rgba(2,55,15,0.5)" }} aria-label="Copiar">
      {copiado === chave ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Doacoes() {
  const [copiado, setCopiado] = useState("");
  const [valorSelecionado, setValorSelecionado] = useState<number | null>(30);

  const copiar = (texto: string, chave: string) => {
    navigator.clipboard.writeText(texto);
    setCopiado(chave);
    setTimeout(() => setCopiado(""), 2500);
  };

  return (
    <div className="min-h-screen" style={{ background: "#e8f5e9" }}>
      <Header />
      <main>

        {/* ══════════════════════════════════════════════════════════════
            HERO DA PÁGINA
            Fundo: #e8f5e9 — mesmo tom das seções claras do site
            A faixa grafismo entra ABAIXO do conteúdo do hero como
            marcação cultural antes da primeira seção de conteúdo.
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ background: "#e8f5e9", paddingTop: "120px" }}>
          <AtmosferaClara patternId="dots-hero-don" />

          {/* Conteúdo do hero */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pb-16">
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-7"
                style={{ background: "rgba(2,55,15,0.07)", border: "1px solid rgba(2,199,24,0.28)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#02c718" }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(2,45,12,0.65)" }}>
                  Apoie a Causa Indígena
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-black leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(3rem, 8vw, 5rem)", color: "#0d1f10" }}
            >
              Faça sua{" "}
              <span style={{ backgroundImage: "linear-gradient(88deg, #02c718 0%, #3a8e12 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Doação
              </span>
            </motion.h1>

            <div className="flex justify-center mb-5">
              <motion.div className="h-0.5 w-20 rounded-full" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
                style={{ background: "linear-gradient(90deg, #02c718, #b3f801)" }} />
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: "rgba(2,35,10,0.62)" }}>
              Cada contribuição chega diretamente às comunidades indígenas da Amazônia,
              fortalecendo direitos, cultura e dignidade dos povos originários.
            </motion.p>
          </div>

          {/* ── Faixa grafismo — separador entre hero e conteúdo ── */}
          <div className="relative z-10" aria-hidden="true">
            <LinhaVerde opacity={0.55} />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}>
              <FaixaGrafismo opacity={0.72} fadeColor="#e8f5e9" fadeWidth={90} />
            </motion.div>
            <LinhaVerde opacity={0.4} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            COMO SUA DOAÇÃO É USADA
            Fundo: #e8f5e9 contínuo — mesma seção visual do hero
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 relative overflow-hidden" style={{ background: "#e8f5e9" }}>
          <AtmosferaClara patternId="dots-usos" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <FadeIn className="text-center mb-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: "rgba(2,45,12,0.45)" }}>
                Como sua doação é utilizada
              </p>
              <h2 className="font-black leading-tight tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#0d1f10" }}>
                Impacto{" "}
                <span style={{ backgroundImage: "linear-gradient(88deg, #02c718 0%, #3a8e12 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Real
                </span>
              </h2>
              <div className="flex justify-center">
                <div className="h-0.5 w-16 rounded-full" style={{ background: "linear-gradient(90deg, #02c718, #b3f801)" }} />
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {usos.map((u, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-2xl p-6 transition-all duration-400"
                  style={{ background: "#ffffff", border: "1px solid rgba(2,55,15,0.09)", boxShadow: "0 2px 16px rgba(2,30,8,0.06)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(2,30,8,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,199,24,0.28)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(2,30,8,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,55,15,0.09)"; }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: "linear-gradient(90deg, #02c718 0%, #b3f801 100%)" }} />
                  <span className="text-4xl font-black leading-none mb-4 block" style={{ color: "rgba(2,199,24,0.12)" }}>{u.numero}</span>
                  <div className="w-6 h-0.5 mb-3 rounded-full" style={{ background: "linear-gradient(90deg, #02c718, #b3f801)" }} />
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#0d1f10" }}>{u.titulo}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(2,25,8,0.62)" }}>{u.descricao}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            ESCOLHA O VALOR + MÉTODOS DE PAGAMENTO
            Fundo: branco puro — cria separação visual clara
            A faixa grafismo entra no TOPO como marcação de entrada
            e no RODAPÉ como fechamento antes do bloco escuro
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ background: "#ffffff" }}>

          {/* Faixa de entrada — separador #e8f5e9 → #ffffff */}
          <div aria-hidden="true">
            <LinhaVerde opacity={0.45} />
            <FaixaGrafismo opacity={0.58} fadeColor="#ffffff" fadeWidth={80} />
            <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #02c718 15%, #b3f801 50%, #02c718 85%, transparent 100%)", opacity: 0.35 }} />
          </div>

          <div className="py-20">
            {/* ── Escolha o valor ── */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
              <FadeIn className="text-center mb-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: "rgba(2,45,12,0.45)" }}>
                  Quanto deseja contribuir
                </p>
                <h2 className="font-black leading-tight tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#0d1f10" }}>
                  Escolha o{" "}
                  <span style={{ backgroundImage: "linear-gradient(88deg, #02c718 0%, #3a8e12 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Valor
                  </span>
                </h2>
                <div className="flex justify-center">
                  <div className="h-0.5 w-16 rounded-full" style={{ background: "linear-gradient(90deg, #02c718, #b3f801)" }} />
                </div>
              </FadeIn>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                {valores.map((v, i) => (
                  <motion.button key={v.valor}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setValorSelecionado(v.valor)}
                    className="relative rounded-2xl p-6 text-left transition-all duration-300"
                    style={
                      valorSelecionado === v.valor
                        ? { background: "linear-gradient(145deg, #071a0a 0%, #0d2e10 100%)", border: "1px solid rgba(179,248,1,0.22)", boxShadow: "0 8px 36px rgba(2,20,6,0.22)", transform: "translateY(-3px)" }
                        : { background: "#ffffff", border: `1px solid ${v.destaque ? "rgba(2,199,24,0.3)" : "rgba(2,55,15,0.10)"}`, boxShadow: "0 2px 16px rgba(2,30,8,0.06)" }
                    }
                    onMouseEnter={(e) => {
                      if (valorSelecionado !== v.valor) {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(2,30,8,0.12)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,199,24,0.32)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (valorSelecionado !== v.valor) {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(2,30,8,0.06)";
                        (e.currentTarget as HTMLElement).style.borderColor = v.destaque ? "rgba(2,199,24,0.3)" : "rgba(2,55,15,0.10)";
                      }
                    }}
                  >
                    {/* Linha superior no hover/selected */}
                    {valorSelecionado !== v.valor && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                        style={{ background: "linear-gradient(90deg, #02c718 0%, #b3f801 100%)", opacity: v.destaque ? 0.7 : 0.4 }} />
                    )}

                    {/* Badge mais escolhido */}
                    {v.destaque && valorSelecionado !== v.valor && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full whitespace-nowrap"
                        style={{ background: "#d0ff00", boxShadow: "0 2px 10px rgba(208,255,0,0.35)" }}>
                        <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: "#051008" }}>
                          Mais escolhido
                        </span>
                      </div>
                    )}

                    {/* Check se selecionado */}
                    {valorSelecionado === v.valor && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#b3f801" }}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#051008" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}

                    <div className="text-3xl font-black mb-2" style={{ color: valorSelecionado === v.valor ? "#d0ff00" : "#024a10", textShadow: valorSelecionado === v.valor ? "0 0 16px rgba(208,255,0,0.28)" : "none" }}>
                      R$ {v.valor}
                    </div>
                    <div className="w-5 h-px rounded-full mb-3" style={{ background: valorSelecionado === v.valor ? "rgba(179,248,1,0.4)" : "rgba(2,55,15,0.18)" }} />
                    <p className="text-xs leading-relaxed" style={{ color: valorSelecionado === v.valor ? "rgba(233,235,234,0.75)" : "rgba(2,25,8,0.62)" }}>
                      {v.impacto}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Nota valores maiores */}
              <FadeIn delay={0.15}>
                <div className="flex items-start gap-4 px-5 py-4 rounded-xl mb-8"
                  style={{ background: "#f8fef9", border: "1px solid rgba(2,55,15,0.09)", borderLeft: "3px solid rgba(2,199,24,0.5)", boxShadow: "0 1px 8px rgba(2,30,8,0.04)" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(2,25,8,0.65)" }}>
                    <strong style={{ color: "#0d1f10" }}>Deseja contribuir com valores acima de R$ 50?</strong>{" "}
                    Para doações maiores, convidamos você a participar de um de nossos programas sociais.{" "}
                    <a href="https://wa.me/5592985220682" target="_blank" rel="noopener noreferrer"
                      className="font-bold underline underline-offset-2 transition-colors duration-200"
                      style={{ color: "#028c10" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#02c718"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#028c10"; }}>
                      Fale conosco pelo WhatsApp
                    </a>.
                  </p>
                </div>
              </FadeIn>

              {/* CTA principal */}
              <FadeIn delay={0.2} className="text-center">
                <Link href="#como-doar"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 font-black text-base rounded-xl transition-all duration-300 tracking-wide"
                  style={{ background: "linear-gradient(135deg, #02c718 0%, #038f15 100%)", color: "#051008", boxShadow: "0 6px 28px rgba(2,199,24,0.32)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #b3f801 0%, #8ecc00 100%)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 36px rgba(179,248,1,0.4)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #02c718 0%, #038f15 100%)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(2,199,24,0.32)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                >
                  Ver como realizar a doação
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <p className="text-sm mt-3 font-medium" style={{ color: "rgba(2,35,10,0.42)" }}>
                  100% do valor é destinado diretamente aos nossos projetos
                </p>
              </FadeIn>
            </div>

            {/* ── Métodos de pagamento ── */}
            <div id="como-doar" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Divisor */}
              <div className="flex items-center gap-4 mb-12">
                <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(2,55,15,0.15))" }} />
                <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ color: "rgba(2,45,12,0.42)" }}>
                  Como realizar a doação
                </span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(2,55,15,0.15))" }} />
              </div>

              <div className="grid md:grid-cols-2 gap-8">

                {/* PIX */}
                <FadeIn>
                  <div className="rounded-3xl overflow-hidden transition-all duration-300"
                    style={{ background: "#ffffff", border: "1px solid rgba(2,55,15,0.10)", boxShadow: "0 2px 20px rgba(2,30,8,0.07)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 36px rgba(2,30,8,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,199,24,0.28)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(2,30,8,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,55,15,0.10)"; }}
                  >
                    {/* Linha de cor no topo */}
                    <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #02c718 0%, #b3f801 100%)" }} />

                    {/* Header */}
                    <div className="px-7 py-5 flex items-center gap-3" style={{ borderBottom: "1px solid rgba(2,55,15,0.08)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(145deg, #071a0a 0%, #0d2e10 100%)", border: "1px solid rgba(179,248,1,0.15)" }}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#b3f801">
                          <path d="M14.25 2.26a4 4 0 0 0-4.5 0L3.5 6.5A4 4 0 0 0 2 9.88v4.24a4 4 0 0 0 1.5 3.13l6.25 4.24a4 4 0 0 0 4.5 0l6.25-4.24A4 4 0 0 0 22 14.12V9.88a4 4 0 0 0-1.5-3.38Z" opacity=".15"/>
                          <path d="m8.41 15.59 1.17-1.17a2 2 0 0 1 2.83 0l1.17 1.17a2 2 0 0 0 2.83 0l.71-.71a2 2 0 0 0 0-2.83l-1.17-1.17a2 2 0 0 1 0-2.83l1.17-1.17a2 2 0 0 0 0-2.83l-.71-.71a2 2 0 0 0-2.83 0l-1.17 1.17a2 2 0 0 1-2.83 0L8.41 3.33a2 2 0 0 0-2.83 0l-.71.71a2 2 0 0 0 0 2.83l1.17 1.17a2 2 0 0 1 0 2.83L4.87 12.04a2 2 0 0 0 0 2.83l.71.71a2 2 0 0 0 2.83 0Z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-black text-lg" style={{ color: "#0d1f10" }}>PIX</h3>
                        <p className="text-xs font-medium" style={{ color: "rgba(2,45,12,0.55)" }}>Transferência instantânea</p>
                      </div>
                    </div>

                    <div className="p-7 space-y-5">
                      {/* QR Code */}
                      <div className="flex flex-col items-center">
                        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(2,45,12,0.45)" }}>Escaneie o QR Code</p>
                        <div className="relative w-48 h-48 rounded-2xl overflow-hidden" style={{ border: "2px solid rgba(2,199,24,0.2)", boxShadow: "0 4px 20px rgba(2,30,8,0.08)" }}>
                          <Image src="/qr_code.png" alt="QR Code PIX — IAPOAM" fill className="object-contain p-2 bg-white" />
                        </div>
                        <p className="text-xs mt-3" style={{ color: "rgba(2,35,10,0.45)" }}>Abra o app do seu banco e escaneie</p>
                      </div>

                      {/* Divisor "ou" */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-px" style={{ background: "rgba(2,55,15,0.1)" }} />
                        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(2,45,12,0.38)" }}>ou copie a chave</span>
                        <div className="flex-1 h-px" style={{ background: "rgba(2,55,15,0.1)" }} />
                      </div>

                      {/* Chave PIX */}
                      <div className="p-4 rounded-xl" style={{ background: "#f8fef9", border: "1px solid rgba(2,55,15,0.10)" }}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(2,45,12,0.45)" }}>Chave PIX — CNPJ</span>
                          <CopyBtn texto="13.955.659/0001-43" chave="pix" copiado={copiado} onCopy={copiar} />
                        </div>
                        <p className="font-mono text-sm font-bold" style={{ color: "#0d1f10" }}>13.955.659/0001-43</p>
                      </div>

                      {/* Favorecido */}
                      <div className="p-4 rounded-xl" style={{ background: "#f8fef9", border: "1px solid rgba(2,55,15,0.08)" }}>
                        <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "rgba(2,45,12,0.45)" }}>Favorecido</p>
                        <p className="text-sm font-semibold leading-snug" style={{ color: "#0d1f10" }}>
                          Instituto de Apoio aos Povos Originários da Amazônia — IAPOAM
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Depósito Bancário */}
                <FadeIn delay={0.1}>
                  <div className="rounded-3xl overflow-hidden transition-all duration-300"
                    style={{ background: "#ffffff", border: "1px solid rgba(2,55,15,0.10)", boxShadow: "0 2px 20px rgba(2,30,8,0.07)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 36px rgba(2,30,8,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,199,24,0.28)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(2,30,8,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,55,15,0.10)"; }}
                  >
                    {/* Linha de cor no topo — tom diferente para distinguir do PIX */}
                    <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #b3f801 0%, #02c718 100%)" }} />

                    {/* Header */}
                    <div className="px-7 py-5 flex items-center gap-3" style={{ borderBottom: "1px solid rgba(2,55,15,0.08)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(145deg, #071a0a 0%, #0d2e10 100%)", border: "1px solid rgba(179,248,1,0.15)" }}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#b3f801" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h1v11H4zm7 0h1v11h-1zm7 0h1v11h-1z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-black text-lg" style={{ color: "#0d1f10" }}>Depósito Bancário</h3>
                        <p className="text-xs font-medium" style={{ color: "rgba(2,45,12,0.55)" }}>Transferência / TED / DOC</p>
                      </div>
                    </div>

                    <div className="p-7 space-y-3">
                      {[
                        { label: "Banco", value: "Caixa Econômica Federal", mono: false, copyKey: "" },
                        { label: "Conta Corrente", value: "000573362875-4", mono: true, copyKey: "conta" },
                        { label: "CNPJ", value: "13.955.659/0001-43", mono: true, copyKey: "cnpj2" },
                        { label: "Favorecido", value: "Instituto de Apoio aos Povos Originários da Amazônia — IAPOAM", mono: false, copyKey: "" },
                      ].map((row, i) => (
                        <div key={i} className="p-4 rounded-xl" style={{ background: "#f8fef9", border: "1px solid rgba(2,55,15,0.08)" }}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(2,45,12,0.45)" }}>{row.label}</span>
                            {row.copyKey && <CopyBtn texto={row.value} chave={row.copyKey} copiado={copiado} onCopy={copiar} />}
                          </div>
                          <p className={`text-sm font-${row.mono ? "bold font-mono" : "semibold"} leading-snug`} style={{ color: "#0d1f10" }}>
                            {row.value}
                          </p>
                        </div>
                      ))}

                      {/* Agência + Operação */}
                      <div className="grid grid-cols-2 gap-3">
                        {[{ label: "Agência", value: "1549" }, { label: "Operação", value: "1292" }].map((row, i) => (
                          <div key={i} className="p-4 rounded-xl" style={{ background: "#f8fef9", border: "1px solid rgba(2,55,15,0.08)" }}>
                            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "rgba(2,45,12,0.45)" }}>{row.label}</p>
                            <p className="font-mono text-sm font-bold" style={{ color: "#0d1f10" }}>{row.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Faixa grafismo de saída da seção branca */}
          <div className="mt-20" aria-hidden="true">
            <LinhaVerde opacity={0.35} />
            <FaixaGrafismo opacity={0.55} fadeColor="#ffffff" fadeWidth={80} />
            <LinhaVerde opacity={0.45} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            TRANSPARÊNCIA
            Fundo: #e8f5e9 — retorna ao verde-claro
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 relative overflow-hidden" style={{ background: "#e8f5e9" }}>
          <AtmosferaClara patternId="dots-trust" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(2,55,15,0.18))" }} />
              <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ color: "rgba(2,45,12,0.45)" }}>
                Por que confiar no IAPOAM
              </span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(2,55,15,0.18))" }} />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {trustItems.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                  style={{ background: "#ffffff", border: "1px solid rgba(2,55,15,0.09)", boxShadow: "0 2px 12px rgba(2,30,8,0.05)", overflow: "hidden" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,199,24,0.28)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(2,30,8,0.10)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,55,15,0.09)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(2,30,8,0.05)"; }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: "linear-gradient(90deg, #02c718 0%, #b3f801 100%)" }} />
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(2,199,24,0.10)", border: "1px solid rgba(2,199,24,0.2)" }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#028c10" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: "#0d1f10" }}>{item.titulo}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(2,25,8,0.62)" }}>{item.descricao}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Credenciais */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8" style={{ borderTop: "1px solid rgba(2,55,15,0.12)" }}>
              {[
                { label: "CNPJ",           value: "13.955.659/0001-43" },
                { label: "Fundação",       value: "15 de fevereiro de 2011" },
                { label: "Reconhecimento", value: "Utilidade Pública Municipal e Estadual" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  {i > 0 && <div className="hidden sm:block w-px h-6" style={{ background: "rgba(2,55,15,0.14)" }} />}
                  <div className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "rgba(2,45,12,0.4)" }}>{item.label}</p>
                    <p className="text-sm font-semibold" style={{ color: "rgba(2,35,10,0.65)" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CTA FINAL — verde-floresta profundo
            Mesmo padrão do bloco Quote do site
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #071a0a 0%, #0d2e10 60%, #071a0a 100%)" }}>

          {/* Faixa grafismo entrando no bloco escuro — dissolved em #071a0a */}
          <div aria-hidden="true">
            <FaixaGrafismo opacity={0.45} fadeColor="#071a0a" fadeWidth={100} />
          </div>

          <div className="py-16 relative z-10">
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(2,199,24,0.07) 0%, transparent 65%)", borderRadius: "50%" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(179,248,1,0.05) 0%, transparent 65%)", borderRadius: "50%" }} />

            <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
              <h2 className="font-black mb-3 tracking-tight" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#e9ebea" }}>
                Dúvidas sobre{" "}
                <span style={{ backgroundImage: "linear-gradient(88deg, #02c718 0%, #b3f801 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  como doar?
                </span>
              </h2>
              <div className="w-10 h-px rounded-full mx-auto mb-5" style={{ background: "rgba(179,248,1,0.4)" }} />
              <p className="mb-8 text-base leading-relaxed" style={{ color: "rgba(233,235,234,0.72)" }}>
                Nossa equipe está disponível para orientá-lo. Fale conosco diretamente pelo WhatsApp.
              </p>
              <a href="https://wa.me/5592985220682" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-xl transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #02c718 0%, #038f15 100%)", color: "#051008", boxShadow: "0 4px 20px rgba(2,199,24,0.3)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #b3f801 0%, #8ecc00 100%)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #02c718 0%, #038f15 100%)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}