import React from "react";
import {Helmet} from "react-helmet";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
	return (
		<motion.div
			name="home"
			alt="Page d'accueil"
			className="flex flex-col justify-center align-center w-screen h-screen"
			initial={{ scaleX: 0.5 }}
			animate={{ scaleX: 1 }}
			exit={{ scaleX: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Helmet>
				<title>Page d'accueil</title>
				<meta name="description" content="Brève présentation professionnel" />
				</Helmet>
			
			{/* Container */}
			<div className="max-w-[750px] mx-auto flex flex-col justify-center">
				<p className="text-3xl text-[#07ed66] title">Bonjours je suis</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] title2">
					Thibaut Raimond
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#656a79] py-4 title3">
					<Typewriter
						options={{
							autoStart: true,
							loop: true,
							delay: 50,
							strings: ["Dev full stack JS", "Web & Mobile", "AGILE teamwork"],
						}}
					/>
				</h2>
				<div>
					<button alt="Liens vers la page profil">
						<Link
							to="/portfolio/profil"
							mooth={true}
							duration={500}
							className="text-white group items-center hover:text-black hover:bg-[#07ed66] hover:border-[#07ed66] hover:text-#0e1111] flex border-2 px-6 py-3 my-2"
						>
							Voir mon profil <HiArrowNarrowRight className="ml-3" />{" "}
						</Link>
					</button>
				</div>
				{/* cup container */}
			</div>
		</motion.div>
	);
};

export default Home;
