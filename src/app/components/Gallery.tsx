import { useState, useEffect } from "react";
import { FadeInHeader } from "./SectionHeader";
import DriftWall from "./DriftWall";
import { AGENCY_CONFIG } from "../data/agencyData";

const GALLERY_ITEMS = AGENCY_CONFIG.gallery.items;

export function Gallery() {
  const [config, setConfig] = useState({
    columns: 5,
    tileWidth: 190,
    tileHeight: 140,
    gap: 16,
    tilt: 12,
    turn: -10,
    scale: 1.18,
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w <= 640) {
        // Mobile screen: calculate tile width so 3 columns fit 100% inside container
        const calcTileW = Math.max(88, Math.min(105, Math.floor((w - 32) / 3.3)));
        setConfig({
          columns: 3,
          tileWidth: calcTileW,
          tileHeight: Math.floor(calcTileW * 0.72),
          gap: 10,
          tilt: 5,
          turn: -4,
          scale: 1.0,
        });
      } else if (w <= 1024) {
        setConfig({
          columns: 4,
          tileWidth: 145,
          tileHeight: 105,
          gap: 14,
          tilt: 10,
          turn: -8,
          scale: 1.1,
        });
      } else {
        setConfig({
          columns: 5,
          tileWidth: 190,
          tileHeight: 140,
          gap: 16,
          tilt: 12,
          turn: -10,
          scale: 1.18,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="galeria" className="bg-[#111111] py-20 sm:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeInHeader className="text-center mb-10 sm:mb-12">
          <span
            className="text-[#C9A96E] uppercase block mb-3"
            style={{ fontSize: "0.65rem", letterSpacing: "0.4em" }}
          >
            Nosso Trabalho
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
            }}
          >
            Galeria
          </h2>
          <p
            className="text-white/40 max-w-sm mx-auto"
            style={{ fontSize: "0.85rem", lineHeight: 1.8 }}
          >
            {AGENCY_CONFIG.gallery.description}
          </p>
        </FadeInHeader>

        {/* DriftWall Gallery Container */}
        <div className="w-full h-[480px] sm:h-[600px] md:h-[680px] rounded-2xl overflow-hidden bg-black/40 border border-white/5 relative">
          <DriftWall
            items={GALLERY_ITEMS}
            columns={config.columns}
            tileWidth={config.tileWidth}
            tileHeight={config.tileHeight}
            gap={config.gap}
            radius={14}
            tilt={config.tilt}
            turn={config.turn}
            scale={config.scale}
            perspective={1200}
            speed={12}
            dim={0.95}
            fade={0.8}
            grayscale={false}
            overlayColor="#000000"
          />
        </div>
      </div>
    </section>
  );
}
