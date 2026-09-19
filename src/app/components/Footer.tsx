import { Instagram, Facebook, ArrowUp, MapPin, Navigation, Mail, Phone, Clock } from "lucide-react";
import { AGENCY_CONFIG } from "../data/agencyData";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialIcons: Record<string, typeof Instagram> = {
    Instagram,
    Facebook,
  };

  const socialLinks = AGENCY_CONFIG.contact.social.map((s) => ({
    Icon: socialIcons[s.name] || Instagram,
    name: s.name,
    href: s.href,
  }));

  const scrollTo = (item: string) => {
    let id = item
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ç/g, "c");
    if (id === "casting") id = "modelos";
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const addressText = AGENCY_CONFIG.contact.address;
  const directionsUrl = AGENCY_CONFIG.contact.map.directionsUrl;
  const mapEmbedUrl = AGENCY_CONFIG.contact.map.embedUrl;

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#C9A96E]/30 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 md:px-12 md:py-20">
        
        {/* Top Brand Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 mb-12 border-b border-white/10">
          <div>
            <span
              className="bg-gradient-to-r from-[#FAF3E0] via-[#D8B26E] to-[#A88242] bg-clip-text text-transparent block"
              style={{
                fontFamily: "'Cinzel', 'Bodoni Moda', 'Cormorant Garamond', serif",
                fontSize: "1.4rem",
                fontWeight: 500,
                letterSpacing: "0.3em",
              }}
            >
              {AGENCY_CONFIG.brandMark}
            </span>
            <span
              className="text-[#C9A96E]/80 mt-1 block"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.58rem",
                fontWeight: 300,
                letterSpacing: "0.55em",
              }}
            >
              {AGENCY_CONFIG.brandSubtitle}
            </span>
          </div>
          <p className="text-white/50 max-w-md text-xs sm:text-sm leading-relaxed">
            Conectando talentos únicos às maiores oportunidades do mercado da moda e da publicidade nacional e internacional.
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ Icon, name, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-[#C9A96E] hover:text-white transition-colors duration-300 p-1"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* 4 Columns Layout on Desktop: Navegação | Horário de Funcionamento | Contato | Localização / Mapa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16 items-start">

          {/* Col 1: Navegação */}
          <div className="flex flex-col">
            <h4
              className="text-[#C9A96E] uppercase mb-4 font-semibold"
              style={{ fontSize: "12px", letterSpacing: "3px" }}
            >
              Navegação
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 text-sm">
              {["Home", "Sobre", "Casting", "Galeria", "Serviços", "FAQ", "Contato"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-white/70 hover:text-[#C9A96E] transition-colors bg-transparent border-none cursor-pointer p-0 text-left text-[14px]"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Horário de Funcionamento */}
          <div className="flex flex-col">
            <h4
              className="text-[#C9A96E] uppercase mb-4 font-semibold flex items-center gap-2"
              style={{ fontSize: "12px", letterSpacing: "3px" }}
            >
              <Clock size={15} className="text-[#C9A96E]" />
              <span>Horário</span>
            </h4>
            <div className="text-[14px] flex flex-col gap-2.5">
              {AGENCY_CONFIG.contact.hours.map((h, i) => (
                <div key={i} className="flex items-center justify-between text-white/80 pr-2">
                  <span className="text-white/60">{h.label}</span>
                  <span className={h.time === "Fechado" ? "text-white/40 font-light" : "text-[#C9A96E] font-medium"}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Contato */}
          <div className="flex flex-col">
            <h4
              className="text-[#C9A96E] uppercase mb-4 font-semibold"
              style={{ fontSize: "12px", letterSpacing: "3px" }}
            >
              Contato
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <a
                  href={`https://wa.me/${AGENCY_CONFIG.contact.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#C9A96E] transition-colors flex items-center gap-3 group text-[14px]"
                >
                  <Phone size={18} className="text-[#C9A96E] shrink-0" />
                  <span>{AGENCY_CONFIG.contact.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${AGENCY_CONFIG.contact.email}`}
                  className="text-white/80 hover:text-[#C9A96E] transition-colors flex items-center gap-3 group text-[14px]"
                >
                  <Mail size={18} className="text-[#C9A96E] shrink-0" />
                  <span className="truncate">{AGENCY_CONFIG.contact.email}</span>
                </a>
              </li>
              <li>
                <div className="text-white/80 flex items-start gap-3 group text-[14px]">
                  <MapPin size={18} className="text-[#C9A96E] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {AGENCY_CONFIG.contact.address}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Localização & Mapa Estilizado */}
          <div className="flex flex-col">
            <h4
              className="text-[#C9A96E] uppercase mb-4 font-semibold"
              style={{ fontSize: "12px", letterSpacing: "3px" }}
            >
              Localização
            </h4>

            <div className="bg-white/5 border border-[#C9A96E]/30 p-4 rounded-2xl flex flex-col gap-3.5">
              <div className="flex items-center justify-between gap-2">
                <h5
                  className="text-white font-light text-sm"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Nossa Agência
                </h5>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C9A96E] text-black hover:bg-white transition-all duration-300 font-semibold cursor-pointer text-[10px] uppercase tracking-wider shrink-0 no-underline"
                >
                  <Navigation size={12} />
                  Rotas
                </a>
              </div>

              {/* Minimalist Grayscale Map */}
              <div className="w-full h-[140px] sm:h-[160px] rounded-xl overflow-hidden border border-white/10 relative">
                <iframe
                  title={`Google Maps - ${AGENCY_CONFIG.name}`}
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "grayscale(100%) contrast(1.2) brightness(0.75)",
                  }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs tracking-wide">
            {AGENCY_CONFIG.contact.copyright}
          </p>
          <button
            onClick={scrollTop}
            aria-label="Voltar ao topo"
            className="text-white/60 hover:text-[#C9A96E] hover:-translate-y-1 transition-all duration-300 bg-transparent border-none p-0 cursor-pointer flex items-center gap-2 text-xs uppercase tracking-widest"
          >
            <span>Topo</span>
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
