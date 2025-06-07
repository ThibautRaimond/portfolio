import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { HiArrowNarrowRight } from "react-icons/hi";

const HomePage = () => {
	return (
		<motion.div
		className="flex flex-col justify-center items-center"
		initial={{ opacity: 0, scale: 0.5 }}
		animate={{ opacity: 1, scale: 1 }}
		transition={{ duration: 0.75 }}
		>
		<Helmet>
		<title>Accueil - Portfolio de Thibaut Raimond</title>
		<meta name="Description" content="Brève présentation professionnel" />
		</Helmet>
		
		{/* Container */}
		<div className="flex flex-col justify-center items-center h-full">
		<p className="text-center mb-2">
		<div className="text-3xl sm:text-4xl text-[#D4D4D4] title">Bonjour je suis</div>
		<div className="text-3xl sm:text-5xl font-bold text-[#07ed66] title2">
		Thibaut Raimond
		</div>
		<div className="text-4xl sm:text-5xl font-bold text-[#ccd6f6] title3">
		Consultant en Accessibilité Numérique
		</div>
		</p>
		
		<Link to="/portfolio/profil">
		<div
		className="rightNavButton bg-gradient-to-b from-green-800 to-green-600 text-white border border-1 border-[#3e7c48]
						hover:border hover:border-1 border-solid hover:border-[#adadad] px-6 py-3 max-w-[200px]">
		<div className="flex">
		Voir mon profil{" "}
		<HiArrowNarrowRight className="rightNavArrow ml-3 mt-1" />
		</div>
		</div>
		</Link>
		</div>
		</motion.div>
	);
};

export default HomePage;
