import React, { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ closeMenu, isActive }) => {
  const firstLinkRef = useRef(null);
  const lastLinkRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    // Gérer le focus
    const focusableElements = menuRef.current.querySelectorAll("a, button");
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const trapFocus = (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Touche Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Touche Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", trapFocus);

    // Boucler dans la modale à la tabulation
    firstElement.focus();

    return () => {
      document.removeEventListener("keydown", trapFocus);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-30 bg-black">
      <div
        role="dialog"
        aria-label="Menu de navigation"
        aria-modal="true"
        ref={menuRef}
        className="absolute top-0 left-0 w-full h-full bg-[#0e1111d3] text-center flex justify-center items-center overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture de la modale lorsqu'on clique à l'intérieur
      >
        <button
          aria-label="Fermer le menu"
          onClick={closeMenu}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40"
        >
          <FaTimes size={30} />
        </button>
        <nav className="w-full">
          <ul className="py-4">
            <li
              className={`py-4 sm:py-6 mt-6 sm:mt-10 text-2xl sm:text-3xl md:text-4xl ${isActive("/") ? "activeLinkClass" : ""}`}
              aria-current={isActive("/") ? "page" : undefined}
            >
              <Link ref={firstLinkRef} onClick={closeMenu} to="/">
                Accueil
              </Link>
            </li>
            <li
              className={`py-4 sm:py-6 text-2xl sm:text-3xl md:text-4xl ${isActive("/profil") ? "activeLinkClass" : ""}`}
              aria-current={isActive("/profil") ? "page" : undefined}
            >
              <Link onClick={closeMenu} to="/profil">
                Profil
              </Link>
            </li>
            <li
              className={`py-4 sm:py-6 text-2xl sm:text-3xl md:text-4xl ${isActive("/competences") ? "activeLinkClass" : ""}`}
              aria-current={
                isActive("/competences") ? "page" : undefined
              }
            >
              <Link onClick={closeMenu} to="/competences">
                Compétences
              </Link>
            </li>
            <li
              className={`py-4 sm:py-6 text-2xl sm:text-3xl md:text-4xl ${isActive("/projets") ? "activeLinkClass" : ""}`}
              aria-current={isActive("/projets") ? "page" : undefined}
            >
              <Link onClick={closeMenu} to="/projets">
                Projets
              </Link>
            </li>
            <li
              className={`py-4 sm:py-6 mb-2 text-2xl sm:text-3xl md:text-4xl ${isActive("/contact") ? "activeLinkClass" : ""}`}
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              <Link
                ref={lastLinkRef}
                onClick={closeMenu}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavMenu;
