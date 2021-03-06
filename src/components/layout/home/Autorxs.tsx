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
					text="Ver art??culo"
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
				"Actual senadora de la LXV Legislatura, con una extensa trayectoria en el servicio p??blico como legisladora, gobernadora de Tlaxcala (1987-1992), dirigente de la Confederaci??n Nacional Campesina y presidenta del PRI (2007-2011), as?? como embajadora de M??xico en Brasil (2012-2016) y en Cuba (1993-1994). Tiene especial inter??s en la generaci??n de pol??ticas p??blicas para un desarrollo sostenible para M??xico.",
			link: "/articulos/irreductibles_pacto_verde",
		},
		{
			name: "Leticia V??zquez Esteban",
			image: Autor2,
			description:
				"Mujer masewal cooperativista que actualmente coordina el Proyecto de Revitalizaci??n Lingu????stica de la Uni??n de Cooperativas Tosepan. Estudi?? en la Universidad Intercultural del Estado de Puebla la licenciatura en Desarrollo Sustentable y trabaja en temas como defensa del territorio, juventudes y feminismo.",
			link: "/articulos/pueblos_originarios",
		},
		{
			name: "Jorge Mario Mart??nez Piva",
			image: Autor3,
			description:
				"Jefe de la Unidad de Comercio Internacional e Industria de la Sede Subregional de la CEPAL en M??xico. Es licenciado en Derecho por la Universidad de Costa Rica, m??ster en Econom??a por la Universidad Nacional (Costa Rica), y doctor en Econom??a por la Universidad Aut??noma de Madrid. Su trabajo combina los temas comerciales, de integraci??n regional y de pol??tica industrial. ",
			link: "/articulos/big_push",
		},
		{
			name: "Alfredo Gonz??lez",
			image: Autor4,
			description:
				"Encargado del Secretariado Ejecutivo del Consejo Nacional de la Agenda 2030 para el Desarrollo Sostenible desde marzo de 2021, con trayectoria en asuntos de pobreza, desigualdades y econom??a desde el gobierno federal, la sociedad civil y Naciones Unidas, en M??xico y Am??rica Latina.",
			link: "/articulos/pactar_verde",
		},
		{
			name: "Alberto  Irezabal Vilaclara",
			image: Autor5,
			description:
				"Ingeniero industrial por la Universidad Iberoamericana y doctor en Gesti??n Avanzada de Organizaciones y Econom??a Social por la Universidad Mondrag??n, en Espa??a. Es director del Centro Internacional de Investigaci??n de la Econom??a Social y Solidaria. Tiene una extensa experiencia de trabajo con comunidades tseltales de Chiapas en finanzas solidarias. ",
			link: "/articulos/regeneracion_ecologica",
		},
		{
			name: "Julia Carabias Lillo",
			image: Autor6,
			description:
				"Ec??loga de la Facultad de Ciencias de la UNAM, dedicada a la conservaci??n, manejo y restauraci??n de ecosistemas tropicales y a las pol??ticas ambientales. Fue Secretaria de Medio Ambiente, Recursos Naturales y Pesca de 1994 a 2000. En 2017 recibi?? la Medalla Belisario Dom??nguez, en 2018 ingres?? a El Colegio Nacional y en 2019 recibi?? el Doctorado Honoris causa de la UNAM.",
			link: "/articulos/pilares_pacto_verde",
		},
		{
			name: "Blanca Heredia Rubio",
			image: Autor7,
			description:
				"Doctora en Ciencia Pol??tica porla Universidad de Columbia, es acad??mica del CIDE, directora fundadora de la unidad de investigaci??n sobre educaci??n y pol??tica educativa. Trabaja y escribe ampliamente sobre pol??tica mexicana, pol??tica educativa y talento intelectual joven. ",
			link: "/articulos/hacia_pacto_verde",
		},
		{
			name: "Alfonso Ram??rez Cu??llar",
			image: Autor8,
			description:
				"Diputado federal por la LXIV Legislatura y coordinador del grupo de trabajo por la transici??n hacendaria. Antrop??logo, historiador y abogado, es fundador de El Barz??n y un l??der prominente de la izquierda mexicana, en donde se destaca su lucha en defensa del consumidor y en contra de los monopolios. En la actual legislatura, su trabajo se ha enfocado en la definici??n de pol??ticas p??blicas para una gesti??n sostenible del agua en el pa??s. ",
			link: "/articulos/pacto_verde_mexico",
		},
		{
			name: "Patricia Mercado Castro",
			image: Autor9,
			description:
				"Senadora de la LXV Legislatura, preside la Comisi??n de Zonas Metropolitanas y Movilidad. Economista por la UNAM y feminista. Ha sido candidata a la presidencia de M??xico y secretaria de Gobierno de la Ciudad de M??xico (2015-2018).",
			link: "/articulos/derecho_movilidad",
		},
		{
			name: "Claudia Ja??ez S??nchez",
			image: Autor10,
			description:
				"Empresaria mexicana, presidenta del Consejo Ejecutivo de Empresas Globales en M??xico (2019 a 2021), presidenta para Am??rica Latina y directora global de Diversidad e Inclusi??n de DuPont hasta febrero de 2021. Ha sido reconocida por diversas revistas (Expansi??n, Fortune, Forbes y L??deres en M??xico) como una de las l??deres m??s importantes e influyentes en los negocios.",
			link: "/articulos/papel_sector_empresarial",
		},
		{
			name: "Luis Fernando Godoy Rueda",
			image: Autor11,
			description:
				"Es director general en la Unidad de Inteligencia Econ??mica Global en la Secretar??a de Econom??a. Es maestro en Administraci??n P??blica por la Universidad de Columbia, tiene m??s de 10 a??os de experiencia en el sector p??blico, privado y en organismos internacionales como OPI Analytics, la CEPAL y Data-Pop Alliance, entre otros. ",
			link: "/articulos/diversificacion_sostenible",
		},
		{
			name: "Adriana Lobo de Almeida",
			image: Autor12,
			description:
				"Es directora ejecutiva del Instituto de Recursos Mundiales M??xico (WRI M??xico), experta en temas de desarrollo de pol??ticas p??blicas para la sustentabilidad y movilidad urbana a nivel local, nacional y regional.",
			link: "/articulos/siete_claves",
		},
		{
			name: "Jorge M??ttar",
			image: Autor13,
			description:
				"Licenciado y maestro en Econom??a por la Universidad de Cambridge. Es investigador asociado al Centro Tepoztl??n V??ctor L. Urquidi y consultor en planificaci??n, desarrollo y pol??tica industrial de la Comisi??n Econ??mica para Am??rica Latina y el Caribe (CEPAL) y otras organizaciones.",
			link: "/articulos/inversiones_sostenibles",
		},
		{
			name: "Carlo Altamirano Allende",
			image: Autor14,
			description:
				"Licenciado y maestro en F??sica por la UNAM y doctor en Dimensiones Sociales y Humanas de la Ciencia y la Tecnolog??a por la Universidad Estatal de Arizona, investiga y es consultor en el ??rea de pol??tica cient??fica, tecnol??gica y de innovaci??n. Ha colaborado con el Conacyt, la Academia Nacional de Ciencias de Estados Unidos y la Asociaci??n Americana para el Avance de la Ciencia (AAAS). ",
			link: "/articulos/ciencia_tecnologia_innovacion",
		},
		{
			name: "Adriana Arag??n Tapia",
			image: Autor15,
			description:
				"Maestra en Econom??a Ambiental en Reino Unido, y Especialista en Pol??tica y Gesti??n Energ??tica y Medioambiental por Flacso, actualmente es directora del programa de Apoyo a la Implementaci??n de la Transici??n Energ??tica en Mexico en la Agencia Alemana de Cooperaci??n al desarrollo sustentable en Mexico (GIZ). Es experta en temas de normatividad y gesti??n ambiental, pol??tica clim??tica y energ??tica. ",
			link: "/articulos/transicion_energetica",
		},
		{
			name: "Marcela Aedo",
			image: Autor16,
			description:
				"Con m??s de 25 a??os de experiencia, es colaboradora de instituciones p??blicas, as?? como en agencias de cooperaci??n internacional, tanto en Chile como en M??xico, tales como INDAP, FAO, IICA y CEPAL. Participa en todas las etapas del ciclo de pol??ticas p??blicas. ",
			link: "/articulos/politica_agricola",
		},
		{
			name: "Mariana Blanco Puente",
			image: Autor17,
			description:
				"Soci??loga por la UNAM y maestra en Estudios Socioambientales por la Flacso Ecuador. Ha trabajado en temas de extractivismo, movimientos socioambientales y agroecolog??a en Am??rica Latina. Actualmente es coordinadora en el Proyecto de Transformaci??n Social-Ecol??gica en Am??rica Latina de la Fundaci??n Friedrich-Ebert. ",
			link: "/articulos/transformacion_social",
		},
		{
			name: "Luis Escobar Ramos",
			image: Autor18,
			description:
				"Licenciado en Derecho por la Universidad Veracruzana, es miembro activo del Sindicato de Telefonistas de la Rep??blica Mexicana desde 1987. Coordinador de sindicatos de los ramos industrial, automotriz, de la salud, period??stico, ciencia y tecnolog??a y textil, entre otros, desde 2008. ",
			link: "/articulos/trabajadores_industria",
		},
		{
			name: "Claudia Schatan",
			image: Autor19,
			description:
				"M. A. en Econom??a por la Universidad de Cambridge, consultora independiente; ex jefa de la Unidad de Industria y Comercio de la CEPAL-M??xico, especialista en comercio y medio ambiente, innovaci??n tecnol??gica y pol??tica industrial, entre otros temas. ",
			link: "/articulos/perspectiva_norteamericana",
		},
		{
			name: "Alfonso Iracheta Cenecorta",
			image: Autor20,
			description:
				"Doctor en Estudios Regionales, es coordinador del Programa de Estudios Urbanos y Ambientales de El Colegio Mexiquense y fundador de la Facultad de Planeaci??n Urbana y Regional de la Universidad Aut??noma del Estado de M??xico. Es miembro del Sistema Nacional de Investigadores nivel II, consultor nacional e internacional y escribe sobre temas de planeaci??n territorial y pol??ticas p??blicas.",
			link: "/articulos/ciudades_mexicanas",
		},
		{
			name: "Claudia Maldonado Trujillo",
			image: Autor21,
			description:
				"Profesora-investigadora de la UAM Xochimilco y consejera acad??mica de Coneval. Se especializa en teor??a y m??todos para la evaluaci??n de pol??ticas, pol??tica social y pol??tica p??blica comparada. Actualmente ocupa la C??tedra de Estudios de M??xico en la Universidad del Sur de California.",
			link: "/articulos/perspectiva_cuidados",
		},
		{
			name: "Adri??n Garc??a y Tonatiuh V??zquez",
			image: Autor22,
			description:
				"Adri??n Garc??a Maestro en Econom??a del Medio Ambiente y los Recursos Naturales por la Universidad Nacional de Australia y licenciado en Econom??a por el ITESM. Se incorpor?? al Centro de Investigaci??n Econ??mica y Presupuestaria (CIEP) en 2016 y actualmente es coordinador del ??rea de Ingresos e Impuestos. Le interesa la econom??a ambiental y el sistema fiscal como instrumento para conseguir igualdad de oportunidades. Tonatiuh V??zquez Egresado de la Facultad de Econom??a de la UNAM, realiz?? una maestr??a en Econom??a Ambiental en el CIDE. Actualmente funge como coordinador de Energ??a y Finanzas P??blicas en el CIEP. Se interesa por la promoci??n de la transici??n energ??tica y la mitigaci??n de los efectos del cambio clim??tico.",
			link: "/articulos/fiscalizacion_emisiones",
		},
		{
			name: "Clemente Ruiz Dur??n",
			image: Autor23,
			description:
				"Investigador de la UNAM, miembro del Sistema Nacional de Investigadores nivel III. Investiga sobre desarrollo industrial en Am??rica Latina, el futuro de la industria automotriz y los efectos del cambio clim??tico. Es columnista de El Financiero.",
			link: "/articulos/transformacion_productiva",
		},
	];
	const [indexAuthor, setIndexAuthor] = useState<number | null>(null);

	return (
		<HomeLayoutTitle
			title="Conoce a las autoras y los autores"
			color="red1"
			subtitle='La publicaci??n re??ne a un nutrido grupo de voces expertas y reconocidas del sector p??blico, privado, productivo, de la sociedad civil y de organismos internacionales comprometidas con la misi??n y visi??n de un posible "Un pacto verde para M??xico".'
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
