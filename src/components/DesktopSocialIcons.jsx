import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineProfile } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const DesktopSocialIcons = () => {
	return (
		<nav className="hidden lg:flex fixed flex-col top-[35%] left-0">
			<ul>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2] ">
					<a
					alt="Lien vers le linkedin de Thibaut Raimond"
					className="flex justify-between items-center w-full text-gray-300"
					href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/"
					target="_blank"
					rel="noreferrer"
					>
						Linkedin <FaLinkedin size={30} alt="Logo Linkedin"/>
					</a>
				</li>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2d333b] ">
					<a
					alt="Lien vers le github de Thibaut Raimond"
						className="flex justify-between items-center w-full text-gray-300"
						href="https://github.com/ThibautRaimond"
						target="_blank"
						rel="noreferrer"
					>
						Github <FaGithub size={30} alt="Logo Github"/>
					</a>
				</li>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#347d39] ">
					<a
					alt="Lien vers le CV de Thibaut Raimond"
						className="flex justify-between items-center w-full text-gray-300"
						href="https://cvthibautraimond.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						CV <AiOutlineProfile size={30} alt="Logo en forme de CV"/>
					</a>
				</li>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ea4335]">
					<Link
					alt="Lien vers la page de contact par e-mail"
						className="flex justify-between items-center w-full text-gray-300"
						to="/portfolio/contact"
						mooth={true}
						duration={500}
					>
						{" "}
						Email <HiOutlineMail size={30} alt="Logo en forme d'envellope"/>
					</Link>{" "}
				</li>
			</ul>
		</nav>
	);
};

export default DesktopSocialIcons;
