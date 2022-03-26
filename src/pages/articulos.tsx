import React from "react";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import HeaderArticle from "../components/pages/HeaderArticle";
import Button from "../components/shared/Button";
import { IThumbProps } from "../components/shared/ThumbArticle";
import ThumbsContainer from "../components/shared/ThumbsContainer";

import artHeader1 from "../images/articleHeader1.png";
import thumb1 from "../images/articulos/thumbs/thumb1.png";
import thumb2 from "../images/articulos/thumbs/thumb2.png";
import thumb3 from "../images/articulos/thumbs/thumb3.png";
import thumb4 from "../images/articulos/thumbs/thumb4.png";
import thumb5 from "../images/articulos/thumbs/thumb5.png";
import thumb6 from "../images/articulos/thumbs/thumb6.png";
import thumb7 from "../images/articulos/thumbs/thumb7.png";
import thumb8 from "../images/articulos/thumbs/thumb8.png";
import thumb9 from "../images/articulos/thumbs/thumb9.png";
import thumb10 from "../images/articulos/thumbs/thumb10.png";
import thumb11 from "../images/articulos/thumbs/thumb11.png";
import thumb12 from "../images/articulos/thumbs/thumb12.png";
import thumb13 from "../images/articulos/thumbs/thumb13.png";
import thumb14 from "../images/articulos/thumbs/thumb14.png";
import thumb15 from "../images/articulos/thumbs/thumb15.png";
import thumb16 from "../images/articulos/thumbs/thumb16.png";
import thumb17 from "../images/articulos/thumbs/thumb17.png";
import thumb18 from "../images/articulos/thumbs/thumb18.png";
import thumb19 from "../images/articulos/thumbs/thumb19.png";
import thumb20 from "../images/articulos/thumbs/thumb20.png";
import thumb21 from "../images/articulos/thumbs/thumb21.png";
import thumb22 from "../images/articulos/thumbs/thumb22.png";
import thumb23 from "../images/articulos/thumbs/thumb23.png";

const Articulo = () => {
	const thumbs: IThumbProps[] = [
		{
			image: thumb1,
			title: "Los irreductibles en un pacto verde para México",
			summary: "Beatriz Paredes Rangel",
			subsummary: "Senadora de la LXV Legislatura de México",
			buttonText: "Leer artículo",
			url: "/articulos/irreductibles_pacto_verde",
		},
		{
			image: thumb2,
			title:
				"El papel de los pueblos originarios hacia un pacto verde para México",
			summary: "Leticia Vázquez Esteban",
			subsummary: "Activista masewal y cooperativista de Tosepan",
			buttonText: "Leer artículo",
			url: "/articulos/pueblos_originarios",
		},
		{
			image: thumb3,
			title: "El Big Push mexicano: Plan verde para un desarrollo sostenible",
			summary: "Jorge Mario Martínez Piva",
			subsummary:
				"Titular de la Unidad de Comercio Internacional e Industria de la CEPAL",
			buttonText: "Leer artículo",
			url: "/articulos/big_push",
		},
		{
			image: thumb4,
			title: "Pactar verde y caminar hacia 2030",
			summary: "Alfredo González",
			subsummary:
				"Secretario Ejecutivo del Consejo Nacional de la Agenda 2030 del Gobierno de México",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb5,
			title:
				"Economía social y solidaria para la regeneración ecológica en México",
			summary: "Alberto Irezabal Vilaclara",
			subsummary:
				"Director del Centro Internacional de Investigación de la Economía Social y Solidaria",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb6,
			title: "Pilares para un pacto verde para México",
			summary: "Julia Carabias Lillo",
			subsummary: "Política y ecóloga de la Facultad de Ciencias, UNAM",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb7,
			title:
				"Hacia un pacto verde para México: El papel de la política educativa",
			summary: "Blanca Heredia Rubio",
			subsummary:
				"Directora de la Unidad de Investigación sobre Educación y Política Educativa, CIDE",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb8,
			title: "Un pacto verde para México",
			summary: "Alfonso Ramírez Cuéllar",
			subsummary: "Diputado federal por la LXIV Legislatura",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb9,
			title: "El derecho humano a la movilidad",
			summary: "Patricia Mercado Castro",
			subsummary: "Senadora de la LXV Legislatura de México",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb10,
			title: "El papel del sector empresarial para un pacto verde para México",
			summary: "Claudia Jañez Sánchez",
			subsummary:
				"Empresaria y expresidenta del Consejo Ejecutivo de Empresas Globales en México",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb11,
			title:
				"Diversificación sostenible: hacia una política industrial verde en México",
			summary: "Luis Fernando Godoy Rueda",
			subsummary:
				"Director general de la Unidad de Inteligencia Económica Global en la Secretaría de Economía",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb12,
			title:
				"Siete claves para levantarnos después de la pandemia y construir resiliencia de cara a la emergencia climática",
			summary: "Adriana Lobo de Almeida",
			subsummary:
				"Directora Ejecutiva del World Resources Institute (WRI) México",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb13,
			title:
				"Sin inversiones ambientalmente sostenibles no hay pacto verde mexicano",
			summary: "Jorge Máttar",
			subsummary:
				"Investigador del Centro Tepoztlán V. L. Urquidi y consultor de la CEPAL",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb14,
			title: "Ciencia, tecnología e innovación para un pacto verde para México",
			summary: "Carlo Altamirano Allende",
			subsummary:
				"Experto y consultor en políticas de ciencia, tecnología e innovación en México",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb15,
			title:
				"Transición energética a nivel local para un pacto verde para México",
			summary: "Adriana Aragón Tapia",
			subsummary:
				"Directora del programa de transición energética en México de la Agencia Alemana de Cooperación al desarrollo sustentable en México (GIZ)",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb16,
			title: "Política agrícola para un pacto verde para México",
			summary: "Marcela Aedo",
			subsummary:
				"Experta en cooperación internacional y políticas públicas, consultora de la CEPAL",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb17,
			title: "Hacia una transformación social-ecológica en México",
			summary: "Mariana Blanco Puente",
			subsummary:
				"Coordinadora del proyecto de Transformación Social-Ecológica en América Latina de la FES",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb18,
			title:
				"Los trabajadores y la industria dentro de un pacto verde para México",
			summary: "Luis Escobar Ramos",
			subsummary:
				"Coordinador de sindicatos del ramo industrial, automotriz, de la salud, entre otros.",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb19,
			title: "Una perspectiva norteamericana para un pacto verde para México",
			summary: "Claudia Schatan",
			subsummary:
				"Experta en comercio y medio ambiente, consultora de la CEPAL",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb20,
			title:
				"Las ciudades mexicanas del futuro: Hacia una transformación social-ecológica",
			summary: "Alfonso Iracheta Cenecorta",
			subsummary:
				"Coordinador del Programa de Estudios Urbanos de El Colegio Mexiquense",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb21,
			title: "La perspectiva de los cuidados para la economía verde",
			summary: "Claudia Maldonado Trujillo",
			subsummary: "Investigadora de la UAM y consejera académica del Coneval",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb22,
			title:
				"Fiscalización de las emisiones de GEI para un pacto verde para México",
			summary: "Adrián García y Tonatiuh Vázquez",
			subsummary:
				"Académicos del Centro de Investigación Económica y Presupuestaria (CIEP)",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
		},
		{
			image: thumb23,
			title: "La transformación productiva de apoyo a la economía verde",
			summary: "Clemente Ruiz Durán",
			subsummary: "Profesor investigador de la UNAM",
			buttonText: "Leer artículo",
			url: "/articulos/articulo",
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
			<div className="container">
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
