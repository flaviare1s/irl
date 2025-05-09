import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ModalDoacoesDrawer } from './ModalDoacoesDrawer';

export const BotaoDoacoesFixed = ({ text = 'Faça uma Doação', bgColor = 'bg-living-coral' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed hidden sm:block right-[1px] top-1/2 z-50'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${bgColor} text-white font-bold w-[276px] h-[60px] rounded-full flex justify-start px-2 items-center rotate-90 cursor-pointer hover:brightness-120 group transition-all duration-300`}
      >
        <div className="bg-radiant-orchid h-[50px] w-[50px] rounded-full flex justify-center items-center mr-8 transform transition-transform duration-300 group-hover:translate-x-3">
          <FaHeart className="text-2xl text-freesia" />
        </div>
        {text}
      </button>
      <ModalDoacoesDrawer isOpen={isOpen} />
    </div>

  );
};
