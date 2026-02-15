import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { HashRouter } from "react-router-dom";

const basePath = "/portfolio";
const { pathname, search, hash } = window.location;

if (!hash) {
	const normalizedPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
	const shouldRedirect =
		normalizedPath && normalizedPath !== "/" && normalizedPath !== basePath;

	if (shouldRedirect) {
		const routePath = normalizedPath.startsWith(basePath + "/")
			? normalizedPath.slice(basePath.length)
			: normalizedPath;
		const newPathname = normalizedPath.startsWith(basePath) ? basePath + "/" : "/";
		window.history.replaceState(null, "", `${newPathname}#${routePath}${search}`);
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>
);
