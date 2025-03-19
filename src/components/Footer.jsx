import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaMapMarkedAlt } from "react-icons/fa";
import Logo from "../assets/img/logo-azul.png";

export const Footer = () => {
  return (
    <footer className="text-primary font-bold md:font-2xl flex flex-col justify-center">
      <div className="flex justify-start gap-7 items-center py-2 px-5 md:px-10 md:py-4">
        <div className="h-[80px] w-[120px] md:h-[100px] md:w-[150px]">
          <img className="w-full" src={Logo} alt="Logo do IRL" />
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-1 md:gap-7">
            <a href="tel:+558532436120" className="hover:underline">
              <FaPhone className="inline-block" /> (85) 3243-6120
            </a>
            <a href="mailto:irl@irl.org.br" className="hover:underline">
              <FaEnvelope className="inline-block" /> irl@irl.org.br
            </a>
            <a href="https://www.instagram.com/somosirl" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="inline-block" /> @somosirl
            </a>
            <a href="https://www.facebook.com/somosirl" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="inline-block" /> @somosirl
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=R.+Eretides+Martins,+977+-+São+Gerardo,+Fortaleza+-+CE,+60320-350"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <FaMapMarkedAlt className="inline-block" /> R. Eretides Martins, 977 - São Gerardo, Fortaleza - CE | 60320-350
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
