"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const galleryImages = [
  { 
    src: "/images/projects/acao_001.jpg", 
    alt: "Projeto Maloca - IAPOAM",
    title: "Projeto Maloca",
    description: "Espaço de valorização cultural e ancestralidade indígena",
    category: "Projetos"
  },
  { 
    src: "/images/projects/acao_002.jpg", 
    alt: "Inclusão Digital - IAPOAM",
    title: "Inclusão Digital",
    description: "Tecnologia e conhecimento ao alcance dos povos originários",
    category: "Ações"
  },
  { 
    src: "/images/projects/acao_003.jpg", 
    alt: "Projeto Cuiam - IAPOAM",
    title: "Projeto Cuiam",
    description: "Fortalecimento da identidade e autonomia indígena",
    category: "Projetos"
  },
  { 
    src: "/images/projects/acao_004.jpg", 
    alt: "Cidadania - IAPOAM",
    title: "Ações de Cidadania",
    description: "Garantindo direitos e dignidade para todos",
    category: "Ações"
  },
  { 
    src: "/images/projects/acao_005.jpg", 
    alt: "Cidadania - IAPOAM",
    title: "Ações de Cidadania",
    description: "Garantindo direitos e dignidade para todos",
    category: "Ações"
  },
  { 
    src: "/images/projects/acao_006.jpg", 
    alt: "Cidadania - IAPOAM",
    title: "Ações de Cidadania",
    description: "Garantindo direitos e dignidade para todos",
    category: "Ações"
  },
  { 
    src: "/images/projects/acao_008.jpg", 
    alt: "Equipe IAPOAM",
    title: "Nossa História",
    description: "15 anos de dedicação aos povos originários da Amazônia",
    category: "História"
  }
];

export function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrent(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentImage = galleryImages[current];

  return (
    <section className="py-20 bg-[#132a13] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#4f772d] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#31572c] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#31572c]/50 backdrop-blur-sm border border-[#4f772d]/30 rounded-full mb-4">
            <span className="text-sm font-medium text-[#f8f9fa]">
              Nossa Galeria
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#f8f9fa] mb-4 tracking-tight">
            Exposição Visual
          </h2>
          <p className="text-lg text-[#f8f9fa]/80 max-w-3xl mx-auto leading-relaxed">
            Conheça os projetos, ações e histórias que transformam vidas e preservam culturas na Amazônia
          </p>
        </div>

        {/* Main Gallery Container */}
        <div className="max-w-6xl mx-auto">
          {/* Featured Image Display */}
          <div className="relative mb-8">
            <div className="relative overflow-hidden rounded-3xl bg-[#31572c]/40 backdrop-blur-sm border border-[#4f772d]/30 shadow-2xl shadow-[#4f772d]/20">
              {/* Image Container */}
              <div className="relative aspect-[16/9]">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#132a13]/90 via-[#132a13]/30 to-transparent"></div>
              </div>

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center px-3 py-1 bg-[#4f772d]/80 backdrop-blur-sm rounded-full mb-3">
                    <span className="text-xs font-semibold text-[#f8f9fa] uppercase tracking-wider">
                      {currentImage.category}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#f8f9fa] mb-2">
                    {currentImage.title}
                  </h3>
                  <p className="text-lg text-[#f8f9fa]/90">
                    {currentImage.description}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-[#31572c]/80 backdrop-blur-sm hover:bg-[#4f772d] text-[#f8f9fa] rounded-full border border-[#4f772d]/40 shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-[#31572c]/80 backdrop-blur-sm hover:bg-[#4f772d] text-[#f8f9fa] rounded-full border border-[#4f772d]/40 shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform" />
              </button>

              {/* Counter Badge */}
              <div className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-[#31572c]/80 backdrop-blur-sm border border-[#4f772d]/40 text-[#f8f9fa] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {current + 1} / {galleryImages.length}
              </div>

              {/* Control Buttons */}
              <div className="absolute top-4 lg:top-6 left-4 lg:left-6 flex gap-2">
                <button
                  onClick={toggleAutoPlay}
                  className="w-10 h-10 bg-[#31572c]/80 backdrop-blur-sm hover:bg-[#4f772d] text-[#f8f9fa] rounded-full border border-[#4f772d]/40 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  aria-label={isAutoPlaying ? "Pausar apresentação" : "Reproduzir apresentação"}
                >
                  {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="w-10 h-10 bg-[#31572c]/80 backdrop-blur-sm hover:bg-[#4f772d] text-[#f8f9fa] rounded-full border border-[#4f772d]/40 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  aria-label="Tela cheia"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 h-1 bg-[#31572c]/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#4f772d] to-[#31572c] transition-all duration-300 shadow-lg shadow-[#4f772d]/50"
                style={{ 
                  width: `${((current + 1) / galleryImages.length) * 100}%`,
                  transition: isAutoPlaying ? 'width 6s linear' : 'width 0.3s ease'
                }}
              ></div>
            </div>
          </div>

          {/* Thumbnails Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 ${
                  index === current
                    ? "ring-4 ring-[#4f772d] scale-105 shadow-xl shadow-[#4f772d]/30"
                    : "ring-2 ring-[#31572c]/40 hover:ring-[#4f772d]/60 hover:scale-105 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#132a13]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <div>
                    <p className="text-xs font-semibold text-[#f8f9fa] mb-0.5">{image.title}</p>
                    <p className="text-[10px] text-[#f8f9fa]/80">{image.category}</p>
                  </div>
                </div>
                {/* Active Indicator */}
                {index === current && (
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#4f772d] rounded-full shadow-lg shadow-[#4f772d]/50 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? "w-10 h-2.5 bg-gradient-to-r from-[#4f772d] to-[#31572c] shadow-lg shadow-[#4f772d]/50"
                    : "w-2.5 h-2.5 bg-[#31572c]/60 hover:bg-[#4f772d]/60 hover:scale-125"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          {/* Info Card */}
          <div className="mt-12 p-6 lg:p-8 bg-[#31572c]/40 backdrop-blur-sm border border-[#4f772d]/30 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-[#f8f9fa] mb-2">
                  Galeria Institucional IAPOAM
                </h4>
                <p className="text-[#f8f9fa]/80 text-sm">
                  Registro visual de 15 anos de história, projetos e impacto social na Amazônia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleAutoPlay}
                  className="px-6 py-3 bg-gradient-to-r from-[#4f772d] to-[#31572c] hover:from-[#31572c] hover:to-[#4f772d] text-[#f8f9fa] rounded-xl font-semibold shadow-lg shadow-[#4f772d]/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="w-5 h-5" />
                      <span>Pausar</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      <span>Reproduzir</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}