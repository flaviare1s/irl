// prioridade: só o primeiro programa da página fica acima da dobra e é o LCP.
// Os demais entram com lazy para não competir por banda no carregamento inicial.
export const Programa = ({ id, img, titulo, paragrafos, bgColor, color, isReverse, elementoGrafico1, elementoGrafico2, elementoGrafico3, prioridade = false }) => {
  return (
      <section
        id={id}
        className={`bg-${bgColor} text-${color} flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center gap-10 p-10 md:px-44 md:py-20 items-center scroll-mt-20 relative`}
      >
      <div className="hidden md:block absolute top-10 left-5">
        <img loading="lazy" className="h-20 md:h-32" src={elementoGrafico1} alt="" />
      </div>
      <div className="hidden md:block absolute top-4 right-20">
        <img loading="lazy" className="h-20 md:h-32" src={elementoGrafico2} alt="" />
      </div>
      <div className="hidden md:block absolute top-1/2 left-10">
        <img loading="lazy" className="h-20 md:h-32" src={elementoGrafico3} alt="" />
      </div>
        <div className="max-w-[500px]  w-full flex justify-center">
          <img
            className="w-[90%] h-auto rounded-2xl"
            src={img}
            alt="Imagem do programa"
            decoding="async"
            {...(prioridade ? { fetchPriority: "high" } : { loading: "lazy" })}
          />
        </div>
        <div className="max-w-[500px]">
          <h2 className="text-3xl md:text-5xl font-bold my-5">{titulo}</h2>
          {paragrafos.map((texto, index) => (
            <p key={index} className="mb-4">{texto}</p>
          ))}
        </div>
      </section>
  );
};
