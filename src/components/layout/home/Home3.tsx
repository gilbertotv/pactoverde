import React from "react";
import { Link, navigate } from "gatsby";
import Button from "../../shared/Button";
import HomeLayoutTitle from "./HomeLayoutTitle";

import TexturaHome3 from "../../../images/texturaHome3.png";

const ForwardIcon = () => (
	<svg
		width="11"
		height="20"
		viewBox="0 0 11 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="inline-block"
	>
		<path
			d="M1.19149 1.19149L10 10"
			stroke="#4C9A5A"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		<path
			d="M1.19149 18.9999L10 10.1914"
			stroke="#4C9A5A"
			strokeWidth="2"
			strokeLinecap="round"
		/>
	</svg>
);

const ColumnMore = ({
	title,
	summary,
	author,
	role,
	linktext,
	showed,
	delay,
	border = true,
}: {
	title: string;
	summary: string;
	author: string;
	role: string;
	linktext: string;
	showed: boolean;
	delay: number;
	border?: boolean;
}) => (
	<div className="relative md:w-1/3 pl-6 pr-20 py-8 mb-12">
		<div
			className={`absolute h-px sm:w-px left-0 bottom-0 sm:top-0 border-t sm:border-l border-gray transition-all duration-1000 ease-in-out delay-${delay} ${
				showed
					? `w-full sm:h-full ${border ? "visible" : "invisible"}`
					: "w-0 sm:h-0 invisible"
			}`}
		></div>
		<p className="font-medium text-base text-green1 mb-4">{title}</p>
		<p className="text-sm italic mb-4">{summary}</p>
		<p className="text-sm mb-12">
			<span className="text-base font-bold">{author}</span>
			<br />
			{role}
		</p>
		<Link
			to="/articulos/articulo"
			className="text-green1 font-normal hover:font-bold"
		>
			{linktext} &emsp; <ForwardIcon />
		</Link>
	</div>
);

const Home3 = ({ showed }) => {
	return (
		<HomeLayoutTitle
			title="Artículos"
			color="green1"
			subtitle={[
				"Estos artículos, escritos por un grupo plural, reconocido y diverso de expertas y expertos, componen la revista ",
				<span className="font-semibold">"Un pacto verde para México”</span>,
				" y forman la base de la agenda de trabajo.",
			]}
			showed={showed}
		>
			<img
				src={TexturaHome3}
				alt="Pacto Verde"
				className="absolute -top-28 sm:-top-20 md:-top-16 lg:-top-8 -right-36 sm:right-0"
			/>
			<div className="w-full flex flex-col md:flex-row">
				<ColumnMore
					title="Los irreductibles en un pacto verde para México"
					summary="Visión general de lo que significa un posible pacto, sus elementos
						principales. y los retos y dificultades para lograrlo."
					author="Beatriz Paredes Rangel"
					role="Senadora de la LXV Legislatura de México"
					linktext="Leer más"
					showed={showed}
					delay={300}
				/>
				<ColumnMore
					title="El papel de los pueblos originarios hacia un pacto verde para México"
					summary="No habrá un pacto transformador sin los pueblos indígenas y las poblaciones vulnerables en el centro de toda política de desarrollo. "
					author="Leticia Vázquez Esteban"
					role="Activista masewal y cooperativista de Tosepan"
					linktext="Leer más"
					showed={showed}
					delay={500}
				/>
				<ColumnMore
					title="El Big Push mexicano:"
					summary="Un cambio estructural necesita impulsar al empleo, la innovación, distribución del ingreso y acuerdos público-privados."
					author="Jorge Mario Martínez Piva"
					role="Titular de la Unidad de Comercio Internacional e Industria de la CEPAL"
					linktext="Leer más"
					showed={showed}
					delay={1000}
					border={false}
				/>
			</div>
			<Button
				text="Ver Todos"
				variant="green"
				action={() => navigate("/articulos")}
			/>
		</HomeLayoutTitle>
	);
};

export default Home3;
