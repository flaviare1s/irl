import { Button } from "../components/Button";
import { Sessao } from "../components/Sessao";
import { SessaoConteudo1 } from "../components/SessaoConteudo1";

import foto1 from "../assets/img/foto1.jpg";
import elementoGrafico from "../assets/img/elemento-amarelo1.png"

export const Historia = () => {
  const eventos = [
    { numero: "1", ano: "1913", texto: "Fundação do Instituto de Proteção e Assistência à Infância - IPAI" },
    { numero: "2", ano: "1934", texto: "Inauguração da sede atual e início do programa de abrigamento para crianças e adolecentes" },
    {
      numero: "3", ano: "1954", texto: "Renomeado em homenagem ao seu fundador, passou a se chamar Instituto Dr. Rocha Lima de Proteção e Assistência à Infância - IRL"
    },
    {
      numero: "4", ano: "2010", texto: "Reformulação dos programas do IRL em busca de maior compatibilidade com o direito à convivência familiar e comunitária"
    }, {
      numero: "5", ano: "2015", texto: "Implementação de uma assistência social moderna que busca contribuir com o desenvolvimento humano, o bem-estar e a formação ética de crianças, adolescentes e as suas respectivas famílias, oportunizando assim, o protagonismo na sua própria transformação social"
    },
  ];

  return (
    <Sessao title="Nossa História" img={foto1} descricao="Duas crianças do IRL na janela" isRowReverse={true} elementoGrafico1={elementoGrafico}>
      <div className="bg-primary rounded-md overflow-hidden">
        {eventos.map((evento, index) => (
          <SessaoConteudo1
            key={index}
            numero={evento.numero}
            ano={evento.ano}
            texto={evento.texto}
            lastItem={index === eventos.length - 1}
          />
        ))}
      </div>
      <Button />
    </Sessao>
  );
};
