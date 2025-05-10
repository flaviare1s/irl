import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaMapMarkedAlt,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/img/logo-azul.png";
import { Parceiros } from "./Parceiros";

export const Footer = () => {
  return (
    <footer className="text-sm font-bold md:text-base flex flex-col justify-center py-5">
      <Parceiros />
      <div className="flex justify-center items-center gap-5 pb-3">
        <div className="flex flex-col justify-center items-center w-[50%]">
          <div className="h-[80px] w-[120px] md:h-[100px] md:w-[120px] flex justify-center items-center">
            <img className="w-full" src={Logo} alt="Logo do IRL" />
          </div>
          <div className="flex gap-5 items-center justify-center ml-[-20px] mt-2">
            <div className="bg-primary rounded-full w-[32px] h-[32px] flex justify-center items-center hover:bg-freesia text-lg text-freesia text-center hover:text-primary">
              <a
                href="https://www.instagram.com/somosirl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FaInstagram className="inline-block mb-[3px]" />
              </a>
            </div>
            <div className="bg-primary rounded-full w-[32px] h-[32px] flex justify-center items-center hover:bg-freesia  text-lg text-freesia text-center hover:text-primary">
              <a
                href="https://www.facebook.com/somosirl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FaFacebook className="inline-block mb-[3px]" />
              </a>
            </div>
            <div className="bg-primary rounded-full w-[32px] h-[32px] flex justify-center items-center hover:bg-freesia text-lg text-freesia text-center hover:text-primary">
              <a
                href="https://www.youtube.com/@institutodr.rochalima-irl7019"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FaYoutube className="inline-block mb-[3px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-[50%] pr-3 md:pr-0">
          <h3 className="text-black font-medium">Contato:</h3>
          <div className="flex flex-col gap-1">
            <a href="tel:+558532436120" className="hover:underline font-medium">
              <FaPhone className="inline-block text-freesia" /> (85) 3243-6120
            </a>
            <a href="mailto:irl@irl.org.br" className="hover:underline font-medium">
              <FaEnvelope className="inline-block text-freesia" /> irl@irl.org.br
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=R.+Eretides+Martins,+977+-+São+Gerardo,+Fortaleza+-+CE,+60320-350"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-medium"
            >
              <FaMapMarkedAlt className="inline-block text-freesia" /> R. Eretides Martins,
              977 - São Gerardo, Fortaleza - CE | 60320-350
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
