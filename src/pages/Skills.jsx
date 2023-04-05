import React from "react";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Sequelize from "../assets/sequelize.png";
import PSQL from "../assets/psql.png";
import GitHub from "../assets/github.png";

import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Skills = () => {
	return (
		<motion.main
			name="skills"
			className="w-full bg-gradient-to-r from[#0e1111] to-transparentbg text-gray-300"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.75 }}
		>
			<Helmet>
				<title>Portfolio: Compétences</title>
				<meta
					name="Compétences"
					content="Présentation des principales technos maitrisées"
				/>
			</Helmet>

			{/* Container */}
			<div className="max-w-[1000px] mx-auto flex flex-col mt-4 sm:mt-0">
				<div className="text-center">
					<p className="text-4xl font-bold inline border-b-4 border-[#07ed66]">
						Compétences
					</p>
					<p className="py-4">Voici les technologies que j'ai déjà utlisées</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-12">
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
						<p className="my-4">HTML</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
						<p className="my-4">CSS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={JavaScript}
							alt="JavaScript icon"
						/>
						<p className="my-4">JavaScript</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
						<p className="my-4">React</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Node} alt="Node icon" />
						<p className="my-4">Node JS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={Sequelize}
							alt="Sequelize icon"
						/>
						<p className="my-4">Sequelize</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={PSQL} alt="PSQL icon" />
						<p className="my-4">PSQL</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={GitHub} alt="Github icon" />
						<p className="my-4">Github</p>
					</div>
				</div>
				<div className="flex justify-center">
					<button className="mt-6 sm:mt-10 profil-bot-button leftNavButton">
						<Link
							to="/portfolio/profil"
							mooth={true}
							duration={500}
							className="group flex items-center border-2 px-6 py-3 mb-2 border-[#ffffff] border-opacity-25 text-[#9b9b9b]  hover:text-white hover:border-white"
						>
							<HiArrowNarrowLeft className="mr-3 leftNavArrow" /> Retour au
							profil
						</Link>
					</button>

					<button className="mt-6 sm:mt-10 profil-bot-button rightNavButton">
						<Link
							to="/portfolio/work"
							mooth={true}
							duration={500}
							className="group flex items-center border-2 px-6 py-3 mb-2 border-[#ffffff] border-opacity-25 text-[#9b9b9b]  hover:text-white hover:border-white"
						>
							Voir mes projets{" "}
							<HiArrowNarrowRight className="ml-3 rightNavArrow" />{" "}
						</Link>
					</button>
				</div>
			</div>
		</motion.main>
	);
};

export default Skills;
