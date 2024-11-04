import React from 'react';
import { Link } from "react-router-dom";

function CvAccessible() {
  return (
    <div>
      <div className="flex justify-center mt-4">
        <Link
          to="/portfolio/profil"
          smooth={true}
          duration={500}
          className="bg-[#121614] overflow-hidden relative no-underline text-white border-[#07ed66] border-[1.5px] py-4 text-center text-white p-2"
        >
          Retour à la page profil
        </Link>
      </div>
      <div className="bg-gray-900 text-gray-100 p-8 max-w-4xl mx-auto m-4 flex flex-col justify-center align-center">
        <header className="text-center mb-8">
          <h1 className="text-4xl text-sky-400 font-bold mb-2">Thibaut Raimond</h1>
          <h2 className="text-3xl text-sky-400 font-semibold mb-4 text-gray-200">Consultant en Accessibilité Numérique</h2>
          <address className="not-italic mb-4">
            <p>Téléphone : <a href="tel:+33658510132" className="underline">06.58.51.01.32</a></p>
            <p><span className="font-semibold">Email : </span><a href="mailto:raimond.thibaut@gmail.com" className="underline">raimond.thibaut@gmail.com</a></p>
            <p><span className="font-semibold">Localisation : </span> Seclin, 59113</p>
            <p>Permis B / Véhiculé</p>
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
        </header>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-[#FFA500]">Expériences Professionnelles</h3>
          <article className="mb-4">
            <h4 className="text-sky-400 text-xl font-bold">Consultant en Accessibilité Numérique - Urbilog</h4>
            <p className="text-sm text-gray-400 mb-2">Mars 2024</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Audit RGAA et RAAM, livrables et restitution client</li>
              <li>Accompagnement client et gestion des contestations</li>
              <li>Optimisation de la qualité, relectures, et préconisations</li>
            </ul>
          </article>
          <article className="mb-4">
            <h4 className="text-sky-400 text-xl font-bold">Conseiller de Vente - Boutique Figaret Lille</h4>
            <p className="text-sm text-gray-400 mb-2">02/2017 (5 ans)</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Gestion des stocks et encaissements, comptabilité</li>
              <li>Collaboration et conseils aux clients</li>
            </ul>
          </article>
          <article className="mb-4">
            <h4 className="text-sky-400 text-xl font-bold">Vente Intérim & CDD - KSI Retail Lille</h4>
            <p className="text-sm text-gray-400 mb-2">06/2016 (8 mois)</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Prise en charge de corners, conseil aux clients dans le secteur du luxe</li>
            </ul>
          </article>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-[#FFA500]">Compétences Techniques et Personnelles</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Travail en autonomie et prise en charge de corners aux Printemps</li>
            <li>Conseils clients dans divers secteurs du luxe</li>
            <li>Adaptabilité & polyvalence</li>
            <li>Organisé & collaboratif</li>
            <li>Rigoureux & fiable</li>
            <li>Observateur & créatif</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-[#FFA500]">Langages & Logiciels</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>HTML/CSS, Tailwind/Bootstrap</li>
            <li>JS/REACT/EJS/NodeJS/Sequelize</li>
            <li>Jira, Figma, Mocodo, Canva</li>
            <li>COBOL, DB2, PSQL & MongoDB</li>
            <li>Gestion d’API</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-[#FFA500]">Formations</h3>
          <article className="mb-4">
            <h4 className="text-sky-400 text-xl font-bold">Formation Consultant Accessibilité Numérique - Compethance</h4>
            <p className="text-sm text-gray-400">2023 (3 mois)</p>
            <p>RGAA, RAAM, WCAG, Sémantique HTML, W3C Pattern</p>
          </article>
          <article className="mb-4">
            <h4 className="text-sky-400 text-xl font-bold">Développeur COBOL - Simplon</h4>
            <p className="text-sm text-gray-400">2023 (2 mois)</p>
            <p>Cobol, Algorithmie, JCL et DB2</p>
          </article>
          <article className="mb-4">
            <h4 className="text-sky-400 text-xl font-bold">Titre Pro Développeur FullStack Web & Mobile - O'Clock</h4>
            <p className="text-sm text-gray-400">2022 (6 mois)</p>
            <p>HTML5, CSS3, JavaScript, Node.js, React, PostgreSQL</p>
          </article>
          <article className="mb-4">
            <h4 className="text-sky-400 text-xl font-bold">BTS Management des Unités Commerciales - Institut Saint Jude</h4>
            <p className="text-sm text-gray-400">2016 (2 ans)</p>
            <p>Management d'équipe, gestion commerciale et relation client</p>
          </article>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-[#FFA500]">Langues</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Français : Langue maternelle</li>
            <li>Anglais : Intermédiaire</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-[#FFA500]">Centres d'Intérêt</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Bénévolat LPA Lille</li>
            <li>Fitness</li>
            <li>Randonnée en terrils et forêts</li>
            <li>Arts et mythologies</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default CvAccessible;
