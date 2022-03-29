import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";
import Referencias from "../../components/shared/Referencias";

import autor from "../../images/autores/autor22.png";
import articulo1 from "../../images/articulos/articulo22-1.png";
import articulo2 from "../../images/articulos/articulo22-2.png";

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
				title="Fiscalización de las emisiones de GEI para un Pacto Verde para México"
				titleColor="text-black"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Adrián García y Tonatiuh Vázquez"
			>
				<p className="font-medium">Adrián García</p>
				<p className="mb-4">
					Maestro en Economía del Medio Ambiente y los Recursos Naturales por la
					Universidad Nacional de Australia y licenciado en Economía por el
					ITESM. Se incorporó al Centro de Investigación Económica y
					Presupuestaria (CIEP) en 2016 y actualmente es coordinador del área de
					Ingresos e Impuestos. Le interesa la economía ambiental y el sistema
					fiscal como instrumento para conseguir igualdad de oportunidades.
				</p>
				<p className="font-medium">Tonatiuh Vázquez</p>
				<p className="mb-4">
					Egresado de la Facultad de Economía de la UNAM, realizó una maestría
					en Economía Ambiental en el CIDE. Actualmente funge como coordinador
					de Energía y Finanzas Públicas en el CIEP. Se interesa por la
					promoción de la transición energética y la mitigación de los efectos
					del cambio climático.
				</p>
			</HeaderArticle>
			<ArticleLayout
				arts={otherArts}
				header="Fiscalización de las emisiones de GEI para un Pacto Verde para México"
				siguiente="/articulos/transformacion_productiva"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<img
						src={articulo1}
						className="m-auto mb-12 max-w-full"
						alt="Pacto Verde"
					/>
					<ArtParagraphs
						paragraphs={[
							"El grupo intergubernamental de expertos sobre el cambio climático (IPCC, por sus siglas en inglés) ha manifestado que el calentamiento del planeta es inequívoco, claramente influido por la actividad humana, y que la escala de cambios recientes a través del sistema climático global no tiene precedentes en un periodo que varía de varios siglos a varios miles de años. En su último reporte de evaluación, el IPCC advierte que esta situación ya está afectando a muchos fenómenos climáticos y meteorológicos extremos en cada región del planeta (IPCC, 2021).",
							"La ocurrencia de estos fenómenos impacta directamente a sectores tales como el agropecuario, el turístico y el energético. Asimismo, las olas de calor, la propagación de enfermedades por insectos y una mayor contaminación inciden negativamente en los gastos de salud en el mundo (OMS, 2018).",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-red1 font-medium">
							Ante la falta de recursos para atender la emergencia climática, un
							impuesto a las emisiones de GEI debe de analizarse como
							alternativa.
						</span>
					</p>
				</div>
				<div className="">
					<ArtParagraphs
						paragraphs={[
							"En este contexto, México es un país altamente vulnerable a los efectos adversos del cambio climático. Según la OCDE (2007), la vulnerabilidad al cambio climático en México abarca 16 % del territorio nacional. En las zonas vulnerables, el fenómeno afectaría al 68 % de la población y al 71 % de la economía. La vulnerabilidad ya ha implicado costos económicos; de acuerdo con el índice de riesgo climático global (David Eckstein, 2019), México ocupa el lugar número 10 de países con mayores pérdidas económicas por el cambio climático del periodo 1999-2018.",
							"Existen proyecciones sobre el impacto que puede tener el cambio climático en la economía mexicana. En el documento La economía del cambio climático en México (UNAM, 2016), se estima que el cambio climático tendría un costo de 6.9 % del PIB para 2050, y 18.3 % del PIB para 2100 (ver cuadro). Con respecto al costo en salud, tan solo por contaminación ambiental el CIEP estimó que, en 2018, estos ascendieron a aproximadamente 10 mil millones de pesos (CIEP, 2019).",
						]}
					/>
					<img
						src={articulo2}
						className="m-auto my-12 max-w-full"
						alt="Pacto Verde"
					/>
					<ArtParagraphs
						paragraphs={[
							"Este panorama ha llevado a las organizaciones sindicales independientes en México a realizar un análisis pormenorizado de los diferentes sectores productivos, así como de las correspondientes acciones que permitan coadyuvar a la mejora de la salud ambiental, del entorno social y, por supuesto, del planeta. El análisis es el siguiente:",
						]}
					/>
					<ArtParagraphs
						paragraphs={[
							"El grupo intergubernamental de expertos sobre el cambio climático (IPCC, por sus siglas en inglés) ha manifestado que el calentamiento del planeta es inequívoco, claramente influido por la actividad humana, y que la escala de cambios recientes a través del sistema climático global no tiene precedentes en un periodo que varía de varios siglos a varios miles de años. En su último reporte de evaluación, el IPCC advierte que esta situación ya está afectando a muchos fenómenos climáticos y meteorológicos extremos en cada región del planeta (IPCC, 2021).",
							"La ocurrencia de estos fenómenos impacta directamente a sectores tales como el agropecuario, el turístico y el energético. Asimismo, las olas de calor, la propagación de enfermedades por insectos y una mayor contaminación inciden negativamente en los gastos de salud en el mundo (OMS, 2018).",
							"En este contexto, México es un país altamente vulnerable a los efectos adversos del cambio climático. Según la OCDE (2007), la vulnerabilidad al cambio climático en México abarca 16 % del territorio nacional. En las zonas vulnerables, el fenómeno afectaría al 68 % de la población y al 71 % de la economía. La vulnerabilidad ya ha implicado costos económicos; de acuerdo con el índice de riesgo climático global (David Eckstein, 2019), México ocupa el lugar número 10 de países con mayores pérdidas económicas por el cambio climático del periodo 1999-2018.",
							"Existen proyecciones sobre el impacto que puede tener el cambio climático en la economía mexicana. En el documento La economía del cambio climático en México (UNAM, 2016), se estima que el cambio climático tendría un costo de 6.9 % del PIB para 2050, y 18.3 % del PIB para 2100 (ver cuadro). Con respecto al costo en salud, tan solo por contaminación ambiental el CIEP estimó que, en 2018, estos ascendieron a aproximadamente 10 mil millones de pesos (CIEP, 2019).",
							"Para combatir el cambio climático se necesitan recursos para financiar medidas de adaptación y mitigación. A partir del año 2013, el Presupuesto de Egresos de la Federación (PEF) cuenta con un anexo transversal que incluye recursos etiquetados para acciones de adaptación y mitigación al cambio climático (Anexo Transversal del Presupuesto de Egresos de la Federación en materia de cambio climático, ATCC). De 2013 a 2017, los recursos anuales a este anexo fueron, en promedio, de 50 mil millones de pesos, mientras que, de 2018 a 2021, estos promediaron 60 mil millones.",
							"En 2021, este anexo tuvo un presupuesto aprobado por 70 mil millones de pesos, los cuales estuvieron repartidos en 46 programas presupuestarios. La distribución de estos recursos es muy desigual. El 75 % de los recursos fueron asignados al programa presupuestario “transporte de gas natural”, el cual es ejercido por la CFE. Otro 12 % se destinó al Fondo Nacional de Desastres, el cual fue eliminado en julio de 2021. El restante 13% de los recursos fue repartido a los restantes 44 programas presupuestarios.",
							"Los recursos no solamente tienen una distribución muy desigual, sino que tampoco existe evidencia de que se destinen a acciones relevantes para la mitigación y la adaptación al cambio climático. En el ejercicio del gasto, se encuentra que las autoridades no realizan los procesos de integración, diseño y seguimiento del anexo bajo un esquema de planeación y coordinación transversal. Tampoco es posible identificar lineamientos de acción climática específicos que guíen a los responsables de integrar y dar seguimiento a aquellos programas presupuestarios incluidos en el ATCC (INECC, 2017).",
							"Otra asignación de gasto relacionado a atender el cambio climático es el relacionado a la función “protección ambiental” en el PEF, el cual es ejercido por la Secretaría de Medio Ambiente y Recursos Naturales. En 2021, estos recursos fueron repartidos en 18 programas presupuestarios, tres de los cuales concentraron el 74 % de los recursos. Las principales dependencias que ejercen los recursos son la Comisión Nacional del Agua, con 73 % del total de recursos, y la Comisión Nacional de Áreas Naturales Protegidas (Conanp), con 6 % de estos.",
							"Se encuentra que el gasto asignado a esta función ha tenido una notable disminución en su presupuesto pues, en 2021, los recursos aprobados fueron de 17.5 mil millones de pesos, mientras que, en 2014, estos fueron de 41 mil millones. Destaca la reducción de presupuesto la Conanp. Dicha dependencia es la responsable de administrar las 182 áreas naturales protegidas, las cuales cubren una sexta parte del territorio nacional. A partir de 2017, el presupuesto asignado a la Conanp ha tenido continuos recortes a su presupuesto, pasando de 2 mil millones de pesos en 2016, a 856 millones en 2022.",
							"El total de los recursos aprobados para 2021, es decir los presupuestados en el anexo transversal y en la función “protección ambiental” suman un total de 87.5 mil millones de pesos y, como se explicaba anteriormente, no existen mecanismos para verificar que efectivamente se están utilizando para combatir el cambio climático. Este monto contrasta con el que el Instituto Nacional de Ecología y Cambio Climático (INECC) estimó como costo anual de 2014 a 2030 que tendría la disminución de las emisiones de gases de efecto invernadero (GEI) en 22 % (INECC, 2018). En la estimación, el monto requerido se incrementa año con año, empezando en 2014 con aproximadamente 2 mil millones de dólares, y aumenta hasta llegar a casi 12 millones de dólares en 2030. Para el caso de 2021, este monto se estima en 6 mil millones de dólares, los cuales, a un tipo de cambio de 20.1 pesos por dólar, se traducen en 120.6 mil millones de pesos. Aun asumiendo que el presupuesto asignado en 2021 fuera utilizado en su totalidad para disminuir las emisiones de GEI y las medidas de mitigación, seguirían faltando 33.1 mil millones de dólares, y en caso de no incrementarse el presupuesto, la diferencia se incrementará año con año.",
							"Ante la falta de recursos para atender la emergencia climática, un impuesto a las emisiones de GEI debe de analizarse como alternativa. Este tipo de medidas fiscales tiene dos fines. Por un lado, al poner un impuesto a las emisiones, se incentiva a utilizar fuentes de energía y métodos de producción más limpios, reduciendo las emisiones, y, por otro, genera recursos para financiar las medidas de mitigación y adaptación necesarias.",
							"Actualmente, a nivel federal, en México existe el IEPS a los combustibles fósiles, el cual grava las emisiones de GEI. Sin embargo, no cubre la totalidad de las emisiones y la cuota cobrada es muy baja, con una recaudación en 2021, de acuerdo con la estimación de la Ley de Ingresos, de 5 mil 183 millones de pesos. En el CIEP (2021) se estimó el efecto en la recaudación y en las emisiones de un impuesto de este tipo. Este impuesto iría incrementando su tasa año con año, para aminorar el impacto que podría tener en la economía. El impuesto cubriría 83 % de las emisiones totales e iniciaría con una tasa de 58.38 pesos por tonelada de CO2 equivalente. Dicha tasa se incrementaría a un ritmo de 20 % anual, en términos nominales, llegando a 1,079 pesos reales en 2037. La recaudación en el primer año podría llegar a 37 mil 600 millones de pesos, incrementándose año con año hasta llegar a 392 mil 200 millones de pesos en 2037.",
							"El cambio climático es el mayor reto al que se ha enfrentado la humanidad, y pone en riesgo la economía, los ecosistemas y el modo de vida de regiones de México y el mundo. Es necesario reducir de manera crítica las emisiones de CO2 para evitar que ocurran eventos catastróficos irreversibles, sin embargo, para realizarlo se requieren recursos y una política ambiental bien dirigida.",
							"Los recursos asignados para combatir el cambio climático no son suficientes y, de no atenderse lo antes posible, la cantidad de recursos y las repercusiones serán cada vez mayores. Una de las medidas a considerarse es un impuesto a las emisiones de CO2, lo cual ayudaría a transitar a energías y métodos de producción más limpios, al mismo tiempo que recaudaría recursos para ayudar financiar la transición requerida.",
						]}
					/>
				</div>
				<Referencias
					referencias={[
						{
							ref: "CIEP (2019). Las finanzas públicas del cambio climático. Origen, costos y alternativas de los gases de efecto invernadero.",
							subref: "Disponible en: ",
							link: "http://ciep.mx/I6CL",
						},
						{
							ref: "CIEP (2021). Ingresos públicos en México: Hacia un nuevo sistema fiscal.",
							subref: "Disponible en: ",
							link: "http://ingresosenmexico.ciep.mx/",
						},
						{
							ref: "David Eckstein, V. K. (2019). Global Climate Risk Index 2020 . Germanwatch e.V.",
							subref: "Disponible en: ",
							link: "http://germanwatch.org/sites/germanwatch.org/files/20-2-01e%20Global%20Climate%20Risk%20Index%202020_14.pdf",
						},
						{
							ref: "INECC (2017). Evaluación estratégica del Anexo Transversal del Presupuesto de Egresos de la Federación en Materia de Cambio Climático.",
							subref: "Disponible en: ",
							link: "http://www.gob.mx/cms/uploads/attachment/file/261387/Informe_evaluacion_ATCC_final_limpio_1__1_.pdf",
						},
						{
							ref: "INECC (2018). Costo de las constribuciones nacionalmente determinadas de México. Medidas Sectoriales no Condicionadas.",
							subref: "Disponible en:  ",
							link: "http://www.gob.mx/inecc/es/articulos/costos-de-las-contribuciones-nacionalmente-determinadas-de-mexico-medidas-sectoriales-no-condicionadas?idiom=es",
						},
						{
							ref: "IPCC (2021). Climate Change 2021: The Physical Science Basis. Contribution of Working Group I to the Sixth. Cambridge University Press.",
							subref: "Disponible en: ",
							link: "http://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf",
						},
						{
							ref: "OCDE (2007). Adaptation to Climate Change: International Agreements for Local Needs.",
							subref: "Disponible en: ",
							link: "http://oecd.org/env/cc/39725521.pdf",
						},
						{
							ref: "OMS (2018). Cambio Climático y Salud.",
							subref: "Disponible en: ",
							link: "http://who.int/es/news-room/fact-sheets/detail/climate-change-and-health",
						},
						{
							ref: "UNAM (2016). La economía del cambio climático En México. UNAM.",
							subref: "Disponible en: ",
							link: " http://ceiba.org.mx/publicaciones/Centro_Documentacion/2010_Economia.del.CC_galindo.pdf",
						},
					]}
				/>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
