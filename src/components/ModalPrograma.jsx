import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { Programa } from "./Programa";

export const ModalPrograma = ({ isOpen, onClose, nome, imagens }) => {

  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] sm:w-[80%] lg:w-[70%] max-w-[600px] relative max-h-[90vh] sm:max-h-[80vh] overflow-auto">
        <button className="absolute top-2 right-3 text-2xl font-bold cursor-pointer" onClick={onClose}>
          ✖
        </button>

        {isImageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-8 h-8 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
          </div>
        )}

        <Programa nome={nome} imagens={imagens} onImageLoad={handleImageLoad} />
      </div>
    </div>
  );
};
