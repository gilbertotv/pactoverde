import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";
import ArtList from "../../components/shared/ArtList";
import Referencias from "../../components/shared/Referencias";

import autor from "../../images/autores/autor20.jpg";
import articulo1 from "../../images/articulos/articulo20-1.png";

const Articles = () => {
	const otherArts = [
		"El papel de los pueblos originarios hacia un pacto verde para México",
	];

	return (
		<Layout title="Artículos">
			<HeaderArticle
				bgcolor="bg-green2"
				title="Las ciudades mexicanas del futuro: Hacia una transformación social-ecológica"
				titleColor="text-green3"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Alfonso Iracheta"
			>
				Doctor en Estudios Regionales, es coordinador del Programa de Estudios
				Urbanos y Ambientales de El Colegio Mexiquense y fundador de la Facultad
				de Planeación Urbana y Regional de la Universidad Autónoma del Estado de
				México. Es miembro del Sistema Nacional de Investigadores nivel II,
				consultor nacional e internacional y escribe sobre temas de planeación
				territorial y políticas públicas.
			</HeaderArticle>
			<ArticleLayout
				arts={otherArts}
				header="Las ciudades mexicanas del futuro: Hacia una transformación social-ecológica"
				siguiente="/articulos/perspectiva_cuidados"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<ArtParagraphs
						paragraphs={[
							"El modelo de desarrollo latinoamericano del siglo XXI claramente apunta al predominio de la economía de mercado con diversas variantes y énfasis y estructuras sociales y políticas con diversos grados de democratización y capacidades de respuesta ante las necesidades sociales y ambientales.",
							"La realidad sociopolítica y económica que se observa en los países del subcontinente evidencia una tendencia a la dilución de las fronteras ideológicas entre la izquierda y la derecha tal y como fueron concebidas en los debates que ocuparon el pensamiento social y político durante la segunda mitad del siglo XX. En la valoración que se hace de discursos y acciones concretas destacan estructuras económicas claramente neoliberales con políticas públicas de corte progresista, frente a estructuras económicas mucho más reguladas y controladas que coexisten con políticas que difícilmente pueden ser consideradas progresistas.",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-red1 font-medium">
							Una visión progresista del desarrollo latinoamericano enfocada a
							las ciudades necesita reconocer las limitaciones objetivas que
							enfrentan en la actualidad los movimientos orientados a la
							construcción de una “nueva sociedad”,
						</span>
						cuando los caminos en este sentido han sido truncados por las
						presiones y agresiones externas, pero también por los radicalismos y
						errores internos en los países.
					</p>
				</div>
				<div className="">
					<ArtParagraphs
						paragraphs={[
							"La pregunta central que debemos intentar responder es: ¿Qué proponer y qué gestionar para avanzar hacia una transformación socioecológica de nuestras ciudades?, entendida como la búsqueda de una creciente equidad socioeconómica y política, con un respeto generalizado a los derechos humanos y una defensa del ambiente, todo ello, en un espacio de libertad política y económica fundado en un sistema de mercado con un enfoque social y en un modelo político que prioriza lo público y la democracia funcional y ampliamente participativa (gobernanza de base territorial).",
						]}
					/>
					<img src={articulo1} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"Las limitaciones para responder a esta pregunta en la realidad socioespacial son muchas:",
						]}
					/>
					<ArtList
						variant="list-decimal"
						elements={[
							"La reducción de las capacidades de los estados nacionales y locales que se han achicado perdiendo recursos, y sobre todo poder y legitimidad, ante sus sociedades, ampliando los espacios de actuación en el desarrollo urbano de otros actores como los mercados, los poderes fácticos (desde los medios de comunicación hasta el crimen organizado) o los movimientos sociales.",
							"Las transformaciones internacionales y la globalización de los mercados, que han otorgado a las naciones más poderosas y a los organismos multilaterales un poder de decisión que afecta de manera directa a las naciones y a sus políticas públicas y que repercuten en la vida urbana.",
							"Las contradicciones y los excesos de los regímenes económico-políticos que han alcanzado situaciones cercanas a la ruptura: la desigualdad y la concentración de la riqueza y de los beneficios del crecimiento y del desarrollo en unos cuantos grupos sociales e incluso en un muy pequeño número de ciudadanos en  proporciones cada vez más alarmantes; la marginación social y el deterioro de las condiciones de vida en las mayorías y del ambiente, los cuales han provocado situaciones irreversibles en diversos espacios nacionales e incluso urbanos de la región.",
							"La baja capacidad de los estados nacionales y locales bajo diferentes regímenes políticos para desarrollar políticas públicas integradas, de largo plazo y participativas. La historia de América Latina está llena de ejemplos que evidencian grandes esfuerzos de transformación social sin visiones integradas, aplicadas de manera vertical y sin construir bases sociales e institucionales para que perduren; por ello, apenas alcanzan magros resultados o terminan en fracasos. La política de vivienda social es un claro ejemplo; prácticamente ningún país de la región ha entendido el estrecho vínculo entre desarrollo urbano y vivienda, y entre esta y las condiciones objetivas de la estructura socioeconómica de las ciudades donde se aplica. El resultado más evidente ha sido la producción de casas alejadas de los centros urbanos sin los equipamientos sociales y espacios públicos que requieren, lo cual impacta negativamente la calidad de vida de los supuestos “beneficiarios” de dichas políticas. Esto ha llevado a las organizaciones sociales urbanas a luchar por la reestructuración profunda de las políticas, como en los casos de “Minha Casa Minha Vida”, en Brasil; “Los con Techo”, en Chile y “La Política Nacional de Vivienda”, en México, entre muchas otras.",
						]}
					/>
					<ArtParagraphs
						paragraphs={[
							"Estas limitaciones y contradicciones, al afectar de manera creciente a más capas de las sociedades nacionales y a más ciudades, generan mayores presiones sociales que amplían las posibilidades (y los riesgos) de una lucha por el cambio social y político. Esta lucha, desde las aportaciones intelectuales, debería darse por construir y/o recuperar visiones progresistas que reduzcan estas contradicciones y estos excesos de los mercados y amplíen las expectativas de mayor igualdad y respeto a los derechos humanos y de avances hacia un desarrollo urbano democrático y sostenible.",
							"En síntesis, una visión progresista del desarrollo latinoamericano enfocada a las ciudades necesita reconocer las limitaciones objetivas que enfrentan en la actualidad los movimientos orientados a la construcción de una “nueva sociedad”, cuando los caminos en este sentido han sido truncados por las presiones y agresiones externas, pero también por los radicalismos y errores internos en los países. Entre estos destaca la limitación para conformar una amplia base social que sostenga en el largo plazo las transformaciones sociales y ecológicas.",
							"Por ello, pareciera que en Latinoamérica es necesario enfatizar la necesidad de movilizar las conciencias, de construir bases sociales y de luchar por la transformación de las condiciones que ha impuesto un capitalismo cada vez más voraz que concentra la riqueza de manera creciente en muy pocos; que agudiza las desigualdades; que es el mayor responsable del deterioro ambiental y de la desigualdad socioespacial; que reduce la democracia a una condición de representación sin participación efectiva de los ciudadanos en las decisiones que afectan el desarrollo y el futuro de sus barrios y sus comunidades.",
							"Desde la perspectiva urbana, esta lucha por una transformación social se ha articulado, aunque parcialmente, en torno al Derecho a la Ciudad, porque en las condiciones objetivas económicas y políticas sintetiza los esfuerzos sociales por una mayor justicia social. Son variados los avances en cada país, pero es posible reconocer algunas experiencias más avanzadas que han permitido mejorar la movilidad en las ciudades a partir del transporte público y no motorizado, la oferta creciente de espacio público o la oferta de mejores condiciones habitacionales para quienes más lo necesitan.",
							"Mi conceptualización parte de la premisa de que la búsqueda de la transformación social y ecológica de las ciudades de América Latina a favor de un desarrollo productivo, incluyente, ordenado y sostenible, desde una perspectiva social y políticamente progresista, exige una toma de posición sobre un conjunto de principios, entre los que destacan:",
							"El reconocimiento de todos los derechos que la humanidad ha logrado consignar y defender. En el caso de las ciudades, aquellos que han sido integrados en la “Carta Mundial por el Derecho a la Ciudad” de 2004, que representa una nueva concepción de la urbe en la que lo público y lo comunitario se adelantan y se sobreponen a lo individual. Como recuerda Granero (2017, p. 27), importantes antecedentes de esta Carta fueron los libros La cuestión urbana, de Manuel Castells (1977), y Urbanismo y desigualdad social, de David Harvey (1973).",
							"El compromiso político e intelectual de:",
						]}
					/>
					<ArtList
						variant="list-disc"
						elements={[
							"Asumir una opción por las causas de los grupos sociales que no han sido favorecidos por el progreso y el desarrollo de las ciudades y que, por el contrario, han sido marginados de estos beneficios.",
							"Asumir una posición a favor de la sostenibilidad ambiental, entendida integralmente como un objetivo socialmente compartido.",
							"Comprometerse con la transformación de la “matriz productiva dominante” y reconocer que, si bien el modelo económico imperante es de mercado, es fundamental reconocer la existencia de otras economías posibles coexistentes y complementarias —del cuidado, social y solidaria— y luchar por una perspectiva más humanista y social que reconozca los derechos de todos y reduzca sensiblemente la desigualdad y la pobreza.",
							"Reconocer los procesos democráticos con amplia participación social –cocreación y gobernanza de base territorial— como mecanismos de avance hacia una transformación social y ecológica.",
						]}
					/>
					<ArtParagraphs
						paragraphs={[
							"Estas breves notas apenas apuntan a sentar bases para construir democráticamente pactos o acuerdos que se traduzcan en acciones y compromisos de corresponsabilidad entre actores sociales y gobiernos hacia una sociedad urbana más equitativa y sostenible.",
						]}
					/>
				</div>
				<Referencias
					referencias={[
						{
							ref: "Castells, M. (1977). The Urban Question. A Marxist Approach.",
							subref: "Londres: Edward Arnold.",
						},
						{
							ref: "Granero, G. (2017). Territorios de la desigualdad: política urbana y justicia espacial.",
							subref: "Buenos Aires: Suburbanistas.",
						},
						{
							ref: "Harvey, D. (1973). Social Justice and the City.",
							subref: " Londres: Edward Arnold.",
						},
						{
							ref: "Iracheta, A. (2020). Otra ciudad es posible. Los retos del desarrollo urbano en América Latina.",
							subref:
								"Ciudad de México: Fundación Friedrich Ebert, Proyecto Transformación Social-Ecológica.",
						},
						{
							ref: "Carta Mundial por el Derecho a la Ciudad (2004).",
							subref: "Disponible en: ",
							link: "https://www.right2city.org/wp-content/uploads/2019/09/A1.1_Carta-Mundial-de-Derecho-a-la-Ciudad.pdf",
						},
					]}
				/>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
