import { ReactNode } from 'react';
import { SectionId } from '@/sections/sections';

type SectionProps = {
  id: SectionId;
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
  children?: ReactNode;
};

function Section({ id, eyebrow, title, intro, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${className ?? ''}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`} className="section__title">
          {title}
        </h2>
        {intro && <p className="section__intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export default Section;
