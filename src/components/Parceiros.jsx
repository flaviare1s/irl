import logoEstado from "../assets/img/parceiros/governo-ceara.png"
import logoMunicipio from "../assets/img/parceiros/logo-municipio.png"
import logoSesc from "../assets/img/parceiros/logo-sesc.png"
import logoSescAtivo from "../assets/img/parceiros/logo-sesc-ativo.png"

export const Parceiros = () => {
  return (
    <section className="bg-gray-100 pt-5">
      <div className="mr-0 lg:mr-30 xl:mr-20">
        <h2 className="text-lg font-bold px-5">Parceiros</h2>
        <div className="flex justify-around items-center p-5 sm:p-10">
          <div className="w-[70px] sm:w-[150px]">
            <img className="w-full" src={logoEstado} alt="Logo do Governo do Ceará" />
          </div>
          <div className="w-[70px] sm:w-[150px]">
            <img className="w-full" src={logoMunicipio} alt=" Logo da Prefeitura Municipio de Fortaleza" />
          </div>
          <div className="w-[70px] sm:w-[150px]">
            <img className="w-full" src={logoSesc} alt="Logo do SESC" />
          </div>
          <div className="w-[70px] sm:w-[150px]">
            <img className="w-full" src={logoSescAtivo} alt="Logo do SESC Ativo" />
          </div>
        </div>
      </div>
    </section>
  )
}

