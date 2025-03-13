import { BotaoDoacoes } from "./BotaoDoacoes";

export const Sessao = ({ title, img, isRowReverse = false, children, elementoGrafico1, elementoGrafico2, descricao }) => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center py-10 px-4 md:px-10 lg:px-14">
      <div className="lg:hidden flex justify-center gap-3 items-center">
        <img className="h-10" src={elementoGrafico1} />
        <h2 className="text-3xl md:text-5xl text-center font-bold">{title}</h2>
        <img className="h-10" src={elementoGrafico2} />
      </div>
      <div className={`flex flex-col lg:flex-row items-center justify-center gap-14 mb-10 ${isRowReverse ? "lg:flex-row-reverse" : ""
        }`}>
        <div className="w-full lg:w-1/2 py-10">
          <img src={img} alt={descricao} className="rounded-lg" />
        </div>
        <div className="lg:w-1/2">
          <div className="hidden lg:flex gap-4 md:pt-10 sm:pt-0">
            <img className="h-14" src={elementoGrafico1} />
            <h2 className="text-5xl font-bold">{title}</h2>
            <img className="h-14" src={elementoGrafico2} />
          </div>
          {children}
        </div>
      </div>
      <div className="lg:ml-[-20px]">
        <BotaoDoacoes />
      </div>
    </section>
  );
};
