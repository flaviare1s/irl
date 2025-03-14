import { Link } from "react-router-dom"

export const DesktopMenu = ({ openModal }) => {
  return (
    <div className="hidden gap-7 sm:flex md:text-lg font-bold">
      <Link className="hover:opacity-50" to='/programas'>Programas</Link>
      <Link className="hover:opacity-50" to='/transparencia'>Tranparência</Link>
      <button className="hover:opacity-50" to='/doacoes' onClick={openModal}>Faça uma doação</button>
    </div>
  )
}
