import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Typewriter from "typewriter-effect";
import { HiArrowNarrowRight } from "react-icons/hi";

import "../styles/buttonsStyles.css";

const HomePage = () => {
	return (
		<motion.main
			name="home"
			alt="Accueil"
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
				<Link to="/portfolio/profil" mooth={true} duration={500}>
					<button
						className="rightNavButton bg-gradient-to-b from-green-800 to-green-600 text-white border border-1 border-[#3e7c48]
						hover:border hover:border-1 border-solid hover:border-[#adadad]
						flex px-6 py-3 my-2 relative"
						alt="Liens vers la page profil"
					>
						<div className="flex">
							Voir mon profil{" "}
							<HiArrowNarrowRight className="rightNavArrow ml-3 mt-1" />
						</div>
					</button>
				</Link>
				{/* cup container */}
			</div>
		</motion.main>
	);
};

export default HomePage;
