"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Paleta — design system v3 ────────────────────────────────────────────────
// Seção dark — vem após Presidente (#4FDE1B) e volta ao escuro
// Background:        #0f2912  (continua o wave de saída do Presidente)
// Superfícies card:  #163d1c  (verde-floresta escuro — substitui #1a2519)
// Verde vivo:        #4FDE1B
// Verde claro:       #A8E6A1
// Amarelo-ouro:      #F4C430  (badges de etnia / destaques)
// Texto:             rgba(240,255,240,…) branco-esverdeado
// Wave de saída:     #0f2912 (mesma seção dark)
// ─────────────────────────────────────────────────────────────────────────────

const team = [
  {
    name: "Kamila Katusawa Mura",
    role: "Diretora Presidente",
    photo: "/kamilaequipe.png",
    bio: "Liderança indígena da etnia Mura, Kamila Katusawa conduz o instituto com visão estratégica e profundo enraizamento nos valores culturais dos povos originários. Sua atuação une tradição e modernidade na gestão do IAPOAM.",
    etnia: "Etnia Mura",
  },
  {
    name: "Felipe Sateré",
    role: "Coordenador de Cultura",
    photo: "/felipeequipe.png",
    bio: "Pertencente à etnia Sateré-Mawé, Felipe traz ao instituto sua expertise em gestão financeira aliada ao entendimento das necessidades reais das comunidades indígenas. Garante a sustentabilidade econômica dos programas do IAPOAM.",
    etnia: "Etnia Sateré-Mawé",
  },
  {
    name: "Adenilson Santos Mura",
    role: "Conselho Fiscal",
    photo: "/adenilsonequipe.png",
    bio: "Membro atuante do Conselho Fiscal, Adenilson, da etnia Mura, assegura a probidade e transparência na administração do instituto. Sua presença no conselho fortalece a representatividade indígena na governança da organização.",
    etnia: "Etnia Mura",
  },
  {
    name: "Maria Satere",
    role: "Conselho Fiscal",
    photo: "/mariaequipe.png",
    bio: "Maria representa a voz feminina indígena no Conselho Fiscal do IAPOAM. Com sua experiência comunitária e comprometimento com a boa gestão, contribui para a credibilidade e integridade das ações do instituto.",
    etnia: "Etnia Sateré",
  },
  {
    name: "Marcos Barcelar",
    role: "Advogado do Instituto",
    photo: "/marcosequipe.png",
    bio: "Advogado especializado em direitos indígenas e ambientais, Marcos atua na defesa jurídica do instituto e das comunidades que representa. Seu trabalho é fundamental para garantir que os direitos dos povos originários sejam respeitados na esfera legal.",
    etnia: "Jurídico",
  },
  {
    name: "Eleuza Leal",
    role: "Membro da Equipe",
    photo: "/eleuzaequipe.png",
    bio: "Eleuza integra a equipe do IAPOAM com dedicação ao fortalecimento das ações sociais e culturais junto às comunidades indígenas. Sua atuação contribui diretamente para a execução dos projetos e para o apoio às famílias atendidas pelo instituto.",
    etnia: "Equipe Social",
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export function Equipe() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="equipe"
      className="relative overflow-hidden scroll-mt-24"
      style={{
        background: "#0f2912",          // continua do wave do Presidente
        paddingTop: "6rem",
        paddingBottom: "8rem",
      }}
    >

      {/* ══ ATMOSFERA ════════════════════════════════════════════════ */}

      {/* Blob topo-direito — verde vivo */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-160px", right: "-180px",
          width: "560px", height: "560px",
          background: "radial-gradient(circle, rgba(79,222,27,0.08) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />
      {/* Blob base-esquerdo — ouro suave */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-120px", left: "-150px",
          width: "460px", height: "460px",
          background: "radial-gradient(circle, rgba(244,196,48,0.07) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Dot-pattern sutil */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.028 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots-equipe" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#4FDE1B" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-equipe)" />
      </svg>

      {/* Linha de entrada — verde vivo */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(79,222,27,0.20) 30%, rgba(79,222,27,0.42) 50%, rgba(79,222,27,0.20) 70%, transparent)",
        }}
      />

      {/* ══ CONTEÚDO ══════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── CABEÇALHO ──────────────────────────────────────────────── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(27,94,32,0.50)",          // #1B5E20 translúcido
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
              style={{ background: "#4FDE1B", boxShadow: "0 0 6px rgba(79,222,27,0.75)" }}
            />
            <span
              className="font-semibold uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.20em", color: "rgba(168,230,161,0.88)" }}
            >
              Nossa Equipe
            </span>
          </div>

          {/* Título h2 */}
          <h2
            className="font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
              letterSpacing: "-0.025em",
              color: "#ffffff",
            }}
          >
            Quem Faz o{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(88deg, #4FDE1B 0%, #A8E6A1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 12px rgba(79,222,27,0.25))",
              }}
            >
              IAPOAM
            </span>
          </h2>

          {/* Linha decorativa */}
          <div className="flex justify-center mb-5">
            <div
              className="h-0.5 w-14 rounded-full"
              style={{ background: "linear-gradient(90deg, #1B5E20, #4FDE1B)" }}
            />
          </div>

          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(240,255,240,0.52)", lineHeight: "1.75" }}
          >
            Pessoas comprometidas com os povos originários, unindo liderança
            indígena, expertise técnica e dedicação social.
          </p>
        </motion.div>

        {/* ── GRID DE CARDS ───────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.10,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden transition-all duration-300"
              style={{
                background: "#163d1c",                   // verde-floresta escuro
                border: "1px solid rgba(79,222,27,0.10)",
                borderRadius: "20px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform   = "translateY(-5px)";
                el.style.borderColor = "rgba(79,222,27,0.28)";
                el.style.boxShadow   = "0 16px 44px rgba(8,22,10,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform   = "translateY(0)";
                el.style.borderColor = "rgba(79,222,27,0.10)";
                el.style.boxShadow   = "none";
              }}
            >
              {/* ── Foto ── */}
              <div
                className="relative overflow-hidden"
                style={{ height: "224px", background: "#0f2912" }}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradiente de caption */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,41,18,0.92) 0%, rgba(15,41,18,0.18) 50%, transparent 100%)",
                  }}
                />

                {/* Badges sobre a foto */}
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">

                  {/* Role badge — branco sobre escuro */}
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full font-bold uppercase"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      background: "rgba(240,255,240,0.92)",
                      color: "#0f2912",
                      backdropFilter: "blur(4px)",
                      WebkitBackdropFilter: "blur(4px)",
                    }}
                  >
                    {member.role}
                  </span>

                  {/* Etnia badge — amarelo-ouro (substitui neon) */}
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full font-semibold"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.06em",
                      background: "rgba(244,196,48,0.15)",
                      border: "1px solid rgba(244,196,48,0.38)",
                      color: "#F4C430",
                      backdropFilter: "blur(4px)",
                      WebkitBackdropFilter: "blur(4px)",
                    }}
                  >
                    {member.etnia}
                  </span>
                </div>
              </div>

              {/* ── Informações ── */}
              <div className="p-6">
                {/* Nome h3 */}
                <h3
                  className="font-semibold leading-snug mb-2 transition-colors duration-250"
                  style={{
                    fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
                    letterSpacing: "-0.01em",
                    color: "#ffffff",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#4FDE1B";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  }}
                >
                  {member.name}
                </h3>

                {/* Traço decorativo — expande no hover do card */}
                <div
                  className="h-0.5 mb-3 rounded-full transition-all duration-500 group-hover:w-10"
                  style={{
                    width: "20px",
                    background: "linear-gradient(90deg, #1B5E20, #4FDE1B)",
                  }}
                />

                {/* Bio */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(240,255,240,0.55)", lineHeight: "1.70" }}
                >
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── RODAPÉ DA SEÇÃO ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4 mt-14"
        >
          <div
            className="h-px w-48"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(79,222,27,0.25), transparent)",
            }}
          />
          <p
            className="text-xs tracking-wide text-center"
            style={{ color: "rgba(240,255,240,0.38)", letterSpacing: "0.06em" }}
          >
            Uma equipe diversa, plural e comprometida com a Amazônia e seus povos.
          </p>
        </motion.div>
      </div>

      {/* ══ WAVE DE SAÍDA — dark → dark ═══════════════════════════════ */}
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
            d="M0 72 L0 28 C180 6 420 60 720 36 C1020 12 1260 58 1440 28 L1440 72 Z"
            fill="rgba(8,22,10,0.22)"
            transform="translate(0,3)"
          />
          <path
            d="M0 72 L0 28 C180 6 420 60 720 36 C1020 12 1260 58 1440 28 L1440 72 Z"
            fill="#0f2912"
          />
        </svg>
      </div>
    </section>
  );
}