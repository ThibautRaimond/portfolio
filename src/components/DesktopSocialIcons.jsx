import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineProfile } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const DesktopSocialIcons = () => {
	return (
		<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
			<ul>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2] ">
					<a
						className="flex justify-between items-center w-full text-gray-300"
						href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/"
						target="_blank"
						rel="noreferrer"
					>
						Linkedin <FaLinkedin size={30} />
					</a>
				</li>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2d333b] ">
					<a
						className="flex justify-between items-center w-full text-gray-300"
						href="https://github.com/ThibautRaimond"
						target="_blank"
						rel="noreferrer"
					>
						Github <FaGithub size={30} />
					</a>
				</li>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#347d39] ">
					<a
						className="flex justify-between items-center w-full text-gray-300"
						href="https://cvthibautraimond.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						CV <AiOutlineProfile size={30} />
					</a>
				</li>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ea4335]">
					<Link
						className="flex justify-between items-center w-full text-gray-300"
						to="/portfolio/contact"
						mooth={true}
						duration={500}
					>
						{" "}
						Email <HiOutlineMail size={30} />
					</Link>{" "}
				</li>
			</ul>
		</div>
	);
};

export default DesktopSocialIcons;
