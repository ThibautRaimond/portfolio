import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineProfile } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const DesktopSocialIcons = () => {
	return (
		<nav className="hidden lg:flex fixed flex-col top-[35%] left-0 z-50">
			<ul>
				<a
					aria-label="Lien vers le linkedin de Thibaut Raimond"
					className="flex justify-between items-center w-full text-gray-300"
					href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/"
					target="_blank"
					rel="noreferrer"
				>
					<li
						aria-label="Lien vers mon profil Linkedin"
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0e4072] border border-white border-solid"
					>
						Linkedin <FaLinkedin size={30}/>
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
						aria-label="Lien vers ma page Github"
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#252a30] border border-white border-solid"
					>
						Github <FaGithub size={30} className="Logo: Github"/>
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
						aria-label="Lien vers mon CV en ligne"
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#214724] border border-white border-solid"
					>
						CV <AiOutlineProfile size={30}/>
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
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#760E05] border border-white border-solid"
					>
						{" "}
						Email <HiOutlineMail size={30}/>
					</li>
				</Link>{" "}
			</ul>
		</nav>
	);
};

export default DesktopSocialIcons;
