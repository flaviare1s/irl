import { ProgramaComponente } from "../components/ProgramaComponente";
import img1 from "../assets/img/elementos/figura1.png";
import img3 from "../assets/img/elementos/figura3.png";
import img4 from "../assets/img/elementos/figura4.png";

import imgAcolhendo1 from "../assets/img/fotos/programas/Acolhendo.jpg";
import imgAcolhendo2 from "../assets/img/fotos/programas/Acolhendo2.jpg";
import imgAcolhendo3 from "../assets/img/fotos/programas/Acolhendo3.jpg";
import imgAcolhendo4 from "../assets/img/fotos/programas/Acolhendo4.jpg";
import imgAcolhendo5 from "../assets/img/fotos/programas/Acolhendo5.jpg";
import imgMulheres1 from "../assets/img/fotos/programas/Mulheres.jpg";
import imgAgrofloresta1 from "../assets/img/fotos/programas/Agrofloresta.jpg";
import imgAgrofloresta2 from "../assets/img/fotos/programas/Agrofloresta2.jpg";
import { BotaoDoacoes } from "../components/BotaoDoacoes";

export const Programas = () => {
  return (
    <section className="bg-radiant-orchid flex flex-col justify-center items-center py-10 px-4 md:px-10 lg:pl-20 xl:pl-[300px]">
      <h2 className="text-white text-3xl md:text-5xl text-center font-bold mb-10">Nossos Programas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProgramaComponente
          img={img1}
          nome="Programa Acolhendo e Convivendo"
          texto="Acontece no contraturno da escola, oferecendo um espaço de convivência e fortalecimento de vínculos para crianças e adolescentes de 06 a 15 anos de idade."
          imagens={[imgAcolhendo1, imgAcolhendo2, imgAcolhendo3, imgAcolhendo4, imgAcolhendo5]}
        />
        <ProgramaComponente
          img={img3}
          nome="Grupo de Mulheres Francisca Clotilde"
          texto="Serviço de convivência e fortalecimento de vínculos para figuras femininas responsáveis pelos assistidos pelo IRL."
          imagens={[imgMulheres1]}
        />
        <ProgramaComponente
          img={img4}
          nome="Sistema Agroflorestal - SAF"
          texto="Com a implementação do sistema agroflorestal - SAF do IRL, busca-se o incentivo a uma vida sustentável e harmoniosa entre seres humanos e o meio ambiente."
          imagens={[imgAgrofloresta1, imgAgrofloresta2]}
        />
      </div>
      <div className="sm:hidden">
        <BotaoDoacoes />
      </div>
    </section>
  );
};
