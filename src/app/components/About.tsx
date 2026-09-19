import { useState, useEffect, useRef } from "react";
import { FadeInHeader, ScrollReveal } from "./SectionHeader";
import { AGENCY_CONFIG } from "../data/agencyData";

function StatCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 3000; // 3s
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * target);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible, target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="bg-[#0a0a0a] py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image Side */}
        <ScrollReveal direction="right" duration={900}>
          <div className="relative max-w-lg mx-auto lg:max-w-none">
            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#121212]">
              <img
                src={AGENCY_CONFIG.about.image}
                alt={`${AGENCY_CONFIG.name} - ${AGENCY_CONFIG.segment}`}
                loading="lazy"
                decoding="async"
                width={1080}
                height={680}
                className="w-full h-[460px] sm:h-[540px] lg:h-[580px] object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Decorative border */}
            <div
              className="pointer-events-none absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full border border-[#C9A96E]/35 rounded-2xl z-0"
            />
          </div>
        </ScrollReveal>

        {/* Text Side */}
        <div className="flex flex-col gap-8">
          <FadeInHeader>
            <span
              className="text-[#C9A96E] uppercase tracking-widest block mb-4"
              style={{ fontSize: "0.65rem", letterSpacing: "0.4em" }}
            >
              {AGENCY_CONFIG.about.badge}
            </span>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              {AGENCY_CONFIG.about.titleLine1}
              <br />
              <span className="text-[#C9A96E]">{AGENCY_CONFIG.about.titleLine2}</span>
            </h2>
          </FadeInHeader>

          <ScrollReveal direction="up" delay={150}>
            <p className="text-white/60 leading-relaxed" style={{ fontSize: "0.9rem", lineHeight: 1.9 }}>
              {AGENCY_CONFIG.about.p1}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <p className="text-white/60 leading-relaxed" style={{ fontSize: "0.9rem", lineHeight: 1.9 }}>
              {AGENCY_CONFIG.about.p2}
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal direction="up" delay={350}>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              {AGENCY_CONFIG.about.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="text-[#C9A96E]"
                    style={{ fontFamily: "'Georgia', serif", fontSize: "2.2rem", fontWeight: 300 }}
                  >
                    <StatCounter target={stat.target} suffix={stat.suffix} isVisible={isVisible} />
                  </span>
                  <span
                    className="text-white/40 uppercase"
                    style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

