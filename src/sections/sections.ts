export const SECTIONS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'curriculo', label: 'Currículo' },
  { id: 'contatos', label: 'Contatos' },
] as const;

export type SectionId = (typeof SECTIONS)[number]['id'];
