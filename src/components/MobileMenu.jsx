import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !menuButtonRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sm:hidden">
      <button
        ref={menuButtonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white"
      >
        {isMenuOpen ? (
          // Ícone de "X" quando o menu estiver aberto
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Ícone de hambúrguer quando o menu estiver fechado
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <div
        ref={menuRef}
        className={`fixed top-[90px] left-0 w-2/3 h-full bg-primary transition-transform duration-300 ${isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"}`}
      >
        <div className="flex flex-col items-start px-20 justify-center space-y-4 py-4">
          <Link to="/" className="text-white" onClick={closeMenu}>IRL</Link>
          <Link to="/programas" className="text-white" onClick={closeMenu}>Programas</Link>
          <Link to="/transparencia" className="text-white" onClick={closeMenu}>Transparência</Link>
          <Link to="/doacoes" className="text-white" onClick={closeMenu}>Faça uma doação</Link>
        </div>
      </div>
    </div>
  );
};
