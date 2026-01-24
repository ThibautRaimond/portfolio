import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const openMobileNav = () => {
    setIsMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div className="w-full h-[85px] flex justify-between items-center pr-4 pl-3 bg-[#0e1111d3] text-gray-300 shadow-md shadow-[#040c16]">
      {/* Lien d'accès rapide au main */}
      <a
        href="#main-content"
        className="hideOnMobileMode fixed top-[-60px] left-20 z-[300] ml-2 px-4 py-2 flex justify-center items-center bg-black border-[#07ed66] border-[2px] rounded-lg text-white text-center transition-all duration-300 focus:top-4 "
        onClick={() => {
          const mainContent = document.getElementById("main-content");
          if (mainContent) mainContent.focus();
        }}
      >
        Accéder au contenu principal
      </a>

      <div className="h-[70px] w-[70px] p-[5px] rounded-md flex justify-center">
        <Link to="/portfolio" aria-hidden="true" tabIndex="-1">
          <img alt="Logo passion DEV" src={Logo} style={{ width: "65px" }} />
        </Link>
      </div>

      {/* Desktop Menu */}

      <nav aria-label="Menu principal hideOnMobileMode">
        <ul className="md:flex hideOnMobileMode">
          <li
            className={
              isActive("/portfolio") || isActive("/portfolio/")
                ? "activeLinkClass"
                : ""
            }
            aria-label="Retour vers la page d'accueil"
            aria-current={
              isActive("/portfolio") || isActive("/portfolio/")
                ? "page"
                : undefined
            }
          >
            <Link to="/portfolio">Accueil</Link>
          </li>
          <li
            className={isActive("/portfolio/profil") ? "activeLinkClass" : ""}
            aria-label="Page profil"
            aria-current={isActive("/portfolio/profil") ? "page" : undefined}
          >
            <Link to="/portfolio/profil">Profil</Link>
          </li>
          <li
            className={
              isActive("/portfolio/competences") ? "activeLinkClass" : ""
            }
            aria-label="Page compétences"
            aria-current={
              isActive("/portfolio/competences") ? "page" : undefined
            }
          >
            <Link to="/portfolio/competences">Compétences</Link>
          </li>
          <li
            className={isActive("/portfolio/projets") ? "activeLinkClass" : ""}
            aria-label="Lien vers la page projets"
            aria-current={isActive("/portfolio/projets") ? "page" : undefined}
          >
            <Link to="/portfolio/projets">Projets</Link>
          </li>
          <li
            className={isActive("/portfolio/contact") ? "activeLinkClass" : ""}
            aria-label="Lien vers la page contact"
            aria-current={isActive("/portfolio/contact") ? "page" : undefined}
          >
            <Link to="/portfolio/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Bouton en mode mobile pour ouvrir la modale */}
      <button className="md:hidden z-20" onClick={openMobileNav}>
        <FaBars size={30} aria-label="Ouvrir le menu pour changer de page" />
      </button>

      {/* Afficher la modale si elle est ouverte */}
      {isMobileNavOpen && (
        <MobileNavMenu closeMenu={closeMobileNav} isActive={isActive} />
      )}
    </div>
  );
};

export default Navbar;
