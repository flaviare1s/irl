export const Depoimento = ({ depoimento, foto, nome, relacao }) => {
  return (
    <section className="flex flex-col items-center justify-center py-8 px-10 lg:px-12 bg-white rounded-md h-[530px]">
      <div className="flex-grow flex flex-col items-center justify-center">
        <p className="text-base sm:text-[15px] font-medium text-center">{depoimento}</p>
      </div>
      <div className="flex justify-start items-center gap-4 my-1 w-full">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0">
          <img className="w-full h-full object-cover" src={foto} alt={nome} />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-sm">{nome}</h3>
          <p className="text-xs">{relacao}</p>
        </div>
      </div>
    </section>
  );
};
