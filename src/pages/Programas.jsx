import { ProgramaComponente } from "../components/ProgramaComponente"
import { BotaoDoacoes } from "../components/BotaoDoacoes"
import img1 from "../assets/img/elementos/figura1.png"
import img2 from "../assets/img/elementos/figura2.png"
import img3 from "../assets/img/elementos/figura3.png"
import img4 from "../assets/img/elementos/figura4.png"


export const Programas = () => {
  return (
    <div className="bg-radiant-orchid flex flex-col justify-center items-center py-10 px-4 md:px-10 lg:pl-20 xl:pl-[200px]">
      <h2 className="text-white text-3xl md:text-5xl text-center font-bold mb-10">Nossos Programas</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProgramaComponente img={img1} nome='Programa Acolhendo e Convivendo' descricao='Acontece no contraturno da escola, oferecendo um espaço de convivência e fortalecimento de vínculos para crianças e adolecentes de 06 a 15 anos de idade.'  />
          <ProgramaComponente img={img2} nome='Biblioteca José Sérgio dos Reis Júnior' descricao='Um espaço que visa democratizar o acesso ao livro e à leitura na comunidade do entorno do IRL.' /><ProgramaComponente img={img3} nome='Grupo de Mulheres Francisca Clotilde' descricao='Serviço de convivência e fortalecimento de vínculos para figuras femininas responsáveis pelos assistidos pelo IRL.' /><ProgramaComponente img={img4} nome='Sistema Agroflorestal - SAF' descricao='Com a implementação do sistema agroflorestal - SAF do IRL, busca-se o incentivo a uma vida sustentável e harmoniosa entre seres humanos e o meio ambiente.' />
        </div>
        <div>
          <BotaoDoacoes />
        </div>
      </div>
    </div>
  )
}
