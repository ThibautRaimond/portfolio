import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import thib2 from "../assets/thib2.jpg";

function CvAccessible() {
  return (
    <div>
      <Breadcrumb />
      {/* --------- COORDONNÉES ---------  */}
      <div className="bg-gray-900 text-gray-100 p-8 max-w-4xl mx-auto m-4 flex flex-col justify-center align-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl text-sky-400 font-bold mb-2">
            Thibaut Raimond
          </h1>
          <h2 className="text-3xl text-sky-400 font-semibold mb-4 text-gray-200">
            Consultant en Accessibilité Numérique
          </h2>
          <img
            src={thib2}
            alt=""
            className="mx-auto mb-4 h-28 w-28 rounded-full object-cover border border-gray-700"
          />
          <address className="not-italic mb-4">
            <ul className="list-none">
              <li>
                <span className="font-semibold">Téléphone : </span>
                <a href="tel:+33658510132" className="underline">
                  06.58.51.01.32
                </a>
              </li>
              <li>
                <span className="font-semibold">Email : </span>
                <a
                  href="mailto:raimond.thibaut@gmail.com"
                  className="underline"
                >
                  raimond.thibaut@gmail.com
                </a>
              </li>
              <li>
                Permis B <span aria-hidden="true">/</span> Véhiculé
              </li>
            </ul>
          </address>
          <div className="flex justify-center space-x-4">
            <a
              href="http://www.linkedin.com/in/thibaut-raimond-0a46791ab"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ThibautRaimond"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              GitHub
            </a>
          </div>
        </div>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-t-2 border-gray-700 pt-2 text-[#FFA500]">
            Profil
          </h3>
          <p className="text-gray-100 mb-4">
            Après six ans d’expérience dans la vente de produits de luxe, j’ai
            choisi d’effectuer une reconversion vers le développement web et
            l’accessibilité numérique.
            <br />
            Désormais, consultant accessibilité pour grands comptes via Urbilog,
            spécialisé dans les référentiels RGAA et RAAM, j’accompagne les
            équipes <span lang="en">UX</span> <span aria-hidden="true">/</span>{" "}
            <span lang="en">UI</span> ainsi que les développeurs dans la
            conception de contenus inclusifs et accessibles.
            <br />
            Je combine expertise technique, pédagogie et aisance relationnelle
            pour renforcer durablement leurs compétences et contribuer à
            l'élévation de l'expertise des collaborateurs en interne.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-t-2 border-gray-700 pt-2 text-[#FFA500]">
            Expérience Professionnelle
          </h3>
          <div className="mb-4">
            <h4 className="text-sky-400 text-xl font-bold mt-0 mb-2">
              Consultant Accessibilité Numérique{" "}
              <span aria-hidden="true">|</span> Urbilog{" "}
              <span aria-hidden="true">|</span> Décembre 2024 à aujourd'hui
            </h4>
            <div className="ml-4 mb-4">
              <h5 className="text-sky-400 font-semibold mb-2">
                Accompagnement SFR depuis mars 2024
              </h5>
              <ul className="list-disc ml-5 space-y-1 text-gray-100">
                <li>Recettes RGAA sur parcours clients web et applicatifs</li>
                <li>
                  Corrections sémantiques, navigation clavier, composants
                  accessibles
                </li>
                <li>
                  Collaboration quotidienne avec <span lang="en">UX</span>{" "}
                  <span aria-hidden="true">/</span> <span lang="en">UI</span> et
                  développeurs
                </li>
                <li>Montée en autonomie des équipes</li>
              </ul>
            </div>
            <div className="ml-4 mb-4">
              <h5 className="text-sky-400 font-semibold mb-2">
                Accompagnement France Télévisions depuis mai 2025
              </h5>
              <ul className="list-disc ml-5 space-y-1 text-gray-100">
                <li>
                  Recettes RGAA et RAAM sur plateformes médias à forte audience
                </li>
                <li>Optimisation de l’accessibilité au-delà de la conformité réglementaire</li>
                <li>
                  Recommandations <span lang="en">UX</span> inclusives et
                  solutions techniques concrètes
                </li>
                <li>
                  Participation à la montée en expertise des équipes design et
                  développement
                </li>
              </ul>
            </div>
            <div className="ml-4">
              <h5 className="text-sky-400 font-semibold mb-2">
                Activités transverses :
              </h5>
              <ul className="list-disc ml-5 space-y-1 text-gray-100">
                <li>Rapports d'audit détaillés et plans d'actions priorisés</li>
                <li>
                  Préconisations adaptées aux contraintes techniques et design
                  des différents métiers
                </li>
                <li>
                  Partage de bonnes pratiques et diffusion d'une culture
                  accessibilité
                </li>
                <li>
                  Animation de formations et ateliers en accessibilité numérique
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --------- COMPÉTENCES CLÉS ACCESSIBILITÉ ---------  */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-t-2 border-gray-700 pt-2 text-[#FFA500]">
            Compétences Clés Accessibilité
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-gray-100">
            <li>
              Tests lecteurs d'écran :{" "}
              <span lang="en">NVDA, JAWS, VoiceOver, TalkBack</span>
            </li>
            <li>
              Sémantique <span lang="en">HTML</span>,{" "}
              <span lang="en">ARIA</span>, gestion du focus, navigation clavier
            </li>
            <li>
              Correction de composants <span lang="en">UI</span> et design
              systems
            </li>
            <li>Approche pragmatique orientée solutions</li>
          </ul>
        </section>

        {/* --------- PRATIQUE PERSONNELLE et VEILLE ---------  */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-t-2 border-gray-700 pt-2 text-[#FFA500]">
            Pratique Personnelle et Veille
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-gray-100">
            <li>Mise en accessibilité de mes projets web personnels</li>
            <li>
              Expérimentation continue des contraintes réelles (code, UX, choix
              design)
            </li>
            <li>
              Veille continue sur les standards et bonnes pratiques du secteur
            </li>
          </ul>
        </section>

        {/* --------- TECHNOLOGIES MAÎTRISÉES ---------  */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-t-2 border-gray-700 pt-2 text-[#FFA500]">
            Technologies maîtrisées
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-gray-100">
            <li>
              <span lang="en">HTML</span> <span aria-hidden="true">/</span>{" "}
              <span lang="en">CSS</span> <span aria-hidden="true">/</span>{" "}
              <span lang="en">Tailwind</span>
            </li>
            <li>
              <span lang="en">JS</span> <span aria-hidden="true">/</span>{" "}
              <span lang="en">REACT</span> <span aria-hidden="true">/</span>{" "}
              <span lang="en">EJS</span> <span aria-hidden="true">/</span>{" "}
              <span lang="en">NodeJS</span> <span aria-hidden="true">/</span>{" "}
              <span lang="en">Sequelize</span>
            </li>
            <li>
              <span lang="en">Jira</span> <span aria-hidden="true">/</span>{" "}
              <span lang="en">Figma</span> <span aria-hidden="true">/</span>{" "}
              <span lang="en">Mocodo</span> <span aria-hidden="true">/</span>{" "}
              <span lang="en">Canva</span>
            </li>
          </ul>
        </section>

        {/* --------- FORMATIONS ---------  */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-t-2 border-gray-700 pt-2 text-[#FFA500]">
            Formations
          </h3>
          <ul className="list-disc ml-5 space-y-2 text-gray-100">
            <li>Formation Consultant Accessibilité Numérique – Compethance</li>
            <li>Titre Pro Développeur FullStack Web et Mobile – O'Clock</li>
            <li>
              Diplomé Technicien Supérieur Management des Unités Commerciales –
              Saint Jude
            </li>
          </ul>
        </section>

        {/* --------- ATOUTS COMPLÉMENTAIRES ---------  */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-t-2 border-gray-700 pt-2 text-[#FFA500]">
            Atouts Complémentaires
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-gray-100">
            <li>Pédagogie et vulgarisation technique</li>
            <li>Excellente relation client</li>
            <li>Détermination et persévérance</li>
          </ul>
        </section>
      </div>

      {/* --------- GLOSSAIRE - SECTION SÉPARÉE ---------  */}
      <div className="p-8 max-w-4xl mx-auto m-4 border border-white">
        <h2 className="text-3xl font-bold mb-6 text-white">Glossaire</h2>
        <div className="space-y-2 text-white">
          <p>
            <span className="font-semibold">RGAA</span> : Référentiel Général
            d'Amélioration de l'Accessibilité (cadre légal français)
          </p>
          <p>
            <span className="font-semibold">RAAM</span> : Référentiel
            d'Accessibilité des Applications Mobiles
          </p>
          <p>
            <span className="font-semibold" lang="en">
              WCAG
            </span>{" "}
            : <span lang="en">Web Content Accessibility Guidelines</span>{" "}
            (standard international du{" "}
            <span lang="en">World Wide Web Consortium</span>)
          </p>
          <p>
            <span className="font-semibold" lang="en">
              ARIA
            </span>{" "}
            : <span lang="en">Accessible Rich Internet Applications</span>{" "}
            (attributs d'accessibilité <span lang="en">HTML</span>)
          </p>
          <p>
            <span className="font-semibold" lang="en">
              UX
            </span>{" "}
            : Expérience utilisateur
          </p>
          <p>
            <span className="font-semibold" lang="en">
              UI
            </span>{" "}
            : Interface utilisateur
          </p>
          <p>
            <span className="font-semibold" lang="en">
              NVDA
            </span>{" "}
            : <span lang="en">NonVisual Desktop Access</span> (lecteur d'écran
            Windows)
          </p>
          <p>
            <span className="font-semibold" lang="en">
              JAWS
            </span>{" "}
            : <span lang="en">Job Access With Speech</span> (lecteur d'écran
            Windows)
          </p>
          <p>
            <span className="font-semibold" lang="en">
              VoiceOver
            </span>{" "}
            : Lecteur d'écran natif <span lang="en">Apple</span>
          </p>
          <p>
            <span className="font-semibold" lang="en">
              TalkBack
            </span>{" "}
            : Lecteur d'écran natif Android
          </p>
        </div>
      </div>

      {/* --- Retour à la page profil --- */}
      <div className="flex justify-center mt-4">
        <Link
          to="/profil"
          smooth={true}
          duration={500}
          className="bg-[#121614] overflow-hidden relative no-underline text-white border-[#07ed66] border-[1.5px] py-4 mb-4 text-center text-white p-2 hover:text-[#07ed66]"
        >
          Retour à la page profil
        </Link>
      </div>
    </div>
  );
}

export default CvAccessible;
