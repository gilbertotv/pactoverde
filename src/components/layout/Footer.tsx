import React from "react";

const Footer = () => {
	return (
		<div className="bg-greenmain mt-auto flex p-2 sm:p-6">
			<div className="w-screen py-4 text-white text-sm flex flex-col sm:flex-row">
				<div className="w-full sm:w-1/2">
					© Pacto Verde 2022. Todos los derechos reservados
				</div>
				<div className="w-full sm:w-1/2 sm:text-right pt-4 sm:pt-0">
					Diseño y desarollo web por{" "}
					<a className="underline" href="https://www.trazovivo.com" target="_blank">
						Trazo Vivo
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
