import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Work from "../pages/Work";
import Profil2 from "../pages/Profil2";

import { AnimatePresence } from "framer-motion";
import NavigationMobile from "../pages/NavigationMobile";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location.pathname} key={location.pathname}>
				<Route path="/portfolio" element={<Home />} />
				<Route path="/portfolio/profil" element={<Profil2 />} />
				<Route path="/portfolio/skills" element={<Skills />} />
				<Route path="/portfolio/work" element={<Work />} />
				<Route path="/portfolio/contact" element={<Contact />} />
				<Route path="/portfolio/menu" element={<NavigationMobile />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
