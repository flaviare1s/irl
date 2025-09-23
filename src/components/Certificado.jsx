import { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { ModalDocumentos } from "./ModalDocumentos";

export const Certificado = ({ bgColor, nome, img }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={openModal} className={`${bgColor} text-white p-4 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg`}>
        <IoDocumentTextOutline className="text-4xl" title="Arquivo de Documento" />
      </button>
      <p className="text-center text-white font-bold text-lg mt-3">{nome}</p>
      <ModalDocumentos isOpen={isOpen} closeModal={closeModal} img={img} nome={nome} />
    </div>
  );
};
