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
            <p><FaPhone className="inline-block mr-2" /> (85) 3243-6120</p>
            <p><FaEnvelope className="inline-block mr-2" /> irl@irl.org.br</p>
            <a href="https://www.instagram.com/somosirl" target="blank">
              <FaInstagram className="inline-block mr-2" />@somosirl
            </a>
            <a href="https://www.facebook.com/somosirl" target="blank">
              <FaFacebook className="inline-block mr-2" />@somosirl
            </a>
            <p><FaMapMarkedAlt className="inline-block mr-2" />R. Eretides Martins, 977 - São Gerardo, Fortaleza - CE | 60320-350</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
