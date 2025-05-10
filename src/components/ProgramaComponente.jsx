import { HashLink } from "react-router-hash-link";

export const ProgramaComponente = ({ img, nome, texto, id }) => {
  return (
    <section className="flex flex-col items-center justify-center p-10 lg:p-4 h-full">
      <img className="mb-5 w-[150px] h-[150px]" src={img} alt={nome} />
      <div className="flex-grow flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-5 text-white">{nome}</h3>
        <p className="text-lg font-medium text-center text-white">{texto}</p>
      </div>

      <HashLink
        to={`/programas#${id}`}
        className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary flex justify-center items-center text-white text-2xl md:text-3xl font-bold mt-5 cursor-pointer"
      >
        +
      </HashLink>
    </section>
  );
};
