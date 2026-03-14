"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.instagram.com/institutoindigena_iapoam/",
      label: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      href: "https://www.facebook.com/povosindigenasiapoam",
      label: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      href: "https://www.youtube.com/@iapoamindigenas9690",
      label: "YouTube",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#010D00] border-t border-[#2E590E]/30">

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#8EBF24]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main footer grid ── */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Col 1: Brand — spans 2 on lg ── */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              
              <div>
                <span className="block text-lg font-bold text-white leading-tight">IAPOAM</span>
                <span className="block text-[10px] text-white/40 font-medium tracking-wide uppercase leading-tight">
                  Instituto Indígena 
                </span>
              </div>
            </Link>

            <h3 className="text-sm font-bold text-white/80 mb-3 leading-snug">
              Instituto de Apoio aos Povos Originários da Amazônia
            </h3>

            <p className="text-white/50 leading-relaxed mb-6 text-sm max-w-sm">
              Desde 2011, promovemos inclusão, defesa de direitos e sustentabilidade
              para etnias indígenas e quilombolas da Amazônia.
            </p>

            {/* Certification badge */}
            <div className="inline-flex items-center gap-3 bg-[#0C2605]/80 border border-[#2E590E]/40 rounded-xl px-4 py-3 mb-4">
              <div className="w-5 h-5 bg-[#548C1C] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white text-sm leading-tight">Utilidade Pública</div>
                <div className="text-xs text-white/50">Municipal e Estadual</div>
              </div>
            </div>

            <p className="text-xs text-white/40 font-medium">
              CNPJ: 13.955.659/0001-43
            </p>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div>
            <h4 className="text-xs font-bold text-[#8EBF24] uppercase tracking-widest mb-6">
              Navegação
            </h4>

            <ul className="space-y-4">
              {[
                { href: "/", label: "Início" },
                { href: "/quem-somos", label: "Quem Somos" },
                { href: "/doacoes", label: "Fazer uma Doação" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-white/55 hover:text-[#8EBF24] transition-colors duration-200"
                  >
                    <span className="w-1 h-1 bg-[#2E590E] rounded-full group-hover:w-2.5 group-hover:bg-[#8EBF24] transition-all duration-200 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social icons below nav links */}
            <div className="mt-8">
              <h5 className="text-xs font-bold text-[#8EBF24] uppercase tracking-widest mb-4">
                Redes Sociais
              </h5>
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center w-9 h-9 bg-[#0C2605]/70 text-white/50 hover:bg-[#2E590E] hover:text-white border border-[#2E590E]/40 hover:border-[#548C1C] rounded-lg transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Col 3: Contact ── */}
          <div>
            <h4 className="text-xs font-bold text-[#8EBF24] uppercase tracking-widest mb-6">
              Contato
            </h4>

            <ul className="space-y-5">
              {/* Address */}
              <li>
                <a
                  href="https://maps.google.com/?q=R.+Saldanha+Marinho,+793+Centro+Manaus+AM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0C2605]/70 border border-[#2E590E]/35 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-[#2E590E]/50 transition-colors">
                    <svg className="w-4 h-4 text-[#8EBF24]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-0.5">Endereço</p>
                    <p className="text-sm text-white/60 group-hover:text-[#8EBF24] transition-colors leading-relaxed">
                      R. Saldanha Marinho, 793<br />
                      Centro — Manaus/AM<br />
                      CEP 69010-040
                    </p>
                  </div>
                </a>
              </li>

              {/* Phone */}
              <li>
                <a
                  href="tel:+5592985220682"
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0C2605]/70 border border-[#2E590E]/35 rounded-lg flex items-center justify-center group-hover:bg-[#2E590E]/50 transition-colors">
                    <svg className="w-4 h-4 text-[#8EBF24]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-0.5">Telefone</p>
                    <p className="text-sm text-white/60 group-hover:text-[#8EBF24] transition-colors font-medium">
                      (92) 98522-0682
                    </p>
                  </div>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:iapoamindigena1@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0C2605]/70 border border-[#2E590E]/35 rounded-lg flex items-center justify-center group-hover:bg-[#2E590E]/50 transition-colors">
                    <svg className="w-4 h-4 text-[#8EBF24]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-0.5">E-mail</p>
                    <p className="text-sm text-white/60 group-hover:text-[#8EBF24] transition-colors break-all">
                      iapoamindigena1@gmail.com
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-[#2E590E]/25" />

        {/* ── Bottom bar ── */}
        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="text-center md:text-left">
            <p className="text-white/45 text-sm">
              © {currentYear} IAPOAM — Todos os direitos reservados.
            </p>
            <p className="text-white/30 text-xs mt-0.5">
              Desenvolvido com dedicação para os povos originários da Amazônia
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 px-4 py-2 bg-[#0C2605]/60 border border-[#2E590E]/35 rounded-lg text-sm text-white/45 hover:text-[#8EBF24] hover:border-[#548C1C]/50 hover:bg-[#0C2605] transition-all duration-200"
          >
            Voltar ao topo
            <svg
              className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

      

      </div>
    </footer>
  );
}