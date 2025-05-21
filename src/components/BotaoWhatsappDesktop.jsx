import { FaWhatsapp } from "react-icons/fa";

export const BotaoWhatsappDesktop = () => {
  return (
    <a
      href="https://wa.me/5585991464053"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-greenery hover:bg-white text-white hover:text-greenery border hover:border-greenery rounded-full shadow-lg transition-all duration-300 hidden lg:flex w-[60px] h-[60px] justify-center items-center"
    >
      <FaWhatsapp className="text-2xl text-center" />
    </a>
  );
};
