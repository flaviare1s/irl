import { FaWhatsapp } from "react-icons/fa";

export const BotaoWhatsappDesktop = () => {
  return (
    <a
      href="https://wa.me/5585991464053"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-[110px] top-[75%] z-50 bg-greenery hover:bg-white text-white hover:text-greenery border hover:border-greenery rounded-full p-4 shadow-lg transition-all duration-300 hidden lg:block"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};
