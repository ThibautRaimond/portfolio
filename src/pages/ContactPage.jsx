import { motion } from "framer-motion"; 
import { Helmet } from "react-helmet"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

const Contact = () => {
  // Ajoute dynamiquement la classe 'not-empty' à l'input si il y a du texte
  function handleInputChange(e) {
    const input = e.target;
    if (input.value.trim() !== '') {
      input.classList.add('not-empty');
    } else {
      input.classList.remove('not-empty');
    }
  }

  return (
    <motion.div
      name="Contact"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75 }}
    >
      <Helmet>
        <title>Contact Portfolio de Thibaut Raimond</title>
        <meta name="Contact" content="Contactez-moi par mail" />
      </Helmet>
      
      <div className="card rounded-md flex flex-col justify-center items-center mx-6 my-6 py-4 md:p-8 ">
        <form
          aria-label="formulaire de contact"
          method="POST"
          action="https://getform.io/f/b647f9b9-5752-4f82-a5c5-7e42ed277826"
          className="flex flex-col max-w-[600px] w-full mx-auto px-2"
        >
          <div className="pb-4 text-center">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#07ed66] text-gray-300">
              Me contacter
            </h1>
            <p className="text-gray-300 pt-6 md:pb-2 md:pt-8">
              Afin de me contacter, remplissez le formulaire ci-dessous ou
              envoyez moi directement un e-mail à l'adresse suivante :
              raimond.thibaut@gmail.com
            </p>
          </div>

          <div className="flex flex-col px-4 md:px-12">
            <div className="relative">
              <label htmlFor="name" className="text-[white]">Nom :</label>
              <input
                id="name"
                autocomplete="family-name"
                type="text"
                name="name"
                className="w-full bg-gray-50 border border-[1px] border-black"
              />
            </div>

            <span className="m-3"></span>

            <div className="relative flex flex-col">
              <label htmlFor="mail" className="text-[white]">Mail :</label>
              <div className="relative w-full">
                    <input
                  id="mail"
                  autoComplete="email"
                  name="email"
                  type="email"
                  aria-describedby="mailText"
                  className="w-full bg-gray-50 block peer border border-[1px] border-black placeholder-transparent focus:placeholder-transparent"
                  placeholder="Votre_mail@domaine.com"
                  onInput={handleInputChange}
                />
                    <span
                  id="mailText"
                  className="pointer-events-none select-none absolute left-[2px] top-1/2 -translate-y-1/2 text-gray-800 text-sm transition-all duration-300
                    peer-focus:top-full peer-focus:translate-y-1 peer-focus:text-gray-300 peer-focus:text-sm peer-focus:scale-100
                    peer-[.not-empty]:top-full peer-[.not-empty]:translate-y-1 peer-[.not-empty]:text-gray-300 peer-[.not-empty]:text-sm peer-[.not-empty]:scale-100"
                  style={{lineHeight: 1, letterSpacing: 0, wordSpacing: 0, fontSize: '1em'}}
                >
                  <span className="sr-only">Exemple</span>
                  Votre_mail@domaine.com
                </span>
              </div>
            </div>

            <span className="m-3"></span>

            <div>
              <label htmlFor="message" className="text-[white]">Message :</label>
              <textarea
                id="message"
                name="message"
                rows="10"
                className="bg-gray-50 placeholder-gray-800 w-full border border-[1px] border-black"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center">
            {/* --button-- */}
            <button
              className="bg-[#121614] overflow-hidden relative no-underline text-white border-[#07ed66] border-[1.5px] py-4 px-8 mt-6 sm:mt-10 mb-4focus:outline focus:outline-2 focus:outline-[#fff] focus:outline-offset-4 hover:scale-105 duration-500 transition-transform"
              type="submit"
            >
              Envoyer le message
            </button>
          </div>
        </form>
        
        {/* Media Links */}
        <div className="flex justify-between mt-4">
          <li className="w-[60px] h-[60px] mx-1 flex bg-[#0A66C2] border border-white hover:scale-110 transition-transform relative">
            <a
              aria-label="Linkedin de Thibaut Raimond (nouvel onglet)"
              className="flex justify-between items-center w-full h-full text-gray-300"
              href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <RxOpenInNewWindow className="w-4 h-4 absolute top-px right-0.5 text-gray-300" aria-hidden="true" />
          </li>
          <li className="w-[60px] h-[60px] mx-0.5 flex justify-between bg-[#2d333b] border border-white hover:scale-110 transition-transform relative">
            <a
              aria-label="Github de Thibaut Raimond (nouvel onglet)"
              className="flex justify-between items-center w-full h-full text-gray-300"
              href="https://github.com/ThibautRaimond"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <RxOpenInNewWindow className="w-4 h-4 absolute top-px right-0.5 text-gray-300" aria-hidden="true" />
          </li>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
