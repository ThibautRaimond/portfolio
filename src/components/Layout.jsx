import React from "react";
import Navbar from "./Navbar";
import DesktopSocialIcons from "./DesktopSocialIcons";

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<DesktopSocialIcons />
			<main>{children}</main>
		</>
	);
};

export default Layout;
