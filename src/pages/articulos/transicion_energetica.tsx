import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";

import autor from "../../images/autores/autor15.jpg";
import articulo1 from "../../images/articulos/articulo15-1.jpg";
import articulo2 from "../../images/articulos/articulo15-2.jpg";

const Articles = () => {
	const otherArts = [
		"El papel de los pueblos originarios hacia un pacto verde para México",
		"El Big Push mexicano: Plan verde para un desarrollo sostenible",
		"Pactar verde y caminar hacia 2030",
		"Economía social y solidaria para la regeneración ecológica en México",
		"Pilares para un pacto verde para México",
	];

	return (
		<Layout title="Artículos">
			<HeaderArticle
				bgcolor="bg-green5"
				title="Transición energética a nivel local para un Pacto Verde para México"
				titleColor="text-white"
				variant="lines"
				subImage={autor}
				subColor="text-white"
				subAuthor="Por: Adriana Aragón Tapi"
			>
				Maestra en Economía Ambiental en Reino Unido, y Especialista en Política
				y Gestión Energética y Medioambiental por Flacso, actualmente es
				directora del programa de Apoyo a la Implementación de la Transición
				Energética en Mexico en la Agencia Alemana de Cooperación al desarrollo
				sustentable en Mexico (GIZ). Es experta en temas de normatividad y
				gestión ambiental, política climática y energética.
			</HeaderArticle>
			<ArticleLayout
				arts={otherArts}
				header="Transición energética a nivel local para un Pacto Verde"
				siguiente="/articulos/politica_agricola"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<img src={articulo1} className="mb-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"La transición energética busca la transformación del sector energético mundial de fósiles a cero carbono en la segunda mitad de este siglo,  lo que implica la necesidad de aumentar el uso de energías por fuentes renovables y la eficiencia energética a un ritmo acelerado. La transición energética permitirá contar con soluciones más sostenibles y competitivas para la generación y el suministro de energía y para su aprovechamiento sostenible permitiendo reducir las emisiones de gases contaminantes y la descarbonización del sector energético (urgente a nivel mundial).",
							"Se reconoce que la eficiencia energética y las energías renovables forman parte de las prioridades de la agenda global, debido a su alto impacto en la mitigación de emisiones de contaminantes y de gases de efecto invernadero causantes del cambio climático. En el último informe del IPCC (Panel Intergubernamental de expertos sobre cambio climático) se señala: “a menos que las emisiones de gases de efecto invernadero se reduzcan de manera inmediata, rápida y a gran escala, limitar el calentamiento a cerca de 1.5 ºC o incluso a 2 ºC será un objetivo inalcanzable”.",
							"México, que firmó el Acuerdo de París, requiere de manera indispensable y urgente la adopción de mejores decisiones y esfuerzos más ambiciosos  para lograr reducir las emisiones de gases y compuestos de efecto invernadero. La transición energética es un camino para abonar a esto, ya que a nivel país el sector de energía representa el 64%  del total de emisiones de gases y compuestos de efecto invernadero. Asimismo, la Agencia Internacional de Energía indica que, para 2050, la población de México aumentará a casi 150 millones de personas, lo cual, ligado al aumento de la productividad y el crecimiento económico, implicará un aumento de la demanda de energía.",
						]}
					/>
					<img src={articulo2} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"La política climática en México es una política bidireccional: climática y energética, ya que la Ley General de Cambio Climático integra acciones y estrategias para la mitigación y adaptación al cambio climático y metas de generación de energía eléctrica por fuentes limpias a nivel federal. De igual manera, señala acciones a desarrollar por parte de los estados con respecto a la formulación de sus políticas climáticas, esto es, el diseño y el desarrollo de instrumentos de política normativos y de planeación tanto a nivel estatal como a nivel municipal. Actualmente, más de 25 estados de la República Mexicana cuentan con una ley de cambio climático estatal, y todos ellos han desarrollado al menos siete instrumentos de política climática.  Estos instrumentos de política climática buscan orientar, a nivel local, el desarrollo económico y social bajo en emisiones.",
							"Por otro lado, la Ley de Transición Energética, que establece las políticas y medidas para el aprovechamiento sostenible de la energía y obligaciones en materia de energías limpias, eficiencia energética y de reducción de emisiones contaminantes, no señala de manera expresa acciones específicas para los estados. Sin embargo, dado que la política federal es la referencia para las leyes e instrumentos de política estatales, ha sido una oportunidad para que varios estados del país desarrollen sus propios instrumentos de política para transitar hacia una economía baja en carbono. Ejemplos de estos instrumentos de política pública son: leyes, planes y programas estatales de energía, los cuales integran objetivos, metas y acciones para impulsar las energías sostenibles de manera autónoma o descentralizada y considerando los recursos naturales propios de su región.",
							"De forma paralela, varias entidades federativas han fortalecido la gobernanza local en los temas de cambio climático y transición energética a partir de incrementar sus propias capacidades institucionales mediante la creación de nuevas instituciones o integrando a otros actores (i.e. academia, industria, organizaciones de la sociedad civil, ciudadanos). Se han creado agencias estatales de energía y clústeres de energía, entre otros espacios de toma de decisiones, para la definición de acciones, proyectos de energía e impulso de tecnologías adecuados al contexto local, así como para atender sus necesidades energéticas.",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-red1 font-medium">
							Desde una visión de “abajo hacia arriba”, se han ido impulsando
							procesos participativos en la toma de decisiones de política
							energética y climática,{" "}
						</span>
						y en el diseño e implementación de proyectos sostenibles que abonan
						a la mitigación del cambio climático y crean oportunidades de
						desarrollo.
					</p>
				</div>
				<div className="">
					<ArtParagraphs
						paragraphs={[
							"El estado de Tamaulipas, por ejemplo, publicó el pasado septiembre su Ley para el Fomento y Aprovechamiento Sustentable de la Energía, la cual señala los mecanismos e instrumentos para que el estado y los municipios apoyen la innovación tecnológica y técnica para la aplicación de las energías limpias y renovables, así como criterios de eficiencia energética  de manera compatible con el entorno social y ambiental para el impulso del desarrollo energético sostenible en los sectores industrial, agropecuario, residencial, comercial, público y transporte. Además, señala la importancia de la participación de comunidades locales en proyectos de energía sostenible y eficiencia energética. Así, varios estados y municipios han fortalecido sus instrumentos de política impulsando proyectos, mejorando sus reglamentos, llevando a cabo acciones para el aprovechamiento sostenible de la energía, impulsando el uso de tecnologías más eficientes e integrando a la sociedad en las actividades de aprovechamiento sostenible de la energía.",
							"Desde una visión de “abajo hacia arriba”, se han ido impulsando procesos participativos en la toma de decisiones de política energética y climática, y en el diseño e implementación de proyectos sostenibles que abonan a la mitigación del cambio climático y crean oportunidades de desarrollo.",
							"Otro gran ejemplo de acciones locales participativas sobre energía son los modelos cooperativos de energía sustentable. Estos son modelos de gran valor que permiten el liderazgo de los ciudadanos organizados hacia un mismo objetivo: el aprovechamiento de la energía por fuentes renovables para la satisfacción de las necesidades energéticas, económicas y sociales que tienen en común. Los modelos cooperativos de energía sustentable permiten el beneficio colectivo creando empresas locales que con sus recursos propios puedan generar a través de proyectos descentralizados de pequeña escala su energía eléctrica, consumirla y hacer un uso eficiente de ella.",
							"En Alemania, las cooperativas de energía han tenido un despliegue importante, y las 883 empresas cooperativas de energía renovable que existen, con más de 200 mil personas asociadas, generan hasta un 3.5% de la energía renovable del país (DGRV, 2020). En los Estados Unidos, por su parte, las cooperativas de energía renovables acumulan una capacidad de 10 GW, de los cuales 1 GW corresponde a energía solar (NRCA, 2020).",
							"Los modelos adecuados aún están en etapas tempranas en México, y podrían incluir cooperativas solares para venta de energía y para autoconsumo en las propias actividades productivas generándoles ahorros. El capital social de los pueblos y comunidades de México sienta las bases para la gobernanza y el control de proyectos de energía sostenible para una transición energética inclusiva y el impulso de la economía social.",
							"La transición energética a nivel local representa una oportunidad de desarrollo social y económico inclusivo y democrático, en particular cuando se integran acciones participativas como las descritas anteriormente, al mismo tiempo que contribuye al alcance de las metas de mitigación nacionales y globales. La suma de las acciones hacia una economía baja en carbono en los tres niveles de gobierno, integrando acciones participativas, abona al objetivo de limitar el incremento de la temperatura del planeta a 1.5 °C para evitar los efectos más graves del cambio climático.",
						]}
					/>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
