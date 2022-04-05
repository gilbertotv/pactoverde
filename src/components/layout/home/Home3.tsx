import React from "react";
import { Link, navigate } from "gatsby";
import Button from "../../shared/Button";
import HomeLayoutTitle from "./HomeLayoutTitle";

import TexturaHome3 from "../../../images/texturaHome3.png";

export interface IPreviewWP {
	order: number;
	author: string;
	resume: string;
	summary: string;
	title: string;
	url: string;
}

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
	link,
	showed,
	delay,
	border = true,
}: {
	title: string;
	summary: string;
	author: string;
	role: string;
	linktext: string;
	link: string;
	showed: boolean;
	delay: number;
	border?: boolean;
}) => (
	<div className="relative flex flex-col md:w-1/3 pl-6 pr-20 py-8 mb-12">
		<div
			className={`absolute h-px md:w-px left-0 bottom-0 sm:top-0 border-t sm:border-l border-gray transition-all duration-1000 ease-in-out delay-${delay} ${
				showed
					? `md:h-full ${border ? "visible" : "invisible sm:visible"}`
					: "md:h-0 invisible"
			}`}
		></div>
		<div
			className={`absolute h-px w-full left-0 bottom-0 border-t border-gray md:hidden ${
				border ? "" : "hidden"
			}`}
		></div>
		<p className="font-medium text-base text-green1 mb-4">{title}</p>
		<p className="text-sm italic mb-4">{summary}</p>
		<p className="text-sm mb-12">
			<span className="text-base font-bold">{author}</span>
			<br />
			{role}
		</p>
		<Link to={link} className="text-green1 font-normal hover:font-bold mt-auto">
			{linktext} &emsp; <ForwardIcon />
		</Link>
	</div>
);

const Home3 = ({
	showed,
	preview,
}: {
	showed: boolean;
	preview: IPreviewWP[];
}) => {
	return (
		<HomeLayoutTitle
			title="Artículos"
			color="green1"
			subtitle={[
				"Estos artículos, escritos por un grupo plural, reconocido y diverso de expertas y expertos, componen la revista ",
				<span className="font-semibold">"Un pacto verde para México"</span>,
				" y forman la base de la agenda de trabajo.",
			]}
			showed={showed}
		>
			<img
				src={TexturaHome3}
				alt="Pacto Verde"
				className="absolute bottom-full translate-y-24 -right-48 sm:right-0"
			/>
			<div className="w-full flex flex-col md:flex-row">
				{preview.map((prev, i) => (
					<ColumnMore
						key={`prevArt${i}`}
						title={prev.title}
						summary={prev.summary}
						author={prev.author}
						role={prev.resume}
						linktext="Leer más"
						link={prev.url}
						showed={showed}
						delay={300}
					/>
				))}
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
