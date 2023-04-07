import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineProfile } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const DesktopSocialIcons = () => {
	return (
		<nav className="hidden lg:flex fixed flex-col top-[35%] left-0">
			<ul>
				<a
					alt="Lien vers le linkedin de Thibaut Raimond"
					className="flex justify-between items-center w-full text-gray-300"
					href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/"
					target="_blank"
					rel="noreferrer"
				>
					<li
						alt="Lien vers mon profil Linkedin"
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2] "
					>
						Linkedin <FaLinkedin size={30} alt="Logo: Linkedin" />
					</li>
				</a>
				{/* --- */}
				<a
					className="flex justify-between items-center w-full text-gray-300"
					href="https://github.com/ThibautRaimond"
					target="_blank"
					rel="noreferrer"
				>
					<li
						alt="Lien vers ma page Github"
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2d333b] "
					>
						Github <FaGithub size={30} className="Logo: Github" />
					</li>
				</a>
				{/* --- */}
				<a
					className="flex justify-between items-center w-full text-gray-300"
					href="https://cvthibautraimond.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<li
						alt="Lien vers mon CV en ligne"
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#347d39] "
					>
						CV <AiOutlineProfile size={30} alt="Logo: CV" />
					</li>
				</a>
				{/* --- */}
				<Link
					className="flex justify-between items-center w-full text-gray-300"
					to="/portfolio/contact"
					mooth={true}
					duration={500}
				>
					<li
						alt="Lien vers la page de contact par mail"
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ea4335]"
					>
						{" "}
						Email <HiOutlineMail size={30} alt="Logo: mail" />
					</li>
				</Link>{" "}
			</ul>
		</nav>
	);
};

export default DesktopSocialIcons;
