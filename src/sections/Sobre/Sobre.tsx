import Image from 'next/image';
import { profile } from '@/content/site';

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

function Sobre() {
  return (
    <section id="sobre" className="hero" aria-labelledby="sobre-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">{profile.role}</p>
          <h1 id="sobre-title" className="hero__title">
            {profile.headline}
          </h1>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a href="#projetos" className="button button--primary">
              Ver projetos
            </a>
            <a href="#contatos" className="button button--ghost">
              Vamos conversar
            </a>
          </div>
        </div>

        <figure className="hero__photo">
          {profile.photo ? (
            <Image
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              fill
              sizes="(max-width: 860px) 100vw, 40vw"
              priority
            />
          ) : (
            <span className="hero__initials" aria-hidden="true">
              {initials(profile.name)}
            </span>
          )}
        </figure>
      </div>

      <div className="container">
        <dl className="stats">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="stats__item">
              <dt className="stats__label">{stat.label}</dt>
              <dd className="stats__value">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Sobre;
