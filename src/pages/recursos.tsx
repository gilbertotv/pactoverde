import React from "react";

import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import HeaderPage from "../components/pages/HeaderPage";
import ThumbsContainer from "../components/shared/ThumbsContainer";
import { IThumbProps } from "../components/shared/ThumbArticle";

import thumb1 from "../images/recursos/thumb1.png";
import thumb2 from "../images/recursos/thumb2.png";
import thumb3 from "../images/recursos/thumb3.png";
import thumb4 from "../images/recursos/thumb4.png";
import thumb5 from "../images/recursos/thumb5.png";
import thumb6 from "../images/recursos/thumb6.png";
import thumb7 from "../images/recursos/thumb7.png";
import thumb8 from "../images/recursos/thumb8.png";
import thumb9 from "../images/recursos/thumb9.png";
import thumb10 from "../images/recursos/thumb10.png";
import thumb11 from "../images/recursos/thumb11.png";
import thumb12 from "../images/recursos/thumb12.png";
import thumb13 from "../images/recursos/thumb13.png";
import thumb14 from "../images/recursos/thumb14.png";
import thumb15 from "../images/recursos/thumb15.png";
import thumb16 from "../images/recursos/thumb16.png";
import thumb17 from "../images/recursos/thumb17.png";

const Recursos = () => {
	const thumbs: IThumbProps[] = [
		{
			image: thumb1,
			title: "Objetivos de Desarrollo Sostenible.",
			subsummary: "ONU",
			buttonText: "Leer más",
			url: "https://www.un.org/sustainabledevelopment/es/sustainable-development-goals/",
		},
		{
			image: thumb2,
			title: "Un pacto verde europeo.",
			subsummary: "Comisión Europea (2019).",
			buttonText: "Leer más",
			url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?qid=1576150542719&uri=COM%3A2019%3A640%3AFIN",
		},
		{
			image: thumb3,
			title: "Un acuerdo verde para América Latina.",
			subsummary: "FES Transformación (2020).",
			buttonText: "Leer más",
			url: "https://fes-transformacion.fes.de/e/un-acuerdo-verde-para-america-latina",
		},
		{
			image: thumb4,
			title: "El nuevo pacto verde de Estados Unidos.",
			subsummary:
				"Resolución presentada por la congresista Alexandria Ocasio-Cortez (2019) (en inglés).",
			buttonText: "Leer más",
			url: "https://www.ocasiocortez.com/green-new-deal",
		},
		{
			image: thumb5,
			title: "Pacto Ecosocial del Sur.",
			subsummary: "Pacto Ecosocial del Sur.",
			buttonText: "Leer más",
			url: "https://pactoecosocialdelsur.com/",
		},
		{
			image: thumb6,
			title:
				'"El nuevo pacto verde de Corea del Sur en el año de la transición".',
			subsummary: "De Sarwat Chowdhury, PNUD.",
			buttonText: "Leer más",
			url: "https://www.undp.org/es/blog/el-nuevo-pacto-verde-de-corea-del-sur-en-el-ano-de-la-transicion",
		},
		{
			image: thumb7,
			title: "El nuevo pacto verde de Corea del Sur.",
			subsummary: "(En inglés).",
			buttonText: "Leer más",
			url: "https://english.moef.go.kr/pc/selectTbPressCenterDtl.do?boardCd=N0001&seq=4948",
		},
		{
			image: thumb8,
			title: "Panel Intergubernamental de Cambio Climático (IPCC)",
			subsummary: "Publicaciones.",
			buttonText: "Leer más",
			url: "https://www.ipcc.ch/languages-2/spanish/ipcc-en-espanol-publications/",
		},
		{
			image: thumb9,
			title: "Reporte Social Mundial 2021.",
			subsummary:
				"Departamento de Asuntos Económicos y Sociales de la ONU (2021) (en inglés).",
			buttonText: "Leer más",
			url: "https://www.un.org/development/desa/dspd/world-social-report/2021-2.html",
		},
		{
			image: thumb10,
			title:
				'"El sistema contra el clima: Por un nuevo pacto verde antineoliberal".',
			subsummary: "De Ann Petifor, revista Nueva Sociedad.",
			buttonText: "Leer más",
			url: "https://nuso.org/articulo/capitalismo-clima-sistema-financiero-dolar-green-new-deal/",
		},
		{
			image: thumb11,
			title: "Alianza Mundial para un Nuevo pacto verde.",
			subsummary: "",
			buttonText: "Leer más",
			url: "https://www.globalgreennewdeal.org/the-declaration",
		},
		{
			image: thumb12,
			title: "Reporte: Rastreador de Recuperación Sostenible.",
			subsummary: "Agencia Internacional de Energía (2021).",
			buttonText: "Leer más",
			url: "https://www.iea.org/reports/sustainable-recovery-tracker",
		},
		{
			image: thumb13,
			title: "Cambio Climático y Salud.",
			subsummary: "Organización Mundial de la Salud (OMS) (2021).",
			buttonText: "Leer más",
			url: "https://www.who.int/es/news-room/fact-sheets/detail/climate-change-and-health",
		},
		{
			image: thumb14,
			title: "Repensando la recuperación Económica: Un pacto verde Mundial.",
			subsummary:
				"Programa Ambiental de la Organización de las Naciones Unidas (UNEP) (2019). (en inglés).",
			buttonText: "Leer más",
			url: "https://www.cbd.int/development/doc/UNEP-global-green-new-deal.pdf",
		},
		{
			image: thumb16,
			title: "El pacto verde europeo y las perspectivas de América Latina.",
			subsummary: "Monica Bruckman, Fundación Rosa Luxemburgo (2021).",
			buttonText: "Leer más",
			url: "https://rosalux.org.br/es/el-pacto-verde-europeo-y-las-perspectivas-de-america-latina/",
		},
		{
			image: thumb17,
			title:
				"Propuestas de Nuevos Pactos Verdes: Comparación de las nuevas políticas climáticas transformadoras a múltiples escalas.",
			subsummary: "Boyle AD, et al (2021). (en inglés).",
			buttonText: "Leer más",
			url: "https://www.sciencedirect.com/science/article/pii/S2214629621003522",
		},
	];
	return (
		<Layout title="Reflexiones">
			<HeaderPage
				bgcolor="bg-green4"
				title="Recursos de información"
				titleColor="text-white"
			>
				<p className="mb-8 text-white">
					Esta base de datos incluye diversos recursos de información y de
					interés, de acceso abierto, tanto académicos como para un público
					amplio, para entender mejor la génesis, el proceso y la trayectoria
					que puede seguir la elaboración de un Pacto verde para México.
				</p>
			</HeaderPage>
			<ThumbsContainer thumbs={thumbs} />
			<Footer />
		</Layout>
	);
};

export default Recursos;
