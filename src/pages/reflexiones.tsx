import React from "react";

import Layout from "../components/layout/Layout";
import HeaderPage from "../components/pages/HeaderPage";
import { IThumbProps } from "../components/shared/ThumbArticle";
import ThumbsContainer from "../components/shared/ThumbsContainer";
import Footer from "../components/layout/Footer";

import thumb1 from "../images/thumb1.png";

const Reflexiones = () => {
	const thumbs: IThumbProps[] = [
		{
			image: thumb1,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary:
				"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
			buttonText: "Leer más",
		},
		{
			image: thumb1,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary:
				"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
			buttonText: "Leer más",
		},
		{
			image: thumb1,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary:
				"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
			buttonText: "Leer más",
		},
		{
			image: thumb1,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary:
				"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
			buttonText: "Leer más",
		},
		{
			image: thumb1,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary:
				"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
			buttonText: "Leer más",
		},
		{
			image: thumb1,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary:
				"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
			buttonText: "Leer más",
		},
		{
			image: thumb1,
			title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			summary:
				"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
			buttonText: "Leer más",
		},
	];
	return (
		<Layout title="Reflexiones">
			<HeaderPage
				bgcolor="bg-green2"
				title="Reflexiones"
				titleColor="text-green3"
			>
				<p className="mb-8">
					Espacio de análisis, provocaciones y reflexiones motivadas por Un
					pacto verde para México y elaboradas por diversas autoras y autores.
				</p>
				<p>Contáctanos si te interesa colaborar.</p>
			</HeaderPage>
			<ThumbsContainer thumbs={thumbs} />
			<Footer />
		</Layout>
	);
};

export default Reflexiones;
