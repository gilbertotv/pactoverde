import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";
import Referencias from "../../components/shared/Referencias";

import autor from "../../images/autores/autor9.jpg";
import articulo1 from "../../images/articulos/articulo9-1.jpg";
import articulo2 from "../../images/articulos/articulo9-2.jpg";

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
				title="El derecho humano a la movilidad"
				titleColor="text-white"
				variant="lines"
				subImage={autor}
				subColor="text-white"
				subAuthor="Por: Patricia Mercado Castro"
			>
				Senadora de la LXV Legislatura, preside la Comisión de Zonas
				Metropolitanas y Movilidad. Economista por la UNAM y feminista. Ha sido
				candidata a la presidencia de México y secretaria de Gobierno de la
				Ciudad de México (2015-2018).
			</HeaderArticle>
			<ArticleLayout
				arts={otherArts}
				header="El derecho humano a la movilidad"
				siguiente="/articulos/papel_sector_empresarial"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<img src={articulo1} className="mb-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"La gestión de la movilidad de nuestras ciudades está todavía muy lejos de los objetivos planteados por las agendas internacionales  y la visión nacional de “no dejar a nadie atrás”",
							"Reconocido en nuestra Constitución Política desde diciembre del 2020, el derecho humano a la movilidad no cuenta con programas presupuestarios federales destinados exclusivamente a la construcción y mejora de infraestructura (emergente o permanente) para caminar, desplazarse con ayudas técnicas, habitar en el espacio público y usar medios no motorizados de manera cómoda y segura, ni para incentivar una prestación del servicio público de transporte de personas y mercancías bajo estándares de calidad; mucho menos para reducir el uso y la velocidad de vehículos motorizados en calles y carreteras del país.",
						]}
					/>
					<img src={articulo2} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"Tanto dependencias federales como gobiernos locales continúan promoviendo la construcción de soluciones viales conceptualizadas desde la ingeniería del transporte y del tránsito que datan del siglo XX, y no contemplan en sus diseños las necesidades de seguridad vial, accesibilidad, habitabilidad y protección al medio ambiente que demandan las personas del siglo XXI.",
							"Sobre este tipo de soluciones viales, es necesario mencionar su grave impacto en la dispersión entre los orígenes y destinos de viaje y en el medio ambiente. El modelo de movilidad territorial centrado en viajes motorizados facilita en cierta medida la expansión de los límites urbanos y la aceleración de la conurbación, alejando a la población mexicana del goce colectivo de los derechos humanos y beneficios establecidos en los distintos marcos normativos que rigen el país, sin diferencias de clase, situación económica, etnia o género. Sin embargo, es necesario señalar que resultan más desfavorables en los grupos históricamente desfavorecidos, como mujeres, infantes, indígenas, personas mayores y personas con algún tipo de discapacidad.",
							"Por lo anterior, resulta necesario que las autoridades de los tres órdenes de gobierno reconozcan el papel protagónico de los desplazamientos en sus asentamientos humanos, y destinen recursos públicos de manera eficaz hacia el diseño y la implementación de políticas y proyectos que hagan más eficientes sus sistemas de transporte y sus calles, lugares más seguros.",
							"Lo anterior ha llevado al centro de la discusión el papel que debería jugar la administración federal en las políticas estatales y municipales de movilidad criticando, por un lado, la invasión a atribuciones constitucionales locales en funciones y servicios públicos como el desarrollo urbano, las calles, el tránsito y el transporte y, por otro lado, cuestionando la falta de programas federales y acciones a favor de su mejora.",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-red1 font-medium">
							Resulta necesario que las autoridades de los tres órdenes de
							gobierno reconozcan el papel protagónico de los desplazamientos en
							sus asentamientos humanos,{" "}
						</span>
						y destinen recursos públicos de manera eficaz hacia el diseño y la
						implementación de políticas y proyectos que hagan más eficientes sus
						sistemas de transporte y sus calles, lugares más seguros.
					</p>
				</div>
				<div className="">
					<ArtParagraphs
						paragraphs={[
							"De la misma manera, México se enfrenta a las dificultades que experimentan entidades federativas y municipios para obtener ingresos propios a través de la recaudación de impuestos e incipientes capacidades técnicas y sociales para impulsar soluciones innovadoras en materia de movilidad.",
							"La toma de decisiones juega un papel importante en ello; las dependencias públicas deberían anticiparlo con mucha más energía, ya que a pesar de los múltiples esfuerzos estos no han sido suficientes para que la sociedad mexicana se vea incentivada a reducir el uso de coches y motocicletas o a incrementar el presupuesto destinado a la implementación de soluciones de movilidad segura y sostenible.",
							"Ante un problema público de dimensiones considerables y con resistencias al cambio, tanto a nivel individual como social, pareciera que no hay solución. Sin embargo, la agenda de la seguridad vial resulta estratégica al ofrecer cercanía con una gran parte de la población y un enfoque sistémico para implementar acciones que no solo faciliten sentar las bases de una política pública en la materia.",
							"Que levante la mano quien no haya perdido a un ser querido en un accidente de tránsito. Las cifras en México son trascendentales, pues representan vidas que se pierden año con año debido a la falta de la intervención del Estado, además de las personas que adquieren una discapacidad o pierden la oportunidad de trabajar por lesiones graves.",
							"Con respecto a la visión sistémica, esta comienza por dejar de culpar a las personas usuarias de las vías por sus muertes y lesiones, ya que hacerlo es incorrecto y obsoleto.",
							"Nuestros marcos normativos continúan siendo redactados bajo la visión de condicionar conductas, sin embargo, a pesar de todos los esfuerzos que se han realizado bajo esa perspectiva, no ha sido posible que el error humano desaparezca.",
							"La gente se distrae, consume alcohol o drogas, se equivoca al manejar y circular por la red vial. Por lo anterior, es necesario redactar leyes que nos permitan incidir en todo el sistema de movilidad para reducir la posibilidad de esos errores y que, en caso de que sucedan, estos no causen muertes o lesiones de gravedad.",
							"El impulso de la Coalición Movilidad Cero, el trabajo de la Asociación Mexicana de Autoridades por la Movilidad (AMAM), el Encuentro Nacional de Diputados por la Movilidad (Endimov) y las ochos mesas de trabajo organizadas por ambas cámaras del Congreso de la Unión para recopilar las necesidades locales y las diferentes propuestas para legislar en la materia, así como el “proceso de consenso interinstitucional” facilitado por la Secretaría de Gobernación (Segob) y la Secretaría de Desarrollo Agrario, Territorial y Urbano (Sedatu) son muestra de la inminente transformación que se demanda.",
							"Las diferentes iniciativas en la materia presentadas por las y los legisladores de todas las corrientes políticas representan de alguna manera los diferentes enfoques que existen, no solo en el país sino en el mundo, para abordar la seguridad vial como una política de Estado. Lograr un consenso sistémico entre ellas, con el objetivo de reducir las muertes y lesiones de gravedad por hechos de tránsito es una tarea compleja, pero no imposible.",
							"Aún falta un largo trecho en el camino; debe aprobarse la Ley General de Movilidad y Seguridad Vial en el Senado de la República, para que después pase a la Cámara de Diputados y, posteriormente, llevar esta visión a los marcos estatales y municipales, sin dejar de trabajar en su armonización con la perspectiva territorial y climática, que aún está pendiente en la mayoría de los gobiernos locales del país.",
							"Cada día que pasa, gente muere por causas que se pueden evitar. Nos motiva la deuda con las familias y víctimas de hechos de tránsito, su dolor nos obliga a pensar y diseñar acciones que nos permitan afrontar de manera más eficiente esta pandemia silenciosa y otras pandemias presentes y futuras en el territorio.",
							"Hoy más que nunca necesitamos ser creativos, para hacer lo que como Estado no nos hemos atrevido a hacer, pensemos fuera de la caja para equilibrar y alinear los esfuerzos a favor de la vida. ¿Lo lograremos?",
						]}
					/>
				</div>
				<Referencias
					referencias={[
						{
							ref: "Altenburg, T. y Dani Rodrik (2017). Green Industrial Policy: Accelerating Structural Change Towards Wealthy Green Economies.",
							subref:
								"Altenburg, T. y C. Assmann (eds.). Green Industrial Policy. Concept, Policies, Country Experiences, Ginebra y Bonn: UN Environment / German Development Institute (Deutsches Institut für Entwicklungspolitk, DIE).",
						},
						{
							ref: "Mazzucato, M. (2019). El valor de las cosas. Quién produce y quién gana en la economía global",
							subref: "Madrid: Taurus.",
						},
						{
							ref: "Cepal (2016). Horizontes 2030: la igualdad en el centro del desarrollo sostenible.",
							subref: "Disponible en: ",
							link: "https://cepal.org/sites/default/files/publication/files/40159/S1600653_es.pdf",
						},
					]}
				/>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
