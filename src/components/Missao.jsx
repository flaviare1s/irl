import { Sessao } from "../components/Sessao";

import video from "../assets/videos/video.mp4"
import elementoGrafico from "../assets/img/elementos/elemento-rosa3.png"
import { SessaoConteudo2 } from "./SessaoConteudo2";
import { Button } from "./Button";

export const Missao = () => {

  return (
    <Sessao title="Nossa Missão" img={video} isRowReverse={false} elementoGrafico2={elementoGrafico} bgColor="bg-greenery">
      <SessaoConteudo2 text="Contribuir, por meio de um espaço de educação não-formal, com o desenvolvimento humano de crianças e adolescentes, ampliando suas potencialidades para o protagonismo na superação de suas vulnerabilidades sociais e econômica." />
      <div className="mt-10">
        <Button text="Conheça Nossos Programas" rota="/programas" bgColor="bg-primary" />
      </div>
    </Sessao>
  );
};
