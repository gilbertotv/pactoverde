import React from "react";

import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import HeaderPage from "../components/pages/HeaderPage";
import ThumbsContainer from "../components/shared/ThumbsContainer";

import thumb2 from "../images/thumb2.png";
import thumb3 from "../images/thumb3.png";
import thumb4 from "../images/thumb4.png";

const Recursos = () => {
	const thumbs: IThumbProps[] = [
		{
			image: thumb2,
			title: "Objetivos de Desarrollo Sostenible.",
			subsummary: "ONU",
			buttonText: "Leer más",
		},
		{
			image: thumb3,
			title: "Un pacto verde europeo.",
			subsummary: "Comisión Europea (2019).",
			buttonText: "Leer más",
		},
		{
			image: thumb4,
			title: "El nuevo pacto verde de Estados Unidos.",
			subsummary:
				"Resolución presentada por la congresista Alexandria Ocasio-Cortez (2019) (en inglés).",
			buttonText: "Leer más",
		},
		{
			image: thumb2,
			title: "Objetivos de Desarrollo Sostenible.",
			subsummary: "ONU",
			buttonText: "Leer más",
		},
		{
			image: thumb3,
			title: "Un pacto verde europeo.",
			subsummary: "Comisión Europea (2019).",
			buttonText: "Leer más",
		},
		{
			image: thumb4,
			title: "El nuevo pacto verde de Estados Unidos.",
			subsummary:
				"Resolución presentada por la congresista Alexandria Ocasio-Cortez (2019) (en inglés).",
			buttonText: "Leer más",
		},
		{
			image: thumb2,
			title: "Objetivos de Desarrollo Sostenible.",
			subsummary: "ONU",
			buttonText: "Leer más",
		},
		{
			image: thumb3,
			title: "Un pacto verde europeo.",
			subsummary: "Comisión Europea (2019).",
			buttonText: "Leer más",
		},
		{
			image: thumb4,
			title: "El nuevo pacto verde de Estados Unidos.",
			subsummary:
				"Resolución presentada por la congresista Alexandria Ocasio-Cortez (2019) (en inglés).",
			buttonText: "Leer más",
		},
		{
			image: thumb2,
			title: "Objetivos de Desarrollo Sostenible.",
			subsummary: "ONU",
			buttonText: "Leer más",
		},
		{
			image: thumb3,
			title: "Un pacto verde europeo.",
			subsummary: "Comisión Europea (2019).",
			buttonText: "Leer más",
		},
		{
			image: thumb4,
			title: "El nuevo pacto verde de Estados Unidos.",
			subsummary:
				"Resolución presentada por la congresista Alexandria Ocasio-Cortez (2019) (en inglés).",
			buttonText: "Leer más",
		},
		{
			image: thumb2,
			title: "Objetivos de Desarrollo Sostenible.",
			subsummary: "ONU",
			buttonText: "Leer más",
		},
		{
			image: thumb3,
			title: "Un pacto verde europeo.",
			subsummary: "Comisión Europea (2019).",
			buttonText: "Leer más",
		},
		{
			image: thumb4,
			title: "El nuevo pacto verde de Estados Unidos.",
			subsummary:
				"Resolución presentada por la congresista Alexandria Ocasio-Cortez (2019) (en inglés).",
			buttonText: "Leer más",
		},
		{
			image: thumb2,
			title: "Objetivos de Desarrollo Sostenible.",
			subsummary: "ONU",
			buttonText: "Leer más",
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
