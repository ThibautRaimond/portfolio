import React from "react";
import Navbar from "./Navbar";
import DesktopSocialNav from "./DesktopSocialNav";
import "../index.css"

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col full-height">
			<Navbar />
			<DesktopSocialNav />
			<main className="flex-grow">{children}</main>
		</div>
	);
};

export default Layout;
