import Section from '@/components/Section';
import { projects } from '@/content/site';

function Projetos() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Cases selecionados"
      intro="Cada projeto começa com uma pergunta: qual história precisa ser contada — e para quem?"
    >
      <ol className="cases">
        {projects.map((project, index) => (
          <li key={project.title} className="case">
            <header className="case__header">
              <span className="case__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="case__meta">
                  {project.category} · {project.year}
                </p>
                <h3 className="case__title">{project.title}</h3>
                <p className="case__client">{project.client}</p>
              </div>
            </header>

            <dl className="case__story">
              <div>
                <dt>Desafio</dt>
                <dd>{project.challenge}</dd>
              </div>
              <div>
                <dt>Estratégia</dt>
                <dd>{project.strategy}</dd>
              </div>
              <div>
                <dt>Resultado</dt>
                <dd>{project.result}</dd>
              </div>
            </dl>

            <ul className="case__metrics" aria-label="Resultados em números">
              {project.metrics.map((metric) => (
                <li key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </li>
              ))}
            </ul>

            {project.link && (
              <a href={project.link} className="case__link">
                Ver case completo →
              </a>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Projetos;
