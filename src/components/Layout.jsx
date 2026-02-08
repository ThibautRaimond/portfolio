import React, { useEffect } from "react";
import Header from "./Header";
import "../index.css";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
	const location = useLocation();

	useEffect(() => {
		const timer = setTimeout(() => {
			const announcer = document.getElementById("page-title-announce");
			if (!announcer) {
				return;
			}

			const title = document.title || "";
			announcer.textContent = title ? `Page ${title}` : "Page";
			announcer.focus();
		}, 0);

		return () => clearTimeout(timer);
	}, [location]);

	return (
		<div className="flex flex-col full-height">
			<Header />
			<main lang="fr" id="main-content" tabIndex="-1" className="flex-grow">
				{children}
			</main>
		</div>
	);
};

export default Layout;
