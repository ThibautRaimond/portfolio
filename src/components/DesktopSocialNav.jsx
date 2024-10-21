import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineProfile } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const DesktopSocialNav = () => {
	return (
		<div className="hidden">

			<nav aria-label="Contact" className="hidden lg:flex fixed flex-col top-[35%] left-0 z-50">
				<ul>
					<li
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0e4072] border border-white border-solid"
					>
						<a
							aria-label="Linkedin de Thibaut Raimond (Nouvel onglet)"
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/"
							target="_blank"
							rel="noreferrer"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					{/* --- */}
					<li
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#252a30] border border-white border-solid"
					>
						<a
							aria-label="Github de Thibaut Raimond (Nouvel onglet)"
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/ThibautRaimond"
							target="_blank"
							rel="noreferrer"
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					{/* --- */}
				</ul>
			</nav>
		</div>
	);
};

export default DesktopSocialNav;
