import { FaHeart } from 'react-icons/fa'; // Importando o ícone de coração

export const BotaoDoacoes = ({ text = 'Faça uma Doação', bgColor = 'bg-living-coral' }) => {
  return (
    <button className={`${bgColor} text-white font-bold w-[230px] h-[60px] rounded-full flex justify-start px-2 items-center lg:rotate-90 cursor-pointer`}>
      <div className='bg-radiant-orchid h-[50px] w-[50px] rounded-full flex justify-center items-center mr-2'>
        <FaHeart className="text-2xl text-freesia" />
      </div>
      {text}
    </button>
  );
};
