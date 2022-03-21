import React from "react";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import HeaderArticle from "../components/pages/HeaderArticle";
import Button from "../components/shared/Button";
import { IThumbProps } from "../components/shared/ThumbArticle";
import ThumbsContainer from "../components/shared/ThumbsContainer";

import artHeader1 from "../images/articleHeader1.png";
import thumbArt1 from "../images/thumbArt1.png";
import thumbArt2 from "../images/thumbArt2.png";
import thumbArt3 from "../images/thumbArt3.png";

const Articulo = () => {
	const thumbs: IThumbProps[] = [
		{
			image: thumbArt1,
			title: "Los irreductibles en un pacto verde para México",
			summary: "Beatriz Paredes Rangel",
			subsummary: "Senadora de la LXV Legislatura de México",
			buttonText: "Leer artículo",
		},
		{
			image: thumbArt2,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary: "Leticia Vázquez Esteban",
			subsummary: "Activista masewal y cooperativista de Tosepan",
			buttonText: "Leer artículo",
		},
		{
			image: thumbArt3,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary: "Jorge Mario Martínez Piva",
			subsummary:
				"Titular de la Unidad de Comercio Internacional e Industria de la CEPAL",
			buttonText: "Leer artículo",
		},
		{
			image: thumbArt1,
			title: "Los irreductibles en un pacto verde para México",
			summary: "Beatriz Paredes Rangel",
			subsummary: "Senadora de la LXV Legislatura de México",
			buttonText: "Leer artículo",
		},
		{
			image: thumbArt2,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary: "Leticia Vázquez Esteban",
			subsummary: "Activista masewal y cooperativista de Tosepan",
			buttonText: "Leer artículo",
		},
		{
			image: thumbArt3,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary: "Jorge Mario Martínez Piva",
			subsummary:
				"Titular de la Unidad de Comercio Internacional e Industria de la CEPAL",
			buttonText: "Leer artículo",
		},
		{
			image: thumbArt1,
			title: "Los irreductibles en un pacto verde para México",
			summary: "Beatriz Paredes Rangel",
			subsummary: "Senadora de la LXV Legislatura de México",
			buttonText: "Leer artículo",
		},
		{
			image: thumbArt2,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary: "Leticia Vázquez Esteban",
			subsummary: "Activista masewal y cooperativista de Tosepan",
			buttonText: "Leer artículo",
		},
		{
			image: thumbArt3,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary: "Jorge Mario Martínez Piva",
			subsummary:
				"Titular de la Unidad de Comercio Internacional e Industria de la CEPAL",
			buttonText: "Leer artículo",
		},
	];
	return (
		<Layout title="Artículos">
			<HeaderArticle
				bgcolor="bg-green2"
				title="Los artículos de un pacto verde para México"
				titleColor="text-green3"
				variant="circle"
				subImage={artHeader1}
				subColor="text-black"
				subText="Estos artículos, escritos por un grupo plural, reconocido y diverso de expertas y expertos, componen la revista “Un pacto verde para México” y forman la base de la agenda de trabajo."
			/>
			<ThumbsContainer thumbs={thumbs} />
			<div
				className="container"
			>
				<div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
					<div className="border-t pt-16 pb-8 sm:py-16 text-center sm:text-left">
						Descarga la publicación completa aquí
					</div>
					<div className="sm:border-t pb-16 sm:py-16 sm:pl-4">
						<Button text="Descargar" variant="green" />
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
};

export default Articulo;
