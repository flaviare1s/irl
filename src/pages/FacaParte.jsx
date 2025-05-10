import { Contato } from "../components/Contato";

export const FacaParte = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-14 px-4 md:px-10 lg:px-20 xl:px-[200px] bg-gray-50">
      <div className="w-full md:w-1/2 space-y-6">
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
  );
};
