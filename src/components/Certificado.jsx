import { IoDocumentTextOutline } from "react-icons/io5";

export const Certificado = ({ bgColor, nome}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${bgColor} text-white p-4 rounded-full`}>
        <IoDocumentTextOutline className="text-4xl" title="Arquivo de Documento" />
      </div>
      <p className="text-center text-white font-bold text-lg mt-3">{nome}</p>
    </div>
  );
};
