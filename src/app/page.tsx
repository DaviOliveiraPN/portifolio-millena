import Sobre from '@/sections/Sobre/Sobre';
import Imprensa from '@/sections/Imprensa/Imprensa';
import Projetos from '@/sections/Projetos/Projetos';
import Depoimento from '@/sections/Depoimento/Depoimento';
import Curriculo from '@/sections/Curriculo/Curriculo';
import Contatos from '@/sections/Contatos/Contatos';

export default function Home() {
  return (
    <main>
      <Sobre />
      <Imprensa />
      <Projetos />
      <Depoimento />
      <Curriculo />
      <Contatos />
    </main>
  );
}
