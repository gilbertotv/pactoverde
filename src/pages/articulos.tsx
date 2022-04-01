import React, { useContext } from "react";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import HeaderArticle from "../components/pages/HeaderArticle";
import Button from "../components/shared/Button";
import ThumbsContainer from "../components/shared/ThumbsContainer";
import { AppContext } from "../context/AppContext";

import artHeader1 from "../images/articleHeader1.png";

const Articulo = () => {
	const { thumbsArticles } = useContext(AppContext);

	return (
		<Layout title="Artículos">
			<HeaderArticle
				bgcolor="bg-green2"
				title='Los artículos de "Un pacto verde para México"'
				titleColor="text-green3"
				variant="circle"
				subImage={artHeader1}
				subColor="text-black"
			>
				Estos artículos, escritos por un grupo plural, reconocido y diverso de
				expertas y expertos, componen la revista "Un pacto verde para México" y
				forman la base de la agenda de trabajo.
			</HeaderArticle>
			<ThumbsContainer thumbs={thumbsArticles} />
			<div className="container">
				<div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
					<div className="border-t pt-16 pb-8 sm:py-16 text-center sm:text-left">
						Descarga la publicación completa aquí
					</div>
					<div className="sm:border-t pb-16 sm:py-16 sm:pl-4">
						<Button
							text="Descargar"
							variant="green"
							action={() =>
								window.open(
									"http://library.fes.de/pdf-files/bueros/mexiko/18815-20220210.pdf"
								)
							}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
};

export default Articulo;
