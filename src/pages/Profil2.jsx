import React from "react";
import thib from "../assets/thib.png";
import CV from "../assets/CV-thibaut-raimond.pdf";

import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { MdDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const About = () => {
	return (
		<motion.main
			name="profil"
			className="bg-gradient-to-r from[#0e1111] to-transparentbg flex justify-center items-center text-gray-300 mt-4 sm:mt-0"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.75 }}
		>
			<Helmet>
				<title>Portfolio: Profil</title>
				<meta name="Profil" content="Parcours personnel et CV" />
			</Helmet>

			<div className="bg-[#0e1111] text-gray-300 items-center flex flex-col justify-center">
				<h1 className="text-4xl font-bold inline border-b-4 mb-12 border-[#07ed66]">
					Profil
				</h1>

				<div className="flex items-center shadow-md shadow-[#040c16] px-2">
					<div className="profil-left-container flex flex-col items-center mr-6 pt-4">
						<img src={thib} alt="Picture" className="thib" />

						{/* desktop button */}
						<a href={CV} download>
							<button className="moovingBorder hover:text-green-500 hover:underline hover:underline-thickness-2 py-4 px-8 mt-6 mb-6" type="button">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<div className="flex justify-center align-center">
									Télécharger mon CV{" "}
									<MdDownload className="w-[20px] h-[20px] mt-1" />
								</div>
							</button>
						</a>
					</div>

					<div className="">
						<p className="text-xl text-center max-w-lg ">
							Enchanté je m'appelle Thibaut et j'ai récemment découvert une
							passion pour le développement web. J'ai donc choisi de suivre la
							formation FullStack JavaScript chez{" "}
							<a
								className="hover:text-[#07ed66] underline "
								href="https://oclock.io/"
								target="_blank"
								rel="noreferrer"
							>
								O'Clock
							</a>
							. Cette formation m'a permis d'acquérir de nombreuses compétences
							de développeur ainsi que de prendre part à un projet d'équipe en
							utilisant les méthodes AGILE et SCRUM pour la conception web.
						</p>
						<p className="py-4 text-xl text-center max-w-lg">
							Suite à cela j'ai pu obtenir mon diplôme de Développeur FullStack
							Web & Mobile de niveau RNCP 5 (BAC +2).
						</p>

						<p className="text-xl text-center max-w-lg">
							Afin de devenir un atout au sein de votre entreprise, je saurai
							mettre à profit ma motivation, ma méthodologie ainsi que ma
							capacité d'adaptation.
						</p>
					</div>
				</div>

				{/* ------------- MOBILE BUTTON  --------------- */}
				<a href={CV} download className="profil-mobile-button text-xs">
					<button className="moovingBorder py-4 px-8 mt-6 mb-6" type="button">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<div className="flex justify-center align-center">
							Télécharger mon CV{" "}
							<MdDownload className="w-[15px] h-[15px] ml-0.5 mt-0.5" />
						</div>
					</button>
				</a>

				{/* ------------- Navigation BUTTON  --------------- */}
				<div className="flex justify-center align-center">
					<button className="mt-6 sm:mt-10 profil-bot-button leftNavButton">
						<Link
							to="/portfolio"
							mooth={true}
							duration={500}
							className="group flex items-center border-2 px-6 py-3 mb-2 border-[#ffffff] border-opacity-25 text-[#9b9b9b]  hover:text-white hover:border-white"
						>
							<HiArrowNarrowLeft className="mr-3 leftNavArrow" /> Retour à
							l'accueil
						</Link>
					</button>

					<button className="mt-6 sm:mt-10 profil-bot-button rightNavButton">
						<Link
							to="/portfolio/skills"
							mooth={true}
							duration={500}
							className="group flex items-center border-2 px-6 py-3 mb-2 border-[#ffffff] border-opacity-25 text-[#9b9b9b]  hover:text-white hover:border-white"
						>
							Mes compétences{" "}
							<HiArrowNarrowRight className="ml-3 rightNavArrow" />{" "}
						</Link>
					</button>
				</div>
			</div>
		</motion.main>
	);
};
export default About;
