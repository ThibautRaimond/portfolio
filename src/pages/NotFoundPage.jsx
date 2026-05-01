import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const NotFoundPage = () => {
	const location = useLocation();

	return (
		<motion.div
			name="404"
			className="bg-gradient-to-r from-[#0e1111] to-transparent flex min-h-full w-full items-center justify-center px-4 py-6 text-gray-300 sm:px-6"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.75 }}
		>
			<Helmet>
				<title>404 - Portfolio de Thibaut Raimond</title>
				<meta name="description" content="Page introuvable du portfolio de Thibaut Raimond." />
			</Helmet>

			<section className="card w-full max-w-4xl rounded-md bg-[#0e1111] px-5 py-8 sm:px-8 md:px-12 md:py-10">
				<div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#07ed66]">
							Erreur de navigation
						</p>
						<h1 className="inline border-b-4 border-[#07ed66] pb-2 text-4xl font-bold text-gray-100 sm:text-5xl">
							404
						</h1>
					</div>
					<p className="max-w-md text-base leading-7 text-gray-300 sm:text-lg">
						La page demandee n&apos;existe pas ou n&apos;est plus disponible. Vous pouvez revenir sur les sections principales du portfolio.
					</p>
				</div>

				<div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
					<div className="rounded-md border border-[#1d3a26] bg-[linear-gradient(145deg,rgba(7,237,102,0.14),rgba(14,17,17,0.35))] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
						<p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#FFFED6]">
							Chemin demande
						</p>
						<p className="break-all text-lg font-semibold text-white sm:text-xl">
							{location.pathname}
						</p>
						<p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
							Si vous avez suivi un ancien lien, le contenu a peut-etre change d&apos;emplacement. Les raccourcis ci-contre permettent de reprendre une navigation normale sans repasser par la page d&apos;accueil du navigateur.
						</p>
					</div>

					<div className="rounded-md border border-white/10 bg-[#121614] p-5">
						<p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#07ed66]">
							Acces rapides
						</p>
						<div className="flex flex-col gap-3">
							<Link
								to="/"
								className="leftNavButton flex min-h-[58px] items-center justify-between rounded-md border border-[#3e7c48] bg-gradient-to-b from-green-900 to-green-800 px-4 text-white transition-colors duration-200 hover:border-[#fff]"
							>
								<span className="flex items-center">
									<HiArrowNarrowLeft className="leftNavArrow mr-3" aria-hidden="true" />
									Accueil
								</span>
							</Link>
							<Link
								to="/profil"
								className="rightNavButton flex min-h-[58px] items-center justify-between rounded-md border border-[#3e7c48] bg-[#121614] px-4 text-white transition-colors duration-200 hover:border-[#fff]"
							>
								<span>Voir le profil</span>
								<HiArrowNarrowRight className="rightNavArrow ml-3" aria-hidden="true" />
							</Link>
							<Link
								to="/contact"
								className="rounded-md border border-[#07ed66] px-4 py-4 text-center text-[#07ed66] transition-colors duration-200 hover:bg-[#07ed66] hover:text-[#0e1111]"
							>
								Contacter Thibaut
							</Link>
						</div>
					</div>
				</div>
			</section>
		</motion.div>
	);
};

export default NotFoundPage;