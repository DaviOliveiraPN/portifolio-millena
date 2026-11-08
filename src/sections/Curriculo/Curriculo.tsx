import Section from '@/components/Section';
import { education, experience, resumePdf, skills } from '@/content/site';

function Curriculo() {
  return (
    <Section id="curriculo" eyebrow="Currículo" title="Trajetória">
      <div className="resume">
        <div className="resume__main">
          <h3 className="resume__heading">Experiência</h3>
          <ol className="timeline">
            {experience.map((item) => (
              <li key={`${item.period}-${item.role}`} className="timeline__item">
                <p className="timeline__period">{item.period}</p>
                <h4 className="timeline__role">{item.role}</h4>
                <p className="timeline__org">{item.org}</p>
                <p className="timeline__description">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="resume__side">
          <h3 className="resume__heading">Formação</h3>
          <ul className="resume__list">
            {education.map((item) => (
              <li key={item.course}>
                <strong>{item.course}</strong>
                <span>
                  {item.org} · {item.period}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="resume__heading">Competências</h3>
          <ul className="tags">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <a href={resumePdf} className="button button--primary" download>
            Baixar currículo (PDF)
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Curriculo;
