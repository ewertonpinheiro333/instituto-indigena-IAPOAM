"use client";

import Link from "next/link";
import { useState } from "react";

const documents = [
  {
    title: "Relatório Anual 2024",
    description: "Prestação de contas completa do ano fiscal",
    category: "Relatórios",
    size: "2.4 MB",
    date: "Janeiro 2025"
  },
  {
    title: "Demonstrativo Financeiro",
    description: "Balanço patrimonial e demonstração de resultados",
    category: "Financeiro",
    size: "1.8 MB",
    date: "Dezembro 2024"
  },
  {
    title: "Certificados e Títulos",
    description: "Utilidade Pública Municipal e Estadual",
    category: "Certificações",
    size: "956 KB",
    date: "2024"
  },
  {
    title: "Estatuto Social",
    description: "Documento de constituição e normas",
    category: "Institucional",
    size: "1.2 MB",
    date: "Atualizado 2024"
  },
];

const certifications = [
  {
    title: "Utilidade Pública Municipal",
    description: "Certificado pela Prefeitura de Manaus",
    status: "Ativo"
  },
  {
    title: "Utilidade Pública Estadual",
    description: "Certificado pelo Governo do Amazonas",
    status: "Ativo"
  },
  {
    title: "CNPJ Regular",
    description: "Situação cadastral ativa",
    status: "Regular"
  },
  {
    title: "Prestação de Contas",
    description: "Relatórios públicos e auditados",
    status: "Em dia"
  },
];

export function Transparency() {
  const [activeTab, setActiveTab] = useState<'info' | 'docs' | 'certs'>('info');

  return (
    <section id="transparency" className="min-h-screen bg-gradient-to-br from-[#132a13] to-[#31572c] py-8 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header - Compacto */}
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#f8f9fa] mb-2">
            Transparência Total
          </h2>
          <p className="text-sm text-[#f8f9fa]/80 max-w-2xl mx-auto">
            Acreditamos que a transparência é fundamental para construir confiança
          </p>
        </div>

        {/* Navegação por Tabs - Estilo Tablet */}
        <div className="bg-[#132a13]/50 backdrop-blur-sm rounded-2xl p-2 mb-6 border border-[#4f772d]/30">
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === 'info'
                  ? 'bg-gradient-to-r from-[#4f772d] to-[#31572c] text-[#f8f9fa] shadow-lg'
                  : 'text-[#f8f9fa]/70 hover:text-[#f8f9fa] hover:bg-[#31572c]/30'
              }`}
            >
              Informações
            </button>
            <button
              onClick={() => setActiveTab('docs')}
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === 'docs'
                  ? 'bg-gradient-to-r from-[#4f772d] to-[#31572c] text-[#f8f9fa] shadow-lg'
                  : 'text-[#f8f9fa]/70 hover:text-[#f8f9fa] hover:bg-[#31572c]/30'
              }`}
            >
              Documentos
            </button>
            <button
              onClick={() => setActiveTab('certs')}
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === 'certs'
                  ? 'bg-gradient-to-r from-[#4f772d] to-[#31572c] text-[#f8f9fa] shadow-lg'
                  : 'text-[#f8f9fa]/70 hover:text-[#f8f9fa] hover:bg-[#31572c]/30'
              }`}
            >
              Certificações
            </button>
          </div>
        </div>

        {/* Conteúdo das Tabs */}
        <div className="bg-[#132a13]/30 backdrop-blur-sm rounded-2xl border border-[#4f772d]/30 overflow-hidden">
          
          {/* Tab: Informações Institucionais */}
          {activeTab === 'info' && (
            <div className="p-6 animate-fadeIn">
              {/* CNPJ Card */}
              <div className="bg-gradient-to-br from-[#4f772d] to-[#31572c] rounded-xl p-6 mb-6 shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[#f8f9fa]">
                    <h3 className="text-xl font-bold mb-4">Informações Institucionais</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold">CNPJ:</span> 13.955.659/0001-43</p>
                      <p><span className="font-semibold">Fundação:</span> 15 de fevereiro de 2011</p>
                      <p><span className="font-semibold">Natureza:</span> Organização Apartidária e Não Religiosa</p>
                    </div>
                  </div>
                  <Link
                    href="https://www.gov.br/receitafederal/pt-br"
                    target="_blank"
                    className="flex-shrink-0 px-4 py-2 bg-[#f8f9fa] text-[#132a13] font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    Verificar
                  </Link>
                </div>
              </div>

              {/* Trust Stats - Grid Compacto */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-[#31572c]/50 rounded-xl p-4 text-center border border-[#4f772d]/30">
                  <div className="text-2xl font-bold text-[#f8f9fa] mb-1">100%</div>
                  <div className="text-xs text-[#f8f9fa]/70">Documentos Públicos</div>
                </div>
                <div className="bg-[#31572c]/50 rounded-xl p-4 text-center border border-[#4f772d]/30">
                  <div className="text-2xl font-bold text-[#f8f9fa] mb-1">15+</div>
                  <div className="text-xs text-[#f8f9fa]/70">Anos de Prestação</div>
                </div>
                <div className="bg-[#31572c]/50 rounded-xl p-4 text-center border border-[#4f772d]/30">
                  <div className="text-2xl font-bold text-[#f8f9fa] mb-1">0</div>
                  <div className="text-xs text-[#f8f9fa]/70">Pendências</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/transparencia"
                  className="bg-gradient-to-r from-[#4f772d] to-[#31572c] text-[#f8f9fa] font-semibold rounded-xl px-4 py-3 text-center hover:shadow-lg transition-all duration-300 text-sm"
                >
                  Portal Completo
                </Link>
                <Link
                  href="/ouvidoria"
                  className="bg-[#31572c]/50 text-[#f8f9fa] font-semibold rounded-xl px-4 py-3 text-center border border-[#4f772d]/50 hover:bg-[#31572c] transition-all duration-300 text-sm"
                >
                  Ouvidoria
                </Link>
              </div>
            </div>
          )}

          {/* Tab: Documentos */}
          {activeTab === 'docs' && (
            <div className="p-6 animate-fadeIn">
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="bg-[#31572c]/50 rounded-xl p-4 border border-[#4f772d]/30 hover:bg-[#31572c]/70 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#4f772d] to-[#31572c] rounded-lg flex items-center justify-center text-[#f8f9fa] text-lg font-bold">
                        D
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="text-sm font-bold text-[#f8f9fa]">{doc.title}</h4>
                          <span className="text-xs text-[#f8f9fa]/60 ml-2">{doc.size}</span>
                        </div>
                        <p className="text-xs text-[#f8f9fa]/70 mb-2">{doc.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-[#4f772d]/40 text-[#f8f9fa] text-xs rounded-full">
                              {doc.category}
                            </span>
                            <span className="text-xs text-[#f8f9fa]/60">{doc.date}</span>
                          </div>
                          <button className="p-2 bg-[#4f772d]/40 text-[#f8f9fa] hover:bg-[#4f772d] rounded-lg transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/transparencia"
                  className="inline-flex items-center text-[#f8f9fa] hover:text-[#4f772d] transition-colors text-sm font-medium"
                >
                  Ver todos os documentos
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          )}

          {/* Tab: Certificações */}
          {activeTab === 'certs' && (
            <div className="p-6 animate-fadeIn">
              <div className="grid grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-[#31572c]/50 rounded-xl p-4 border border-[#4f772d]/30 hover:bg-[#31572c]/70 transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#4f772d] to-[#31572c] rounded-xl text-[#f8f9fa] mb-3 text-xl font-bold">
                        ✓
                      </div>
                      <h4 className="text-sm font-bold text-[#f8f9fa] mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#f8f9fa]/70 mb-3">
                        {cert.description}
                      </p>
                      <span className="inline-block px-3 py-1 bg-[#4f772d]/40 text-[#f8f9fa] text-xs font-medium rounded-full">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-[#f8f9fa]/60">
            Última atualização: Janeiro 2025 • Todos os documentos são públicos e auditados
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(79, 119, 45, 0.1);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(79, 119, 45, 0.5);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(79, 119, 45, 0.7);
        }
      `}</style>
    </section>
  );
}