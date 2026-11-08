import Section from '@/components/Section';
import { contact } from '@/content/site';

function Contatos() {
  return (
    <Section
      id="contatos"
      eyebrow="Contatos"
      title="Tem uma história para contar?"
      intro="Conte sobre o seu projeto — respondo em até dois dias úteis."
      className="section--dark"
    >
      <a href={`mailto:${contact.email}`} className="contact__email">
        {contact.email}
      </a>
      <ul className="contact__links">
        {contact.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Contatos;
