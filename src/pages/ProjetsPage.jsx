import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";

import CodeDuDev from "../assets/projects/CodeDuDev.jpg";
import pokedex from "../assets/projects/pokedex.jpg";
import "../styles/ProjetsPage.css"
import "../styles/buttonsStyles.css"

const ProjetsPage = () => {
	return (
		<motion.main
			name="Projets"
			className="text-gray-300"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.75 }}
		>
			<Helmet>
				<title>Portfolio: Projets</title>
				<meta name="Projets" content="Présentation de mes projets" />
			</Helmet>

			<div className="h-screen-85 max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full mt-4 sm:mt-0">
				<div className="flex flex-col items-center ">
					<h1 className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#07ed66]">
						Mes projets
					</h1>
					<p className="py-6"> Présentation de mes derniers projets</p>
				</div>

				{/* Grid item */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

{/* ------- */}

					{/* Projet 1 code du dev */}
					<div
						style={{ backgroundImage: `url(${CodeDuDev})` }}
						className="shadow-lg shadow-[#0e1111] group container rounded-md flex justify-center items-center mx-auto projet-div"
					>
						{/* hover effect */}
						<div className="text-center opacity-0 group-hover:opacity-100">
							<p className="text-2xl font-bold text-white tracking-wider">
								Le code du dev
							</p>
							<span className="mt-10">EJS/NodeJS/SQL/CSS</span>
							<p className="m-1 text-[#132513]">Projet de groupe</p>
							<div className="pt-20 text-center">
								<a
									href="https://yannou.philoucorp.fr/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="moovingBorder htext-center rounded-lg px-8 py-3 text-white over:underline hover:font-bold  hover:text-green-500">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
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
							<span className="mt-10">React/CSS</span>
							<p className="m-1 text-[#132513]">Projet perso</p>
							<div className="pt-20 text-center">
								<a
									href="https://thibautraimond.github.io/pokedex/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="moovingBorder text-center rounded-lg px-8 py-3 text-white over:underline hover:font-bold  hover:text-green-500">
										<span></span><span></span><span></span><span></span>
										URL
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center align-center">
					<button className="mt-10 profil-bot-button leftNavButton">
						<Link
							to="/portfolio/competences"
							mooth={true}
							duration={500}
							className="group flex items-center border-2 px-6 py-3 mb-2 border-[#ffffff] border-opacity-25 text-[#9b9b9b]  hover:text-white hover:border-white"
						>
							<HiArrowNarrowLeft className="mr-3 leftNavArrow" /> Retour aux
							compétences
						</Link>
					</button>

					<button className="mt-10 :mt-6 profil-bot-button rightNavButton">
						<Link
							to="/portfolio/contact"
							mooth={true}
							duration={500}
							className="group flex items-center border-2 px-6 py-3 mb-2 border-[#ffffff] border-opacity-25 text-[#9b9b9b]  hover:text-white hover:border-white"
						>
							Échangeons par mail{" "}
							<HiArrowNarrowRight className="ml-3 rightNavArrow" />{" "}
						</Link>
					</button>
				</div>
			</div>
		</motion.main>
	);
};

export default ProjetsPage;
