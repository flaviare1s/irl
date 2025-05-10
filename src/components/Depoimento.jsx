export const Depoimento = ({ depoimento, foto, nome, relacao }) => {
  return (
    <section className="flex flex-col items-center justify-center p-8 lg:p-4 bg-white rounded-md h-[500px]">
      <div className="flex-grow flex flex-col items-center justify-center">
        <p className="text-base font-medium text-center">{depoimento}</p>
      </div>
      <div className="flex justify-center items-center gap-2 my-1">
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex-shrink-0">
          <img className="w-full h-full object-cover" src={foto} alt={nome} />
        </div>
        <h3 className="font-bold md:text-xl">{nome} - {relacao}</h3>
      </div>
    </section>
  );
};
