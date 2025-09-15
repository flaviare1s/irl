import { Sessao } from "../components/Sessao";
import { SessaoConteudo1 } from "../components/SessaoConteudo1";

import foto from "../assets/img/fotos/nossa_historia.jpg";
import elementoGrafico from "../assets/img/elementos/elemento-amarelo1.png"

export const Historia = () => {
  const eventos = [
    { numero: "1", ano: "1913", texto: "Fundação do Instituto de Proteção e Assistência à Infância - IPAI" },
    { numero: "2", ano: "1934", texto: "Inauguração da sede atual e início do programa de abrigamento para crianças e adolecentes" },
    {
      numero: "3", ano: "1954", texto: "Renomeado em homenagem ao seu fundador, passou a se chamar Instituto Dr. Rocha Lima de Proteção e Assistência à Infância - IRL"
    },
    {
      numero: "4", ano: "2010", texto: "Reformulação dos programas oferecidos pelo IRL, em busca de maior compatibilidade com o direito à convivência familiar e comunitária. Assim, houve a implementação de uma assistência social moderna que contribui com o desenvolvimento humano, o bem-estar e a formação ética de crianças, adolescentes e as suas respectivas famílias, oportunizando o protagonismo na sua própria transformação social."
    },
    {
      numero: "5", ano: "2015", texto: "Criação do Programa Acolhendo e Convivendo (A&C), cuja as atividades ocorrem no contraturno escolar e tem como público alvo crianças e adolescentes em contexto de vulnerabilidade social."
    },
    {
      numero: "6", ano: "2017", texto: "Criação do Grupo de Mulheres Francisca Clotilde, que tem como público participante as figuras femininas das crianças e adolescentes inscritos no A&C."
    },
    {
      numero: "7", ano: "2020", texto: "Implementação do Sistema Agroflorestal (SAF) do IRL, buscando oportunizar um contato próximo das crianças e adolescentes com a natureza e o ideal da sustentabilidade."
    },
  ];

  return (
    <Sessao title="Nossa História" img={foto} descricao="Duas crianças do IRL na janela" isRowReverse={true} elementoGrafico1={elementoGrafico}>
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
    </Sessao>
  );
};
