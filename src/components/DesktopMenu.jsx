import { NavLink } from "react-router-dom"
export const DesktopMenu = () => {
  return (
    <div className="hidden gap-7 sm:flex md:text-lg font-bold">
      <NavLink className="link-nav" to='/' end>Home</NavLink>
      <NavLink className="link-nav" to='/programas'>Programas</NavLink>
      <NavLink className="link-nav" to='/transparencia'>Transparência</NavLink>
      <NavLink className="link-nav" to='/participe'>Faça parte</NavLink>
      <NavLink className="link-nav" to='/blog'>Blog</NavLink>
    </div>
  )
}
