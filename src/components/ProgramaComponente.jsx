import { useState } from "react";
import { ModalPrograma } from "./ModalPrograma";

export const ProgramaComponente = ({ img, nome, texto, imagens }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center p-10 lg:p-4 h-full">
      <img className="mb-5 w-[150px] rounded-lg" src={img} alt={nome} />
      <div className="flex-grow flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-5">{nome}</h3>
        <p className="text-lg font-medium text-center">{texto}</p>
      </div>

      <button
        className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary flex justify-center items-center text-white text-2xl md:text-3xl font-bold mt-5 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        +
      </button>

      <ModalPrograma
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        nome={nome}
        texto={texto}
        imagens={imagens}
      />
    </section>
  );
};
