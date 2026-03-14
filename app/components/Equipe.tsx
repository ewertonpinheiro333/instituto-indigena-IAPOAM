"use client";

import Image from "next/image";

const team = [
  {
    name: "Kamila Katusawa Mura",
    role: "Diretora Presidente",
    roleTag: "bg-[#8EBF24]/20 text-[#ffffff] border-[#8EBF24]/40",
    bio: "Liderança indígena da etnia Mura, Kamila Katusawa conduz o instituto com visão estratégica e profundo enraizamento nos valores culturais dos povos originários. Sua atuação une tradição e modernidade na gestão do IAPOAM.",
    photo: "/kamilaequipe.png",
  },
  {
    name: "Felipe Sateré",
    role: "Coordenador de Cultura",
    roleTag: "bg-[#548C1C]/15 text-[#ffffff] border-[#548C1C]/35",
    bio: "Pertencente à etnia Sateré-Mawé, Felipe traz ao instituto sua expertise em gestão financeira aliada ao entendimento das necessidades reais das comunidades indígenas. Garante a sustentabilidade econômica dos programas do IAPOAM.",
    photo: "/felipeequipe.png",
  },
  {
    name: "Adenilson Santos Mura",
    role: "Conselho Fiscal",
    roleTag: "bg-[#2E590E]/12 text-[#ffffff] border-[#2E590E]/30",
    bio: "Membro atuante do Conselho Fiscal, Adenilson, da etnia Mura, assegura a probidade e transparência na administração do instituto. Sua presença no conselho fortalece a representatividade indígena na governança da organização.",
    photo: "/adenilsonequipe.png",
  },
  {
    name: "Maria Satere",
    role: "Conselho Fiscal",
    roleTag: "bg-[#2E590E]/12 text-[#ffffff] border-[#2E590E]/30",
    bio: "Maria representa a voz feminina indígena no Conselho Fiscal do IAPOAM. Com sua experiência comunitária e comprometimento com a boa gestão, contribui para a credibilidade e integridade das ações do instituto.",
    photo: "/mariaequipe.png",
  },
  {
    name: "Marcos Barcelar",
    role: "Advogado do Instituto",
    roleTag: "bg-[#0C2605]/10 text-[#ffffff] border-[#0C2605]/20",
    bio: "Advogado especializado em direitos indígenas e ambientais, Marcos atua na defesa jurídica do instituto e das comunidades que representa. Seu trabalho é fundamental para garantir que os direitos dos povos originários sejam respeitados na esfera legal.",
    photo: "/marcosequipe.png",
  },
  {
    name: "Eleuza Leal",
    role: "Membro da Equipe",
    roleTag: "bg-[#548C1C]/15 text-[#ffffff] border-[#548C1C]/35",
    bio: "Eleuza integra a equipe do IAPOAM com dedicação ao fortalecimento das ações sociais e culturais junto às comunidades indígenas. Sua atuação contribui diretamente para a execução dos projetos e para o apoio às famílias atendidas pelo instituto.",
    photo: "/eleuzaequipe.png",
  },
  
];

export function Equipe() {
  return (
    <section id="equipe" className="py-20 bg-[#010D00] relative overflow-hidden scroll-mt-24">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2E590E]/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#548C1C]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0C2605]/80 border border-[#2E590E]/50 rounded-full mb-5">
            <div className="w-2 h-2 bg-[#8EBF24] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#8EBF24] tracking-wide">Nossa Equipe</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Quem Faz o IAPOAM
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Pessoas comprometidas com os povos originários, unindo liderança indígena,
            expertise técnica e dedicação social
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-[#0C2605]/40 border border-[#2E590E]/35 rounded-3xl overflow-hidden hover:border-[#548C1C]/60 hover:bg-[#0C2605]/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#010D00]/60 transition-all duration-300"
            >
              {/* Photo area */}
              <div className="relative h-60 overflow-hidden bg-[#0C2605]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2605] via-[#0C2605]/10 to-transparent" />

                {/* Role badge */}
                <div className="absolute bottom-3 left-4">
                  <span className={`inline-flex items-center px-3 py-1 text-xs font-bold rounded-full border backdrop-blur-sm ${member.roleTag}`}>
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-base font-bold text-white mb-3 leading-tight group-hover:text-[#8EBF24] transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#548C1C] to-[#8EBF24] rounded-full mb-3 group-hover:w-16 transition-all duration-300" />
                <p className="text-sm text-white/55 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="text-white/30 text-sm">
            Uma equipe diversa, plural e comprometida com a Amazônia e seus povos.
          </p>
        </div>
      </div>
    </section>
  );
}