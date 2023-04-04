import React from "react";
import { Helmet } from "react-helmet";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
	return (
		<motion.main
			name="home"
			alt="Page d'accueil"
			className="flex flex-col justify-center items-center "
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.75 }}
		>
			<Helmet>
				<title>Portfolio: Accueil</title>
				<meta name="Description" content="Brève présentation professionnel" />
			</Helmet>

			{/* Container */}
			<div>
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
				<div className="">
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
		</motion.main>
	);
};

export default Home;
