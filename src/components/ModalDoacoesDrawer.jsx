import { useState, useEffect } from 'react';
import qrcode from '../assets/img/qrcode.png';

export const ModalDoacoesDrawer = ({ isOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setIsImageLoading(true);
  }, [isOpen]);

  const handleImageLoad = () => setIsImageLoading(false);

  if (!isOpen && !isVisible) return null;

  return (
    <div
      className={`
        fixed top-1/2 transform -translate-y-1/2 z-10 
        h-[235px] w-[250px] rounded-l-2xl shadow-xl font-nunito
        bg-radiant-orchid overflow-hidden transition-all duration-300 mt-[33px]
        ${isOpen ? 'right-[168px]' : '-right-[-106px]'}
      `}
    >
      <div className="flex flex-row-reverse items-start justify-start h-full">
        <div className="flex flex-col justify-center items-center py-1 pl-4 mt-5 w-full">
          <h2 className="text-sm font-bold mb-4 text-white text-center">
            Doe via PIX pelo aplicativo do seu banco!
          </h2>

          {isImageLoading ? (
            <div className="w-[150px] h-[150px] flex items-center justify-center">
              <div className="w-8 h-8 border-t-4 border-white border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            <img
              className="w-[150px]"
              src={qrcode}
              alt="Qr Code"
              onLoad={handleImageLoad}
            />
          )}

          <p className="mt-6 text-white text-sm">CNPJ | 07.264.138/0001-47</p>
        </div>
      </div>
    </div>
  );
};
