"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/Card";
import { motion } from "framer-motion";

export default function Transparencia() {
  return (
    <div className="min-h-screen bg-[#244A32]">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#C9C85E] mb-6">
            Transparência e Prestação de Contas
          </h1>
          <p className="text-lg md:text-xl text-[#A8DADC] max-w-3xl mx-auto">
            Comprometidos com a transparência total. Acesse relatórios financeiros, distribuição de recursos, certificações e parcerias.
          </p>
        </motion.section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#C9C85E] mb-8 text-center">
            Relatórios Financeiros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-[#C9C85E] mb-4">
                Relatório Anual 2023
              </h3>
              <a
                href="/downloads/relatorio-2023.pdf"
                download
                className="inline-block px-6 py-3 bg-[#2F9B77] text-white rounded-full hover:bg-[#88A53C] transition"
              >
                Download PDF
              </a>
            </Card>

            <Card className="text-center hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-[#C9C85E] mb-4">
                Relatório Anual 2024
              </h3>
              <a
                href="/downloads/relatorio-2024.pdf"
                download
                className="inline-block px-6 py-3 bg-[#2F9B77] text-white rounded-full hover:bg-[#88A53C] transition"
              >
                Download PDF
              </a>
            </Card>

            <Card className="text-center hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-[#C9C85E] mb-4">
                Relatório Anual 2025
              </h3>
              <a
                href="/downloads/relatorio-2025.pdf"
                download
                className="inline-block px-6 py-3 bg-[#2F9B77] text-white rounded-full hover:bg-[#88A53C] transition"
              >
                Download PDF
              </a>
            </Card>
            {/* Adicione mais relatórios conforme necessário */}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#C9C85E] mb-8 text-center">
            Distribuição de Recursos
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold text-[#C9C85E]">50%</p>
                  <p className="text-lg text-[#A8DADC] mt-2">Assistência Social</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#C9C85E]">30%</p>
                  <p className="text-lg text-[#A8DADC] mt-2">Cultura Indígena</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#C9C85E]">20%</p>
                  <p className="text-lg text-[#A8DADC] mt-2">Sustentabilidade</p>
                </div>
              </div>
              {/* Futuro: gráfico com Chart.js ou similar */}
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#C9C85E] mb-8 text-center">
            Certificações e Parcerias
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <ul className="space-y-4 text-[#A8DADC] text-lg">
                <li className="flex items-start">
                  <span className="text-[#C9C85E] mr-3">•</span>
                  Utilidade Pública Estadual (Lei 4.757/2019)
                </li>
                <li className="flex items-start">
                  <span className="text-[#C9C85E] mr-3">•</span>
                  Utilidade Pública Municipal (PL 380/2021)
                </li>
                <li className="flex items-start">
                  <span className="text-[#C9C85E] mr-3">•</span>
                  Parcerias institucionais: SEJUSC Amazonas, FEPIAM, Secretaria Municipal da Mulher, Assistência Social e Cidadania
                </li>
                <li className="flex items-start">
                  <span className="text-[#C9C85E] mr-3">•</span>
                  CNPJ: 13.955.659/0001-43
                </li>
              </ul>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}