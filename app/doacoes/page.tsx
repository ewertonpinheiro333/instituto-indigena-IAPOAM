"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Copy, Check } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

// ── Valores de doação ──────────────────────────────────────
const valores = [
  {
    valor: 10,
    impacto: "Contribui com materiais escolares para crianças indígenas",
  },
  {
    valor: 20,
    impacto: "Apoia a distribuição de alimentos para famílias em vulnerabilidade",
  },
  {
    valor: 30,
    impacto: "Colabora com kits de higiene e cuidados básicos para comunidades",
    destaque: true,
  },
  {
    valor: 50,
    impacto: "Financia atividades culturais e de preservação da identidade indígena",
  },
];

// ── Como a doação é usada ──────────────────────────────────
const usos = [
  {
    titulo: "Segurança Alimentar",
    descricao:
      "Compra e distribuição de cestas básicas e kits de alimentos para famílias indígenas em situação de vulnerabilidade nas aldeias.",
  },
  {
    titulo: "Inclusão Digital",
    descricao:
      "Aquisição de equipamentos, infraestrutura de conectividade e capacitação tecnológica para comunidades sem acesso à internet.",
  },
  {
    titulo: "Cultura e Identidade",
    descricao:
      "Realização de eventos culturais, documentação de línguas e tradições ancestrais, e valorização das artes dos povos originários.",
  },
  {
    titulo: "Cidadania e Direitos",
    descricao:
      "Assistência jurídica, emissão de documentos, acesso a serviços públicos e defesa dos territórios e direitos indígenas.",
  },
];

export default function Doacoes() {
  const [copiado, setCopiado] = useState("");
  const [valorSelecionado, setValorSelecionado] = useState<number | null>(30);

  const copiar = (texto: string, chave: string) => {
    navigator.clipboard.writeText(texto);
    setCopiado(chave);
    setTimeout(() => setCopiado(""), 2500);
  };

  const CopyBtn = ({ texto, chave }: { texto: string; chave: string }) => (
    <button
      onClick={() => copiar(texto, chave)}
      className="flex-shrink-0 p-1.5 rounded-lg text-[#548C1C] hover:bg-[#8EBF24]/10 transition-colors"
      aria-label="Copiar"
    >
      {copiado === chave ? (
        <Check className="w-4 h-4 text-[#2E590E]" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════ */}
        <section className="pt-36 pb-20 bg-white relative overflow-hidden">
          {/* Subtle bg decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#8EBF24]/07 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#548C1C]/05 rounded-full blur-3xl" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/30 to-transparent" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8EBF24]/12 border border-[#8EBF24]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#548C1C] rounded-full" />
              <span className="text-sm font-semibold text-[#2E590E] tracking-wide">
                Apoie a Causa Indígena
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#010D00] mb-6 leading-tight tracking-tight">
              Faça sua{" "}
              <span className="text-[#2E590E]">Doação</span>
            </h1>

            <p className="text-lg md:text-xl text-[#2E590E]/75 max-w-2xl mx-auto leading-relaxed">
              Cada contribuição chega diretamente às comunidades indígenas da Amazônia,
              fortalecendo direitos, cultura e dignidade dos povos originários.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            MISSÃO + COMO AJUDA
        ══════════════════════════════════════════════════ */}
        <section className="py-16 bg-[#F9FAF7] relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/20 to-transparent" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Intro quote */}
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-xl md:text-2xl text-[#0C2605] font-light leading-relaxed italic">
                "O IAPOAM atua há mais de uma década na defesa dos direitos dos povos
                originários da Amazônia. Sua doação é o combustível dessa luta."
              </p>
              <div className="flex items-center justify-center gap-3 mt-5">
                <div className="h-px w-10 bg-[#8EBF24]/50" />
                <span className="text-xs font-bold text-[#548C1C]/60 uppercase tracking-widest">IAPOAM</span>
                <div className="h-px w-10 bg-[#8EBF24]/50" />
              </div>
            </div>

            {/* Como a doação é usada */}
            <div className="mb-4 text-center">
              <span className="text-xs font-bold text-[#548C1C]/60 uppercase tracking-widest">
                Como sua doação é utilizada
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {usos.map((u, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#8EBF24]/20 rounded-2xl p-6 hover:border-[#548C1C]/35 hover:shadow-lg hover:shadow-[#548C1C]/08 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-6 h-6 flex items-center justify-center mb-4">
                    <span className="text-2xl font-black text-[#8EBF24]/20 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-6 h-0.5 bg-gradient-to-r from-[#8EBF24] to-[#548C1C] rounded-full mb-3" />
                  <h3 className="text-sm font-bold text-[#010D00] mb-2">{u.titulo}</h3>
                  <p className="text-xs text-[#2E590E]/65 leading-relaxed">{u.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            ESCOLHA O VALOR
        ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#010D00] mb-3 tracking-tight">
                Escolha o Valor
              </h2>
              <p className="text-[#2E590E]/65 text-base">
                Selecione quanto deseja contribuir hoje
              </p>
            </div>

            {/* Value cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {valores.map((v) => (
                <button
                  key={v.valor}
                  onClick={() => setValorSelecionado(v.valor)}
                  className={`relative rounded-2xl p-6 text-left border-2 transition-all duration-300 hover:-translate-y-1 ${
                    valorSelecionado === v.valor
                      ? "bg-[#0C2605] border-[#0C2605] shadow-xl shadow-[#0C2605]/15"
                      : v.destaque
                      ? "bg-white border-[#548C1C]/40 hover:border-[#548C1C]/70 hover:shadow-lg hover:shadow-[#548C1C]/10"
                      : "bg-white border-[#8EBF24]/25 hover:border-[#8EBF24]/50 hover:shadow-lg hover:shadow-[#548C1C]/08"
                  }`}
                >
                  {/* Most chosen label */}
                  {v.destaque && valorSelecionado !== v.valor && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#548C1C] rounded-full">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide whitespace-nowrap">
                        Mais escolhido
                      </span>
                    </div>
                  )}

                  <div
                    className={`text-3xl font-black mb-2 ${
                      valorSelecionado === v.valor ? "text-[#8EBF24]" : "text-[#0C2605]"
                    }`}
                  >
                    R$ {v.valor}
                  </div>

                  <div
                    className={`w-5 h-0.5 rounded-full mb-3 ${
                      valorSelecionado === v.valor
                        ? "bg-[#8EBF24]/60"
                        : "bg-[#8EBF24]/35"
                    }`}
                  />

                  <p
                    className={`text-xs leading-relaxed ${
                      valorSelecionado === v.valor ? "text-white/75" : "text-[#2E590E]/65"
                    }`}
                  >
                    {v.impacto}
                  </p>

                  {/* Selected check */}
                  {valorSelecionado === v.valor && (
                    <div className="absolute top-3 right-3 w-5 h-5 bg-[#8EBF24] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#010D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Note about higher values */}
            <div className="flex items-start gap-3 px-5 py-4 bg-[#8EBF24]/06 border border-[#8EBF24]/18 rounded-xl mb-4">
              <div className="w-1 min-h-[20px] h-full bg-[#548C1C] rounded-full flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#2E590E]/80 leading-relaxed">
                <span className="font-bold text-[#0C2605]">
                  Deseja contribuir com valores acima de R$ 50?
                </span>{" "}
                Para doações maiores, convidamos você a participar de um de nossos programas
                sociais. Entre em contato e nossa equipe orientará o melhor caminho.{" "}
                <a
                  href="https://wa.me/5592985220682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#2E590E] underline underline-offset-2 hover:text-[#0C2605] transition-colors"
                >
                  Fale conosco pelo WhatsApp
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            MÉTODOS DE PAGAMENTO
        ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#F9FAF7] relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EBF24]/20 to-transparent" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#010D00] mb-3 tracking-tight">
                Como Realizar a Doação
              </h2>
              <p className="text-[#2E590E]/65 text-base">
                Disponibilizamos dois métodos seguros de pagamento
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* ── PIX ─────────────────────────────── */}
              <div className="bg-white border border-[#8EBF24]/25 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#548C1C]/08 transition-all duration-300">

                {/* Header */}
                <div className="px-7 py-5 border-b border-[#8EBF24]/15 flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#0C2605] rounded-xl flex items-center justify-center flex-shrink-0">
                    {/* PIX icon */}
                    <svg className="w-5 h-5 text-[#8EBF24]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.25 2.26a4 4 0 0 0-4.5 0L3.5 6.5A4 4 0 0 0 2 9.88v4.24a4 4 0 0 0 1.5 3.13l6.25 4.24a4 4 0 0 0 4.5 0l6.25-4.24A4 4 0 0 0 22 14.12V9.88a4 4 0 0 0-1.5-3.38Z" opacity=".15"/>
                      <path d="m8.41 15.59 1.17-1.17a2 2 0 0 1 2.83 0l1.17 1.17a2 2 0 0 0 2.83 0l.71-.71a2 2 0 0 0 0-2.83l-1.17-1.17a2 2 0 0 1 0-2.83l1.17-1.17a2 2 0 0 0 0-2.83l-.71-.71a2 2 0 0 0-2.83 0l-1.17 1.17a2 2 0 0 1-2.83 0L8.41 3.33a2 2 0 0 0-2.83 0l-.71.71a2 2 0 0 0 0 2.83l1.17 1.17a2 2 0 0 1 0 2.83L4.87 12.04a2 2 0 0 0 0 2.83l.71.71a2 2 0 0 0 2.83 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-black text-[#010D00] text-lg">PIX</h3>
                    <p className="text-xs text-[#548C1C]/70 font-medium">Transferência instantânea</p>
                  </div>
                </div>

                <div className="p-7 space-y-5">

                  {/* QR Code */}
                  <div className="flex flex-col items-center">
                    <p className="text-xs font-bold text-[#548C1C]/60 uppercase tracking-widest mb-4">
                      Escaneie o QR Code
                    </p>
                    <div className="relative w-52 h-52 rounded-2xl overflow-hidden border-2 border-[#8EBF24]/20 shadow-md">
                      <Image
                        src="/qr_code.png"
                        alt="QR Code PIX — IAPOAM"
                        fill
                        className="object-contain p-2 bg-white"
                      />
                    </div>
                    <p className="text-xs text-[#2E590E]/50 mt-3">
                      Abra o app do seu banco e escaneie
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-[#8EBF24]/15" />
                    <span className="text-xs text-[#548C1C]/40 font-semibold uppercase tracking-widest">ou copie a chave</span>
                    <div className="flex-1 h-px bg-[#8EBF24]/15" />
                  </div>

                  {/* Chave PIX */}
                  <div className="p-4 bg-[#F9FAF7] border border-[#8EBF24]/20 rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#548C1C]/60 uppercase tracking-wider">
                        Chave PIX — CNPJ
                      </span>
                      <CopyBtn texto="13.955.659/0001-43" chave="pix" />
                    </div>
                    <p className="font-mono text-sm font-bold text-[#010D00]">
                      13.955.659/0001-43
                    </p>
                  </div>

                  {/* Favorecido */}
                  <div className="p-4 bg-[#F9FAF7] border border-[#8EBF24]/15 rounded-xl">
                    <p className="text-xs font-bold text-[#548C1C]/60 uppercase tracking-wider mb-1">
                      Favorecido
                    </p>
                    <p className="text-sm font-semibold text-[#010D00] leading-snug">
                      Instituto de Apoio aos Povos Originários da Amazônia — IAPOAM
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Depósito Bancário ─────────────────── */}
              <div className="bg-white border border-[#8EBF24]/25 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#548C1C]/08 transition-all duration-300">

                {/* Header */}
                <div className="px-7 py-5 border-b border-[#8EBF24]/15 flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#0C2605] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#8EBF24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h1v11H4zm7 0h1v11h-1zm7 0h1v11h-1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-black text-[#010D00] text-lg">Depósito Bancário</h3>
                    <p className="text-xs text-[#548C1C]/70 font-medium">Transferência / TED / DOC</p>
                  </div>
                </div>

                <div className="p-7 space-y-3">

                  {/* Banco */}
                  <div className="p-4 bg-[#F9FAF7] border border-[#8EBF24]/15 rounded-xl">
                    <p className="text-xs font-bold text-[#548C1C]/60 uppercase tracking-wider mb-1">Banco</p>
                    <p className="text-sm font-bold text-[#010D00]">Caixa Econômica Federal</p>
                  </div>

                  {/* Agência + Operação */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-[#F9FAF7] border border-[#8EBF24]/15 rounded-xl">
                      <p className="text-xs font-bold text-[#548C1C]/60 uppercase tracking-wider mb-1">Agência</p>
                      <p className="font-mono text-sm font-bold text-[#010D00]">1549</p>
                    </div>
                    <div className="p-4 bg-[#F9FAF7] border border-[#8EBF24]/15 rounded-xl">
                      <p className="text-xs font-bold text-[#548C1C]/60 uppercase tracking-wider mb-1">Operação</p>
                      <p className="font-mono text-sm font-bold text-[#010D00]">1292</p>
                    </div>
                  </div>

                  {/* Conta */}
                  <div className="p-4 bg-[#F9FAF7] border border-[#8EBF24]/20 rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#548C1C]/60 uppercase tracking-wider">
                        Conta Corrente
                      </span>
                      <CopyBtn texto="000573362875-4" chave="conta" />
                    </div>
                    <p className="font-mono text-sm font-bold text-[#010D00]">000573362875-4</p>
                  </div>

                  {/* Favorecido */}
                  <div className="p-4 bg-[#F9FAF7] border border-[#8EBF24]/15 rounded-xl">
                    <p className="text-xs font-bold text-[#548C1C]/60 uppercase tracking-wider mb-1">Favorecido</p>
                    <p className="text-sm font-semibold text-[#010D00] leading-snug">
                      Instituto de Apoio aos Povos Originários da Amazônia — IAPOAM
                    </p>
                  </div>

                  {/* CNPJ */}
                  <div className="p-4 bg-[#F9FAF7] border border-[#8EBF24]/15 rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#548C1C]/60 uppercase tracking-wider">CNPJ</span>
                      <CopyBtn texto="13.955.659/0001-43" chave="cnpj2" />
                    </div>
                    <p className="font-mono text-sm font-bold text-[#010D00]">13.955.659/0001-43</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            TRANSPARÊNCIA
        ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-[#8EBF24]/20" />
              <span className="text-xs font-bold text-[#548C1C]/50 uppercase tracking-widest">
                Por que confiar no IAPOAM
              </span>
              <div className="flex-1 h-px bg-[#8EBF24]/20" />
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {[
                {
                  titulo: "Organização registrada",
                  descricao:
                    "CNPJ 13.955.659/0001-43, com situação cadastral regular e ativa perante a Receita Federal do Brasil.",
                },
                {
                  titulo: "Utilidade Pública",
                  descricao:
                    "Reconhecida como Utilidade Pública Municipal (Lei 515/2022) e Estadual (Lei 4.757/2019) pelo Governo do Amazonas.",
                },
                {
                  titulo: "Transparência total",
                  descricao:
                    "Relatórios financeiros e prestação de contas disponíveis para consulta pública. Gestão auditável e responsável.",
                },
                {
                  titulo: "Doação 100% destinada",
                  descricao:
                    "Todos os recursos recebidos são integralmente aplicados nos projetos e comunidades atendidas pelo instituto.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 bg-white border border-[#8EBF24]/20 rounded-2xl shadow-sm hover:shadow-md hover:border-[#548C1C]/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#8EBF24]/12 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-[#2E590E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#010D00] text-sm mb-1">{item.titulo}</h4>
                    <p className="text-xs text-[#2E590E]/65 leading-relaxed">{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom credentials */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-[#8EBF24]/15">
              <div className="text-center">
                <p className="text-[10px] font-bold text-[#010D00]/35 uppercase tracking-widest mb-0.5">CNPJ</p>
                <p className="text-sm font-semibold text-[#0C2605]">13.955.659/0001-43</p>
              </div>
              <div className="hidden sm:block w-px h-7 bg-[#8EBF24]/20" />
              <div className="text-center">
                <p className="text-[10px] font-bold text-[#010D00]/35 uppercase tracking-widest mb-0.5">Fundação</p>
                <p className="text-sm font-semibold text-[#0C2605]">15 de fevereiro de 2011</p>
              </div>
              <div className="hidden sm:block w-px h-7 bg-[#8EBF24]/20" />
              <div className="text-center">
                <p className="text-[10px] font-bold text-[#010D00]/35 uppercase tracking-widest mb-0.5">Reconhecimento</p>
                <p className="text-sm font-semibold text-[#0C2605]">Utilidade Pública Municipal e Estadual</p>
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
          <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Dúvidas sobre como doar?
            </h2>
            <p className="text-white/75 mb-8 text-base leading-relaxed">
              Nossa equipe está disponível para orientá-lo. Fale conosco diretamente
              pelo WhatsApp.
            </p>
            <a
              href="https://wa.me/5592985220682"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0C2605] font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}