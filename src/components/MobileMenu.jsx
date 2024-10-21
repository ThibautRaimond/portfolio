import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";

const MobileMenu = () => {
	const location = useLocation();
	const isActive = (pathname) => {
		return location.pathname === pathname;
	};

	const [nav, setNav] = useState(false);
	const menuRef = useRef(null);
	const firstLinkRef = useRef(null);
	const openButtonRef = useRef(null); // Reference to the button that opens the menu

	const handleClick = () => {
		setNav(!nav);

		// Toggle hidden class for main content and images
		const mainElement = document.querySelector("main");
		mainElement.classList.toggle("hidden");
		const imgElements = document.querySelectorAll("img");
		imgElements.forEach((imgElement) => {
			imgElement.classList.toggle("hidden");
		});
	};

	// Focus on the first menu item when the mobile menu opens
	useEffect(() => {
		if (nav && firstLinkRef.current) {
			firstLinkRef.current.focus(); // Move focus to the first link
		} else if (!nav && openButtonRef.current) {
			openButtonRef.current.focus(); // Restore focus to the button when closed
		}
	}, [nav]);

	return (
		<div className="w-full h-[85px] flex justify-between items-center pr-4 pl-3 bg-[#0e1111d3] text-gray-300 shadow-md shadow-[#040c16]">
            {/* Mobile Menu dialog */}
			<ul
				aria-label="Menu de navigation"
				aria-modal={nav ? "true" : undefined}
				aria-hidden={!nav}
				ref={menuRef}
				className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-full bg-[#0e1111d3] flex flex-col justify-center items-center z-10"}
				role="dialog"
			>

				<li
					className={isActive("/portfolio") || isActive("/portfolio/") ? "active py-6 text-4xl" : "py-6 text-4xl"}
				>
					<Link
						onClick={handleClick}
						to="/portfolio"
						smooth={true}
						duration={500}
						ref={firstLinkRef} // Focus on this link when menu opens
					>
						Accueil
					</Link>
				</li>
				<li className={isActive("/portfolio/profil") ? "active py-6 text-4xl" : "py-6 text-4xl"}>
					<Link onClick={handleClick} to="/portfolio/profil" smooth={true} duration={500}>
						Profil
					</Link>
				</li>
				<li className={isActive("/portfolio/competences") ? "active py-6 text-4xl" : "py-6 text-4xl"}>
					<Link onClick={handleClick} to="/portfolio/competences" smooth={true} duration={500}>
						Compétences
					</Link>
				</li>
				<li className={isActive("/portfolio/projets") ? "active py-6 text-4xl" : "py-6 text-4xl"}>
					<Link onClick={handleClick} to="/portfolio/projets" smooth={true} duration={500}>
						Projets
					</Link>
				</li>
				<li className={isActive("/portfolio/contact") ? "active py-6 text-4xl" : "py-6 text-4xl"}>
					<Link onClick={handleClick} to="/portfolio/contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>

				{/* Social Media Links */}
				<div className="flex justify-between mt-4">
					<li className="w-[60px] h-[60px] flex justify-between bg-[#0A66C2] border border-white">
						<a
							aria-label="Linkedin de Thibaut Raimond (nouvel onglet)"
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[60px] h-[60px] flex justify-between bg-[#2d333b] border border-white">
						<a
							aria-label="Github de Thibaut Raimond (nouvel onglet)"
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/ThibautRaimond"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub size={30} />
						</a>
					</li>
				</div>
			</ul>
		</div>
	);
};

export default MobileMenu;
