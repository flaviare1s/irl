import { Sessao } from "../components/Sessao";

import fotoEquipe from "../assets/img/fotos/equipe.jpg";
import elementoGrafico from "../assets/img/elementos/elemento-verde1.png"
import { SessaoConteudo2 } from "./SessaoConteudo2";
import { Button } from "./Button";

export const Equipe = () => {

  return (
    <Sessao title="Nossa Equipe" img={fotoEquipe} isRowReverse={true} elementoGrafico1={elementoGrafico}>
      <SessaoConteudo2 text="A equipe IRL é responsável por fazer do Instituto Dr. Rocha Lima um espaço educativo que oportuniza o desenvolvimento de potencialidades inidividuais e coletivas das crianças e adolescentes assistidos." />
      <div className="mt-10">
        <Button text="Faça Parte" rota="/" bgColor="bg-freesia" />
      </div>
    </Sessao>
  );
};
