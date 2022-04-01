import React, { useState } from "react";
import { navigate } from "gatsby";

import Button from "../../shared/Button";
import HomeLayoutTitle from "./HomeLayoutTitle";

import Autor1 from "../../../images/autores/autor1.jpg";
import Autor2 from "../../../images/autores/autor2.jpg";
import Autor3 from "../../../images/autores/autor3.jpg";
import Autor4 from "../../../images/autores/autor4.jpg";
import Autor5 from "../../../images/autores/autor5.jpg";
import Autor6 from "../../../images/autores/autor6.jpg";
import Autor7 from "../../../images/autores/autor7.jpg";
import Autor8 from "../../../images/autores/autor8.jpg";
import Autor9 from "../../../images/autores/autor9.jpg";
import Autor10 from "../../../images/autores/autor10.jpg";
import Autor11 from "../../../images/autores/autor11.jpg";
import Autor12 from "../../../images/autores/autor12.jpg";
import Autor13 from "../../../images/autores/autor13.jpg";
import Autor14 from "../../../images/autores/autor14.jpg";
import Autor15 from "../../../images/autores/autor15.jpg";
import Autor16 from "../../../images/autores/autor16.jpg";
import Autor17 from "../../../images/autores/autor17.jpg";
import Autor18 from "../../../images/autores/autor18.jpg";
import Autor19 from "../../../images/autores/autor19.jpg";
import Autor20 from "../../../images/autores/autor20.jpg";
import Autor21 from "../../../images/autores/autor21.jpg";
import Autor22 from "../../../images/autores/autor22.png";
import Autor23 from "../../../images/autores/autor23.jpg";

interface IAuthor {
	name: string;
	image: any;
	description: string;
	link: string;
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
}: {
	author: IAuthor;
	setIndex: any;
}) => {
	const { name, image, description, link } = author;
	return (
		<div className=" mb-4 sm:mb-0 md:pl-6 sm:pr-20 sm:pr-2 lg:pr-20 mb-8 md:mb-12 flex flex-col md:items-center">
			<div className="relative">
				<img
					src={image}
					alt="pacto Verde"
					className="w-40 m-auto border-b border-red1"
				/>
				<CloseIcon
					className="absolute cursor-pointer -right-16 -top-12 md:top-0 w-6 sm:w-auto"
					setIndex={setIndex}
				/>
				<p className="text-sm my-4">{description}</p>
			</div>
			<div className="md:absolute md:bottom-0">
				<Button
					text="Ver artículo"
					variant="red"
					action={() => navigate(link)}
				/>
			</div>
		</div>
	);
};
const Autorxs = ({ showed }) => {
	const authors: IAuthor[] = [
		{
			name: "Beatriz Paredes Rangel",
			image: Autor1,
			description:
				"Actual senadora de la LXV Legislatura, con una extensa trayectoria en el servicio público como legisladora, gobernadora de Tlaxcala (1987-1992), dirigente de la Confederación Nacional Campesina y presidenta del PRI (2007-2011), así como embajadora de México en Brasil (2012-2016) y en Cuba (1993-1994). Tiene especial interés en la generación de políticas públicas para un desarrollo sostenible para México.",
			link: "/articulos/irreductibles_pacto_verde",
		},
		{
			name: "Leticia Vázquez Esteban",
			image: Autor2,
			description:
				"Mujer masewal cooperativista que actualmente coordina el Proyecto de Revitalización Lingüística de la Unión de Cooperativas Tosepan. Estudió en la Universidad Intercultural del Estado de Puebla la licenciatura en Desarrollo Sustentable y trabaja en temas como defensa del territorio, juventudes y feminismo.",
			link: "/articulos/pueblos_originarios",
		},
		{
			name: "Jorge Mario Martínez Piva",
			image: Autor3,
			description:
				"Jefe de la Unidad de Comercio Internacional e Industria de la Sede Subregional de la CEPAL en México. Es licenciado en Derecho por la Universidad de Costa Rica, máster en Economía por la Universidad Nacional (Costa Rica), y doctor en Economía por la Universidad Autónoma de Madrid. Su trabajo combina los temas comerciales, de integración regional y de política industrial. ",
			link: "/articulos/big_push",
		},
		{
			name: "Alfredo González",
			image: Autor4,
			description:
				"Encargado del Secretariado Ejecutivo del Consejo Nacional de la Agenda 2030 para el Desarrollo Sostenible desde marzo de 2021, con trayectoria en asuntos de pobreza, desigualdades y economía desde el gobierno federal, la sociedad civil y Naciones Unidas, en México y América Latina.",
			link: "/articulos/pactar_verde",
		},
		{
			name: "Alberto  Irezabal Vilaclara",
			image: Autor5,
			description:
				"Ingeniero industrial por la Universidad Iberoamericana y doctor en Gestión Avanzada de Organizaciones y Economía Social por la Universidad Mondragón, en España. Es director del Centro Internacional de Investigación de la Economía Social y Solidaria. Tiene una extensa experiencia de trabajo con comunidades tseltales de Chiapas en finanzas solidarias. ",
			link: "/articulos/regeneracion_ecologica",
		},
		{
			name: "Julia Carabias Lillo",
			image: Autor6,
			description:
				"Ecóloga de la Facultad de Ciencias de la UNAM, dedicada a la conservación, manejo y restauración de ecosistemas tropicales y a las políticas ambientales. Fue Secretaria de Medio Ambiente, Recursos Naturales y Pesca de 1994 a 2000. En 2017 recibió la Medalla Belisario Domínguez, en 2018 ingresó a El Colegio Nacional y en 2019 recibió el Doctorado Honoris causa de la UNAM.",
			link: "/articulos/pilares_pacto_verde",
		},
		{
			name: "Blanca Heredia Rubio",
			image: Autor7,
			description:
				"Doctora en Ciencia Política porla Universidad de Columbia, es académica del CIDE, directora fundadora de la unidad de investigación sobre educación y política educativa. Trabaja y escribe ampliamente sobre política mexicana, política educativa y talento intelectual joven. ",
			link: "/articulos/hacia_pacto_verde",
		},
		{
			name: "Alfonso Ramírez Cuéllar",
			image: Autor8,
			description:
				"Diputado federal por la LXIV Legislatura y coordinador del grupo de trabajo por la transición hacendaria. Antropólogo, historiador y abogado, es fundador de El Barzón y un líder prominente de la izquierda mexicana, en donde se destaca su lucha en defensa del consumidor y en contra de los monopolios. En la actual legislatura, su trabajo se ha enfocado en la definición de políticas públicas para una gestión sostenible del agua en el país. ",
			link: "/articulos/pacto_verde_mexico",
		},
		{
			name: "Patricia Mercado Castro",
			image: Autor9,
			description:
				"Senadora de la LXV Legislatura, preside la Comisión de Zonas Metropolitanas y Movilidad. Economista por la UNAM y feminista. Ha sido candidata a la presidencia de México y secretaria de Gobierno de la Ciudad de México (2015-2018).",
			link: "/articulos/derecho_movilidad",
		},
		{
			name: "Claudia Jañez Sánchez",
			image: Autor10,
			description:
				"Empresaria mexicana, presidenta del Consejo Ejecutivo de Empresas Globales en México (2019 a 2021), presidenta para América Latina y directora global de Diversidad e Inclusión de DuPont hasta febrero de 2021. Ha sido reconocida por diversas revistas (Expansión, Fortune, Forbes y Líderes en México) como una de las líderes más importantes e influyentes en los negocios.",
			link: "/articulos/papel_sector_empresarial",
		},
		{
			name: "Luis Fernando Godoy Rueda",
			image: Autor11,
			description:
				"Es director general en la Unidad de Inteligencia Económica Global en la Secretaría de Economía. Es maestro en Administración Pública por la Universidad de Columbia, tiene más de 10 años de experiencia en el sector público, privado y en organismos internacionales como OPI Analytics, la CEPAL y Data-Pop Alliance, entre otros. ",
			link: "/articulos/diversificacion_sostenible",
		},
		{
			name: "Adriana Lobo",
			image: Autor12,
			description:
				"Es directora ejecutiva del Instituto de Recursos Mundiales México (WRI México), experta en temas de desarrollo de políticas públicas para la sustentabilidad y movilidad urbana a nivel local, nacional y regional.",
			link: "/articulos/siete_claves",
		},
		{
			name: "Jorge Máttar",
			image: Autor13,
			description:
				"Licenciado y maestro en Economía por la Universidad de Cambridge. Es investigador asociado al Centro Tepoztlán Víctor L. Urquidi y consultor en planificación, desarrollo y política industrial de la Comisión Económica para América Latina y el Caribe (CEPAL) y otras organizaciones.",
			link: "/articulos/inversiones_sostenibles",
		},
		{
			name: "Carlo Altamirano Allende",
			image: Autor14,
			description:
				"Licenciado y maestro en Física por la UNAM y doctor en Dimensiones Sociales y Humanas de la Ciencia y la Tecnología por la Universidad Estatal de Arizona, investiga y es consultor en el área de política científica, tecnológica y de innovación. Ha colaborado con el Conacyt, la Academia Nacional de Ciencias de Estados Unidos y la Asociación Americana para el Avance de la Ciencia (AAAS). ",
			link: "/articulos/ciencia_tecnologia_innovacion",
		},
		{
			name: "Adriana Aragón Tapia",
			image: Autor15,
			description:
				"Maestra en Economía Ambiental en Reino Unido, y Especialista en Política y Gestión Energética y Medioambiental por Flacso, actualmente es directora del programa de Apoyo a la Implementación de la Transición Energética en Mexico en la Agencia Alemana de Cooperación al desarrollo sustentable en Mexico (GIZ). Es experta en temas de normatividad y gestión ambiental, política climática y energética. ",
			link: "/articulos/transicion_energetica",
		},
		{
			name: "Marcela Aedo",
			image: Autor16,
			description:
				"Con más de 25 años de experiencia, es colaboradora de instituciones públicas, así como en agencias de cooperación internacional, tanto en Chile como en México, tales como INDAP, FAO, IICA y CEPAL. Participa en todas las etapas del ciclo de políticas públicas. ",
			link: "/articulos/politica_agricola",
		},
		{
			name: "Mariana Blanco Puente",
			image: Autor17,
			description:
				"Socióloga por la UNAM y maestra en Estudios Socioambientales por la Flacso Ecuador. Ha trabajado en temas de extractivismo, movimientos socioambientales y agroecología en América Latina. Actualmente es coordinadora en el Proyecto de Transformación Social-Ecológica en América Latina de la Fundación Friedrich-Ebert. ",
			link: "/articulos/transformacion_social",
		},
		{
			name: "Luis Escobar Ramos",
			image: Autor18,
			description:
				"Licenciado en Derecho por la Universidad Veracruzana, es miembro activo del Sindicato de Telefonistas de la República Mexicana desde 1987. Coordinador de sindicatos de los ramos industrial, automotriz, de la salud, periodístico, ciencia y tecnología y textil, entre otros, desde 2008. ",
			link: "/articulos/trabajadores_industria",
		},
		{
			name: "Claudia Schatan",
			image: Autor19,
			description:
				"M. A. en Economía por la Universidad de Cambridge, consultora independiente; ex jefa de la Unidad de Industria y Comercio de la CEPAL-México, especialista en comercio y medio ambiente, innovación tecnológica y política industrial, entre otros temas. ",
			link: "/articulos/perspectiva_norteamericana",
		},
		{
			name: "Alfonso Iracheta",
			image: Autor20,
			description:
				"Doctor en Estudios Regionales, es coordinador del Programa de Estudios Urbanos y Ambientales de El Colegio Mexiquense y fundador de la Facultad de Planeación Urbana y Regional de la Universidad Autónoma del Estado de México. Es miembro del Sistema Nacional de Investigadores nivel II, consultor nacional e internacional y escribe sobre temas de planeación territorial y políticas públicas.",
			link: "/articulos/ciudades_mexicanas",
		},
		{
			name: "Claudia Maldonado Trujillo",
			image: Autor21,
			description:
				"Profesora-investigadora de la UAM Xochimilco y consejera académica de Coneval. Se especializa en teoría y métodos para la evaluación de políticas, política social y política pública comparada. Actualmente ocupa la Cátedra de Estudios de México en la Universidad del Sur de California.",
			link: "/articulos/perspectiva_cuidados",
		},
		{
			name: "Adrián García y Tonatiuh Vázquez",
			image: Autor22,
			description:
				"Adrián García Maestro en Economía del Medio Ambiente y los Recursos Naturales por la Universidad Nacional de Australia y licenciado en Economía por el ITESM. Se incorporó al Centro de Investigación Económica y Presupuestaria (CIEP) en 2016 y actualmente es coordinador del área de Ingresos e Impuestos. Le interesa la economía ambiental y el sistema fiscal como instrumento para conseguir igualdad de oportunidades. Tonatiuh Vázquez Egresado de la Facultad de Economía de la UNAM, realizó una maestría en Economía Ambiental en el CIDE. Actualmente funge como coordinador de Energía y Finanzas Públicas en el CIEP. Se interesa por la promoción de la transición energética y la mitigación de los efectos del cambio climático.",
			link: "/articulos/fiscalizacion_emisiones",
		},
		{
			name: "Clemente Ruiz Durán",
			image: Autor23,
			description:
				"Investigador de la UNAM, miembro del Sistema Nacional de Investigadores nivel III. Investiga sobre desarrollo industrial en América Latina, el futuro de la industria automotriz y los efectos del cambio climático. Es columnista de El Financiero.",
			link: "/articulos/transformacion_productiva",
		},
	];
	const [indexAuthor, setIndexAuthor] = useState<number | null>(null);

	return (
		<HomeLayoutTitle
			title="Conoce a las autoras y los autores"
			color="red1"
			subtitle='La publicación reúne a un nutrido grupo de voces expertas y reconocidas del sector público, privado, productivo, de la sociedad civil y de organismos internacionales comprometidas con la misión y visión de un posible "Un pacto verde para México".'
			showed={showed}
		>
			<div className="w-full flex flex-col md:flex-row ">
				{indexAuthor !== null && (
					<div className="relative hidden md:block md:w-1/3 md:order-3">
						<div
							className={`absolute left-0 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out delay-1000 ${
								showed ? "h-full md:visible" : "h-0 invisible"
							}`}
						></div>
						<AuthorDetail
							author={authors[indexAuthor]}
							setIndex={() => setIndexAuthor(null)}
						/>
					</div>
				)}
				{authors.length > 0 && (
					<>
						<div className="relative sm:1/2 md:w-1/3 pl-6 pr-20 sm:pr-2 lg:pr-20">
							<div
								className={`absolute left-0 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out delay-300 ${
									showed ? "h-full invisible md:visible" : "h-0 invisible"
								}`}
							></div>
							{authors
								.slice(0, Math.ceil(authors.length / 2))
								.map((author, i) => (
									<React.Fragment key={`author${i}`}>
										<p
											className={` ${
												indexAuthor === i ? "text-red1" : "text-gray1"
											} text-base sm:text-sm font-medium mb-4 cursor-pointer hover:text-red1`}
											onClick={() => setIndexAuthor(i)}
										>
											{author.name}
										</p>
										{indexAuthor === i && (
											<div className="md:hidden">
												<AuthorDetail
													author={authors[i]}
													setIndex={() => setIndexAuthor(null)}
												/>
											</div>
										)}
									</React.Fragment>
								))}
						</div>
						<div className="relative sm:1/2 md:w-1/3 pl-6 pr-20 sm:pr-2 lg:pr-20">
							<div
								className={`absolute left-0 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out delay-500 ${
									showed ? "h-full invisible md:visible" : "h-0 invisible"
								}`}
							></div>
							{authors.slice(Math.ceil(authors.length / 2)).map((author, i) => (
								<React.Fragment key={`author${i}`}>
									<p
										className={` ${
											indexAuthor === i + Math.ceil(authors.length / 2)
												? "text-red1"
												: "text-gray1"
										} text-base sm:text-sm font-medium mb-4 cursor-pointer hover:text-red1`}
										onClick={() =>
											setIndexAuthor(i + Math.ceil(authors.length / 2))
										}
									>
										{author.name}
									</p>
									{indexAuthor === i + Math.ceil(authors.length / 2) && (
										<div className="md:hidden">
											<AuthorDetail
												author={authors[i + Math.ceil(authors.length / 2)]}
												setIndex={() => setIndexAuthor(null)}
											/>
										</div>
									)}
								</React.Fragment>
							))}
						</div>
					</>
				)}
			</div>
		</HomeLayoutTitle>
	);
};

export default Autorxs;
