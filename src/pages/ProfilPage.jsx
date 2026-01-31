import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { MdDownload, MdDeveloperMode } from "react-icons/md";
import { IoAccessibility } from "react-icons/io5";

import oclock from "../assets/oclock.png";
import urbi from "../assets/urbi.png";
import thib from "../assets/thib.png";
import CV from "../assets/CV-thibaut-raimond.pdf";

const ProfilPage = () => {
  return (
    <motion.div
      name="Profil"
      className="bg-gradient-to-r from-[#0e1111] to-transparent bg flex justify-center items-center text-gray-300 mt-4 sm:mt-0 mx-2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75 }}
    >
      <Helmet>
        <title>Profil - Portfolio de Thibaut Raimond</title>
        <meta name="ProfilPage" content="Parcours personnel et CV" />
      </Helmet>

      <div className="text-gray-300 items-center flex flex-col justify-center md:mx-2">
        {/* Card principale */}
        <div className="card rounded-md bg-[#0e1111] py-4 md:py-8 px-2 md:px-12 mt-8 flex items-center flex-col">
          <h1 className="text-4xl font-bold inline border-b-4 mb-6 md:mb-6 border-[#07ed66] text-center">
            Profil
          </h1>

          <div className="flex">
            {/* Section Texte - Présentation */}
            <div className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] 2xl:min-w-[700px]">
              <p className="text-xl text-left max-w-[800px] mt-4 md:mt-6">
                Enchanté je m'appelle Thibaut, après avoir découvert une passion
                pour le développement web, j'ai choisi de suivre la formation
                FullStack JavaScript chez{" "}
                <a
                  className="hover:text-[#07ed66] underline"
                  href="https://oclock.io/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="O'clock (nouvel onglet)"
                >
                  O'Clock
                </a>
                . Cette formation m'a permis d'acquérir de nombreuses
                compétences de développeur ainsi que de prendre part à un projet
                d'équipe en utilisant les méthodes AGILE pour la conception web.
              </p>

              <p className="py-4 text-xl text-left max-w-[800px] mt-5">
                Suite à cela j'ai pu obtenir mon diplôme de Développeur
                FullStack Web & Mobile de niveau RNCP (Répertoire National des
                Certifications Professionnelles) 5.
                <br />
                Au fil de mon apprentissage, j'ai développé une appétence
                particulière pour le développement{" "}
                <span lang="en">front-end</span>.
              </p>

              <p className="text-xl text-left max-w-[800px] mt-5">
                En approfondissant ce sujet, je me suis fortement intéressé à
                l'accessibilité numérique, une spécialisation qui m'a conduit à
                devenir consultant dans ce domaine au sein de l'entreprise{" "}
                <a
                  href="https://www.urbilog.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="urbilog (nouvel onglet)"
                  className="hover:text-[#07ed66] underline"
                >
                  Urbilog
                </a>
                . Je maîtrise désormais les référentiels RGAA (Référentiel
                Général d'Amélioration de l'Accessibilité), RAAM (Référentiel
                d'Accessibilité des Applications Mobiles) et WCAG (Web Content
                Accessibility Guidelines), et j'accompagne les équipes pour
                concevoir des interfaces accessibles et inclusives.
              </p>
            </div>

            {/* Section Desktop - Image et bouton CV */}
            <div className="hidden nav:flex flex-col justify-center items-center pt-4">
              <img
                src={thib}
                alt=""
                className="bg-[linear-gradient(#5f8661a1,transparent)] shadow-[0_20px_50px_rgba(10,10,10,0.726)] w-[19rem] h-[19rem] left-[calc(50%_-_11rem)] rounded-full overflow-hidden object-cover mt-2 mb-4"
              />

              <div
                className="hidden nav:flex justify-center mb-4 mt-2 "
                aria-hidden="true"
              >
                <MdDeveloperMode className="w-9 h-9 mr-3 ml-3 text-[#FFFED6] shrink-0" />
                <img src={oclock} alt="O'clock logo" className="w-9 h-9 mr-3 ml-3 shrink-0" />
                <IoAccessibility className="w-9 h-9 mr-3 ml-3 color text-[#E11A22] shrink-0" />
                <img src={urbi} alt="Urbilog logo" className="w-9 h-9 mr-3 ml-3 shrink-0" />
              </div>

              <a
                href={CV}
                download
                className="m-1"
                aria-label="télécharger mon CV (présence d'une alternative accessible après le lien)"
              >
                <div
                  className="bg-[#121614] overflow-hidden relative no-underline text-white border-[#07ed66] border-[1.5px] py-3 px-4 hover:text-green-500 hover:underline hover:underline-thickness-2"
                  type="button"
                >
                  <div className="flex justify-center align-center">
                    Télécharger mon CV{" "}
                    <MdDownload className="w-[20px] h-[20px] mt-1" />
                  </div>
                </div>
              </a>

              <Link
                to="/cvaccessible"
                mooth={true}
                duration={500}
                className="text-[#07ed66] hover:text-[#00D14B] underline mt-4"
              >
                CV Accessible
              </Link>
            </div>
            {/* fin Section Desktop - Image et bouton CV */}
          </div>
        </div>

        {/* --------- Bouton Mobile - Téléchargement CV  ---------*/}
        <a
          href={CV}
          download
          className="bg-[#121614] overflow-hidden relative no-underline text-white border-[#07ed66] border-[1.5px] py-4 px-8 nav:hidden text-xs m-2"
          type="button"
        >
          <div className="flex justify-center align-center">
            Télécharger mon CV{" "}
            <MdDownload className="w-[15px] h-[15px] ml-0.5 mt-0.5" />
          </div>
        </a>

        <Link
          download
          to="/cvaccessible"
          className="text-[#07ed66] hover:text-[#00D14B] underline mt-2 nav:hidden"
        >
          CV Accessible
        </Link>
        {/* ----- Fin de bouton mobile ----- */}

        {/* Navigation entre pages */}
        <nav
          aria-label="Secondaire"
          className="flex justify-center align-center max-[450px]:w-full mb-2"
        >
          {/* Bouton précédent */}
          <div className="leftNavButton w-50vw md:mt-10 mt-6 profil-bot-button flex-1">
            <Link
              to="/"
              mooth={true}
              duration={500}
              className="flex relative min-h-[60px] min-[450px]:min-w-[220px] bg-gradient-to-b from-green-900 to-green-800 text-white border border-1 border-[#adadad] hover:border hover:border-1 border-solid hover:border-[#fff] hover:text-white m-0.5"
            >
              <div className="flex items-center mx-auto">
                <HiArrowNarrowLeft className="mr-3 leftNavArrow" />
                <p>
                  Accueil
                  <span className="sr-only">{"\u00A0"}Page précédente</span>
                </p>
              </div>
            </Link>
          </div>

          {/* Bouton suivant */}
          <div className="rightNavButton w-50vw md:mt-10 mt-6 profil-bot-button flex-1">
            <Link
              to="/competences"
              mooth={true}
              duration={500}
              className="flex relative min-h-[60px] min-[450px]:min-w-[220px] bg-gradient-to-b from-green-900 to-green-800 text-white border border-1 border-[#adadad] hover:border hover:border-1 border-solid hover:border-[#fff] hover:text-white m-0.5"
            >
              <div className="flex items-center mx-auto">
                <p>
                  Compétences
                  <span className="sr-only">{"\u00A0"}Page suivante</span>
                </p>
                <HiArrowNarrowRight className="ml-3 rightNavArrow" />
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default ProfilPage;
