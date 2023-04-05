import React, { useState } from "react";
import Logo from "../assets/logo.png";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineProfile } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
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
		<nav className="w-full h-[85px] flex justify-between items-center pr-4 pl-3 bg-[#0e1111d3] text-gray-300 shadow-md shadow-[#040c16]">
			<div className="h-[70px] w-[70px] p-[5px] rounded-md flex justify-center hover:shadow-md hover:shadow-[#040c16]">
				<Link to="/portfolio">
					<img
						alt="Logo passion DEV"
						src={Logo}
						className="cursor-pointer"
						style={{ width: "65px" }}
					/>
				</Link>
			</div>

			{/* menu */}
			<div>
				<ul className="hidden md:flex">
					<Link to="/portfolio" mooth={true} duration={500}>
						<li alt="Lien vers la page d'accueil" className="hover:font-bold">
							{" "}
							Accueil{" "}
						</li>
					</Link>
					<Link to="/portfolio/profil" mooth={true} duration={500}>
						<li alt="Lien vers la page profil" className="hover:font-bold">
							{" "}
							Profil{" "}
						</li>
					</Link>
					<Link to="/portfolio/skills" mooth={true} duration={500}>
						<li alt="Lien vers la page compétences" className="hover:font-bold">
							{" "}
							Compétences{" "}
						</li>
					</Link>
					<Link to="/portfolio/work" mooth={true} duration={500}>
						<li alt="Lien vers la page projets" className="hover:font-bold">
							{" "}
							Projets{" "}
						</li>
					</Link>
					<Link to="/portfolio/contact" mooth={true} duration={500}>
						<li alt="Lien vers la page contact" className="hover:font-bold">
							{" "}
							Contact{" "}
						</li>
					</Link>
				</ul>
			</div>

			{/* { Bouton Mobile mode} */}
			<button
				alt="bouton pour afficher les liens de différentes pages du site ainsi que le linkedin et le CV de Thibaut Raimond"
				onClick={handleClick}
				className="md:hidden z-20"
			>
				{!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
			</button>

			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-full bg-[#0e1111d3] flex flex-col justify-center items-center z-10  "
				}
			>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="/portfolio"
						mooth={true}
						duration={500}
					>
						{" "}
						Accueil{" "}
					</Link>{" "}
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="/portfolio/profil"
						mooth={true}
						duration={500}
					>
						{" "}
						Profil{" "}
					</Link>{" "}
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="/portfolio/skills"
						mooth={true}
						duration={500}
					>
						{" "}
						Compétences{" "}
					</Link>{" "}
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="/portfolio/work"
						mooth={true}
						duration={500}
					>
						{" "}
						Projets{" "}
					</Link>{" "}
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="/portfolio/contact"
						mooth={true}
						duration={500}
					>
						{" "}
						Contact{" "}
					</Link>{" "}
				</li>

				{/* -- Réseaux -- */}

				<div className=" flex justify-between mt-4">
					<li className="w-[60px] h-[60px] flex justify-between bg-[#0A66C2]  ">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[60px] h-[60px] flex justify-between bg-[#2d333b]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/ThibautRaimond"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub size={30} />
						</a>
					</li>
					<li className="w-[60px] h-[60px] flex justify-between bg-[#347d39] ">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://cvthibautraimond.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineProfile size={30} />
						</a>
					</li>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
