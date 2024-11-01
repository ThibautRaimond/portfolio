import React, { useRef, useEffect } from 'react';
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ closeMenu, isActive }) => {
    const firstLinkRef = useRef(null);
    const lastLinkRef = useRef(null);
    const menuRef = useRef(null);
    
    useEffect(() => {
        // Gérer le focus
        const focusableElements = menuRef.current.querySelectorAll('a, button');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        const trapFocus = (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) { // Touche Shift + Tab
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else { // Touche Tab
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        };
        
        document.addEventListener('keydown', trapFocus);
        
        // Boucler dans la modale à la tabulation
        firstElement.focus();
        
        return () => {
            document.removeEventListener('keydown', trapFocus);
        };
    }, []);
    
    return (
        <div className="fixed inset-0 z-30 bg-black">
            <nav
                role="dialog"
                aria-label="Menu de navigation"
                aria-modal="true"
                ref={menuRef}
                className="absolute top-0 left-0 w-full h-full bg-[#0e1111d3] text-center transform flex justify-center items-center"
                onClick={(e) => e.stopPropagation()} // Empêche la fermeture de la modale lorsqu'on clique à l'intérieur
            >
                <button 
                    aria-label="Fermer le menu" 
                    onClick={closeMenu} 
                    className="absolute top-6 right-4 z-40"
                >
                    <FaTimes size={30} />
                </button>
                
                <ul className="py-4">
                    <li className={`py-6 mt-10 text-4xl ${isActive("/portfolio") ? "active" : ""}`}
                        aria-current={isActive("/portfolio") ? "page" : undefined}
                    >
                        <Link ref={firstLinkRef} onClick={closeMenu} to="/portfolio">Accueil</Link>
                    </li>
                    <li className={`py-6 text-4xl ${isActive("/portfolio/profil") ? "active" : ""}`}
                        aria-current={isActive("/portfolio/profil") ? "page" : undefined}
                    >
                        <Link onClick={closeMenu} to="/portfolio/profil">Profil</Link>
                    </li>
                    <li className={`py-6 text-4xl ${isActive("/portfolio/competences") ? "active" : ""}`}
                        aria-current={isActive("/portfolio/competences") ? "page" : undefined}
                    >
                        <Link onClick={closeMenu} to="/portfolio/competences">Compétences</Link>
                    </li>
                    <li className={`py-6 text-4xl ${isActive("/portfolio/projets") ? "active" : ""}`}
                        aria-current={isActive("/portfolio/projets") ? "page" : undefined}
                    >
                        <Link onClick={closeMenu} to="/portfolio/projets">Projets</Link>
                    </li>
                    <li className={`py-6 text-4xl mb-2 ${isActive("/portfolio/contact") ? "active" : ""}`}
                        aria-current={isActive("/portfolio/contact") ? "page" : undefined}
                    >
                        <Link ref={lastLinkRef} onClick={closeMenu} to="/portfolio/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MobileNavMenu;
