import { testimonial } from '@/content/site';

function Depoimento() {
  return (
    <aside className="testimonial" aria-label="Depoimento">
      <figure className="container testimonial__inner">
        <blockquote className="testimonial__quote">
          <p>“{testimonial.quote}”</p>
        </blockquote>
        <figcaption className="testimonial__author">
          <strong>{testimonial.author}</strong>
          <span>{testimonial.role}</span>
        </figcaption>
      </figure>
    </aside>
  );
}

export default Depoimento;
