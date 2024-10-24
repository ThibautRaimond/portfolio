import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { MdDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import thib from "../assets/thib.png";
import CV from "../assets/CV-thibaut-raimond.pdf";
import "../styles/ProfilPage.css";
import "../styles/buttonsStyles.css";

const ProfilPage = () => {
	return (
		<motion.div
			name="Profil"
			className="bg-gradient-to-r from[#0e1111] to-transparentbg flex justify-center items-center text-gray-300 mt-4 sm:mt-0"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.75 }}
		>
			<Helmet>
				<title>Profil - Portfolio de Thibaut Raimond</title>
				<meta name="ProfilPage" content="Parcours personnel et CV" />
			</Helmet>

			<div className="bg-[#0e1111] text-gray-300 items-center flex flex-col justify-center md:mx-2">
				<div className="card rounded-md py-4 md:py-4 px-2 md:px-12 mt-4 flex items-center flex-col">
					<h1 className="text-4xl font-bold inline border-b-4 mb-4 md:mb-6  border-[#07ed66] text-center">
						Profil
					</h1>
					<div className="flex">
						<div className="profil-left-container flex flex-col items-center mr-10 pt-4">
							<img src={thib} alt="" className="thib" />

							{/* desktop button */}
							<button href={CV} download>
								<div
									className="moovingBorder bg-[#121614] py-4 px-8 mt-6 mb-6
							hover:text-green-500 hover:underline hover:underline-thickness-2"
									type="button"
								>
									<div className="flex justify-center align-center">
										Télécharger mon CV{" "}
										<MdDownload className="w-[20px] h-[20px] mt-1" />
									</div>
								</div>
							</button>
						</div>

						<div className="min-w-[300px]">
							<p className="text-xl text-center max-w-xl mt-4 md:mt-6">
								Enchanté je m'appelle Thibaut et j'ai récemment découvert une
								passion pour le développement web. J'ai donc choisi de suivre la
								formation FullStack JavaScript chez{" "}
								<a
									className="hover:text-[#07ed66] underline "
									href="https://oclock.io/"
									target="_blank"
									rel="noreferrer"
								>
									O'Clock
								</a>
								. Cette formation m'a permis d'acquérir de nombreuses
								compétences de développeur ainsi que de prendre part à un projet
								d'équipe en utilisant les méthodes AGILE et SCRUM pour la
								conception web.
							</p>
							<p className="py-4 text-xl text-center max-w-xl mt-5">
								Suite à cela j'ai pu obtenir mon diplôme de Développeur
								FullStack Web & Mobile de niveau RNCP 5 (BAC +2).
							</p>

							<p className="text-xl text-center max-w-xl mt-5">
								Afin de devenir un atout au sein de votre entreprise, je saurai
								mettre à profit ma motivation, ma méthodologie ainsi que ma
								capacité d'adaptation.
							</p>
						</div>
					</div>

					{/* ------------- MOBILE DOWLOAD CV BUTTON  --------------- */}
				</div>
					<a href={CV} download className="profil-mobile-button text-xs">
						<button className="moovingBorder py-4 px-8 mt-6 mb-6" type="button">
							<div className="flex justify-center align-center">
								Télécharger mon CV{" "}
								<MdDownload className="w-[15px] h-[15px] ml-0.5 mt-0.5" />
							</div>
						</button>
					</a>
				{/* ------------- Navigation BUTTON  --------------- */}
				<div className="flex justify-center align-center max-[450px]:w-full mb-2">
				<div className="leftNavButton w-50vw md:mt-10 mt-6 profil-bot-button flex-1">
				<Link
						to="/portfolio"
						mooth={true}
						duration={500}
						className="flex relative min-h-[60px] min-[450px]:min-w-[220px] bg-gradient-to-b from-green-900 to-green-800 text-white border border-1 border-[#adadad]
							hover:border hover:border-1 border-solid hover:border-[#fff] hover:text-white"
					>
						<div className="flex items-center mx-auto">
							<HiArrowNarrowLeft className="mr-3 leftNavArrow" />
							<p><span className="sr-only">Page précédante</span>Accueil</p>
						</div>
					</Link>
					</div>

					<div className="rightNavButton w-50vw md:mt-10 mt-6 profil-bot-button flex-1">
					<Link
						to="/portfolio/competences"
						mooth={true}
						duration={500}
						className="flex relative min-h-[60px] min-[450px]:min-w-[220px] bg-gradient-to-b from-green-900 to-green-800 text-white border border-1 border-[#adadad]
							hover:border hover:border-1 border-solid hover:border-[#fff] hover:text-white"
					>
						<div className="flex items-center mx-auto">
							<p><span className="sr-only">Page suivante</span>Compétences</p>
							<HiArrowNarrowRight className="ml-3 rightNavArrow" />
						</div>
					</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
export default ProfilPage;
