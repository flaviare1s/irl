import { useState } from 'react';
import { FaHeart } from 'react-icons/fa'; // Importando o ícone de coração
import { ModalDoacoesMobile } from './ModalDoacoesMobile';

export const BotaoDoacoes = ({ text = 'Faça uma Doação', bgColor = 'bg-living-coral' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div className='sm:hidden'>
      <button
        onClick={openModal}
        className={`${bgColor} text-white font-bold w-[270px] h-[60px] rounded-full flex justify-start px-2 items-center cursor-pointer hover:brightness-120 group transition-all duration-300`}>
        <div className="bg-radiant-orchid h-[50px] w-[50px] rounded-full flex justify-center items-center mr-8 transform transition-transform duration-300 group-hover:translate-x-3">
          <FaHeart className="text-2xl text-freesia" />
        </div>
        {text}
      </button>
      <ModalDoacoesMobile isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};
