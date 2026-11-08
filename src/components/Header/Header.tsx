import { SECTIONS } from '@/sections/sections';
import { profile } from '@/content/site';

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#sobre" className="header__brand">
          {profile.name}
        </a>
        <nav aria-label="Navegação principal">
          <ul className="header__nav">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={id === 'contatos' ? 'header__cta' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
