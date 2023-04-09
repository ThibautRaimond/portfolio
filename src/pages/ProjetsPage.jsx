import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";

import CodeDuDev from "../assets/projects/CodeDuDev.jpg";
import pokedex from "../assets/projects/pokedex.jpg";
import "../styles/ProjetsPage.css";
import "../styles/buttonsStyles.css";

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

			<div className="bg-gradient-to-r from[#0e1111] to-transparentbg flex flex-col justify-center items-center text-gray-300 mt-4 px-3">
				<div className="card rounded-md h-screen-85 max-w-[1000px] m-4 mt-4 p-4 md:p-10 flex flex-col justify-center w-full md:m-0">
					<div className="flex flex-col items-center ">
						<h1 className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#07ed66]">
							Mes projets
						</h1>
						<p className="py-6"> Présentation de mes derniers projets</p>
					</div>

					<div className="flex justify-center items-center flex-wrap">
						{/* ------- */}

						{/* Projet 1 code du dev */}
						<div
							style={{ backgroundImage: `url(${CodeDuDev})` }}
							className="shadow-lg shadow-[#0e1111] group container rounded-md flex justify-center items-center m-4 md:m-8 projet-div"
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
										<button className="bg-[#30422d] text-center rounded-lg px-8 py-3 text-white over:underline hover:font-bold  hover:text-green-500">
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
							className="shadow-lg shadow-[#0e1111] group container rounded-md flex justify-center items-center m-4 md:m-8 projet-div"
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
										<button className="bg-[#30422d] text-center rounded-lg px-8 py-3 text-white over:underline hover:font-bold  hover:text-green-500">
											URL
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ------------- Navigation BUTTON  --------------- */}
				<div className="flex justify-center align-center">
					<button className="leftNavButton w-50vw md:mt-10 mt-2 profil-bot-button flex-1">
						<Link
							to="/portfolio/competences"
							mooth={true}
							duration={500}
							className="min-h-[80px] md:min-w-[280px] group flex items-center border-2 px-6 py-3 mb-2 border-[#ffffff] border-opacity-25 text-[#9b9b9b]  hover:text-white hover:border-white"
						>
							<p className="flex items-center mx-auto">
								<HiArrowNarrowLeft className="mr-3 leftNavArrow" /> Retour aux
								compétences
							</p>
						</Link>
					</button>

					<button className="rightNavButton w-50vw md:mt-10 mt-2 profil-bot-button flex-1 text-center ">
						<Link
							to="/portfolio/contact"
							mooth={true}
							duration={500}
							className="min-h-[80px] md:min-w-[280px] group flex items-center border-2 px-6 py-3 mb-2 border-[#ffffff] border-opacity-25 text-[#9b9b9b]  hover:text-white hover:border-white"
						>
							<p className="flex items-center mx-auto">
								Contactez moi par mail
								<HiArrowNarrowRight className="ml-3 rightNavArrow" />
							</p>
						</Link>
					</button>
				</div>
			</div>
		</motion.main>
	);
};

export default ProjetsPage;
