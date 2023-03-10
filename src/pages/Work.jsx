import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import CodeDuDev from "../assets/projects/CodeDuDev.jpg";
import pokedex from "../assets/projects/pokedex.jpg";

const Work = () => {
	return (
		<motion.div
			name="work"
			className="text-gray-300"
			initial={{ scaleX: 0.5 }}
			animate={{ scaleX: 1 }}
			exit={{ scaleX: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Helmet>
				<title>Portfolio: Projets</title>
				<meta name="Projets" content="Présentation de mes projets" />
			</Helmet>

			<div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full lg:h-screen mt-12 lg:mt-0">
				<div className="flex flex-col items-center ">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#07ed66] mt-6">
						Mes projets
					</p>
					<p className="py-6"> Présentation de mes derniers projets</p>
				</div>

				{/* Grid item */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* Projet 1 code du dev */}
					<div
						style={{ backgroundImage: `url(${CodeDuDev})` }}
						className="shadow-lg shadow-[#0e1111] group container rounded-md flex justify-center items-center mx-auto projet-div"
					>
						{/* hover effect */}
						<div className="text-center opacity-0 group-hover:opacity-100">
							<p className="text-2xl font-bold text-white tracking-wider">
								Le code du dev'
							</p>
							<span className="mt-10">HTML/CSS/JS/SQL</span>
							<p className="m-1 text-[#132513]">Projet de groupe</p>
							<div className="pt-8 text-center">
								<a
									href="https://yannou.philoucorp.fr/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-8 py-3 bg-[#23232785] text-white ">
										URL
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* Projet 2 pokedex */}
					<div
						style={{ backgroundImage: `url(${pokedex})` }}
						className="shadow-lg shadow-[#0e1111] group container rounded-md flex justify-center items-center mx-auto projet-div"
					>
						{/* hover effect */}
						<div className="text-center opacity-0 group-hover:opacity-100">
							<p className="text-2xl font-bold text-white tracking-wider">
								Pokedex
							</p>
							<span className="mt-10">HTML/CSS/REACT</span>
							<p className="m-1 text-[#132513]">Projet réalisé en autonomie</p>
							<div className="pt-8 text-center">
								<a
									href="https://thibautraimond.github.io/pokedex/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-8 py-3 bg-[#23232785] text-white ">
										URL
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center align-center">
					<button className="mt-12 profil-bot-button">
						<Link
							to="/portfolio/skills"
							mooth={true}
							duration={500}
							className="text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white"
						>
							<HiArrowNarrowLeft className="mr-3" /> Retour aux compétences
						</Link>
					</button>

					<button className="mt-12 profil-bot-button ">
						<Link
							to="/portfolio/contact"
							mooth={true}
							duration={500}
							className="text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white"
						>
							Échangeons par mail <HiArrowNarrowRight className="ml-3" />{" "}
						</Link>
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default Work;
