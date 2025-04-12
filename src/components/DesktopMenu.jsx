import { Link } from "react-router-dom"

export const DesktopMenu = ({ openModal }) => {
  return (
    <div className="hidden gap-7 sm:flex md:text-lg font-bold">
      <Link className="link-nav" to='/programas'>Programas</Link>
      <Link className="link-nav" to='/transparencia'>Transparência</Link>
      <button className="link-nav" to='/doacoes' onClick={openModal}>Faça uma doação</button>
    </div>
  )
}
