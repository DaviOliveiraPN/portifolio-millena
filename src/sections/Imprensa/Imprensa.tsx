import { press } from '@/content/site';

function Imprensa() {
  if (press.length === 0) return null;

  return (
    <aside className="press" aria-label="Onde meu trabalho apareceu">
      <div className="container press__inner">
        <p className="press__label">Onde meu trabalho apareceu</p>
        <ul className="press__list">
          {press.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Imprensa;
