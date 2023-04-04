import React from "react";
import Navbar from "./Navbar";
import DesktopSocialIcons from "./DesktopSocialIcons";
import "../index.css"

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col full-height">
			<Navbar />
			<DesktopSocialIcons />
			<main className="flex-grow">{children}</main>
		</div>
	);
};

export default Layout;
