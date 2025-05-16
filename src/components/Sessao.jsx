import { BotaoDoacoes } from "./BotaoDoacoes";

export const Sessao = ({ title, img, isRowReverse = false, children, elementoGrafico1, elementoGrafico2, descricao, bgColor = 'bg-white' }) => {
  const isVideo = img && (img.endsWith('.mp4') || img.endsWith('.webm') || img.endsWith('.ogg'));

  return (
    <section className={`${bgColor} flex flex-col lg:flex-row justify-center items-center py-10 px-4 md:px-10 lg:px-20 xl:px-[200px]`}>
      <div className="lg:hidden flex justify-center gap-3 items-center">
        <img className="h-10" src={elementoGrafico1} />
        <h2 className="text-3xl md:text-5xl text-center font-bold">{title}</h2>
        <img className="h-10" src={elementoGrafico2} />
      </div>
      <div className={`flex flex-col lg:flex-row items-center justify-center gap-10 mb-10 ${isRowReverse ? "lg:flex-row-reverse" : ""}`}>
        <div className="w-full lg:w-1/2 py-10 flex justify-center">
          {isVideo ? (
            <video src={img} alt={descricao} className="rounded-lg w-full max-w-[400px]" controls />
          ) : (
            <img src={img} alt={descricao} className="rounded-lg w-full max-w-[500px] object-cover" />
          )}
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center md:items-start">
          <div className="hidden lg:flex gap-4 md:pt-10 md:pb-10 sm:pt-0">
            <img className="h-14" src={elementoGrafico1} />
            <h2 className="text-5xl font-bold">{title}</h2>
            <img className="h-14" src={elementoGrafico2} />
          </div>
          {children}
        </div>
      </div>
        <BotaoDoacoes />
    </section>
  );
};

