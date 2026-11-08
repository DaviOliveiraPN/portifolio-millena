/**
 * Todo o conteúdo do portfólio fica aqui.
 * ⚠️ Os textos abaixo são EXEMPLOS — substitua pelas informações reais da Millena.
 */

export const profile = {
  name: 'Millena Sandes',
  role: 'Relações Públicas & Storymaker',
  headline: 'Histórias que aproximam marcas e pessoas.',
  intro:
    'Sou relações-públicas e storymaker. Transformo propósito em narrativa — de campanhas e conteúdo a relacionamento com imprensa e comunidades.',
  /** Coloque a foto em /public (ex.: /millena.jpg) e informe o caminho aqui. */
  photo: null as string | null,
  stats: [
    { value: '5+', label: 'anos contando histórias' },
    { value: '30+', label: 'projetos entregues' },
    { value: '100+', label: 'inserções na imprensa' },
  ],
};

/** Veículos/marcas onde o trabalho apareceu. Deixe vazio para esconder a faixa. */
export const press: string[] = [
  'Veículo 1',
  'Veículo 2',
  'Veículo 3',
  'Veículo 4',
  'Veículo 5',
];

export type Project = {
  title: string;
  client: string;
  category: string;
  year: string;
  challenge: string;
  strategy: string;
  result: string;
  metrics: { value: string; label: string }[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Lançamento de marca com narrativa de origem',
    client: 'Cliente de moda sustentável',
    category: 'Branding & Storytelling',
    year: '2025',
    challenge:
      'Apresentar uma marca nova ao mercado sem verba de mídia e com um público cético.',
    strategy:
      'Construí a história de origem da fundadora e desdobrei em press kit, série de vídeos curtos e ações com criadores locais.',
    result:
      'A marca virou pauta espontânea e esgotou a primeira coleção em semanas.',
    metrics: [
      { value: '15', label: 'matérias espontâneas' },
      { value: '+40%', label: 'reconhecimento de marca' },
    ],
  },
  {
    title: 'Gestão de reputação em momento de crise',
    client: 'Empresa do setor de alimentos',
    category: 'Assessoria de Imprensa',
    year: '2024',
    challenge:
      'Responder a uma crise de reputação nas redes antes que chegasse à imprensa tradicional.',
    strategy:
      'Plano de resposta em 24h, porta-voz treinado e uma narrativa transparente sobre o que mudaria na operação.',
    result: 'Sentimento negativo revertido e relação fortalecida com jornalistas.',
    metrics: [
      { value: '24h', label: 'para o primeiro posicionamento' },
      { value: '-60%', label: 'menções negativas' },
    ],
  },
  {
    title: 'Campanha de comunicação interna',
    client: 'Organização com 2 mil colaboradores',
    category: 'Comunicação Interna',
    year: '2024',
    challenge:
      'Engajar equipes distribuídas em torno de um novo propósito institucional.',
    strategy:
      'Histórias reais de colaboradores contadas em podcast, murais e encontros presenciais.',
    result: 'O propósito passou a ser citado nas pesquisas de clima.',
    metrics: [
      { value: '78%', label: 'de engajamento' },
      { value: '12', label: 'episódios produzidos' },
    ],
  },
];

export const testimonial = {
  quote:
    'A Millena entende o que faz uma história ser lembrada. Ela transformou nosso posicionamento em algo que as pessoas querem contar.',
  author: 'Nome da pessoa',
  role: 'Cargo — Empresa',
};

export const experience = [
  {
    period: '2023 — atual',
    role: 'Relações Públicas & Storymaker',
    org: 'Agência / Empresa',
    description:
      'Estratégia de narrativa, assessoria de imprensa e conteúdo para marcas.',
  },
  {
    period: '2021 — 2023',
    role: 'Analista de Comunicação',
    org: 'Empresa',
    description: 'Comunicação interna, eventos e relacionamento com stakeholders.',
  },
  {
    period: '2020 — 2021',
    role: 'Estagiária de Relações Públicas',
    org: 'Empresa',
    description: 'Clipping, releases e apoio na produção de conteúdo.',
  },
];

export const education = [
  {
    period: '2017 — 2021',
    course: 'Bacharelado em Relações Públicas',
    org: 'Universidade',
  },
];

export const skills = [
  'Storytelling',
  'Assessoria de imprensa',
  'Gestão de crise',
  'Comunicação interna',
  'Produção de conteúdo',
  'Eventos',
  'Planejamento estratégico',
];

/** Coloque o PDF em /public com este nome (ou ajuste o caminho). */
export const resumePdf = '/curriculo-millena-sandes.pdf';

export const contact = {
  email: 'contato@exemplo.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],
};
