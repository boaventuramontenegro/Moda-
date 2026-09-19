export interface ModelTalent {
  id: string;
  name: string;
  category: string;
  image: string;
  stats?: string;
}

export interface GalleryItem {
  image: string;
  title: string;
}

export interface ServiceItem {
  iconName: "users" | "building" | "camera";
  title: string;
  desc: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export const AGENCY_CONFIG = {
  // Identidade Fictícia da Agência (Template)
  name: "Prime Concept Models",
  brandMark: "PRIME CONCEPT",
  brandSubtitle: "MODEL AGENCY",
  acronym: "PCM",
  segment: "Agência de Modelos & Gestão de Talentos",
  
  // Hero & Apresentação
  hero: {
    welcome: "Excelência em Casting & Moda",
    tagline: "PRIME CONCEPT",
    subTagline: "MODEL AGENCY",
    description:
      "Conectando talentos únicos às maiores oportunidades do mercado da moda e publicidade. Sua história profissional começa aqui.",
    image:
      "https://images.unsplash.com/photo-1557161622-5f50ca344787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    ctaPrimary: "Ver Modelos",
    ctaSecondary: "Fale Conosco",
  },

  // Sobre a Agência (História Fictícia)
  about: {
    badge: "Nossa História",
    titleLine1: "Onde Conceito",
    titleLine2: "Encontra Beleza",
    p1: "A Prime Concept Models nasceu com uma visão clara e arrojada: descobrir, desenvolver e posicionar talentos singulares junto às principais marcas, estilistas, produtoras e agências do mercado publicitário e da alta-costura.",
    p2: "Com representação estratégica no cenário nacional e internacional, nosso casting exclusivo reúne perfis que desfilam em passarelas prestigiadas, estrelam capas de revistas e lideram campanhas globais, primando pela diversidade, elegância e integridade artística.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    stats: [
      { target: 180, suffix: "+", label: "Modelos no Casting" },
      { target: 10, suffix: "+", label: "Anos de Trajetória" },
      { target: 600, suffix: "+", label: "Campanhas e Editoriais" },
      { target: 95, suffix: "+", label: "Marcas Parceiras" },
    ],
  },

  // Casting / Modelos Demonstrativos
  models: [
    {
      id: "1",
      name: "Sofia Valente",
      category: "Haute Couture & Editorial",
      stats: "178 cm • Busto 84 • Cintura 60",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "2",
      name: "Lucas Alencar",
      category: "Runway & Commercial",
      stats: "187 cm • Tórax 98 • Cintura 78",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "3",
      name: "Camila Drummond",
      category: "Beauty & High Fashion",
      stats: "176 cm • Busto 82 • Cintura 59",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "4",
      name: "Helena Castro",
      category: "Passarela & Editorial Arte",
      stats: "180 cm • Busto 85 • Cintura 61",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "5",
      name: "Gabriel Montenegro",
      category: "Editorial Masculino & Tailoring",
      stats: "186 cm • Tórax 96 • Cintura 76",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "6",
      name: "Matheus Prado",
      category: "Fitness & Lookbook",
      stats: "188 cm • Tórax 100 • Cintura 80",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80",
    },
  ] as ModelTalent[],

  // Portfólio / Galeria Demonstrativa
  gallery: {
    eyebrow: "Nosso Trabalho",
    title: "Galeria & Produções",
    description: "Explore produções marcantes, lookbooks e editoriais desenvolvidos com nossos talentos.",
    items: [
      {
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
        title: "Editorial Studio Arte",
      },
      {
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
        title: "Passarela Fashion Week",
      },
      {
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
        title: "High Fashion Runway",
      },
      {
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
        title: "Campanha Alfaiataria",
      },
      {
        image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80",
        title: "Editorial Resort & Summer",
      },
      {
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80",
        title: "Ensaio Externo Golden Hour",
      },
      {
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
        title: "Desfile Haute Couture",
      },
      {
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
        title: "Gala Noturna & Red Carpet",
      },
      {
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
        title: "Editorial Nature & Form",
      },
      {
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
        title: "Street Style Contemporâneo",
      },
      {
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
        title: "Editorial Masculino Monochrome",
      },
      {
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
        title: "Lookbook Urbano & Moda",
      },
      {
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
        title: "Campanha Outono/Inverno",
      },
      {
        image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=900&q=80",
        title: "Ensaio Moda Praia & Linho",
      },
      {
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
        title: "Alta-Costura Noivas & Atelier",
      },
    ] as GalleryItem[],
  },

  // Serviços Oferecidos
  services: {
    eyebrow: "O Que Oferecemos",
    title: "Nossos Serviços",
    description:
      "Soluções completas de agenciamento de talentos, casting publicitário e estúdio fotográfico profissional com suporte de alta performance.",
    items: [
      {
        iconName: "users",
        title: "Agenciamento & Gestão de Carreira",
        desc: "Seleção, desenvolvimento contínuo e representação de modelos, new faces e criadores de conteúdo para campanhas, desfiles e produções globais.",
      },
      {
        iconName: "building",
        title: "Locação de Estúdio Fotográfico",
        desc: "Espaço profissional estruturado com equipamentos de iluminação de ponta, ciclorama, camarim exclusivo, sala de produção e ambiente climatizado.",
      },
      {
        iconName: "camera",
        title: "Produção Editorial & Campanhas",
        desc: "Coordenação completa de sessões fotográficas em estúdio ou locações externas, com direção de arte, styling, beleza e pós-produção integrada.",
      },
    ] as ServiceItem[],
    faq: [
      {
        question: "Como funciona o processo de agenciamento na Prime Concept Models?",
        answer:
          "Avaliamos criteriosamente perfis de novos talentos e profissionais em transição. Realizamos ensaio teste, definimos o plano de posicionamento de mercado e apresentamos o perfil para diretores de casting e marcas parceiras.",
      },
      {
        question: "É obrigatório ter experiência prévia para participar do casting?",
        answer:
          "Não. Valorizamos autenticidade, atitude e vocação. Oferecemos mentoria prática, noções de passarela, expressão corporal e direcionamento técnico para novos perfis.",
      },
      {
        question: "Como funciona a contratação de modelos para marcas e campanhas?",
        answer:
          "Atendemos agências de publicidade, estilistas e produtoras com seleções personalizadas sob medida para o conceito e orçamento de cada campanha.",
      },
      {
        question: "O estúdio de fotografia pode ser locado por fotógrafos e marcas externas?",
        answer:
          "Sim. O estúdio está disponível para locação avulsa ou diárias completas, com opções incluindo kit de iluminação, camarim, copa e internet de alta velocidade.",
      },
      {
        question: "A avaliação de perfil possui custo para os candidatos?",
        answer:
          "Não. A primeira etapa de avaliação de perfil e entrevista de apresentação é inteiramente gratuita e sem qualquer taxa de inscrição.",
      },
    ] as FaqItem[],
  },

  // Depoimentos Fictícios de Demonstração
  testimonials: [
    {
      name: "Mariana Siqueira",
      role: "Modelo Internacional",
      quote:
        "O suporte e o profissionalismo da equipe foram determinantes para que eu desse meus primeiros passos em semanas de moda internacionais com total segurança.",
    },
    {
      name: "Rodrigo Vasconcelos",
      role: "Diretor de Criação & Fotógrafo",
      quote:
        "Trabalhar com o casting da agência é garantia de pontualidade, versatilidade e excelência estética em cada set de filmagem ou editorial.",
    },
    {
      name: "Larissa Fontes",
      role: "Gerente de Marketing Fashion",
      quote:
        "Encontramos com rapidez o perfil exato para a campanha de lançamento da nossa coleção. O atendimento foi impecável do início à entrega final.",
    },
    {
      name: "Eduardo Meirelles",
      role: "Produtor Executivo",
      quote:
        "Estrutura impecável de estúdio e modelos extremamente preparados para briefings complexos e filmagens comerciais dinâmicas.",
    },
    {
      name: "Beatriz Lins",
      role: "New Face Agenciada",
      quote:
        "A atenção individualizada e o cuidado com a preparação do nosso material fotográfico fazem toda a diferença no nosso desenvolvimento profissional.",
    },
  ] as TestimonialItem[],

  // Informações de Contato Fictícias
  contact: {
    title: "Fale Conosco",
    eyebrow: "Entre em Contato",
    description:
      "Seja você um talento em busca de representação ou uma marca à procura do casting ideal, nossa equipe está pronta para atendê-lo.",
    phone: "(11) 3280-4500",
    phoneLink: "tel:+551132804500",
    whatsapp: "(11) 99876-5432",
    whatsappRaw: "5511998765432",
    email: "contato@primeconceptmodels.com.br",
    address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP, CEP 01310-100",
    addressShort: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
    hours: [
      { label: "Seg a Sex", time: "09:00 às 18:00" },
      { label: "Sáb", time: "09:00 às 13:00" },
      { label: "Dom", time: "Fechado" },
    ],
    social: [
      { name: "Instagram", href: "https://instagram.com/primeconceptmodels" },
      { name: "Facebook", href: "https://facebook.com/primeconceptmodels" },
    ],
    map: {
      embedUrl:
        "https://maps.google.com/maps?q=Av.+Paulista,+1000+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+1000+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP",
    },
    copyright: "© 2026 Prime Concept Models. Todos os direitos reservados. Template demonstrativo.",
  },
};
