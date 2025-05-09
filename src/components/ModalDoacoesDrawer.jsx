import { useState, useEffect } from 'react';
import qrcode from '../assets/img/qrcode.png';

export const ModalDoacoesDrawer = ({ isOpen }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimationClass('right-[100px] opacity-0');
      const timeout = setTimeout(() => {
        setAnimationClass('right-[168px] opacity-100');
      }, 10);
      return () => clearTimeout(timeout);
    } else {
      setAnimationClass('right-[100px] opacity-0');
      const timeout = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      className={`
        fixed top-1/2 transform -translate-y-1/2 z-10 
        h-[235px] w-[250px] rounded-l-2xl shadow-xl font-nunito
        bg-radiant-orchid overflow-hidden transition-all duration-500 ease-in-out mt-[32px]
        ${animationClass}
      `}
    >
      <div className="flex flex-row-reverse items-start justify-start h-full">
        <div className="flex flex-col justify-center items-center mt-5 w-full">
          <h2 className="text-xs font-bold mb-4 text-white text-center">
            Doe via PIX pelo aplicativo do seu banco!
          </h2>
          <img className="w-[130px]" src={qrcode} alt="Qr Code" />
          <p className="mt-6 text-white text-sm">CNPJ | 07.264.138/0001-47</p>
        </div>
      </div>
    </div>
  );
};
