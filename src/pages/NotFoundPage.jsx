import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
	const location = useLocation();

	return (
		<motion.div
			name="404"
			className="flex min-h-full w-full items-center justify-center bg-[#0e1111] px-4 py-8 text-gray-300 sm:px-8"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.75 }}
		>
			<Helmet>
				<title>404 - Portfolio de Thibaut Raimond</title>
				<meta name="description" content="Page introuvable du portfolio de Thibaut Raimond." />
			</Helmet>

			<div className="grid w-full max-w-6xl items-center gap-8 border-y border-white/30 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:py-12">
				<div className="border-l-2 border-[#07ed66] pl-5 sm:pl-8">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#07ed66]">
						Erreur de navigation
					</p>
					<h1 className="text-5xl font-bold leading-none text-gray-100 sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl">
						Erreur 404
					</h1>
					<p className="mt-6 max-w-lg text-base leading-7 text-gray-300 sm:text-lg">
						La page demandée n&apos;existe pas ou n&apos;est plus disponible. Vous pouvez revenir sur les sections principales du portfolio.
					</p>
				</div>

				<div className="pl-5 sm:pl-8 lg:border-l lg:border-white/30 lg:pl-10">
					<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-white/30 pb-6">
						<p className="text-sm uppercase tracking-[0.2em] text-[#FFFED6]">
							Chemin demandé
						</p>
						<p className="break-all text-xl font-semibold text-white sm:text-2xl">
							{location.pathname}
						</p>
					</div>
					<p className="max-w-2xl pt-6 text-sm leading-7 text-gray-300 sm:text-base">
						Si vous avez suivi un ancien lien, le contenu a peut-être changé d&apos;emplacement. Vous pouvez revenir à l&apos;<Link to="/" className="underline decoration-1 underline-offset-4 transition-colors duration-200 hover:text-white">accueil</Link> du portfolio.
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default NotFoundPage;