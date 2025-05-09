import { ProgramaComponente } from "./ProgramaComponente";
import img1 from "../assets/img/elementos/figura1.png";
import img3 from "../assets/img/elementos/figura3.png";
import img4 from "../assets/img/elementos/figura4.png";

import { BotaoDoacoes } from "./BotaoDoacoes";

export const ProgramasSection = () => {
  return (
    <section className="bg-radiant-orchid flex flex-col justify-center items-center py-10 px-4 md:pl-20">
      <h2 className="text-white text-3xl md:text-5xl text-center font-bold mb-10">Nossos Programas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProgramaComponente
          img={img1}
          nome="Programa Acolhendo e Convivendo"
          texto="Acontece no contraturno da escola, oferecendo um espaço de convivência e fortalecimento de vínculos para crianças e adolescentes de 06 a 15 anos de idade."
        />
        <ProgramaComponente
          img={img3}
          nome="Grupo de Mulheres Francisca Clotilde"
          texto="Serviço de convivência e fortalecimento de vínculos para figuras femininas responsáveis pelos assistidos pelo IRL."
        />
        <ProgramaComponente
          img={img4}
          nome="Sistema Agroflorestal - SAF"
          texto="Com a implementação do sistema agroflorestal - SAF do IRL, busca-se o incentivo a uma vida sustentável e harmoniosa entre seres humanos e o meio ambiente."
        />
      </div>
      <div className="sm:hidden">
        <BotaoDoacoes />
      </div>
    </section>
  );
};
