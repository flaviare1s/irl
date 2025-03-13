import { Link } from "react-router-dom"

export const DesktopMenu = () => {
  return (
    <div className="hidden gap-7 sm:flex md:text-lg font-bold">
      <Link className="hover:opacity-50" to='/programas'>Programas</Link>
      <Link className="hover:opacity-50" to='/transparencia'>Tranparência</Link>
      <Link className="hover:opacity-50" to='/doacoes'>Faça uma doação</Link>
    </div>
  )
}
