import React, { useState } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineProfile } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavigationMobile = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div>
			<ul
				className={
					"bg-gradient-to-r from[#0e1111] to-transparentbg flex flex-col justify-center items-center text-white pt-4"
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
		</div>
	);
};

export default NavigationMobile;
