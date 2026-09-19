import { useState, useEffect, useRef } from "react";
import { Send, ChevronDown } from "lucide-react";
import { FadeInHeader, ScrollReveal } from "./SectionHeader";
import { AGENCY_CONFIG } from "../data/agencyData";

const subjectOptions = [
  "Quero ser modelo / Agenciamento",
  "Contratar modelo / Casting",
  "Parceria comercial / Imprensa",
  "Locação de Estúdio Fotográfico",
  "Outro assunto",
];

const serviceOptions = [
  ...AGENCY_CONFIG.services.items.map((s) => s.title),
  "Outro",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const [openSubject, setOpenSubject] = useState(false);
  const [openService, setOpenService] = useState(false);

  const subjectRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (subjectRef.current && !subjectRef.current.contains(event.target as Node)) {
        setOpenSubject(false);
      }
      if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
        setOpenService(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = AGENCY_CONFIG.contact.whatsappRaw;
    const name = form.name.trim() || "Cliente";
    const subject = form.subject.trim() || "Geral";
    const service = form.service.trim() || "A definir";
    const userMsg = form.message.trim() || "—";
    const phone = form.phone.trim() || "Não informado";
    const email = form.email.trim() || "Não informado";

    const formattedMessage = `Olá, tudo bem? 👋

Meu nome é *${name}* e entrei em contato através do site da ${AGENCY_CONFIG.name}.

*Gostaria de mais informações sobre:* ${subject}
*Serviço de interesse:* ${service}

*Mensagem:*
${userMsg}

Fico no aguardo do retorno de vocês. Desde já, agradeço!

Atenciosamente,
*${name}*
📱 Telefone: ${phone}
📧 E-mail: ${email}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contato" className="bg-[#0a0a0a] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeInHeader className="text-center mb-16">
          <span
            className="text-[#C9A96E] uppercase block mb-4 font-semibold"
            style={{ fontSize: "0.65rem", letterSpacing: "0.4em" }}
          >
            Entre em Contato
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
            Fale Conosco
          </h2>
          <p className="text-white/60 max-w-lg mx-auto" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
            Seja você um modelo em busca de representação ou uma marca procurando talentos,
            estamos prontos para atendê-lo.
          </p>
        </FadeInHeader>

        <div className="max-w-3xl mx-auto">
          {/* Form */}
          <ScrollReveal direction="up" duration={800}>
            <div className="bg-[#111111] border border-white/10 p-8 sm:p-12 rounded-[24px] shadow-2xl shadow-black/80">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Row 1: Nome & E-mail */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="text-white/80 block mb-2 font-medium"
                      style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
                    >
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#181818] border border-white/15 px-4 py-3.5 rounded-xl text-white placeholder-white/35 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all duration-300"
                      style={{ fontSize: "0.92rem" }}
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label
                      className="text-white/80 block mb-2 font-medium"
                      style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#181818] border border-white/15 px-4 py-3.5 rounded-xl text-white placeholder-white/35 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all duration-300"
                      style={{ fontSize: "0.92rem" }}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Row 2: Telefone & Assunto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="text-white/80 block mb-2 font-medium"
                      style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#181818] border border-white/15 px-4 py-3.5 rounded-xl text-white placeholder-white/35 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all duration-300"
                      style={{ fontSize: "0.92rem" }}
                      placeholder="(92) 9 9999-9999"
                    />
                  </div>

                  {/* Custom Dropdown: Assunto */}
                  <div ref={subjectRef} className="relative">
                    <label
                      className="text-white/80 block mb-2 font-medium"
                      style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
                    >
                      Assunto *
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setOpenSubject(!openSubject);
                        setOpenService(false);
                      }}
                      className="w-full bg-[#181818] border border-white/15 px-4 py-3.5 rounded-xl text-left text-white flex items-center justify-between focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all duration-300 cursor-pointer"
                      style={{ fontSize: "0.92rem" }}
                    >
                      <span className={form.subject ? "text-white" : "text-white/35"}>
                        {form.subject || "Selecione o assunto..."}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#C9A96E] transition-transform duration-300 ${
                          openSubject ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Inline Options Accordion Dropdown */}
                    {openSubject && (
                      <div className="absolute left-0 right-0 top-full mt-2 bg-[#1c1c1c] border border-[#C9A96E]/40 rounded-xl z-30 shadow-2xl overflow-hidden py-1 transition-all duration-200">
                        {subjectOptions.map((opt, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setForm({ ...form, subject: opt });
                              setOpenSubject(false);
                            }}
                            className={`w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer border-none block ${
                              form.subject === opt
                                ? "bg-[#C9A96E]/20 text-[#C9A96E] font-medium"
                                : "text-white/80 hover:bg-[#252525] hover:text-white"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 3: Serviço de Interesse (Novo Campo Custom Dropdown) */}
                <div ref={serviceRef} className="relative">
                  <label
                    className="text-white/80 block mb-2 font-medium"
                    style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
                  >
                    Serviço de Interesse
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenService(!openService);
                      setOpenSubject(false);
                    }}
                    className="w-full bg-[#181818] border border-white/15 px-4 py-3.5 rounded-xl text-left text-white flex items-center justify-between focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all duration-300 cursor-pointer"
                    style={{ fontSize: "0.92rem" }}
                  >
                    <span className={form.service ? "text-white" : "text-white/35"}>
                      {form.service || "Selecione o serviço de interesse..."}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#C9A96E] transition-transform duration-300 ${
                        openService ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Inline Options Accordion Dropdown */}
                  {openService && (
                    <div className="absolute left-0 right-0 top-full mt-2 bg-[#1c1c1c] border border-[#C9A96E]/40 rounded-xl z-30 shadow-2xl overflow-hidden py-1 transition-all duration-200">
                      {serviceOptions.map((opt, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setForm({ ...form, service: opt });
                            setOpenService(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer border-none block ${
                            form.service === opt
                              ? "bg-[#C9A96E]/20 text-[#C9A96E] font-medium"
                              : "text-white/80 hover:bg-[#252525] hover:text-white"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Row 4: Mensagem */}
                <div>
                  <label
                    className="text-white/80 block mb-2 font-medium"
                    style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
                  >
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#181818] border border-white/15 p-4 rounded-xl text-white placeholder-white/35 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all duration-300 resize-none"
                    style={{ fontSize: "0.92rem" }}
                    placeholder="Conte-nos mais sobre você ou seu projeto..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-[#C9A96E] text-black hover:bg-white transition-all duration-300 cursor-pointer border-none font-semibold"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
                  >
                    <Send size={15} />
                    Enviar Mensagem
                  </button>
                </div>

                {sent && (
                  <div className="mt-2 p-4 border border-[#C9A96E]/40 bg-[#C9A96E]/10 rounded-xl">
                    <p className="text-[#C9A96E] text-center font-medium" style={{ fontSize: "0.9rem" }}>
                      Mensagem enviada com sucesso! Nossa equipe retornará em breve.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


