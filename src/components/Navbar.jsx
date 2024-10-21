import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";

const Navbar = () => {
	const location = useLocation();

	const isActive = (pathname) => {
		return location.pathname === pathname;
	};

	const [nav, setNav] = useState(false);
	const handleClick = () => {
		setNav(!nav);
		const mainElement = document.querySelector("main");
		mainElement.classList.toggle("hidden");
		const imgElements = document.querySelectorAll("img");
		imgElements.forEach((imgElement) => {
			imgElement.classList.toggle("hidden");
		});
	};

	return (
		<div className="w-full h-[85px] flex justify-between items-center pr-4 pl-3 bg-[#0e1111d3] text-gray-300 shadow-md shadow-[#040c16]">
			<div className="h-[70px] w-[70px] p-[5px] rounded-md flex justify-center">
				<img
					alt="Logo passion DEV"
					src={Logo}
					style={{ width: "65px" }}
				/>
			</div>

			{/* Desktop Menu: */}
			<div>
				<nav>
					<ul className="hidden md:flex">
						<Link to="/portfolio">
							<li
								className={isActive("/portfolio") || isActive("/portfolio/") ? "active" : ""}
								aria-label="Retour vers la page d'accueil"
								aria-current={isActive("/portfolio") || isActive("/portfolio/") ? "page" : undefined}
							>
								Accueil
							</li>
						</Link>
						<Link to="/portfolio/profil">
							<li
								className={isActive("/portfolio/profil") ? "active" : ""}
								aria-label="Page profil"
								aria-current={isActive("/portfolio/profil") ? "page" : undefined}
							>
								Profil
							</li>
						</Link>
						<Link to="/portfolio/competences">
							<li
								className={isActive("/portfolio/competences") ? "active" : ""}
								aria-label="Page compétences"
								aria-current={isActive("/portfolio/competences") ? "page" : undefined}
							>
								Compétences
							</li>
						</Link>
						<Link to="/portfolio/projets">
							<li
								className={isActive("/portfolio/projets") ? "active" : ""}
								aria-label="Lien vers la page projets"
								aria-current={isActive("/portfolio/projets") ? "page" : undefined}
							>
								Projets
							</li>
						</Link>
						<Link to="/portfolio/contact">
							<li
								className={isActive("/portfolio/contact") ? "active" : ""}
								aria-label="Lien vers la page contact"
								aria-current={isActive("/portfolio/contact") ? "page" : undefined}
							>
								Contact
							</li>
						</Link>
					</ul>
				</nav>
			</div>

			{/* Mobile Menu Button */}
			<button onClick={handleClick} className="md:hidden z-20">
				{!nav ? (
					<FaBars size={30} alt="Ouvrir le menu pour changer de page" />
				) : (
					<FaTimes size={30} alt="Fermer le menu pour changer de page" />
				)}
			</button>

			{/* Mobile Menu */}
			<ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-full bg-[#0e1111d3] flex flex-col justify-center items-center z-10"}>
				<li className={isActive("/portfolio") || isActive("/portfolio/") ? "active py-6 text-4xl" : "py-6 text-4xl"}>
					<Link onClick={handleClick} to="/portfolio" smooth={true} duration={500}>
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

export default Navbar;
