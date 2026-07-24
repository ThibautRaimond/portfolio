import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "../assets/png/logo.png";
import MobileNavMenu from "./MobileNavMenu";

const Header = () => {
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const linkClasses = "inline-block underline decoration-1 underline-offset-4 hover:text-white transition-colors duration-200";

  const openMobileNav = () => {
    setIsMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div className="w-full h-[85px] flex justify-between items-center pr-4 pl-3 bg-[#0e1111d3] text-gray-300 shadow-md shadow-[#040c16] z-50">
      {/* Lien d'accès rapide au main */}
      <a
        href="#main-content"
        className="hidden nav:flex fixed top-[-60px] left-20 z-[300] ml-2 px-4 py-2 justify-center items-center bg-black border-[#07ed66] border-[2px] rounded-lg text-white text-center transition-all duration-300 focus:top-4 "
        onClick={(event) => {
          event.preventDefault();
          const mainContent = document.getElementById("main-content");
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ block: "start" });
          }
        }}
      >
        Accéder au contenu principal
      </a>

      <div className="h-[70px] w-[70px] p-[5px] rounded-md flex justify-center">
        <Link to="/" aria-hidden="true" tabIndex="-1">
          <img alt="Page accueil" src={Logo} style={{ width: "55px" }} />
        </Link>
      </div>

      {/* Desktop Menu */}

      <nav aria-label="Menu principal" className="hidden nav:block">
        <ul className="flex">
          <li className={isActive("/") ? "activeLinkClass" : ""}>
            {isActive("/") ? (
              <span aria-current="page" className="cursor-default">Accueil</span>
            ) : (
              <Link to="/" className={linkClasses}>Accueil</Link>
            )}
          </li>
          <li
            className={isActive("/profil") ? "activeLinkClass" : ""}
          >
            {isActive("/profil") ? (
              <span aria-current="page" className="cursor-default">Profil</span>
            ) : (
              <Link to="/profil" className={linkClasses}>Profil</Link>
            )}
          </li>
          <li
            className={
              isActive("/competences") ? "activeLinkClass" : ""
            }
          >
            {isActive("/competences") ? (
              <span aria-current="page" className="cursor-default">Compétences</span>
            ) : (
              <Link to="/competences" className={linkClasses}>Compétences</Link>
            )}
          </li>
          <li
            className={isActive("/projets") ? "activeLinkClass" : ""}
          >
            {isActive("/projets") ? (
              <span aria-current="page" className="cursor-default">Projets</span>
            ) : (
              <Link to="/projets" className={linkClasses}>Projets</Link>
            )}
          </li>
          <li
            className={isActive("/contact") ? "activeLinkClass" : ""}
          >
            {isActive("/contact") ? (
              <span aria-current="page" className="cursor-default">Contact</span>
            ) : (
              <Link to="/contact" className={linkClasses}>Contact</Link>
            )}
          </li>
        </ul>
      </nav>

      {/* Bouton en mode mobile pour ouvrir la modale */}
      <button className="nav:hidden z-20" onClick={openMobileNav} aria-haspopup="dialog" aria-label="Menu principal">
        <FaBars size={30} aria-hidden="true" />
      </button>

      {/* Afficher la modale si elle est ouverte */}
      {isMobileNavOpen && (
        <MobileNavMenu closeMenu={closeMobileNav} isActive={isActive} />
      )}
    </div>
  );
};

export default Header;
