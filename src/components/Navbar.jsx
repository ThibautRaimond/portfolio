import React, { useState } from "react";
import Logo from "../assets/logo.png";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineProfile } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<nav className="w-full h-[85px] flex justify-between items-center pr-4 pl-3 bg-[#0e1111d3] text-gray-300 shadow-md shadow-[#040c16]">
			<div className="h-[70px] w-[70px] p-[5px] rounded-md flex justify-center hover:shadow-md hover:shadow-[#040c16]">
				<Link to="/portfolio">
					<img
					alt="Logo passion DEV"
						src={Logo}
						className="cursor-pointer"
						alt="Logo Image"
						style={{ width: "65px" }}
					/>
				</Link>
			</div>

			{/* menu */}
			<div>
				<ul className="hidden md:flex">
					<Link to="/portfolio" mooth={true} duration={500}>
						<li alt="Lien vers la page d'accueil" className="hover:font-bold"> Accueil </li>
					</Link>
					<Link to="/portfolio/profil" mooth={true} duration={500}>
						<li alt="Lien vers la page profil" className="hover:font-bold"> Profil </li>
					</Link>
					<Link to="/portfolio/skills" mooth={true} duration={500}>
						<li alt="Lien vers la page compétences" className="hover:font-bold"> Compétences </li>
					</Link>
					<Link to="/portfolio/work" mooth={true} duration={500}>
						<li alt="Lien vers la page projets" className="hover:font-bold"> Projets </li>
					</Link>
					<Link to="/portfolio/contact" mooth={true} duration={500}>
						<li alt="Lien vers la page contact" className="hover:font-bold"> Contact </li>
					</Link>
				</ul>
			</div>

			{/* { Bouton Mobile mode} */}
			<button alt="bouton pour afficher les liens de différentes pages du site ainsi que le linkedin et le CV de Thibaut Raimond" onClick={handleClick} className="md:hidden z-10">
				<Link
					to="/portfolio/menu"
					mooth={true}
					duration={500}
					className="text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white"
				>
					{/* {!nav ? <FaBars /> : <FaTimes />} */}
					<FaBars />
				</Link>
			</button>
		</nav>
	);
};

export default Navbar;
