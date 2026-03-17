"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bloqueia scroll do body quando menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const whatsappHref = "https://wa.me/5592985220682";

  const navLinks = [
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/#equipe",    label: "Nossa Equipe" },
    { href: "/#programas", label: "Nossos Programas" },
  ];

  const socialLinks = [
    {
      name: "Instagram", href: "https://www.instagram.com/institutoindigena_iapoam/",
      icon: (<svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>),
    },
    {
      name: "Facebook", href: "https://www.facebook.com/povosindigenasiapoam",
      icon: (<svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>),
    },
    {
      name: "YouTube", href: "https://www.youtube.com/@iapoamindigenas9690",
      icon: (<svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>),
    },
  ];

  const WhatsAppIcon = () => (
    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  return (
    <>
      {/* Skip link acessibilidade */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(13,22,16,0.97)"
            : "rgba(13,22,16,0.78)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(179,248,1,0.14)"
            : "1px solid rgba(179,248,1,0.06)",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.35)" : "none",
        }}
      >
        {/* Linha neon no topo — sempre presente, sinal identitário */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #016b14 15%, #b3f801 50%, #016b14 85%, transparent 100%)",
            opacity: scrolled ? 0.9 : 0.5,
            transition: "opacity 0.5s",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-20" style={{ height: scrolled ? "72px" : "80px", transition: "height 0.4s" }}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group" aria-label="IAPOAM — Início">
              <div
                className="relative transition-transform duration-300 group-hover:scale-105"
                style={{
                  width: scrolled ? "52px" : "60px",
                  height: scrolled ? "52px" : "60px",
                  transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                  filter: "brightness(0) invert(1)",
                }}
              >
             
              </div>
              <div className="hidden sm:block">
                <span className="block text-base font-black tracking-tight leading-none" style={{ color: "#f8faf7" }}>IAPOAM</span>
                <span className="block text-[10px] font-medium tracking-[0.15em] uppercase leading-tight" style={{ color: "rgba(179,248,1,0.55)" }}>Instituto Indígena</span>
              </div>
            </Link>

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{ color: "rgba(248,250,247,0.70)", letterSpacing: "0.01em" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#f8faf7";
                    (e.currentTarget as HTMLElement).style.background = "rgba(248,250,247,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(248,250,247,0.70)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Direita desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Sociais */}
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{ color: "rgba(248,250,247,0.40)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#b3f801";
                    (e.currentTarget as HTMLElement).style.background = "rgba(179,248,1,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(248,250,247,0.40)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg transition-all duration-200"
                style={{ color: "rgba(248,250,247,0.40)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#b3f801";
                  (e.currentTarget as HTMLElement).style.background = "rgba(179,248,1,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(248,250,247,0.40)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <WhatsAppIcon />
              </a>

              {/* Divisor */}
              <div className="w-px h-5 mx-2" style={{ background: "rgba(248,250,247,0.12)" }} />

              {/* CTA Doação */}
              <Link
                href="/doacoes"
                className="btn-primary text-[13px]"
                style={{ padding: "10px 22px" }}
              >
                Doar Agora
              </Link>
            </div>

            {/* Mobile — ações rápidas */}
            <div className="flex lg:hidden items-center gap-1">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg transition-all"
                style={{ color: "rgba(248,250,247,0.55)" }}
              >
                <WhatsAppIcon />
              </a>
              <button
                className="p-2 rounded-lg transition-all"
                style={{ color: "rgba(248,250,247,0.55)" }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          id="mobile-menu"
          className="lg:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isOpen ? "480px" : "0",
            opacity: isOpen ? 1 : 0,
            borderTop: isOpen ? "1px solid rgba(179,248,1,0.10)" : "none",
            background: "rgba(13,22,16,0.99)",
            backdropFilter: "blur(20px)",
          }}
          aria-hidden={!isOpen}
        >
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" role="navigation" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center py-3 px-4 text-sm font-medium rounded-xl transition-all"
                style={{ color: "rgba(248,250,247,0.70)" }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(248,250,247,0.07)";
                  (e.currentTarget as HTMLElement).style.color = "#f8faf7";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "rgba(248,250,247,0.70)";
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0"
                  style={{ background: "rgba(179,248,1,0.50)" }}
                />
                {link.label}
              </Link>
            ))}

            {/* Sociais mobile */}
            <div className="flex items-center justify-center gap-2 py-4" style={{ borderTop: "1px solid rgba(248,250,247,0.06)" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-3 rounded-xl transition-all"
                  style={{ color: "rgba(248,250,247,0.45)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* CTA mobile */}
            <Link
              href="/doacoes"
              className="btn-primary w-full justify-center text-sm"
              onClick={() => setIsOpen(false)}
            >
              Doar Agora
            </Link>
            <div className="pb-2" />
          </nav>
        </div>
      </header>
    </>
  );
}