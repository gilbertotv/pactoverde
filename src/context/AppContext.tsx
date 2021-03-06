import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useMemo,
	useState,
} from "react";
import axios from "axios";

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
import { IThumbProps } from "../components/shared/ThumbArticle";

interface IProps {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal;
}

interface IContext {
	menuOpen: boolean;
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
	thumbsArticles: IThumbProps[];
	baseUrl: string;
	categories: Map<string, number>;
}

const AppContext = createContext<IContext>({
	menuOpen: false,
	setMenuOpen: () => {},
	thumbsArticles: [],
	baseUrl: "",
	categories: new Map(),
});
const { Provider } = AppContext;

const AppProvider = (props: IProps) => {
	const baseUrl = "https://pactoverde.mx/wp/wp-json/wp/v2";
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const [catData, setCatData] = useState(new Map());

	const thumbsArticles: IThumbProps[] = [
		{
			image: thumb1,
			title: 'Los irreductibles en "Un pacto verde para M??xico"',
			summary: "Beatriz Paredes Rangel",
			subsummary: "Senadora de la LXV Legislatura de M??xico",
			buttonText: "Leer art??culo",
			url: "/articulos/irreductibles_pacto_verde",
		},
		{
			image: thumb2,
			title:
				'El papel de los pueblos originarios hacia "Un pacto verde para M??xico"',
			summary: "Leticia V??zquez Esteban",
			subsummary: "Activista masewal y cooperativista de Tosepan",
			buttonText: "Leer art??culo",
			url: "/articulos/pueblos_originarios",
		},
		{
			image: thumb3,
			title: "El Big Push mexicano: Plan verde para un desarrollo sostenible",
			summary: "Jorge Mario Mart??nez Piva",
			subsummary:
				"Titular de la Unidad de Comercio Internacional e Industria de la CEPAL",
			buttonText: "Leer art??culo",
			url: "/articulos/big_push",
		},
		{
			image: thumb4,
			title: "Pactar verde y caminar hacia 2030",
			summary: "Alfredo Gonz??lez",
			subsummary:
				"Secretario Ejecutivo del Consejo Nacional de la Agenda 2030 del Gobierno de M??xico",
			buttonText: "Leer art??culo",
			url: "/articulos/pactar_verde",
		},
		{
			image: thumb5,
			title:
				"Econom??a social y solidaria para la regeneraci??n ecol??gica en M??xico",
			summary: "Alberto Irezabal Vilaclara",
			subsummary:
				"Director del Centro Internacional de Investigaci??n de la Econom??a Social y Solidaria",
			buttonText: "Leer art??culo",
			url: "/articulos/regeneracion_ecologica",
		},
		{
			image: thumb6,
			title: 'Pilares para "Un pacto verde para M??xico"',
			summary: "Julia Carabias Lillo",
			subsummary: "Pol??tica y ec??loga de la Facultad de Ciencias, UNAM",
			buttonText: "Leer art??culo",
			url: "/articulos/pilares_pacto_verde",
		},
		{
			image: thumb7,
			title:
				'Hacia "Un pacto verde para M??xico": El papel de la pol??tica educativa',
			summary: "Blanca Heredia Rubio",
			subsummary:
				"Directora de la Unidad de Investigaci??n sobre Educaci??n y Pol??tica Educativa, CIDE",
			buttonText: "Leer art??culo",
			url: "/articulos/hacia_pacto_verde",
		},
		{
			image: thumb8,
			title: "Un pacto verde para M??xico",
			summary: "Alfonso Ram??rez Cu??llar",
			subsummary: "Diputado federal por la LXIV Legislatura",
			buttonText: "Leer art??culo",
			url: "/articulos/pacto_verde_mexico",
		},
		{
			image: thumb9,
			title: "El derecho humano a la movilidad",
			summary: "Patricia Mercado Castro",
			subsummary: "Senadora de la LXV Legislatura de M??xico",
			buttonText: "Leer art??culo",
			url: "/articulos/derecho_movilidad",
		},
		{
			image: thumb10,
			title:
				'El papel del sector empresarial para "Un pacto verde para M??xico"',
			summary: "Claudia Ja??ez S??nchez",
			subsummary:
				"Empresaria y expresidenta del Consejo Ejecutivo de Empresas Globales en M??xico",
			buttonText: "Leer art??culo",
			url: "/articulos/papel_sector_empresarial",
		},
		{
			image: thumb11,
			title:
				"Diversificaci??n sostenible: hacia una pol??tica industrial verde en M??xico",
			summary: "Luis Fernando Godoy Rueda",
			subsummary:
				"Director general de la Unidad de Inteligencia Econ??mica Global en la Secretar??a de Econom??a",
			buttonText: "Leer art??culo",
			url: "/articulos/diversificacion_sostenible",
		},
		{
			image: thumb12,
			title:
				"Siete claves para levantarnos despu??s de la pandemia y construir resiliencia de cara a la emergencia clim??tica",
			summary: "Adriana Lobo de Almeida",
			subsummary:
				"Directora Ejecutiva del World Resources Institute (WRI) M??xico",
			buttonText: "Leer art??culo",
			url: "/articulos/siete_claves",
		},
		{
			image: thumb13,
			title:
				"Sin inversiones ambientalmente sostenibles no hay pacto verde mexicano",
			summary: "Jorge M??ttar",
			subsummary:
				"Investigador del Centro Tepoztl??n V. L. Urquidi y consultor de la CEPAL",
			buttonText: "Leer art??culo",
			url: "/articulos/inversiones_sostenibles",
		},
		{
			image: thumb14,
			title:
				'Ciencia, tecnolog??a e innovaci??n para "Un pacto verde para M??xico"',
			summary: "Carlo Altamirano Allende",
			subsummary:
				"Experto y consultor en pol??ticas de ciencia, tecnolog??a e innovaci??n en M??xico",
			buttonText: "Leer art??culo",
			url: "/articulos/ciencia_tecnologia_innovacion",
		},
		{
			image: thumb15,
			title:
				'Transici??n energ??tica a nivel local para "Un pacto verde para M??xico"',
			summary: "Adriana Arag??n Tapia",
			subsummary:
				"Directora del programa de transici??n energ??tica en M??xico de la Agencia Alemana de Cooperaci??n al desarrollo sustentable en M??xico (GIZ)",
			buttonText: "Leer art??culo",
			url: "/articulos/transicion_energetica",
		},
		{
			image: thumb16,
			title: 'Pol??tica agr??cola para "Un pacto verde para M??xico"',
			summary: "Marcela Aedo",
			subsummary:
				"Experta en cooperaci??n internacional y pol??ticas p??blicas, consultora de la CEPAL",
			buttonText: "Leer art??culo",
			url: "/articulos/politica_agricola",
		},
		{
			image: thumb17,
			title: "Hacia una transformaci??n social-ecol??gica en M??xico",
			summary: "Mariana Blanco Puente",
			subsummary:
				"Coordinadora del proyecto de Transformaci??n Social-Ecol??gica en Am??rica Latina de la FES",
			buttonText: "Leer art??culo",
			url: "/articulos/transformacion_social",
		},
		{
			image: thumb18,
			title:
				'Los trabajadores y la industria dentro de "Un pacto verde para M??xico"',
			summary: "Luis Escobar Ramos",
			subsummary:
				"Coordinador de sindicatos del ramo industrial, automotriz, de la salud, entre otros.",
			buttonText: "Leer art??culo",
			url: "/articulos/trabajadores_industria",
		},
		{
			image: thumb19,
			title: 'Una perspectiva norteamericana para "Un pacto verde para M??xico"',
			summary: "Claudia Schatan",
			subsummary:
				"Experta en comercio y medio ambiente, consultora de la CEPAL",
			buttonText: "Leer art??culo",
			url: "/articulos/perspectiva_norteamericana",
		},
		{
			image: thumb20,
			title:
				"Las ciudades mexicanas del futuro: Hacia una transformaci??n social-ecol??gica",
			summary: "Alfonso Iracheta Cenecorta",
			subsummary:
				"Coordinador del Programa de Estudios Urbanos de El Colegio Mexiquense",
			buttonText: "Leer art??culo",
			url: "/articulos/ciudades_mexicanas",
		},
		{
			image: thumb21,
			title: "La perspectiva de los cuidados para la econom??a verde",
			summary: "Claudia Maldonado Trujillo",
			subsummary: "Investigadora de la UAM y consejera acad??mica del Coneval",
			buttonText: "Leer art??culo",
			url: "/articulos/perspectiva_cuidados",
		},
		{
			image: thumb22,
			title:
				'Fiscalizaci??n de las emisiones de GEI para "Un pacto verde para M??xico"',
			summary: "Adri??n Garc??a y Tonatiuh V??zquez",
			subsummary:
				"Acad??micos del Centro de Investigaci??n Econ??mica y Presupuestaria (CIEP)",
			buttonText: "Leer art??culo",
			url: "/articulos/fiscalizacion_emisiones",
		},
		{
			image: thumb23,
			title: "La transformaci??n productiva de apoyo a la econom??a verde",
			summary: "Clemente Ruiz Dur??n",
			subsummary: "Profesor investigador de la UNAM",
			buttonText: "Leer art??culo",
			url: "/articulos/transformacion_productiva",
		},
	];

	const categories = useMemo(() => {
		const cats = new Map();
		catData.forEach((cat) => cats.set(cat.slug, cat.id));

		return cats;
	}, [catData]);

	useEffect(() => {
		axios
			.get(`${baseUrl}/categories?timestamp=${new Date().getTime()}`)
			.then((res) => {
				setCatData(res.data);
			});
	}, []);

	return (
		<Provider
			value={{ menuOpen, setMenuOpen, thumbsArticles, baseUrl, categories }}
		>
			{props.children}
		</Provider>
	);
};

export { AppContext, AppProvider };
