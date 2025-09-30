import ods1 from "../assets/img/ods/ods1.jpg";
import ods2 from "../assets/img/ods/ods2.jpg";
import ods4 from "../assets/img/ods/ods4.jpg";
import ods5 from "../assets/img/ods/ods5.jpg";
import ods10 from "../assets/img/ods/ods10.jpg";
import ods11 from "../assets/img/ods/ods11.jpg";
import ods12 from "../assets/img/ods/ods12.jpg";
import ods16 from "../assets/img/ods/ods16.jpg";
import background from "../assets/img/fotos/bg-ods.jpg";
import backgroundMobile from "../assets/img/fotos/bg-ods-mobile.jpg";

export const ODS = () => {
  return (
    <section className="relative flex flex-col lg:flex-row justify-center items-center py-10 px-4 md:px-10 xl:py-[100px] 2xl:py-[150px]">
      <div className="hidden md:block absolute top-0 left-0 w-full h-full object-cover -z-30">
        <img src={background} />
      </div>
      <div className="block md:hidden absolute top-0 left-0 w-full h-full object-cover -z-30">
        <img src={backgroundMobile} />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#88B04B] opacity-80 -z-20">
      </div>
      <div className=" text-white grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-4 md:px-10 lg:px-20 xl:px-[200px] items-center">
        <div>
          <h2 className="text-lg font-bold">
            Os Objetivos de Desenvolvimento Sustentável (ODS) são 17 objetivos
            mundiais, propostos pela Organização das Nações Unidas (ONU), e visam
            alcançar um futuro mais justo e sustentável com proposições como: a
            mitigação da fome, promoção da educação de qualidade, erradicação da
            pobreza, igualdade de gênero, combate às alterações climáticas, entre
            outros. O IRL está alinhado com esses valores e, através da sua rotina
            educativa, tenta contribuir com a implementação das metas de alguns
            dos ODS.
          </h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          <div>
            <img className="w-full" src={ods1} alt="ODS 1 - Erradicação da pobreza" />
          </div>
          <div>
            <img className="w-full" src={ods2} alt="ODS 2 - Fome zero e agricultura sustentável" />
          </div>
          <div>
            <img className="w-full" src={ods4} alt="ODS 4 - Educação de qualidade" />
          </div>
          <div>
            <img className="w-full" src={ods5} alt="ODS 5 - Igualdade de gênero" />
          </div>
          <div>
            <img className="w-full" src={ods10} alt="ODS 10 - Redução das desigualdades" />
          </div>
          <div>
            <img className="w-full" src={ods11} alt="ODS 11 - Cidades e comunidades sustentáveis" />
          </div>
          <div>
            <img className="w-full" src={ods12} alt="ODS 11 - Cidades e comunidades sustentáveis" />
          </div>
          <div>
            <img className="w-full" src={ods16} alt="ODS 16 - Paz, justiça e instituções eficazes" />
          </div>
        </div>
      </div>
    </section>
  );
};
