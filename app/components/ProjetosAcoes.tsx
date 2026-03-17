"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// ─── Paleta — design system v3 ────────────────────────────────────────────────
// Seção escura (intercalada após InstitutionalBanner claro)
// Background:        #0f2912  (continua do wave de saída do InstitutionalBanner)
// Superfícies card:  rgba(27,94,32,…) = #1B5E20
// Verde vivo:        #4FDE1B
// Verde claro:       #A8E6A1
// Amarelo-ouro:      #F4C430  (destaques numéricos, contadores)
// Laranja botão:     #C1440E → hover #F4C430
// Texto:             rgba(240,255,240,…) branco-esverdeado
// ─────────────────────────────────────────────────────────────────────────────

// ─── Image list ───────────────────────────────────────────────────────────────
const images = [
  { src: "/images/projects/acao_001.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_002.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_003.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_004.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_005.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_006.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_008.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_009.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_010.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_011.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_012.jfif", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_013.jfif", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_014.jfif", alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_015.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_016.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_017.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_018.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_019.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_020.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_021.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_022.jpg",  alt: "Ação IAPOAM" },
  { src: "/images/projects/acao_023.jpg",  alt: "Ação IAPOAM" },
];

const slides = images.map((img) => ({ src: img.src, alt: img.alt }));

// ─── Dot ─────────────────────────────────────────────────────────────────────
function DotButton({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Ir para slide"
      className="rounded-full transition-all duration-300"
      style={{
        width:      selected ? "24px" : "8px",
        height:     "8px",
        background: selected ? "#4FDE1B" : "rgba(240,255,240,0.18)",  // verde vivo ativo
      }}
    />
  );
}

// ─── Botão prev / next ────────────────────────────────────────────────────────
function NavBtn({
  side,
  onClick,
  label,
  children,
}: {
  side: "left" | "right";
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10
                 flex items-center justify-center rounded-full
                 transition-all duration-250"
      style={{
        [side]: "12px",
        background: "rgba(27,94,32,0.82)",              // #1B5E20 com alpha
        border: "1px solid rgba(255,255,255,0.12)",
        color: "rgba(240,255,240,0.65)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background  = "rgba(79,222,27,0.20)";   // verde vivo suave
        el.style.borderColor = "rgba(79,222,27,0.45)";
        el.style.color       = "#4FDE1B";
        el.style.transform   = "translateY(-50%) scale(1.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background  = "rgba(27,94,32,0.82)";
        el.style.borderColor = "rgba(255,255,255,0.12)";
        el.style.color       = "rgba(240,255,240,0.65)";
        el.style.transform   = "translateY(-50%) scale(1)";
      }}
    >
      {children}
    </button>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export function ProjetosAcoes() {
  const autoplay = Autoplay({ delay: 5000, stopOnInteraction: true });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [autoplay]);
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps]     = useState<number[]>([]);
  const [lightboxOpen, setLightboxOpen]   = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!thumbApi || !emblaApi) return;
    emblaApi.on("select", () => thumbApi.scrollTo(emblaApi.selectedScrollSnap()));
  }, [emblaApi, thumbApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo   = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0f2912", paddingTop: "6rem", paddingBottom: "6rem" }}
    >

      {/* ── Glows de atmosfera ─────────────────────────────────────── */}
      {/* Blob direito — verde vivo */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%", right: "-140px",
          width: "520px", height: "520px",
          background: "radial-gradient(circle, rgba(79,222,27,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      {/* Blob esquerdo — ouro suave */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "15%", left: "-140px",
          width: "480px", height: "480px",
          background: "radial-gradient(circle, rgba(244,196,48,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6"
            style={{
              background: "rgba(27,94,32,0.50)",          // #1B5E20 translúcido
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
              style={{ background: "#4FDE1B", boxShadow: "0 0 6px rgba(79,222,27,0.75)" }}
            />
            <span
              className="font-semibold uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.16em", color: "rgba(168,230,161,0.90)" }}
            >
              Galeria
            </span>
          </div>

          {/* Título h2 */}
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.025em",
              lineHeight: "1.15",
              color: "#ffffff",
            }}
          >
            Projetos e{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(88deg, #4FDE1B 0%, #A8E6A1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 12px rgba(79,222,27,0.28))",
              }}
            >
              Ações
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(240,255,240,0.52)", lineHeight: "1.75" }}
          >
            Registros das nossas ações junto às comunidades indígenas da Amazônia.
            Clique em qualquer foto para ampliar.
          </p>
        </motion.div>

        {/* ── Carrossel principal ─────────────────────────────────────── */}
        <div className="relative mb-3">

          {/* Track Embla */}
          <div
            ref={emblaRef}
            className="overflow-hidden"
            style={{
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <div className="flex touch-pan-y">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative flex-[0_0_100%] min-w-0 cursor-zoom-in"
                  onClick={() => openLightbox(i)}
                >
                  {/* Imagem */}
                  <div
                    className="relative"
                    style={{ aspectRatio: "16/9", background: "#0a1e0d" }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover select-none"
                      priority={i === 0}
                      sizes="(max-width: 1280px) 100vw, 1152px"
                      draggable={false}
                    />

                    {/* Gradiente do caption */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(15,41,18,0.92) 0%, rgba(15,41,18,0.18) 45%, transparent 100%)",
                      }}
                    />

                    {/* Hint de zoom */}
                    <div
                      className="absolute inset-0 flex items-center justify-center
                                  opacity-0 hover:opacity-100 transition-opacity duration-300
                                  pointer-events-none"
                    >
                      <div
                        className="flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{
                          background: "rgba(27,94,32,0.80)",
                          border: "1px solid rgba(79,222,27,0.42)",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                        }}
                      >
                        <svg
                          className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" strokeWidth={2}
                          style={{ color: "#4FDE1B" }} aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        <span
                          className="font-bold uppercase"
                          style={{ fontSize: "10px", letterSpacing: "0.16em", color: "#4FDE1B" }}
                        >
                          Ampliar
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div
                    className="absolute bottom-0 left-0 right-0 pointer-events-none"
                    style={{ padding: "clamp(1.5rem, 4vw, 2.5rem)" }}
                  >
                    {/* Tag contador — ouro como destaque numérico */}
                    <span
                      className="inline-flex items-center gap-2 rounded-full mb-3"
                      style={{
                        padding: "5px 12px",
                        background: "rgba(27,94,32,0.65)",
                        border: "1px solid rgba(244,196,48,0.32)",   // borda ouro
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase" as const,
                        color: "#F4C430",                             // amarelo-ouro
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "#F4C430" }}
                      />
                      IAPOAM em Campo — {i + 1} / {images.length}
                    </span>

                    <p
                      className="text-sm md:text-base leading-relaxed max-w-2xl"
                      style={{ color: "rgba(240,255,240,0.72)", lineHeight: "1.65" }}
                    >
                      Atuando diretamente junto às comunidades indígenas da Amazônia na defesa
                      de direitos, fortalecimento cultural e promoção do bem-estar social.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <NavBtn side="left" onClick={scrollPrev} label="Anterior">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </NavBtn>

          <NavBtn side="right" onClick={scrollNext} label="Próxima">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </NavBtn>

          {/* Barra de progresso — verde vivo como fill */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: "2px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "0 0 20px 20px",
            }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${((selectedIndex + 1) / images.length) * 100}%`,
                background: "linear-gradient(to right, #1B5E20, #4FDE1B)",
              }}
            />
          </div>
        </div>

        {/* ── Thumbnail strip ─────────────────────────────────────────── */}
        <div ref={thumbRef} className="overflow-hidden mb-6">
          <div className="flex gap-2">
            {images.map((img, i) => {
              const isActive = i === selectedIndex;
              return (
                <button
                  key={i}
                  onClick={() => { scrollTo(i); openLightbox(i); }}
                  aria-label={`Foto ${i + 1}`}
                  className="relative flex-shrink-0 overflow-hidden
                             transition-all duration-300"
                  style={{
                    flexBasis: "calc(25% - 6px)",
                    aspectRatio: "1 / 1",
                    borderRadius: "10px",
                    outline: isActive
                      ? "2px solid #4FDE1B"                // verde vivo no ativo
                      : "1px solid rgba(255,255,255,0.08)",
                    outlineOffset: isActive ? "2px" : "0",
                    opacity:   isActive ? 1    : 0.35,
                    transform: isActive ? "scale(1.04)" : "scale(1)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.opacity   = "0.72";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.opacity   = "0.35";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    }
                  }}
                >
                  <Image
                    src={img.src} alt={img.alt} fill
                    className="object-cover" sizes="120px"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Dots ────────────────────────────────────────────────────── */}
        <div className="flex justify-center items-center gap-1.5">
          {scrollSnaps.map((_, i) => (
            <DotButton key={i} selected={i === selectedIndex} onClick={() => scrollTo(i)} />
          ))}
        </div>
      </div>

      {/* ── Lightbox — fundo verde-floresta escuro ──────────────────── */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Zoom, Thumbnails]}
        zoom={{ maxZoomPixelRatio: 3, zoomInMultiplier: 2 }}
        thumbnails={{
          position: "bottom",
          width: 80,
          height: 52,
          border: 2,
          borderRadius: 8,
          padding: 4,
          gap: 8,
          vignette: true,
        }}
        styles={{ container: { backgroundColor: "rgba(15,41,18,0.97)" } }}
        carousel={{ finite: false }}
      />
    </section>
  );
}