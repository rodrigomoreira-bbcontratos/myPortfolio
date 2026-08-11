export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  contract?: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export type ExperienceGroup = {
  company: string;
  items: ExperienceItem[];
};

export const experience: ExperienceGroup[] = [
  {
    company: "ArcelorMittal",
    items: [
      {
        company: "ArcelorMittal",
        role: "Software Developer — Sistemas Industriais (MES)",
        period: "abr/2025 — atual",
        contract: "Terceirizado",
        description:
          "Atuação na modernização e evolução de um sistema MES industrial, apoiando processos de produção, rastreabilidade e integração entre o chão de fábrica e sistemas corporativos.",
        highlights: [
          "Desenvolvimento de interfaces para operações industriais.",
          "Implementação e evolução de APIs e regras de negócio.",
          "Integração com SAP e outros fluxos corporativos.",
          "Atuação do frontend ao banco de dados em ambiente produtivo.",
        ],
        stack: ["Angular", "TypeScript", "Node.js", "SQL Server", "REST APIs"],
      },
    ],
  },
  {
    company: "Ebravo Consultoria",
    items: [
      {
        company: "Ebravo Consultoria",
        role: "Líder Técnico — Desenvolvimento de Software",
        period: "out/2024 — abr/2025",
        description:
          "Atuação na liderança técnica de projetos de software, conciliando desenvolvimento, arquitetura e organização das entregas.",
        highlights: [
          "Definição de soluções e direcionamento técnico.",
          "Code review e padronização de código.",
          "Apoio aos desenvolvedores e processos de deploy.",
          "Refinamento técnico e alinhamento com stakeholders.",
        ],
        stack: ["Angular", "React", "Node.js", "Java", "TypeScript"],
      },
      {
        company: "Ebravo Consultoria",
        role: "Software Developer — Sistemas Corporativos",
        period: "mai/2024 — out/2024",
        description:
          "Desenvolvimento de sistemas corporativos e soluções para digitalização de processos administrativos, atuando em aplicações Angular/Java e React/Node.js.",
        highlights: [],
        stack: ["Angular", "Java", "React", "Node.js", "TypeScript"],
      },
    ],
  },
  {
    company: "SulAmérica",
    items: [
      {
        company: "SulAmérica",
        role: "Software Developer — Sistemas Distribuídos",
        period: "set/2022 — mar/2024",
        contract: "Terceirizado",
        description:
          "Desenvolvimento de soluções digitais para corretoras e parceiros em arquitetura baseada em microserviços e BFF.",
        highlights: [
          "Desenvolvimento com React, Node.js e TypeScript.",
          "Evolução de aplicações distribuídas com foco em escalabilidade e segurança.",
          "Implementação de solução White Label com múltiplas configurações sobre uma base compartilhada.",
          "Participação na evolução técnica e arquitetural do produto.",
        ],
        stack: [
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "Microservices",
          "BFF",
        ],
      },
    ],
  },
  {
    company: "Texxia",
    items: [
      {
        company: "Texxia",
        role: "Software Developer Jr.",
        period: "mar/2021 — fev/2022",
        description:
          "Desenvolvimento de aplicações web e soluções configuráveis, com atuação em frontend e backend.",
        highlights: [
          "Construção de interfaces dinâmicas em React.",
          "Desenvolvimento de serviços e mecanismos de monitoramento em Node.js.",
          "Melhorias de performance e experiência do usuário.",
          "Participação no desenvolvimento de uma plataforma de chatbot personalizável.",
        ],
        stack: ["React", "Node.js", "JavaScript"],
      },
    ],
  },
];
