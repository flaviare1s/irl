import acolhendo from "../assets/img/fotos/programas/Acolhendo6.jpg";
import mulheres from "../assets/img/fotos/programas/Mulheres.jpg";
import agroflorestal from "../assets/img/fotos/programas/Agrofloresta.jpg";
import elementoGrafico1 from "../assets/img/elementos/elemento-verde2.png";
import elementoGrafico2 from "../assets/img/elementos/elemento-azul2.png";
import elementoGrafico3 from "../assets/img/elementos/elemento-rosa3.png";
import elementoGrafico4 from "../assets/img/elementos/x.png";

import { Programa } from "../components/Programa";
import { LoadingScreen } from "../components/LoadingScreen";
import { useState } from "react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Programas = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading && <LoadingScreen />}
      <Programa
        id="acolhendo-e-convivendo"
        bgColor={"radiant-orchid"}
        color={"white"}
        isReverse={false}
        img={acolhendo}
        elementoGrafico1={elementoGrafico4}
        elementoGrafico2={elementoGrafico2}
        titulo="Programa Acolhendo e Convivendo"
        paragrafos={[
          "O Programa A&C funciona no contraturno escolar e atende crianças e adolescentes de 6 a 13 anos de idade, moradores do Bairro Ellery e adjacências, em Fortaleza/CE.",
          "O A&C oferece um espaço de convivência e fortalecimento de vínculos para crianças e adolescentes...",
          "No intuito de garantir segurança alimentar, o IRL também oferece duas refeições diárias, sendo almoço e lanche da tarde.",
        ]}
      />
      <Programa
        id="agrofloresta"
        bgColor={"greenery"}
        color={"black"}
        elementoGrafico3={elementoGrafico3}
        isReverse={true}
        img={agroflorestal}
        titulo="Sistema Agroflorestal - SAF"
        paragrafos={[
          "O sistema agroflorestal (SAF) é uma técnica de recuperação ambiental e de produção de alimentos que se inspira na dinâmica que ocorre na natureza, onde plantas de diversas espécies vivem juntas, uma ajudando a outra no seu desenvolvimento. ",
          "Com a implementação do sistema agroflorestal do IRL, busca-se oportunizar um contato próximo das crianças e adolescentes com a natureza. No SAF são realizadas atividades educativas, e também, momentos de cultivo e plantio a fim de fomentar e promover a segurança alimentar, além do incentivo à uma vida sustentável e harmoniosa entre seres humanos e meio ambiente.",
        ]}
      />
      <Programa
        id="grupo-de-mulheres-francisca-clotilde"
        bgColor={"primary"}
        color={"white"}
        elementoGrafico2={elementoGrafico1}
        isReverse={false}
        img={mulheres}
        titulo="Grupo de Mulheres Francisca Clotilde"
        paragrafos={[
          "O Grupo de mulheres Francisca Clotilde é um serviço de convivência e fortalecimento de vínculos para figuras femininas responsáveis pelas crianças e adolescentes inscritas no Programa Acolhendo e Convivendo. Os encontros são semanais e tem como objetivo ampliar o universo informacional das mulheres participantes no que se refere a sustentabilidade, a saúde e direitos da mulher, assim como estimular a autonomia financeira e a inserção no mercado de trabalho. Além disso, em parceria com o Sesc, por meio do Programa Sesc Ativo, são oferecidas aulas de dança duas vezes por semana, através de uma turma de multipráticas de dança.",
        ]}
      />
    </div>
  );
};
