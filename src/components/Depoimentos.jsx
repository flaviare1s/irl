import { BotaoDoacoes } from "./BotaoDoacoes";
import { Depoimento } from "./Depoimento";

import pattern from "../assets/img/elementos/elemento-azul1.png";
import neuzaCysne from "../assets/img/fotos/neuza_cysne.jpg";
import clausonSales from "../assets/img/fotos/clauson_sales.jpg";
import adrianMelo from "../assets/img/fotos/adrian_melo.jpg";
import mariaHorteneuza from "../assets/img/fotos/maria_horteneuza.jpg";

// Importações do Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Depoimentos = () => {
  return (
    <div className="bg-living-coral flex flex-col justify-center items-center py-10 px-4 md:px-10 lg:pl-20 lg:pr-[250px]">
      <div className="flex justify-center items-center gap-3 mb-10">
        <img className="w-10" src={pattern} alt="elemento decorativo" />
        <h2 className="text-white text-3xl md:text-5xl text-center font-bold">
          O que dizem sobre nós
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1360: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          <SwiperSlide>
            <Depoimento
              depoimento='"Aprendi a trabalhar em grupo e que ninguém faz nada só. Conheci o Grupo de Mulheres Francisca Clotilde através de uma amiga, e foi uma das melhores coisas que aconteceu na minha vida, pois estava passando por momentos difíceis e depressivos. Só tenho a agradecer ao IRL e ao grupo de mulheres."'
              nome="Maria Horteneuza de Oliveira"
              foto={mariaHorteneuza}
              relacao="Grupo de Mulheres Francisca Clotilde"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Depoimento
              depoimento='"Contribuo de forma voluntária no IRL desde 2015. Inicialmente prestei serviço de automação do abastecimento de água da sede, projetando e instalando o sistema. Continuo sempre visitando o IRL e me voluntariando para resolver problemas referentes à infraestrutura. Nesse tempo de trabalho voluntário, um dos aprendizados que tive foi perceber como é importante fazer algo para ajudar a melhorar a vida dos outros."'
              nome="Clauson Sales"
              foto={clausonSales}
              relacao="Voluntário"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Depoimento
              depoimento='"Sempre fui fã do trabalho desenvolvido pelo IRL, mas me envolvi de forma mais ativa no início da pandemia, quando eu e minha rede de apoio conseguimos um bom volume de doações. Eu admiro muito o IRL pelo lindo trabalho que eles desenvolvem com as crianças, sempre com cuidado e amor, não só pelas crianças, mas também pelas famílias. Isso também serve de inspiração para mim como mãe, na criação dos meus filhos, pois quero que sejam homens bons e que sempre olhem para o próximo também com cuidado."'
              nome="Neuza Cysne"
              foto={neuzaCysne}
              relacao="Parceira"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Depoimento
              depoimento='"Estou há quatro anos no IRL e gosto de tudo, principalmente de capoeira, que aprendi nos projetos de lá."'
              nome="Carlos Adrian da Silva Melo"
              foto={adrianMelo}
              relacao="Ex participante do A&C"
            />
          </SwiperSlide>
        </Swiper>

        <div className="mt-10">
          <BotaoDoacoes bgColor="bg-greenery" />
        </div>
      </div>
    </div>
  );
};
