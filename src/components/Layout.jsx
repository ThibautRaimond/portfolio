import React from "react";
import Navbar from "./Navbar";
import "../index.css"

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col full-height">
			<Navbar />
			<main lang="fr" className="flex-grow">{children}</main>
		</div>
	);
};

export default Layout;
