import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import "../styles/buttonsStyles.css"

const Contact = () => {
	return (
		<motion.main
			name="Contact"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.75 }}
		>
			<Helmet>
				<title>Porfolio: Contact</title>
				<meta name="Contact" content="Contactez-moi par mail" />
			</Helmet>

			<div className="flex justify-center items-center mt-4 sm:mt-0">
				<form
					method="POST"
					action="https://getform.io/f/b647f9b9-5752-4f82-a5c5-7e42ed277826"
					className="flex flex-col max-w-[600px] w-full mx-auto px-2"
				>
					<div className="pb-4 text-center">
						<h2 className="text-4xl font-bold inline border-b-4 border-[#07ed66] text-gray-300">
							Me contacter
						</h2>

						<p className="text-gray-300 pt-6 md:pb-6 md:pt-8">
							Afin de me contacter, remplissez le formulaire ci-dessous ou
							envoyez moi directement un e-mail à l'adresse suivante:
							raimond.thibaut@gmail.com
						</p>
					</div>
					<input
						className="bg-[#ccd6f6]"
						type="text"
						placeholder="Nom"
						name="name"
					/>
					<input
						className="my-4 bg-[#ccd6f6]"
						type="email"
						placeholder="Email"
						name="email"
					/>
					<textarea
						name="message"
						className="bg-[#ccd6f6]"
						rows="10"
						placeholder="Message"
					></textarea>
					<div className="flex justify-center">
						{/* --button-- */}
						<button
							className="moovingBorder bg-[#121614] hover:text-green-500 hover:underline hover:underline-thickness-2 py-4 px-8 mt-6 sm:mt-10 mb-4"
							type="submit"
						>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Collaborons ensemble
						</button>
					</div>
				</form>
			</div>
		</motion.main>
	);
};

export default Contact;
