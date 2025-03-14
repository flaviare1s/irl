import { Link } from "react-router-dom"
import Logo from "../assets/img/logo-branca.png"
import { DesktopMenu } from "./DesktopMenu"
import { MobileMenu } from "./MobileMenu"
import { ModalDoacoes } from "./ModalDoacoes"
import { useState } from "react"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <header className="bg-primary text-white flex flex-col justify-center">
      <nav className="flex justify-between items-center py-2 px-5 md:px-10 md:py-4">
        <div className="h-[80px] w-[120px] md:h-[100px] md:w-[150px]">
          <Link to='/'><img className="w-full" src={Logo} alt="Logo do IRL" /></Link>
        </div>
        <div>
          <MobileMenu openModal={openModal} />
          <DesktopMenu openModal={openModal} />
          <ModalDoacoes isOpen={isOpen} closeModal={closeModal} />
        </div>
      </nav>
    </header>
  )
}
