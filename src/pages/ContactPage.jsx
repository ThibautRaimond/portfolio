import { motion } from "framer-motion"; 
import { Helmet } from "react-helmet"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  function handleInputChange() {
    const input = document.getElementById('mail');
    const helperText = document.getElementById('mailText');

    // Si le champ contient du texte ou est en focus, on déplace le texte flottant
    if (input.value.trim() !== '' || document.activeElement === input) {
      helperText.classList.add('scale-75', 'translate-y-6', 'text-gray-300');  // Color change to gray-200
      helperText.classList.remove('scale-100', 'translate-y-0', 'text-gray-800');
    } else {
      // Si le champ est vide et pas en focus, on réinitialise et place le texte au centre
      helperText.classList.remove('scale-75', 'translate-y-6', 'text-gray-300');
      helperText.classList.add('scale-100', 'translate-y-0', 'text-gray-800');  // Color back to gray-800
    }
  }

  function handleBlur() {
    const input = document.getElementById('mail');
    const helperText = document.getElementById('mailText');

    // Vérifie si le champ est vide lorsqu'il perd le focus
    if (input.value.trim() === '') {
      helperText.classList.remove('scale-75', 'translate-y-6', 'text-gray-300');
      helperText.classList.add('scale-100', 'translate-y-0', 'text-gray-800');  // Texte centré et couleur normale
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

            <div className="relative">
              <label htmlFor="mail" className="text-[white]">Mail :</label>
              <input
                id="mail"
                autocomplete="email"
                name="email"
                type="email"
                aria-describedby="mailText"
                className="w-full bg-gray-50 block peer border border-[1px] border-black"
                placeholder=" "
                onInput={handleInputChange}
                onBlur={handleBlur} // Gérer le focus perdu
              />
              <p
                id="mailText"
                className="text-gray-800 absolute duration-300 transform scale-100 bottom-0 z-10 origin-[0] start-1 peer-focus:scale-75 peer-focus:translate-y-6.5 pointer-events-none">
                <span className="sr-only">Exemple</span>
                Votre_mail@domaine.com
              </p>
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
              className="bg-[#121614] overflow-hidden relative no-underline text-white border-[#07ed66] border-[1.5px] py-4 bg-[#121614] hover:text-green-500 hover:underline hover:underline-thickness-2 focus:underline py-4 px-8 mt-6 sm:mt-10 mb-4"
              type="submit"
            >
              Envoyer le message
            </button>
          </div>
        </form>
        
        {/* Media Links */}
        <div className="flex justify-between mt-4">
          <li className="w-[60px] h-[60px] mx-1 flex bg-[#0A66C2] border border-white hover:scale-110 transition-transform">
            <a
              aria-label="Linkedin de Thibaut Raimond (nouvel onglet)"
              className="flex justify-between items-center w-full h-full text-gray-300"
              href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] mx-0.5 flex justify-between bg-[#2d333b] border border-white hover:scale-110 transition-transform">
            <a
              aria-label="Github de Thibaut Raimond (nouvel onglet)"
              className="flex justify-between items-center w-full h-full text-gray-300"
              href="https://github.com/ThibautRaimond"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
