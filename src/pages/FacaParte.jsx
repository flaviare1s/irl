import { Contato } from "../components/Contato";
import elementoGrafico from "../assets/img/elementos/x.webp";
import { DadosBancarios } from "../components/DadosBancarios";
import { useSeo } from "../hooks/useSeo";

export const FacaParte = () => {
  useSeo({
    title: "Faça parte | Instituto Dr. Rocha Lima",
    description: "Doe, seja voluntário ou entre em contato com o Instituto Dr. Rocha Lima. Veja os dados bancários, o PIX e como nos encontrar em Fortaleza (CE).",
    path: "/participe",
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <section className="relative flex flex-col md:flex-row items-center justify-center gap-10 py-14 px-4 md:px-10 lg:px-20 xl:px-[200px] bg-gray-50">
        <div className="absolute top-10 left-10 hidden md:block"><img src={elementoGrafico} className="h-[100px]" alt="" /></div>
        <div className="w-full md:w-1/2 space-y-6 font-medium">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-center md:text-left">
            Como nos encontrar
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Que bom saber que você acredita no nosso trabalho tanto quanto a gente e quer nos ajudar nessa missão!
          </p>
          <p className="text-gray-700 leading-relaxed">
            Caso queira somar com a equipe do IRL, entre em contato conosco ou venha nos fazer uma visita.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Se preferir, faça uma doação e nos ajude a construir novas oportunidades para crianças, adolescentes e suas famílias.
          </p>
        </div>
        <Contato />
      </section>
      <DadosBancarios />
    </div>
  );
};
