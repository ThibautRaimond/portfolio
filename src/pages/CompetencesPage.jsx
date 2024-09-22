import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";

import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Sequelize from "../assets/sequelize.png";
import PSQL from "../assets/psql.png";
import GitHub from "../assets/github.png";
import "../styles/buttonsStyles.css";

const CompetencesPage = () => {
	return (
		<motion.div
			name="Compétences"
			className="bg-gradient-to-r from[#0e1111] to-transparentbg flex flex-col justify-center items-center text-gray-200 mt-4 "
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
			<div className="card rounded-md py-6 px-4 md:my-0 md:mx-auto md:p-8 flex flex-col justify-center align-middle w-[85vw] md:max-w-[750px]">
				<div className="text-center">
					<p className="text-4xl font-bold inline border-b-4 border-[#07ed66]">
						Compétences
					</p>
					<p className="py-4">Voici les technologies que j'ai déjà utlisées</p>
				</div>

				<div className="text-center flex flex-wrap align-middle justify-center">
					<div
						className="flex flex-col align-middle justify-center m-[1em] w-[110px] pt-[1em] pb-[0.5em] px-[1em]
					bg-[#0000006e] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md"
					>
						<img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
						<p className="mt-[1em]">HTML</p>
					</div>
					<div
						className="flex flex-col align-middle justify-center m-[1em] w-[110px] pt-[1em] pb-[0.5em] px-[1em]
					bg-[#0000006e] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md"
					>
						<img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
						<p className="mt-[1em]">CSS</p>
					</div>
					<div
						className="flex flex-col align-middle justify-center m-[1em] w-[110px] pt-[1em] pb-[0.5em] px-[1em]
					bg-[#0000006e] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md"
					>
						<img
							className="w-20 mx-auto"
							src={JavaScript}
							alt="JavaScript icon"
						/>
						<p className="mt-[1em]">JavaScript</p>
					</div>
					<div
						className="flex flex-col align-middle justify-center m-[1em] w-[110px] pt-[1em] pb-[0.5em] px-[1em]
					bg-[#0000006e] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md"
					>
						<img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
						<p className="mt-[1em]">React</p>
					</div>
					<div
						className="flex flex-col align-middle justify-center m-[1em] w-[110px] pt-[1em] pb-[0.5em] px-[1em]
					bg-[#0000006e] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md"
					>
						<img className="w-20 mx-auto" src={Node} alt="Node icon" />
						<p className="mt-[1em]">Node JS</p>
					</div>
					<div
						className="flex flex-col align-middle justify-center m-[1em] w-[110px] pt-[1em] pb-[0.5em] px-[1em]
					bg-[#0000006e] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md"
					>
						<img
							className="w-20 mx-auto"
							src={Sequelize}
							alt="Sequelize icon"
						/>
						<p className="mt-[1em]">Sequelize</p>
					</div>
					<div
						className="flex flex-col align-middle justify-center m-[1em] w-[110px] pt-[1em] pb-[0.5em] px-[1em]
					bg-[#0000006e] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md"
					>
						<img className="w-20 mx-auto" src={PSQL} alt="PSQL icon" />
						<p className="mt-[1em]">PSQL</p>
					</div>
					<div
						className="flex flex-col align-middle justify-center m-[1em] w-[110px] pt-[1em] pb-[0.5em] px-[1em]
					bg-[#0000006e] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md"
					>
						<img className="w-20 mx-auto" src={GitHub} alt="Github icon" />
						<p className="mt-[1em]">Github</p>
					</div>
				</div>
			</div>

			{/* ------------- Navigation BUTTON  --------------- */}
			<div className="flex justify-center align-center max-[450px]:w-full mb-2">
				<button className="leftNavButton w-50vw md:mt-10 mt-6 profil-bot-button flex-1">
					<Link
						to="/portfolio/profil"
						mooth={true}
						duration={500}
						className="flex relative min-h-[60px] min-[450px]:min-w-[220px] bg-gradient-to-b from-green-900 to-green-800 text-white border border-1 border-[#adadad]
							hover:border hover:border-1 border-solid hover:border-[#fff] hover:text-white"
						>
						<p className="flex items-center mx-auto">
							<HiArrowNarrowLeft className="mr-3 leftNavArrow" /> Retour au
							profil
						</p>
					</Link>
				</button>

				<button className="rightNavButton w-50vw md:mt-10 mt-6 profil-bot-button flex-1">
					<Link
						to="/portfolio/projets"
						mooth={true}
						duration={500}
						className="flex relative min-h-[60px] min-[450px]:min-w-[220px] bg-gradient-to-b from-green-900 to-green-800 text-white border border-1 border-[#adadad]
							hover:border hover:border-1 border-solid hover:border-[#fff] hover:text-white"
						>
						<p className="flex items-center mx-auto">
							Voir mes projets
							<HiArrowNarrowRight className="ml-3 rightNavArrow" />{" "}
						</p>
					</Link>
				</button>
			</div>
		</motion.div>
	);
};

export default CompetencesPage;
