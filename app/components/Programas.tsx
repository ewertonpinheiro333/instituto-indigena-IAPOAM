"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── Paleta — design system v3 ────────────────────────────────────────────────
// Background:        #0f2912
// Superfícies card:  rgba(22,61,28,…) derivado de #163d1c
// Verde vivo:        #4FDE1B
// Verde claro:       #A8E6A1
// Amarelo-ouro:      #F4C430
// Botão primário:    #C1440E → hover #F4C430
// Texto:             rgba(240,255,240,…) branco-esverdeado
// ─────────────────────────────────────────────────────────────────────────────

const programs = [
  {
    id: "maloca-digital",
    tag: "Inclusão Digital",
    title: "Maloca Digital",
    subtitle: "Conectando Povos Originários ao Mundo Digital",
    image: "/malocadigital.png",
    imageAlt: "Família indígena utilizando computadores e tablets na maloca",
    description:
      "O IAPOAM leva o mundo digital até as comunidades indígenas da Amazônia por meio de doações de computadores, criação de pontos de conectividade e capacitação tecnológica — sem que as aldeias percam sua identidade cultural. A inclusão digital é tratada como um direito fundamental dos povos originários, não como um privilégio.",
    highlight:
      "Em 2023, o Governo do Amazonas entregou 20 computadores ao instituto e a diversas associações indígenas, promovendo comunicação, acesso a informações e novas formas de geração de renda. Como destacou o diretor-presidente da Fepiam: \'a inclusão digital é fundamental para o desenvolvimento dos povos indígenas\'.",
    actions: [
      "Doação e instalação de computadores nas aldeias",
      "Capacitação em informática básica e navegação na internet",
      "Criação de pontos de conectividade comunitários",
      "Oficinas de ferramentas digitais para cidadania e renda",
      "Acesso a serviços públicos online para comunidades remotas",
      "Fortalecimento da autonomia e etnodesenvolvimento digital",
    ],
    impact: "Mais de 200 famílias indígenas capacitadas digitalmente",
    accentColor: "#4FDE1B",
  },
  {
    id: "pescadores",
    tag: "Pesca Artesanal",
    title: "Pescadores",
    subtitle: "Proteção e Fortalecimento da Pesca Indígena",
    image: "/pescadores.png",
    imageAlt: "Pescadores indígenas em barco nos rios da Amazônia",
    description:
      "Os rios da Amazônia são fonte de vida, sustento e espiritualidade para milhares de famílias indígenas. O programa de apoio aos Pescadores do IAPOAM atua na garantia dos territórios pesqueiros tradicionais, no fortalecimento das técnicas ancestrais de pesca e na inserção responsável da produção no mercado, sempre respeitando os ciclos naturais e a sustentabilidade ambiental.",
    highlight:
      "A pesca artesanal indígena é patrimônio vivo da Amazônia. Nosso programa combina o saber milenar dos povos originários com boas práticas de manejo pesqueiro, garantindo que os rios continuem sendo fonte de vida para as gerações futuras.",
    actions: [
      "Suporte técnico para práticas de pesca sustentável e certificada",
      "Defesa dos territórios e direitos pesqueiros tradicionais",
      "Apoio à comercialização ética e justa da produção pesqueira",
      "Capacitação em manejo e conservação dos recursos hídricos",
      "Documentação e preservação dos saberes ancestrais da pesca",
      "Acesso a crédito e políticas públicas para pescadores indígenas",
    ],
    impact: "Apoio a dezenas de famílias ribeirinhas e pescadores indígenas",
    accentColor: "#4FDE1B",
  },
  {
    id: "agricultores",
    tag: "Agricultura Sustentável",
    title: "Agricultores",
    subtitle: "Soberania Alimentar e Manejo da Floresta",
    image: "/agricultores.png",
    imageAlt: "Indígena cultivando mudas em viveiro na Amazônia",
    description:
      "A terra é sagrada para os povos indígenas. O programa de apoio aos Agricultores do IAPOAM valoriza as práticas tradicionais de cultivo e promove a segurança alimentar das comunidades, aliando os conhecimentos ancestrais com técnicas agroecológicas modernas — garantindo que a floresta seja produtiva sem ser destruída.",
    highlight:
      "Nossas ações unem o conhecimento milenar dos povos originários com a agroecologia contemporânea. Assim, fortalecemos a soberania alimentar das comunidades e abrimos novas oportunidades de geração de renda, sempre preservando a biodiversidade amazônica.",
    actions: [
      "Assessoria técnica em agroecologia e agricultura orgânica certificada",
      "Fortalecimento de hortas comunitárias e roças tradicionais",
      "Capacitação em técnicas de conservação e recuperação do solo",
      "Apoio à comercialização de produtos da sociobiodiversidade amazônica",
      "Promoção de feiras e mercados locais de produtores indígenas",
      "Implantação de viveiros comunitários para espécies nativas",
    ],
    impact: "Segurança alimentar fortalecida em diversas comunidades do Amazonas",
    accentColor: "#4FDE1B",
  },
  {
    id: "artesaos",
    tag: "Arte & Cultura",
    title: "Artesãos",
    subtitle: "Preservação e Valorização da Arte dos Povos Originários",
    image: "/artesoes.png",
    imageAlt: "Mulheres indígenas exibindo cestaria artesanal tradicional",
    description:
      "O artesanato indígena é muito mais do que um produto — é uma linguagem cultural que transmite histórias, espiritualidade e identidade dos povos originários. Cada peça carrega séculos de conhecimento, técnica e cosmologia. O programa do IAPOAM fortalece a produção, preserva as técnicas tradicionais e abre novos canais de comercialização que valorizam de forma justa o trabalho dos artistas indígenas.",
    highlight:
      "A arte indígena não é folclore — é ciência, filosofia e resistência. Ao conectar artesãos amazônicos a mercados nacionais e internacionais com preços justos e comércio ético, o IAPOAM garante que a cultura dos povos originários seja reconhecida, respeitada e economicamente sustentável.",
    actions: [
      "Fortalecimento e transmissão das técnicas tradicionais de artesanato",
      "Criação de canais justos de comercialização e exposição cultural",
      "Oficinas de criação com materiais naturais e sustentáveis da floresta",
      "Documentação e preservação do patrimônio artístico indígena",
      "Feiras culturais e exposições para valorização da arte ancestral",
      "Certificação de origem e autenticidade das peças artesanais",
    ],
    impact: "Geração de renda e valorização da identidade cultural indígena",
    accentColor: "#4FDE1B",
  },
  {
    id: "habitacao",
    tag: "Habitação",
    title: "Minha Casa, Minha Vida Rural",
    subtitle: "Moradia Digna para Famílias Indígenas no Amazonas",
    image: "/habitacao.png",
    imageAlt: "Família indígena recebendo chave de nova residência do programa habitacional",
    description:
      "O IAPOAM conquistou um marco histórico na luta por moradia digna para os povos indígenas: a aprovação e execução do programa Minha Casa, Minha Vida Rural — a primeira iniciativa habitacional do governo federal dedicada exclusivamente a indígenas no estado do Amazonas. Em 2023, o instituto, filiado à Plenária Nacional por Moradia, garantiu a contemplação de 70 unidades habitacionais para Manaus e região.",
    highlight:
      "Associados do IAPOAM com mensalidade em dia, que participam ativamente das atividades do instituto e estão com cadastro regularizado, são contemplados pelo programa. Nossa equipe, liderada por Rosana, percorre residência por residência levando informações e acompanhando cada família no processo de conquista da sua moradia.",
    actions: [
      "70 unidades habitacionais aprovadas para Manaus — Amazonas",
      "Atendimento presencial toda quinta-feira, com agendamento",
      "Cadastramento e regularização de associados para acesso ao benefício",
      "Acompanhamento individualizado de cada família contemplada",
      "Visitas domiciliares para orientação e coleta de documentação",
      "Articulação com governo federal para ampliação do programa",
    ],
    impact: "70 famílias indígenas contempladas com moradia digna em Manaus",
    accentColor: "#F4C430",
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export function Programas() {
  return (
    <section
      id="programas"
      className="relative overflow-hidden scroll-mt-24"
      style={{
        background: "#0f2912",
        paddingTop: "7rem",
        paddingBottom: "8rem",
      }}
    >
      {/* ══ ATMOSFERA ════════════════════════════════════════════════ */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-160px", right: "-200px",
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(79,222,27,0.08) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-120px", left: "-160px",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(244,196,48,0.07) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(8,22,10,0.35) 0%, transparent 50%, rgba(5,14,7,0.25) 100%)",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.026 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots-prog" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#4FDE1B" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-prog)" />
      </svg>
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(79,222,27,0.22) 30%, rgba(79,222,27,0.48) 50%, rgba(79,222,27,0.22) 70%, transparent)",
        }}
      />

      {/* ══ CONTEÚDO ══════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── CABEÇALHO ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(27,94,32,0.50)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
              style={{ background: "#4FDE1B", boxShadow: "0 0 6px rgba(79,222,27,0.75)" }}
            />
            <span
              className="font-semibold uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.20em", color: "rgba(168,230,161,0.88)" }}
            >
              Programas
            </span>
          </div>

          <h2
            className="font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              color: "rgba(240,255,240,0.97)",
              letterSpacing: "-0.02em",
            }}
          >
            Nossas Ações pelas{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #4FDE1B 0%, #A8E6A1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Comunidades Indígenas
            </span>
          </h2>

          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "1.05rem", color: "rgba(240,255,240,0.60)" }}
          >
            Conheça os programas que o IAPOAM desenvolve para fortalecer a autonomia,
            a cultura e o etnodesenvolvimento dos povos originários do Amazonas.
          </p>
        </motion.div>

        {/* ── LISTA DE PROGRAMAS — scroll vertical ──────────────────── */}
        <div className="flex flex-col gap-28">
          {programs.map((program, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Separador decorativo entre programas */}
                {index > 0 && (
                  <div
                    className="absolute -top-14 left-1/2 -translate-x-1/2 pointer-events-none"
                    style={{ width: "1px", height: "56px" }}
                  >
                    <div
                      style={{
                        width: "1px",
                        height: "100%",
                        background: "linear-gradient(180deg, transparent, rgba(79,222,27,0.30), transparent)",
                      }}
                    />
                  </div>
                )}

                <div
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
                >
                  {/* ── Imagem ── */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full lg:w-5/12 flex-shrink-0"
                  >
                    <div
                      className="relative overflow-hidden"
                      style={{
                        borderRadius: "24px",
                        boxShadow: "0 20px 60px rgba(8,22,10,0.55), 0 0 0 1px rgba(79,222,27,0.12)",
                      }}
                    >
                      {/* Tag flutuante */}
                      <div
                        className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                        style={{
                          background: "rgba(8,22,10,0.82)",
                          border: "1px solid rgba(79,222,27,0.35)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: program.accentColor, boxShadow: `0 0 6px ${program.accentColor}99` }}
                        />
                        <span
                          className="font-semibold uppercase"
                          style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(168,230,161,0.90)" }}
                        >
                          {program.tag}
                        </span>
                      </div>

                      {/* Número do programa */}
                      <div
                        className="absolute bottom-4 right-4 z-10 flex items-center justify-center"
                        style={{
                          width: "44px", height: "44px",
                          borderRadius: "50%",
                          background: "rgba(8,22,10,0.85)",
                          border: "1px solid rgba(79,222,27,0.25)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <span
                          className="font-bold"
                          style={{ fontSize: "14px", color: program.accentColor }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <Image
                        src={program.image}
                        alt={program.imageAlt}
                        width={560}
                        height={420}
                        className="w-full object-cover"
                        style={{ aspectRatio: "4/3", display: "block" }}
                      />

                      {/* Overlay gradiente base */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: "linear-gradient(180deg, transparent 55%, rgba(8,22,10,0.28) 100%)",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* ── Conteúdo ── */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full lg:w-7/12 flex flex-col gap-6"
                  >
                    {/* Título */}
                    <div>
                      <h3
                        className="font-bold leading-tight mb-1"
                        style={{
                          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                          color: "rgba(240,255,240,0.97)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {program.title}
                      </h3>
                      <p
                        className="font-medium"
                        style={{
                          fontSize: "0.95rem",
                          color: program.accentColor,
                          letterSpacing: "0.01em",
                          opacity: 0.85,
                        }}
                      >
                        {program.subtitle}
                      </p>
                    </div>

                    {/* Descrição */}
                    <p
                      className="leading-relaxed"
                      style={{ fontSize: "1rem", color: "rgba(240,255,240,0.72)", lineHeight: "1.75" }}
                    >
                      {program.description}
                    </p>

                    {/* Destaque / Citação */}
                    <div
                      className="relative pl-5"
                      style={{
                        borderLeft: `3px solid ${program.accentColor}`,
                      }}
                    >
                      <p
                        className="leading-relaxed italic"
                        style={{ fontSize: "0.93rem", color: "rgba(240,255,240,0.58)", lineHeight: "1.70" }}
                      >
                        {program.highlight}
                      </p>
                    </div>

                    {/* Ações */}
                    <div
                      className="rounded-2xl p-5"
                      style={{
                        background: "rgba(22,61,28,0.55)",
                        border: "1px solid rgba(79,222,27,0.12)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <p
                        className="font-bold uppercase mb-4"
                        style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(168,230,161,0.60)" }}
                      >
                        Nossas Ações
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {program.actions.map((action, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5"
                            style={{
                              padding: "0.65rem 0.75rem",
                              background: "rgba(15,41,18,0.55)",
                              border: "1px solid rgba(255,255,255,0.06)",
                              borderRadius: "10px",
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                              style={{
                                background: program.accentColor,
                                boxShadow: `0 0 5px ${program.accentColor}77`,
                              }}
                            />
                            <span
                              className="text-sm leading-snug"
                              style={{ color: "rgba(240,255,240,0.70)", lineHeight: "1.55" }}
                            >
                              {action}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impacto + CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      {/* Pill de impacto */}
                      <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full flex-shrink-0"
                        style={{
                          background: "rgba(27,94,32,0.45)",
                          border: "1px solid rgba(79,222,27,0.22)",
                        }}
                      >
                        <svg
                          className="w-4 h-4 flex-shrink-0"
                          fill="none" viewBox="0 0 24 24" stroke="#4FDE1B" strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span
                          className="font-semibold"
                          style={{ fontSize: "12px", color: "rgba(168,230,161,0.90)" }}
                        >
                          {program.impact}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>

      {/* ══ WAVE DE SAÍDA ════════════════════════════════════════════ */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 72 L0 32 C200 4 400 56 720 32 C1040 8 1280 52 1440 28 L1440 72 Z"
            fill="rgba(8,22,10,0.30)"
            transform="translate(0,3)"
          />
          <path
            d="M0 72 L0 32 C200 4 400 56 720 32 C1040 8 1280 52 1440 28 L1440 72 Z"
            fill="#0f2912"
          />
        </svg>
      </div>
    </section>
  );
}