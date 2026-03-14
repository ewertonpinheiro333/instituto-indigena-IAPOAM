"use client";

import Link from "next/link";

export function OuvidoriaTeaser() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#132a13] via-[#1a1a1a] to-[#132a13] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4f772d] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#90a955] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#4f772d]/10 backdrop-blur-sm border border-[#4f772d]/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#ecf39e] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#ecf39e]">
              Canal Seguro e Confidencial
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Canal de Denúncias
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Denuncie abusos, discriminação e violações de direitos indígenas com segurança
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl mb-8">
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-5 rounded-xl bg-[#4f772d]/10 border border-[#4f772d]/20 hover:border-[#90a955]/40 transition-all duration-300">
              <h3 className="text-base font-semibold text-white mb-1">Formulário</h3>
              <p className="text-sm text-white/60">Relato escrito</p>
            </div>
            
            <div className="text-center p-5 rounded-xl bg-[#4f772d]/10 border border-[#4f772d]/20 hover:border-[#90a955]/40 transition-all duration-300">
              <h3 className="text-base font-semibold text-white mb-1">Vídeo</h3>
              <p className="text-sm text-white/60">Formato visual</p>
            </div>
            
            <div className="text-center p-5 rounded-xl bg-[#4f772d]/10 border border-[#4f772d]/20 hover:border-[#90a955]/40 transition-all duration-300">
              <h3 className="text-base font-semibold text-white mb-1">Áudio</h3>
              <p className="text-sm text-white/60">Relato em voz</p>
            </div>
          </div>

          {/* Confidentiality */}
          <div className="bg-gradient-to-r from-[#4f772d]/20 to-[#90a955]/10 rounded-xl p-5 border-l-4 border-[#ecf39e] mb-6">
            <h4 className="text-base font-bold text-white mb-1">
              Confidencialidade Garantida
            </h4>
            <p className="text-sm text-white/70">
              Todos os relatos são tratados com sigilo. Você pode permanecer anônimo.
            </p>
          </div>

          {/* Report Types */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2">
              {["Discriminação", "Preconceito", "Violência", "Abusos", "Violação de Direitos"].map((type) => (
                <span
                  key={type}
                  className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-white/80 text-sm font-medium hover:border-[#90a955]/40 hover:bg-[#4f772d]/10 transition-all"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/ouvidoria"
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#4f772d] to-[#90a955] hover:from-[#90a955] hover:to-[#4f772d] text-white font-semibold text-lg rounded-full shadow-lg shadow-[#4f772d]/30 hover:shadow-xl hover:shadow-[#90a955]/40 hover:scale-105 transition-all duration-300"
          >
            Acessar Canal de Denúncias
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <p className="text-white/60 text-sm mt-4">
            Denúncias analisadas por equipe especializada
          </p>
        </div>

      </div>
    </section>
  );
}