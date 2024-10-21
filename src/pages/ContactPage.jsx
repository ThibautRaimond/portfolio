import { motion } from "framer-motion"; 
import { Helmet } from "react-helmet";
import "../styles/buttonsStyles.css";

const Contact = () => {
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
			
			<div className="card rounded-md flex justify-center items-center mx-6 my-6 py-4 md:p-8">
				<form
					method="POST"
					action="https://getform.io/f/b647f9b9-5752-4f82-a5c5-7e42ed277826"
					className="flex flex-col max-w-[600px] w-full mx-auto px-2"
				>
					<div className="pb-4 text-center">
						<h1 className="text-4xl font-bold inline border-b-4 border-[#07ed66] text-gray-200">
							Me contacter
						</h1>
						<p className="text-gray-200 pt-6 md:pb-2 md:pt-8">
							Afin de me contacter, remplissez le formulaire ci-dessous ou
							envoyez moi directement un e-mail à l'adresse suivante :
							raimond.thibaut@gmail.com
						</p>
					</div>

					<div className="flex flex-col px-4 md:px-12">
						<div>
							<p id="name" className="text-[white]">Nom :</p>
							<input
								className="bg-[#ccd6f6] placeholder-gray-600 w-full" // Ajout de w-full
								type="text"
								placeholder="Votre nom"
								name="name"
								aria-describedby="name"
							/>
						</div>
						<div>
							<p id="mail" className="text-[white] mt-4">Mail :</p>
							<input
								className="bg-[#ccd6f6] placeholder-gray-600 w-full" // Ajout de w-full
								type="email"
								placeholder="Votre Email"
								name="email"
								aria-describedby="mail"
							/>
						</div>
						<div>
							<p id="message" className="text-[white] mt-4">Message :</p>
							<textarea
								name="message"
								className="bg-[#ccd6f6] placeholder-gray-600 w-full" // Ajout de w-full
								rows="10"
								placeholder="Votre message"
								aria-describedby="message"
							></textarea>
						</div>
					</div>
					<div className="flex justify-center">
						{/* --button-- */}
						<button
							className="moovingBorder bg-[#121614] hover:text-green-500 hover:underline hover:underline-thickness-2 py-4 px-8 mt-6 sm:mt-10 mb-4"
							type="submit"
						>
							Collaborons ensemble
						</button>
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default Contact;
