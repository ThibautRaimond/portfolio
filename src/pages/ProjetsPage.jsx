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
		<motion.div
			name="Projets"
			className="text-gray-300"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.75 }}
		>
			<Helmet>
				<title>Projets Portfolio de Thibaut Raimond</title>
				<meta name="Projets" content="Présentation de mes projets" />
			</Helmet>

			<div className="bg-gradient-to-r from[#0e1111] to-transparentbg flex flex-col justify-center items-center text-gray-200 md:mt-4 md:px-3">
				<div className="card rounded-md h-screen-85 max-w-[1000px] m-4 mt-4 p-4 md:p-10 flex flex-col justify-center w-full md:m-0">
					<div className="flex flex-col items-center ">
						<h1 className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#07ed66]">
							Mes projets
						</h1>
						<p className="py-6"> Présentation de mes derniers projets</p>
					</div>

					{/* ------- */}
					<ul className="flex justify-center items-center flex-wrap">
						{/* Projet 1 code du dev */}
						<li className="flex justify-center items-center p-[1em] m-[1em] bg-[#0000006e] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
							<div className="text-center">
								<a href="https://yannou.philoucorp.fr/"
									target="_blank"
									rel="noreferrer"
									aria-label="Projet le code du dev (nouvel onglet)"
									className="text-2xl text-[#07ed66] font-bold hover:text-[#00D14B] underline">
									<h2>Le code du dev</h2>
								</a>
								<p><span className="font-bold">Languages : </span>EJS <span aria-hidden="true" className="text-[#07ed66]">/</span> NodeJS <span aria-hidden="true" className="text-[#07ed66]">/</span> SQL <span aria-hidden="true" className="text-[#07ed66]">/</span> CSS</p>
								<p className="m-1">Projet de groupe</p>
								<div class="w-80 aspect-[4/3] mx-auto">
									<img src={CodeDuDev} alt="" class="w-full h-full object-cover pb-[4px]" />
								</div>
							</div>
						</li>
						{/* ------- */}

						{/* Projet 2 pokedex */}
						<li className="flex justify-center items-center p-[1em] m-[1em] bg-[#0000006e] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
							{/* card container */}
							<div className="text-center flex justify-center items-center flex-col">
								<a href="https://thibautraimond.github.io/pokedex/" target="_blank"
									rel="noreferrer"
									aria-label="Projet pokedex (nouvel onglet)" className="text-2xl text-[#07ed66] font-bold hover:text-[#00D14B] underline">
									<h2
									>Pokedex</h2>
								</a>
								<p className=""><span className="font-bold">Languages : </span>React <span aria-hidden="true" className="text-[#07ed66]">/</span> CSS</p>
								<p className="m-1">Projet perso</p>
								<div class="w-80 aspect-[4/3] mx-auto max-w-xs max-h-xs" >
									<img src={pokedex} alt="" class="w-full h-full object-cover pb-[4px]" />
								</div>
							</div>
						</li>
					</ul>
				</div>

				{/* ------------- Navigation BUTTON  --------------- */}
				<div className="flex justify-center align-center max-[450px]:w-full mb-2">
					<div className="leftNavButton w-50vw md:mt-10 mt-2 profil-bot-button flex-1">
						<Link
							to="/portfolio/competences"
							mooth={true}
							duration={500}
							className="flex relative min-h-[60px] min-[600px]:min-w-[270px] bg-gradient-to-b from-green-900 to-green-800 text-white border border-1 border-[#adadad]
							hover:border hover:border-1 border-solid hover:border-[#fff] hover:text-white"
						>
							<div className="flex items-center mx-auto">
								<div className="min-w-[40px] flex justify-center content-center">
									<HiArrowNarrowLeft className="leftNavArrow" />
								</div>
								<p><span className="sr-only">Page précédante</span>Retour aux compétences</p>
							</div>
						</Link>
					</div>

					<div className="rightNavButton w-50vw md:mt-10 mt-2 profil-bot-button flex-1 text-center ">
						<Link
							to="/portfolio/contact"
							mooth={true}
							duration={500}
							className="flex relative min-h-[60px] min-[600px]:min-w-[270px] bg-gradient-to-b from-green-900 to-green-800 text-white border border-1 border-[#adadad]
							hover:border hover:border-1 border-solid hover:border-[#fff] hover:text-white"
						>
							<div className="flex items-center mx-auto">
								<p><span className="sr-only">Page suivante</span>Contactez moi par mail</p>
								<div className="min-w-[40px] flex justify-center content-center">
									<HiArrowNarrowRight className="rightNavArrow" />
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjetsPage;
