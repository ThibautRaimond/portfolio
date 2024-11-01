import React from "react";
import Navbar from "./Navbar";
import "../index.css"

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col full-height">
			<Navbar />
			<main lang="fr" id="main-content" tabIndex="-1" className="flex-grow">
    {children}
</main>
		</div>
	);
};

export default Layout;
