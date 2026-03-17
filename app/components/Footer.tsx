"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://www.instagram.com/institutoindigena_iapoam/", label: "Instagram", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>) },
    { href: "https://www.facebook.com/povosindigenasiapoam", label: "Facebook", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>) },
    { href: "https://www.youtube.com/@iapoamindigenas9690", label: "YouTube", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>) },
  ];

  return (
    <footer className="bg-[#13181b] border-t border-[#02c718]/10">

      <div className="h-px bg-gradient-to-r from-transparent via-[#02c718]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div>
                <span className="block text-lg font-black text-[#e9ebea] leading-tight tracking-tight">IAPOAM</span>
                <span className="block text-[10px] text-[#e9ebea]/30 font-medium tracking-widest uppercase leading-tight">Instituto Indígena</span>
              </div>
            </Link>
            <h3 className="text-sm font-bold text-[#e9ebea]/65 mb-3 leading-snug">
              Instituto de Apoio aos Povos Originários da Amazônia
            </h3>
            <p className="text-[#e9ebea]/40 leading-relaxed mb-6 text-sm max-w-sm">
              Desde 2011, promovemos inclusão, defesa de direitos e sustentabilidade para
              etnias indígenas e quilombolas da Amazônia.
            </p>
            <div className="inline-flex items-center gap-3 border border-[#02c718]/20
                            bg-[#02c718]/06 rounded-xl px-4 py-3 mb-4">
              <span className="w-1.5 h-1.5 bg-[#02c718] rounded-full flex-shrink-0" />
              <div>
                <div className="font-bold text-[#e9ebea]/75 text-sm leading-tight">Utilidade Pública</div>
                <div className="text-xs text-[#e9ebea]/35">Municipal e Estadual</div>
              </div>
            </div>
            <p className="text-xs text-[#e9ebea]/25 font-medium">CNPJ: 13.955.659/0001-43</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[10px] font-bold text-[#02c718]/60 uppercase tracking-widest mb-6">Navegação</h4>
            <ul className="space-y-4">
              {[{ href: "/", label: "Início" }, { href: "/quem-somos", label: "Quem Somos" }, { href: "/doacoes", label: "Fazer uma Doação" }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-[#e9ebea]/40
                               hover:text-[#e9ebea]/75 transition-colors duration-200">
                    <span className="w-1 h-1 bg-[#02c718]/30 rounded-full
                                     group-hover:bg-[#02c718] group-hover:w-2.5
                                     transition-all duration-300 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h5 className="text-[10px] font-bold text-[#02c718]/60 uppercase tracking-widest mb-4">Redes Sociais</h5>
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="flex items-center justify-center w-9 h-9 text-[#e9ebea]/35
                               hover:text-[#02c718] border border-[#e9ebea]/06
                               hover:border-[#02c718]/30 hover:bg-[#02c718]/08
                               rounded-lg transition-all duration-300">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold text-[#02c718]/60 uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-5">
              <li>
                <a href="https://maps.google.com/?q=R.+Saldanha+Marinho,+793+Centro+Manaus+AM" target="_blank" rel="noopener noreferrer" className="group">
                  <p className="text-[10px] font-bold text-[#e9ebea]/25 uppercase tracking-wider mb-1">Endereço</p>
                  <p className="text-sm text-[#e9ebea]/40 group-hover:text-[#e9ebea]/65 transition-colors leading-relaxed">
                    R. Saldanha Marinho, 793<br />Centro — Manaus/AM
                  </p>
                </a>
              </li>
              <li>
                <a href="tel:+5592985220682" className="group">
                  <p className="text-[10px] font-bold text-[#e9ebea]/25 uppercase tracking-wider mb-1">Telefone</p>
                  <p className="text-sm text-[#e9ebea]/40 group-hover:text-[#e9ebea]/65 transition-colors font-medium">(92) 98522-0682</p>
                </a>
              </li>
              <li>
                <a href="mailto:iapoamindigena1@gmail.com" className="group">
                  <p className="text-[10px] font-bold text-[#e9ebea]/25 uppercase tracking-wider mb-1">E-mail</p>
                  <p className="text-sm text-[#e9ebea]/40 group-hover:text-[#e9ebea]/65 transition-colors break-all">iapoamindigena1@gmail.com</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e9ebea]/05" />

        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#e9ebea]/28 text-sm">© {currentYear} IAPOAM — Todos os direitos reservados.</p>
            <p className="text-[#e9ebea]/15 text-xs mt-0.5">Desenvolvido com dedicação para os povos originários da Amazônia</p>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 px-4 py-2 border border-[#e9ebea]/08 rounded-lg
                       text-sm text-[#e9ebea]/28 hover:text-[#02c718] hover:border-[#02c718]/25
                       transition-all duration-200">
            Voltar ao topo
            <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}