export const SessaoConteudo1 = ({ numero, ano, texto, lastItem = false }) => {
  return (
    <>
      <div className="bg-primary text-white p-5 flex gap-4 first:rounded-t-md last:rounded-b-md">
        <p className="bg-white text-greenery h-6 w-6 rounded-full text-center border border-2-greenery">{numero}</p>
        <div className="flex-1">
          <p className="font-bold">{ano}</p>
          <p>{texto}</p>
        </div>
      </div>
      <div className="px-5">{!lastItem && <hr className="text-freesia w-full" />}</div>
    </>
  );
};
