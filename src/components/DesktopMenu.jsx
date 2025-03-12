import { Link } from "react-router-dom"

export const DesktopMenu = () => {
  return (
    <div className="hidden gap-7 sm:flex">
      <Link to='/programas'>Programas</Link>
      <Link to='/transparencia'>Tranparência</Link>
      <Link to='/doacoes'>Faça uma doação</Link>
    </div>
  )
}
