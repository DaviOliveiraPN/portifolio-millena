import { render } from '@testing-library/react';
import Home from './page';
import { SECTIONS } from '@/sections/sections';
import { projects } from '@/content/site';

test('renderiza todas as seções do menu', () => {
  const { container } = render(<Home />);
  SECTIONS.forEach(({ id }) => {
    expect(container.querySelector(`#${id}`)).toBeInTheDocument();
  });
});

test('renderiza um case para cada projeto', () => {
  const { container } = render(<Home />);
  expect(container.querySelectorAll('.case')).toHaveLength(projects.length);
});
