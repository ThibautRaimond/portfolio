import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ResetScroll() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
		
		// Forcer la réinitialisation du focus comme une vraie navigation
		// Retirer le focus de tout élément actif
		if (document.activeElement && document.activeElement !== document.body) {
			document.activeElement.blur();
		}
		
		// Remettre le tabindex sur -1 pour que le body ne soit pas tabulable
		// mais puisse recevoir le focus programmatiquement
		document.body.setAttribute('tabindex', '-1');
		document.body.focus();
		
		// Petit délai pour s'assurer que le DOM est à jour
		setTimeout(() => {
			document.body.blur();
			document.body.removeAttribute('tabindex');
		}, 0);
	}, [pathname]);
	return null;
}

export default ResetScroll;
