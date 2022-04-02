import React from "react";

import red1 from "../../images/footer/ico_Twitter-W.svg";
import red2 from "../../images/footer/ico_Spotify-W.svg";
import red3 from "../../images/footer/ico_Facebook-W.svg";
import red4 from "../../images/footer/ico_Instagram-W.svg";
import red5 from "../../images/footer/ico_Youtube-W.svg";

const Footer = () => {
	return (
		<div className="bg-greenmain mt-auto flex p-2 sm:p-6">
			<div className="w-screen py-4 text-white text-sm flex flex-col sm:flex-row">
				<div className="w-full sm:w-1/3 flex justify-center gap-4 order-1 sm:order-2">
					<a href="https://twitter.com/FESMEX" target="_blank">
						<img src={red1} alt="Twitter" />
					</a>
					<a
						href="https://open.spotify.com/show/4eafD8Ggtn8JTsfAMSBVU7?si=5e4409993d444e72&nd=1"
						target="_blank"
					>
						<img src={red2} alt="Spotify" />
					</a>
					<a href="https://www.facebook.com/FESMEX" target="_blank">
						<img src={red3} alt="Facebook" />
					</a>
					<a href="https://www.instagram.com/fesmex/?hl=es" target="_blank">
						<img src={red4} alt="Instagram" />
					</a>
					<a href="https://www.youtube.com/c/FESMEX" target="_blank">
						<img src={red5} alt="Youtube" />
					</a>
				</div>
				<div className="w-full sm:w-1/3 pt-4 sm:pt-0 order-2 sm:order-1 text-center sm:text-left">
					© Pacto Verde México 2022. Todos los derechos reservados.
				</div>
				<div className="w-full sm:w-1/3 text-center sm:text-right pt-2 sm:pt-0 order-3 sm:order-3">
					Diseño y desarollo web por{" "}
					<a
						className="underline"
						href="https://www.trazovivo.com"
						target="_blank"
					>
						Trazo Vivo
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
