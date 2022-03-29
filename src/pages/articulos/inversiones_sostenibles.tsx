import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";
import ArtSubtitle from "../../components/shared/ArtSubtitle";
import ArtList from "../../components/shared/ArtList";

import autor from "../../images/autores/autor13.jpg";
import articulo1 from "../../images/articulos/articulo13-1.png";

const Articles = () => {
	const otherArts = [
		"El papel de los pueblos originarios hacia un pacto verde para México",
		"El Big Push mexicano: Plan verde para un desarrollo sostenible",
		"Pactar verde y caminar hacia 2030",
		"Economía social y solidaria para la regeneración ecológica en México",
	];

	return (
		<Layout title="Artículos">
			<HeaderArticle
				bgcolor="bg-green6"
				title="Sin inversiones ambientalmente sostenibles no hay Pacto Verde mexicano"
				titleColor="text-black"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Jorge Máttar"
			>
				Licenciado y maestro en Economía por la Universidad de Cambridge. Es
				investigador asociado al Centro Tepoztlán Víctor L. Urquidi y consultor
				en planificación, desarrollo y política industrial de la Comisión
				Económica para América Latina y el Caribe (CEPAL) y otras
				organizaciones.
			</HeaderArticle>
			<ArticleLayout
				arts={otherArts}
				header="Sin inversiones ambientalmente sostenibles"
				siguiente="/articulos/ciencia_tecnologia_innovacion"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<ArtParagraphs
						paragraphs={[
							"La formación de capital físico en México ha venido a la baja en las últimas décadas, lo que explica el muy pausado crecimiento del PIB (alrededor de 2% promedio anual en los últimos 40 años). La tendencia declinante de la inversión se ha acentuado en el último trienio, especialmente en 2020 y 2021, agravada por las consecuencias de la pandemia del coronavirus SARS-CoV-2.",
							"El volumen de inversión fija bruta de México se ubica en 2021 en un nivel similar al de 2010. Las perspectivas no auguran una recuperación robusta ni sostenida, lo que plantea enormes dificultades para la reactivación productiva sobre bases firmes y duraderas, más aún si incorporamos en la ecuación del crecimiento a las dimensiones medioambientales, de inclusión y de equidad social, es decir, si hablamos de desarrollo sostenible.",
							"En esta nota interesa destacar el papel de las inversiones (pública y privada, nacional y extranjera) orientadas a promover un desarrollo compatible con el cuidado y el mejoramiento del medio ambiente y la naturaleza, es decir, aquellas intervenciones que optimizan las externalidades medioambientales y promueven la economía circular, el ahorro de energía, así como el uso de procesos productivos y tecnologías limpias o que reducen la contaminación significativamente. Las denominamos “inversiones ambientalmente sostenibles” (IAS).",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-red1 font-medium">
							Cada iniciativa de inversión pública, privada, foránea, mixta o
							combinación de las tres debe cumplir con exigencias ambientales,
						</span>
						más allá de los criterios económicos, sociales y políticos.
					</p>
				</div>
				<div className="">
					<img
						src={articulo1}
						className="m-auto my-12 max-w-full"
						alt="Pacto Verde"
					/>
					<ArtParagraphs
						paragraphs={[
							"Existe en el mundo el consenso de que, de no actuar, la vida humana en el planeta puede llegar a su fin, en particular por las consecuencias harto conocidas del calentamiento global: subida del mar, fenómenos hidrometeorológicos extremos más recurrentes, sequías y alteración y volatilidad de las temperaturas en todo el mundo. El planeta ha mostrado resiliencia por millones de años; el ser humano solo lleva una cuantas decenas de milenios y sus capacidades de adaptación a condiciones extremas son limitadas.",
							"En México, como en otros países de América Latina, se ha avanzado significativamente en la legislación, en las políticas para regular las emisiones y, en general, en la promoción del desarrollo sostenible ambientalmente, tanto en cada país como colectivamente, a través de acuerdos, conferencias y foros regionales en los que los países han mostrado un gran activismo tanto a nivel de gobiernos, como de sociedad y en el sector privado.",
						]}
					/>
					<ArtParagraphs
						paragraphs={[
							"Pero en los hechos se ha avanzado poco, ni los gobiernos ni la sociedad o el mercado parecen asumir cabalmente sus responsabilidades, como si cada agente pensara que los otros se deben encargar o sugirieran que, si los demás no lo hacen, “yo tampoco”. Y lo mismo desde la ciudadanía: “lo que yo haga en torno al tema (bueno o malo) poco importa.” Los avances en reglas, leyes, decretos, políticas, estudios y difusión parecen no tener una correspondencia de similar magnitud en las acciones de los actores sociales.",
							"Por ejemplo, la amplia gama de requisitos vinculados con el ambiente para que la autoridad dé su visto bueno a proyectos de inversión suele cumplirse sin la debida competencia técnica y, en ocasiones, las autorizaciones responden a intereses particulares o de grupo, sin que se considere la variable ambiental. La labor que realizan los sistemas nacionales de inversión pública (SNIP) puede ser frustrante en la medida en que sus recomendaciones no sean tomadas en cuenta. Cada iniciativa de inversión pública, privada, foránea, mixta o combinación de las tres debe cumplir con exigencias ambientales, más allá de los criterios económicos, sociales y políticos.",
							"En la mayor parte del mundo, el gobierno, la sociedad y las empresas parecen estar actuando con mayor responsabilidad frente al peligro en que se encuentra la vida en el planeta, y adquiriendo mayor conocimiento y conciencia de la trascendencia del cambio climático y la contaminación atmosférica. Paulatinamente mejoran su “desempeño ambiental”, pero no a la velocidad necesaria para revertir los daños causados por el calentamiento global y por la contaminación.",
							"En particular, el esfuerzo que están dedicando las empresas —especialmente las de mayor tamaño— a reducir las emisiones es insuficiente; por ejemplo, pocos saben que el Pentágono (Gobierno de Estados Unidos) es un contaminante mayúsculo (si fuera un país, se ubicaría en el lugar 55 de todo el mundo). De acuerdo con datos de la Universidad de Brown, en 2017 el Pentágono emitió alrededor de 59 millones de toneladas métricas de dióxido de carbono y otros gases de efecto invernadero. El uso y la movilización de tropas y armas representa el 70% de su consumo de energía, principalmente debido a la quema de combustible de reacción y diésel, según el estudio (Reuters, 2019).",
							"Otras empresas altamente contaminantes se ubican en el ramo de la extracción, producción, almacenamiento y transporte de hidrocarburos. Pemex representa el 1.9% de las emisiones totales por parte de las empresas en el mundo. A nivel de países, China, Estados Unidos y Rusia emiten alrededor de la mitad del CO2 mundial.",
							"Es importante que exista conocimiento y difusión de la información para la sociedad, y que esta, a nivel individual, en comunidad o territorial, ponga en práctica medidas para ahorrar energía, para reducir el uso de plásticos, fomentar el consumo sostenible, reciclar, no usar sus vehículos automotores, etc. Todo ese esfuerzo es muy importante, pero también lo es la acción de las empresas, porque una decisión propicia en una sola empresa grande puede significar una drástica reducción de su impacto en el ambiente, equivalente a la de millones de ciudadanos. El caso del Pentágono es muy ilustrativo; el aparato militar del Gobierno de los Estados Unidos da como resultado unos niveles de contaminación estratosféricos, además de que distrae recursos para actividades productivas o para la cooperación internacional para el desarrollo sostenible. Un mundo en armonía y en paz, con estabilidad política y social, sería automáticamente también un mundo mucho más limpio y apto para respirar en él, con un clima bajo control.",
						]}
					/>
					<ArtSubtitle text="Para concluir:" />
					<ArtList
						variant="list-decimal"
						elements={[
							"México necesita fortalecer su proceso de planeación estratégica de la inversión anteponiendo criterios de sostenibilidad ambiental. Existen prácticas internacionales que pueden ser de gran beneficio, por ejemplo, para fortalecer la labor del SNIP con el fin de desempeñar a cabalidad su papel de análisis y selección de los mejores proyectos para el desarrollo sostenible, en especial, en cuanto a sus externalidades. Un proyecto que tenga externalidades ambientales positivas netas debe apreciarse mucho más que otro que no las tenga.",
							"México necesita una estrategia de desarrollo “verde” que se articule en torno a los compromisos asumidos voluntariamente por el Gobierno para reducir las emisiones de GEI. Un buen inicio sería dar a conocer a la sociedad una propuesta para que esta se empodere y participe activamente en su definición y ejecución, como una gran acción de inteligencia colectiva. El Gobierno debe mostrar que va en serio. Se deben desterrar las apariencias y la simulación que han caracterizado por décadas a muchas decisiones de política pública.",
							"Posibles iniciativas de inversiones ambientalmente sostenibles: a) Proyectos que utilicen energías limpias/renovables, anticambio climático, reutilización de materiales e insumos y promuevan el desarrollo de “conciencia ecológica”. b) Producción de bienes y servicios exportables que incorporen más conocimiento, innovación y alto valor agregado y, al mismo tiempo, cumplan altos estándares en materia de eficiencia en el consumo de energía, huella de carbono, uso de renovables y cuidado del ambiente. c) Fortalecimiento de centros e institutos de investigación y desarrollo científico y tecnológico que involucren proyectos prolucha contra la contaminación y el cambio climático.",
						]}
					/>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
