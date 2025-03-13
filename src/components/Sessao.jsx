export const Sessao = ({ title, img, isRowReverse = false, children, elementoGrafico1, elementoGrafico2, descricao }) => {
  return (
    <section>
      <div className="lg:hidden flex justify-center gap-3 items-center pt-10">
        <img src={elementoGrafico1} />
        <h2 className="text-3xl text-center font-bold">{title}</h2>
        <img src={elementoGrafico2} />
      </div>
      <div className={`flex flex-col lg:flex-row items-center justify-center gap-4 px-4 lg:px-10 xl:px-20 mb-10 ${isRowReverse ? "lg:flex-row-reverse" : ""
        }`}>
        <div className="w-full lg:w-1/2 py-10">
          <img src={img} alt={descricao} className="rounded-lg" />
        </div>
        <div className="lg:w-1/2">
          <div className="hidden lg:flex gap-4 pb-10 md:pt-10 sm:pt-0">
            <img src={elementoGrafico1} />
            <h2 className="text-5xl">{title}</h2>
            <img src={elementoGrafico2} />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};
