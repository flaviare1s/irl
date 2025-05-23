import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen";
import { Programa } from "../components/Programa";
import acolhendo from "../assets/img/fotos/programas/Acolhendo.jpg";
import mulheres from "../assets/img/fotos/programas/Mulheres.jpg";
import agroflorestal from "../assets/img/fotos/programas/Agrofloresta.jpg";
import elementoGrafico1 from "../assets/img/elementos/elemento-verde2.png";
import elementoGrafico2 from "../assets/img/elementos/elemento-azul2.png";
import elementoGrafico3 from "../assets/img/elementos/elemento-rosa3.png";
import elementoGrafico4 from "../assets/img/elementos/x.png";

export const Programas = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const scrollId = location.state?.scrollTo;
      if (scrollId) {
        const element = document.getElementById(scrollId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [isLoading, location]);

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
          "O A&C oferece um espaço de convivência e fortalecimento de vínculos para crianças e adolescentes, contando com a orientação de educadores sociais responsáveis pela realização de atividades com temáticas ligadas a formação cidadã e o protagonismo social dos participantes, como a valorização das culturas afro e indígena; a sustentabilidade; os direitos, a partir do ECA e da Declaração Universal dos Direitos Humanos; a valorização da cultura popular; o fazer político; as questões de gênero; entre outros. Além disso, compõem a rotina aulas de arte-educação (capoeira, música, dança e teatro), que ocorrem duas vezes na semana com profissionais da área.",
          "Existe ainda, o reforço escolar e a resolução das tarefas enviadas pela escola, tendo uma pedagoga como profissional responsável. Prática de esportes, com as modalidades esportivas vôlei de praia e muay thai, são realizadas duas vezes na semana, em parceria com o SESC, a partir do programa Sesc Ativo. E ainda, existem vivências para fortalecer uma boa relação com o meio ambiente, realizadas na nossa Agrofloresta.",
          "No intuito de garantir segurança alimentar, o IRL também oferece duas refeições diárias, sendo almoço e lanche da tarde."
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
          "Com a implementação do sistema agroflorestal do IRL, busca-se oportunizar um contato próximo das crianças e adolescentes com a natureza.",
          "No SAF são realizadas atividades educativas, e também, momentos de cultivo e plantio a fim de fomentar e promover a segurança alimentar, além do incentivo à uma vida sustentável e harmoniosa entre seres humanos e meio ambiente."
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
          "O Grupo de mulheres Francisca Clotilde é um serviço de convivência e fortalecimento de vínculos para figuras femininas responsáveis pelas crianças e adolescentes inscritas no Programa Acolhendo e Convivendo.",
          " Os encontros são semanais e tem como objetivo ampliar o universo informacional das mulheres participantes no que se refere a sustentabilidade, a saúde e direitos da mulher, assim como estimular a autonomia financeira e a inserção no mercado de trabalho.",
          "Além disso, em parceria com o Sesc, por meio do Programa Sesc Ativo, são oferecidas aulas de dança duas vezes por semana, através de uma turma de multipráticas de dança."
        ]}
      />
    </div>
  );
};
