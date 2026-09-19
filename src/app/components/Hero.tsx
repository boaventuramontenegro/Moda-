import { ChevronDown } from "lucide-react";
import { AGENCY_CONFIG } from "../data/agencyData";

export function Hero() {
  const scrollToModels = () => {
    document.getElementById("modelos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={AGENCY_CONFIG.hero.image}
          alt={`${AGENCY_CONFIG.name} - ${AGENCY_CONFIG.segment}`}
          loading="eager"
          // @ts-ignore
          fetchPriority="high"
          decoding="sync"
          width={1080}
          height={1920}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="mb-6">
          <span
            className="text-[#C9A96E] tracking-[0.5em] uppercase block mb-4"
            style={{ fontSize: "0.7rem", letterSpacing: "0.5em" }}
          >
            {AGENCY_CONFIG.hero.welcome}
          </span>
          <h1
            className="bg-gradient-to-r from-[#FAF3E0] via-[#E0C184] to-[#A88242] bg-clip-text text-transparent leading-tight mb-3"
            style={{
              fontFamily: "'Cinzel', 'Bodoni Moda', 'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 500,
              letterSpacing: "0.22em",
              lineHeight: 1.15,
              filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.7))",
            }}
          >
            {AGENCY_CONFIG.brandMark}
          </h1>
          <div
            className="text-[#C9A96E] tracking-[1em] uppercase"
            style={{ fontSize: "clamp(0.6rem, 2vw, 0.9rem)", letterSpacing: "0.8em" }}
          >
            {AGENCY_CONFIG.brandSubtitle}
          </div>
        </div>

        <p
          className="text-white/70 max-w-md mt-8 mb-12"
          style={{ fontSize: "0.95rem", lineHeight: 1.9, letterSpacing: "0.05em" }}
        >
          {AGENCY_CONFIG.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={scrollToModels}
            className="px-10 py-3 bg-[#C9A96E] text-black hover:bg-white transition-all duration-300 cursor-pointer border-none"
            style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
          >
            {AGENCY_CONFIG.hero.ctaPrimary}
          </button>
          <button
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-3 border border-white/50 text-white hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300 cursor-pointer bg-transparent"
            style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
          >
            {AGENCY_CONFIG.hero.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
        onClick={scrollToModels}
      >
        <span className="text-white" style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          Explorar
        </span>
        <ChevronDown className="text-white animate-bounce" size={18} />
      </div>
    </section>
  );
}
