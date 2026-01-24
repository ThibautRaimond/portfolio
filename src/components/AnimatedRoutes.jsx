import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "../pages/HomePage.tsx";
import ProfilPage from "../pages/ProfilPage";
import CompetencesPage from "../pages/CompetencesPage";
import ProjetsPage from "../pages/ProjetsPage";
import ContactPage from "../pages/ContactPage";
import CvAccessible from "../pages/CvAccessible.jsx";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location.pathname} key={location.pathname}>
				<Route path="/" element={<HomePage />} />
				<Route path="/profil" element={<ProfilPage />} />
				<Route path="/competences" element={<CompetencesPage />} />
				<Route path="/projets" element={<ProjetsPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/cvaccessible" element={<CvAccessible />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
