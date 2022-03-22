import React, { useState } from "react";

import Button from "../../shared/Button";
import HomeLayoutTitle from "./HomeLayoutTitle";

import Autor1 from "../../../images/autor1.png";
import { navigate } from "gatsby";

interface IAuthor {
	name: string;
	image: any;
	description: string;
}

const CloseIcon = ({
	className,
	setIndex,
}: {
	className: string;
	setIndex: any;
}) => (
	<svg
		width="31"
		height="32"
		viewBox="0 0 31 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		onClick={() => setIndex()}
	>
		<rect
			x="0.869141"
			y="3.40991"
			width="3.49997"
			height="39.0996"
			transform="rotate(-45 0.869141 3.40991)"
			fill="#FF4A53"
		/>
		<rect
			x="0.864136"
			y="28.5847"
			width="39.0996"
			height="3.49997"
			transform="rotate(-45 0.864136 28.5847)"
			fill="#FF4A53"
		/>
	</svg>
);

const AuthorDetail = ({
	author,
	setIndex,
	showed,
}: {
	author: IAuthor;
	setIndex: any;
	showed: boolean;
}) => {
	const { name, image, description } = author;
	return (
		<div className="relative md:w-1/3 pl-6 pr-20 sm:pr-2 lg:pr-20 mb-8 sm:mb-12 flex flex-col items-center sm:order-3">
			<div
				className={`absolute left-0 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out delay-1000 ${
					showed ? "h-full md:visible" : "h-0 invisible"
				}`}
			></div>
			<p className="text-red1 font-bold mb-4 visible sm:invisible">{name}</p>
			<img
				src={Autor1}
				alt="pacto Verde"
				className="w-2/3 m-auto border-b border-red1"
			/>
			<p className="text-sm my-8">{description}</p>
			<Button
				text="Ver artículo"
				variant="red"
				action={() => navigate("/articulos/articulo")}
			/>
			<CloseIcon
				className="absolute cursor-pointer right-0 top-0"
				setIndex={setIndex}
			/>
		</div>
	);
};
const Autorxs = ({ showed }) => {
	const authors: IAuthor[] = [
		{
			name: "Beatriz Paredes Rangel",
			image: { Autor1 },
			description:
				"Doctora en Ciencia Política por la Universidad de Columbia, es académica del CIDE, directora fundadora de la unidad de investigación sobre educación y política educativa. Trabaja y escribe ampliamente sobre política mexicana, política educativa y talento intelectual joven.",
		},
		{
			name: "Leticia Vázquez Esteban",
			image: { Autor1 },
			description: "",
		},
		{ name: "Jorge Mario Martínez Piva", image: { Autor1 }, description: "" },
		{ name: "Alfredo González", image: { Autor1 }, description: "" },
		{ name: "Alberto  Irezabal Vilaclara", image: { Autor1 }, description: "" },
		{ name: "Julia Carabias Lillo", image: { Autor1 }, description: "" },
		{ name: "Blanca Heredia Rubio", image: { Autor1 }, description: "" },
		{ name: "Alfonso Ramírez Cuéllar", image: { Autor1 }, description: "" },
		{ name: "Patricia Mercado Castro", image: { Autor1 }, description: "" },
		{ name: "Claudia Jañez Sánchez", image: { Autor1 }, description: "" },
		{ name: "Luis Fernando Godoy Rueda", image: { Autor1 }, description: "" },
		{ name: "Adriana Lobo", image: { Autor1 }, description: "" },
		{ name: "Jorge Máttar", image: { Autor1 }, description: "" },
		{ name: "Carlo Altamirano Allende", image: { Autor1 }, description: "" },
		{ name: "Adriana Aragón Tapia", image: { Autor1 }, description: "" },
		{ name: "Marcela Aedo", image: { Autor1 }, description: "" },
		{ name: "Mariana Blanco Puente", image: { Autor1 }, description: "" },
		{ name: "Luis Escobar Ramos", image: { Autor1 }, description: "" },
		{ name: "Claudia Schatan", image: { Autor1 }, description: "" },
		{ name: "Alfonso Iracheta", image: { Autor1 }, description: "" },
		{ name: "Claudia Maldonado Trujillo", image: { Autor1 }, description: "" },
		{
			name: "Adrián García y Tonatiuh Vázquez",
			image: { Autor1 },
			description: "",
		},
		{ name: "Clemente Ruiz Durán", image: { Autor1 }, description: "" },
	];
	const [indexAuthor, setIndexAuthor] = useState<number | null>(0);

	return (
		<HomeLayoutTitle
			title="Conoce a las autoras y los autores"
			color="red1"
			subtitle="La publicación reúne a un nutrido grupo de voces expertas y reconocidas del sector público, privado, productivo, de la sociedad civil y de organismos internacionales comprometidas con la misión y visión de un posible Pacto Verde para México.”"
			showed={showed}
		>
			<div className="w-full flex flex-col md:flex-row">
				{indexAuthor !== null && (
					<AuthorDetail
						author={authors[indexAuthor]}
						setIndex={() => setIndexAuthor(null)}
						showed={showed}
					/>
				)}
				{authors.length && (
					<>
						<div className="relative sm:1/2 md:w-1/3 pl-6 pr-20 sm:pr-2 lg:pr-20 md:mb-12">
							<div
								className={`absolute left-0 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out delay-300 ${
									showed ? "h-full md:visible" : "h-0 invisible"
								}`}
							></div>
							{authors
								.slice(0, Math.ceil(authors.length / 2))
								.map((author, i) => (
									<p
										key={`author${i}`}
										className={` ${
											i === indexAuthor ? "text-red1" : "text-gray1"
										} text-sm font-medium mb-4 cursor-pointer hover:text-red1`}
										onClick={() => setIndexAuthor(i)}
									>
										{author.name}
									</p>
								))}
						</div>
						<div className="relative sm:1/2 md:w-1/3 pl-6 pr-20 sm:pr-2 lg:pr-20 md:mb-12">
							<div
								className={`absolute left-0 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out delay-500 ${
									showed ? "h-full md:visible" : "h-0 invisible"
								}`}
							></div>
							{authors.slice(Math.ceil(authors.length / 2)).map((author, i) => (
								<p
									key={`author${i}`}
									className={` ${
										i + Math.ceil(authors.length / 2) === indexAuthor
											? "text-red1"
											: "text-gray1"
									} text-sm font-medium mb-4 cursor-pointer hover:text-red1`}
									onClick={() =>
										setIndexAuthor(i + Math.ceil(authors.length / 2))
									}
								>
									{author.name}
								</p>
							))}
						</div>
					</>
				)}
			</div>
		</HomeLayoutTitle>
	);
};

export default Autorxs;
