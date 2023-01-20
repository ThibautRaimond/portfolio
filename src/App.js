import { Routes, Route, useLocation } from "react-router-dom";

import ResetScroll from "./components/ResetScoll";
import Layout from "./components/Layout";

import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
	return (
		<Layout>
			<ResetScroll />
			<AnimatedRoutes />
		</Layout>
	);
}

export default App;
