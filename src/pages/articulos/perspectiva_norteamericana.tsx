import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";
import ArtSubtitle from "../../components/shared/ArtSubtitle";
import ArtList from "../../components/shared/ArtList";
import Referencias from "../../components/shared/Referencias";

import autor from "../../images/autores/autor19.jpg";
import articulo1 from "../../images/articulos/articulo19-1.jpg";
import articulo2 from "../../images/articulos/articulo19-2.jpg";

const Articles = () => {
	return (
		<Layout
			title='Una perspectiva norteamericana para "Un pacto verde para México"'
			description='Una perspectiva norteamericana para "Un pacto verde para México"'
			url="/articulos/perspectiva_norteamericana"
			image={articulo1}
		>
			<HeaderArticle
				bgcolor="bg-green5"
				title='Una perspectiva norteamericana para "Un pacto verde para México"'
				titleColor="text-white"
				variant="lines"
				subImage={autor}
				subColor="text-white"
				subAuthor="Por: Claudia Schatan"
			>
				M. A. en Economía por la Universidad de Cambridge, consultora
				independiente; ex jefa de la Unidad de Industria y Comercio de la
				CEPAL-México, especialista en comercio y medio ambiente, innovación
				tecnológica y política industrial, entre otros temas.
			</HeaderArticle>
			<ArticleLayout
				header="Una perspectiva norteamericana"
				siguiente="/articulos/ciudades_mexicanas"
				url="/perspectiva_norteamericana"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<img src={articulo1} className="mb-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"Enfrentar el cambio climático es una tarea que un país no puede lograr de forma aislada. Se requiere forzosamente de la cooperación internacional y de decisiones consensuadas. Aunque existen numerosos acuerdos ambientales multilaterales (AAM), su aplicación ha sido laxa y estos no han impedido el deterioro dramático de las condiciones ambientales en el mundo. El Acuerdo de París de 2015 es el ejemplo más cercano en el tiempo, cuyo objetivo central es combatir el cambio climático y asegurar que el incremento de la temperatura mundial se mantenga por debajo de los 2 °C en este siglo, con respecto a los niveles preindustriales, y que no rebase los 1.5 °C en la práctica.",
						]}
					/>
					<img src={articulo2} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"México es uno de varios países que, en 2020, a pesar de estar obligado a ofrecer metas más ambiciosas que las establecidas en sus contribuciones nacionales determinadas de 2015, las debilitó.",
							"El empuje y el apoyo desde el exterior a la agenda verde de México puede provenir no solo de los AAM sino también de los compromisos ambientales de tratados de libre comercio regionales, particularmente del Tratado de Libre Comercio entre México, Estados Unidos y Canadá (T-MEC), cuyo predecesor, el Tratado de Libre Comercio de América del Norte (TLCAN), fue el primer acuerdo comercial en incluir mecanismos para defender el medio ambiente de forma explícita incluyendo instancias de cooperación en materia ambiental dentro de este. El actual Gobierno de Estados Unidos, con su énfasis en el combate al cambio climático y su interés en ejercer una influencia para que otros países lo secunden, puede también ejercer una presión y significar una contribución para avanzar en una agenda verde en México.",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-green1 font-medium">
							Las actuales políticas ambientales de Estados Unidos y México van
							en sentidos opuestos.{" "}
						</span>
						Mientras el primero actúa para revertir la política de su antecesor,
						en México se debilitan las instituciones a cargo de la protección
						ambiental, se paralizan inversiones y proyectos de energía renovable
						y se aminoran las contribuciones en el marco del Acuerdo de París.
					</p>
				</div>
				<div className="">
					<ArtSubtitle text="El papel del T-MEC en un posible pacto verde en México" />

					<ArtParagraphs
						paragraphs={[
							"Hay que reconocer que la protección al medio ambiente siempre ha sido una acompañante incómoda del libre comercio y, por lo tanto, de los acuerdos comerciales, dado que puede conducir a la limitación del comercio de ciertos productos dañinos o depredadores de recursos naturales. La expansión misma del comercio genera más emisiones debido al transporte de los productos y a una mayor producción. Incluir cláusulas de protección ambiental, por tanto, introduce potenciales restricciones al intercambio. Sin embargo, dada la oposición de los ambientalistas para lograr la aprobación del TLCAN en el Congreso de Estados Unidos en 1993, se hizo un acuerdo ambiental paralelo al TLCAN conocido como el Acuerdo de Cooperación Ambiental de América del Norte (ACAAN), que brindó ciertas garantías para que el incremento en el comercio derivado del TLCAN no fuera en detrimento del ambiente (OECD, 2017).",
							"A nivel internacional, resulta paradójico que las disposiciones ambientales en los TLC pueden llegar a ser incluso más efectivas que las disposiciones en los AAM. En el caso del TLCAN y del T-MEC hay varias razones:",
						]}
					/>
					<ArtList
						variant="list-decimal"
						elements={[
							'En el TLCAN, los países se comprometían a "REFORZAR la elaboración y aplicación de leyes y reglamentos en materia ambiental"2, lo que sí ocurrió en México,3 pero para el T-MEC este compromiso se debilitó debido a la política ambiental de la administración del presidente Donald Trump. Aun así, el T-MEC incluyó el compromiso de "mejorar las capacidades de las Partes para abordar asuntos ambientales relacionados con el comercio, incluso mediante la cooperación, en fomento al desarrollo sostenible" (2020).',
							"De no cumplirse los compromisos ambientales en el T-MEC, se pueden imponer sanciones comerciales al país transgresor (instrumento del que en general carecen los AAM). Si bien esta última herramienta no fue muy efectiva en el TLCAN para aplicar sanciones, el T-MEC incorporó los mecanismos para que, de fallar la cooperación entre las Partes para resolver estos incumplimientos, se utilice un procedimiento de solución de controversias que puede llevar a sanciones comerciales. El TLCAN incluyó un mecanismo de peticiones ciudadanas para investigar el incumplimiento de leyes ambientales que subsiste en el T-MEC. Desde su firma hasta 2019 hubo 96 peticiones y, derivado de ellas, la elaboración de 24 expedientes de hechos (CCA, 2019).",
							"En el TLCAN y en el T-MEC se desarrolló un mecanismo de cooperación ambiental entre los tres socios comerciales apoyado en una estructura institucional relativamente independiente, la Comisión de Cooperación Ambiental (CCA) y su Secretariado. Esta cuenta con un financiamiento propio para desarrollar estudios y tomar acciones en materia ambiental para beneficio de las partes.",
							"La cooperación internacional del ACAAN ha sido un importante apoyo en los esfuerzos para mejorar la protección al medio ambiente en Norteamérica en términos de generación de información, medición y rastreo de contaminantes, la localización de especies, estudios y mapeos de regiones ecológicas, de creación de programas trilaterales de conservación de la biodiversidad y la adopción de compromisos específicos para reducir los niveles de contaminación de varios elementos químicos a través de los Planes de Acción y de Conservación específicos (NACAP, por sus siglas en inglés). Asimismo, se reforzaron leyes y la cooperación para la formación de capital humano en materia ambiental. El TLCAN que firmó México ha generado una agenda ambiental por varias vías: las peticiones ciudadanas relacionadas al incumplimiento de leyes ambientales; los estudios independientes desarrollados por la CCA sobre temas ambientales que abarcan a los tres países; por planes de acción concretos para reducir contaminantes u otros fines, entre otros. A pesar de que estos esfuerzos han sido insuficientes, han sido importantes y siguen adelante, como se aprecia en los proyectos dentro de su Plan Estratégico 2021-2025 para la protección del ambiente (Morelos, 2021).",
						]}
					/>
					<ArtSubtitle text="Incidencia del programa de Biden en el cambio climático en México" />

					<ArtParagraphs
						paragraphs={[
							"Las actuales políticas ambientales de Estados Unidos y México van en sentidos opuestos. Mientras el primero actúa para revertir la política de su antecesor, en México se debilitan las instituciones a cargo de la protección ambiental, se paralizan inversiones y proyectos de energía renovable y se aminoran las contribuciones en el marco del Acuerdo de París. El presidente Biden ha decidido tomar un papel de liderazgo en el combate al cambio climático a nivel mundial y se espera que empuje a sus socios comerciales a cumplir con sus compromisos de abatir sus emisiones.",
							"Desde su campaña electoral, Biden consideró la aplicación de impuestos de frontera a productos intensivos en carbono, especialmente a aquellos que provienen de países cuyos estándares ambientales son más laxos que los de Estados Unidos, como México. De aplicarse esta medida, México podría experimentar la reducción de algunos de los beneficios de acceso a mercado de los que goza bajo el T-MEC. Asimismo, el plan de Biden de prohibir los subsidios a los combustibles fósiles, afectaría significativamente a México, pues en 2019 fue el segundo país del G20 que más subsidia los hidrocarburos.",
							"Más recientemente, en los prolegómenos de la Cumbre en Glasgow (COP 26) en noviembre de 2021, se espera que Biden busque un acuerdo con otros países para reducir las emisiones de metano globales en 30% para el año 2030. En México, el uso de gas natural ha crecido rápidamente, especialmente como insumo de las plantas de energía eléctrica (60.6 % de la electricidad que se consume en el país es generada con gas natural), por lo que tendrían que introducirse medidas drásticas para reducir estas emisiones, aproximadamente el 30 % del gas que se consume en el país.",
							"De igual manera, los cambios en la industria automotriz hacia la producción de vehículos eléctricos en Estados Unidos tendrán grandes repercusiones en México. A través de una orden ejecutiva, Biden ha dispuesto que entre 40 y 50 % de los nuevos automóviles en su país en 2030 sean eléctricos, para lo que está creando una serie de incentivos para alcanzar esta meta. Ello modificará el perfil de los automóviles que se producen conjuntamente con México y también motivará la introducción de más movilidad eléctrica en nuestro país, requiriendo cambios en infraestructura y una mayor producción de electricidad.",
							"Sin duda, una agenda verde en México necesita ser construida por el país, pero hay muchas y muy diversas fuerzas internacionales, en especial las derivadas de la integración de América del Norte, que serán determinantes para conducir a México hacia una ruta más sostenible.",
						]}
					/>
				</div>
				<Referencias
					referencias={[
						{
							ref: "Morelos, Jimena (2021). Pacta México 5 proyectos verdes con EU y Canadá. Tendencias Económicas y Financieras, 17 de agosto.",
							subref: "Disponible en: ",
							link: "http://www.tendencias.mx/pacta-mexico-5-proyectos-verdes-con-eu-y-canada/",
						},
						{
							ref: "CCA (2019). 25 Years of the Commission of Environmental Cooperation.",
							subref: "Disponible en:",
							link: "http://www.cec.org/sites/default/files/documents/25years/25th-poster-booklet-en.pdf",
						},
						{
							ref: "OECD (2017). Assessing Implementation of Environmental Provisions in Regional Trade Agreements, París: OECD Publishing. Capítulo 24 del T-MEC (2020).",
							subref: "Texto disponible en: ",
							link: "http://www.gob.mx/cms/uploads/attachment/file/465806/24ESPMedioAmbiente.pdf",
						},
					]}
				/>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
