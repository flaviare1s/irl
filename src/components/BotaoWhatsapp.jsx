import { FaWhatsapp } from "react-icons/fa";

export const BotaoWhatsapp = () => {
  return (
    <a
      href="https://wa.me/5585985596683"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-greenery hover:bg-white text-white hover:text-greenery border hover:border-greenery rounded-full p-4 shadow-lg transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};
