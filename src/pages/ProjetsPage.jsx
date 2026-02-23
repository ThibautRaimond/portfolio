import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";

import CodeDuDev from "../assets/projects/CodeDuDev.jpg";
import pokedex from "../assets/projects/pokedex.jpg";

const ProjetsPage = () => {
  return (
    <motion.div
      name="Projets"
      className="text-gray-300 overflow-hidden" // Ajout de overflow-hidden
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75 }}
    >
      <Helmet>
        <title>Projets Portfolio de Thibaut Raimond</title>
        <meta name="Projets" content="Présentation de mes projets" />
      </Helmet>

      <div className="bg-gradient-to-r from[#0e1111] to-transparentbg flex flex-col justify-center items-center text-gray-200 md:mt-4 px-2 mx-1">
        <div className="card rounded-md m-4 p-4 md:p-10 flex flex-col justify-center w-full max-w-7xl md:m-0 mx-2">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#07ed66]">
              Mes projets
            </h1>
            <p className="py-6"> Présentation de mes projets</p>
          </div>

          <ul className="flex justify-center items-stretch flex-wrap gap-10 md:flex-nowrap">
            {/* Projet 1 pokedex */}
            <li className="relative flex justify-center items-stretch p-3 bg-[#0000006e] shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md cursor-default mb-8 md:mb-0 w-full max-w-[600px] min-h-[420px] sm:min-h-[440px]">
              <div className="text-center flex justify-between items-center flex-col h-full">
                <a
                  href="https://thibautraimond.github.io/pokedex/"
                  rel="noreferrer"
                  aria-label="Projet pokedex (nouvel onglet)"
                  className="p-1 after:absolute after:inset-0 after:content-['']"
                >
                  <h2 className="text-2xl md:text-3xl text-[#07ed66] font-bold hover:text-[#00D14B] underline">
                    Pokedex
                  </h2>
                </a>
                <p className="text-base md:text-lg">
                  <span className="font-bold">Languages : </span>
                  React{" "}
                  <span aria-hidden="true" className="text-[#07ed66]">
                    /
                  </span>{" "}
                  CSS
                </p>
                <p className="m-1 text-base md:text-lg text-[#95F3A4]">
                  Projet perso
                </p>
                <p
                  className="mt-2 text-base md:text-lg text-gray-300 w-full max-w-[500px] break-words hyphens-auto mb-[6px]"
                  lang="fr"
                >
                  Application Pokedex gérée par{" "}
                  <span className="font-semibold">l'API </span> PokeApi. Permet
                  de rechercher les pokémons par nom ou par type, et d'afficher
                  leurs caractéristiques.
                </p>
                <div className="w-full max-w-[550px] h-[360px] flex justify-center items-center px-4">
                  <img
                    src={pokedex}
                    alt=""
                    className="w-full h-full object-cover pb-[4px] rounded"
                  />
                </div>
              </div>
            </li>

            {/* Projet 2 code du dev */}
            <li className="relative flex justify-center items-stretch p-3 bg-[#0000006e] shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md cursor-default mb-8 md:mb-0 w-full max-w-[600px] min-h-[420px] sm:min-h-[440px]">
              <div className="text-center flex justify-between items-center flex-col h-full">
                <div
                  aria-label="Projet le code du dev (lien indisponible)"
                  className="p-1"
                >
                  <h2 className="text-2xl md:text-3xl text-[#07ed66] font-bold">
                    Le code du dev
                  </h2>
                  <p className="text-sm md:text-base text-red-400">
                    Le site n'est plus disponible en ligne.
                  </p>
                </div>
                <p className="text-base md:text-lg">
                  <span className="font-bold">Languages : </span>EJS{" "}
                  <span aria-hidden="true" className="text-[#07ed66]">
                    /
                  </span>{" "}
                  NodeJS{" "}
                  <span aria-hidden="true" className="text-[#07ed66]">
                    /
                  </span>{" "}
                  SQL{" "}
                  <span aria-hidden="true" className="text-[#07ed66]">
                    /
                  </span>{" "}
                  CSS
                </p>
                <p className="m-1 text-base md:text-lg text-[#95F3A4]">
                  Projet de groupe
                </p>
                <p
                  className="text-base md:text-lg text-gray-300 w-full max-w-[500px] break-words hyphens-auto mb-[6px]"
                  lang="fr"
                >
                  Projet destiné à proposer des quiz sur différents sujets liés
                  au développement web. Le site respecte les exigences
                  <span lang="en">
                    <span className="font-semibold"> CRUD</span> (Create, Read,
                    Update, Delete).
                  </span>
                </p>
                <div className="w-full max-w-[550px] h-[360px] flex justify-center items-center px-4">
                  <img
                    src={CodeDuDev}
                    alt=""
                    className="w-full h-full object-cover pb-[4px] rounded"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* ------------- Navigation BUTTON  --------------- */}
        <nav
          aria-label="Secondaire"
          className="flex justify-center align-center max-[450px]:w-full mb-2"
        >
          <div className="leftNavButton w-50vw md:mt-10 mt-2 profil-bot-button flex-1">
            <Link
              to="/competences"
              mooth={true}
              duration={500}
              className="flex relative min-h-[60px] min-[600px]:min-w-[270px] bg-gradient-to-b from-green-900 to-green-800 text-white border border-1 border-[#adadad]
							hover:border hover:border-1 border-solid hover:border-[#fff] hover:text-white m-0.5"
            >
              <div className="flex items-center mx-auto">
                <div className="min-w-[40px] flex justify-center content-center">
                  <HiArrowNarrowLeft className="leftNavArrow" />
                </div>
                <p>
                  Compétences
                  <span className="sr-only">{"\u00A0"}Page précédente</span>
                </p>
              </div>
            </Link>
          </div>

          <div className="rightNavButton w-50vw md:mt-10 mt-2 profil-bot-button flex-1 text-center ">
            <Link
              to="/contact"
              mooth={true}
              duration={500}
              className="flex relative min-h-[60px] min-[600px]:min-w-[270px] bg-gradient-to-b from-green-900 to-green-800 text-white border border-1 border-[#adadad]
							hover:border hover:border-1 border-solid hover:border-[#fff] hover:text-white m-0.5"
            >
              <div className="flex items-center mx-auto">
                <p>
                  Contact
                  <span className="sr-only">{"\u00A0"}Page suivante</span>
                </p>
                <div className="min-w-[40px] flex justify-center content-center">
                  <HiArrowNarrowRight className="rightNavArrow" />
                </div>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default ProjetsPage;
