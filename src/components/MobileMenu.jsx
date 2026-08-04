import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sm:hidden font-bold">
      <button
        ref={menuButtonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white"
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        aria-controls="menu-mobile"
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <div
        ref={menuRef}
        id="menu-mobile"
        inert={!isMenuOpen}
        className={`fixed top-[80px] left-0 z-40 w-[95%] h-full bg-primary transition-[translate] duration-300 ease-out motion-reduce:transition-none ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col items-start px-20 justify-center space-y-4 py-4">
          <NavLink to="/" end className="text-white link-nav" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/programas" className="text-white link-nav" onClick={closeMenu}>Programas</NavLink>
          <NavLink to="/transparencia" className="text-white link-nav" onClick={closeMenu}>Transparência</NavLink>
          <NavLink to="/participe" className="text-white link-nav cursor-pointer" onClick={closeMenu}>Faça parte</NavLink>
        </div>
      </div>
    </div>
  );
};
