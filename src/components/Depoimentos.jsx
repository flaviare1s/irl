import { BotaoDoacoes } from "./BotaoDoacoes";
import { Depoimento } from "./Depoimento";

import pattern from "../assets/img/elementos/elemento-azul1.png";
import neuzaCysne from "../assets/img/fotos/neuza_cysne.jpg";
import clausonSales from "../assets/img/fotos/clauson_sales.jpg";
import adrianMelo from "../assets/img/fotos/adrian_melo.jpg";
import mariaHorteneuza from "../assets/img/fotos/maria_horteneuza.jpg";
import inae from "../assets/img/fotos/inae.jpg";
import mycael from "../assets/img/fotos/mycael.JPG";
import miguel from "../assets/img/fotos/miguel.JPG";

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
              depoimento='"O Instituto é importante na minha vida porque a minha mãe tem um “bucado” de coisa pra fazer as vezes, e ela tem a parceria daqui pra me deixar aqui [participando do Programa Acolhendo e Convivendo]. O almoço daqui é muito bom, eu gosto bastante. E também, outra coisa, eu amo muito as educadoras. Eu gosto muito do teatro, e também gosto da educação social, e também da educação formal. Aqui é um espaço que as educadoras nos acolhem, aqui é muito bom e aqui a gente aprende coisas importantes."'
              nome="Inaê"
              foto={inae}
              relacao="Criança Participante do A&C"
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
              depoimento='"[O instituto é importante] porque ele acolhe, a gente aprende, a gente faz coisas legais, a gente faz amigos. Eu gosto de tá aqui [no IRL] porque a gente brinca, se diverte, aprende novas coisas, faz novos amigos. Antes eu ficava em casa sem fazer nada, sem brincar, sem aprender nada, aí eu vim pro instituto e comecei a aprender coisas, porque é bem melhor brincar e aprender do que ficar no celular e na televisão."'
              nome="Antônio Miguel"
              foto={miguel}
              relacao="Criança Participante do A&C"
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
              depoimento='"Eu acho importante [o IRL] por causa das atividades que ele pode trazer pra nós. É um espaço que tu pode vir depois da escola e que pode aprender várias coisas, ao invés de ficar só em casa e ficar deitado, sem fazer nada, [o IRL] pode ser um espaço de lazer e aprendizado. Aqui eu aprendo coisas sobre meio ambiente, às vezes até sobre história também. E esses aprendizados são importantes, porque podem nos ajudar na vida e melhorar nosso intelecto. Como eu disse, é um local que pode aprender várias coisas, fazer atividade física e aproveitar o tempo de diversas formas."'
              nome="Mycael  Henrique"
              foto={mycael}
              relacao="Adolescente participante do A&C"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Depoimento
              depoimento='"Meu nome é Carlos Adrian, tenho 16 anos e participei do Instituto doutor Rocha Lima por seis anos, o Instituto contribuiu muito no meu crescimento por conta de muitas coisas que eu aprendi lá, eu aprendi sobre novas culturas, novas religiões, novos tipos de artes e etc. Conheci novas pessoas, fiz muitos amigos e participei de todas as atividades que acontecem lá no Instituto."'
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
