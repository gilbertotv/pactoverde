import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";

import autor from "../../images/autores/autor12.jpg";
import articulo1 from "../../images/articulos/articulo12-1.jpg";
import articulo2 from "../../images/articulos/articulo12-2.jpg";
import ArtList from "../../components/shared/ArtList";

const Articles = () => {
	return (
		<Layout
			title="Siete claves para levantarnos después de la pandemia y construir resiliencia de cara a la emergencia climática"
			description="Siete claves para levantarnos después de la pandemia y construir resiliencia de cara a la emergencia climática"
			url="/articulos/siete_claves"
			image={articulo1}
		>
			<HeaderArticle
				bgcolor="bg-green5"
				title="Siete claves para levantarnos después de la pandemia y construir resiliencia de cara a la emergencia climática"
				titleColor="text-white"
				variant="lines"
				subImage={autor}
				subColor="text-white"
				subAuthor="Por: Adriana Lobo de Almeida"
			>
				Es directora ejecutiva del Instituto de Recursos Mundiales México (WRI
				México), experta en temas de desarrollo de políticas públicas para la
				sustentabilidad y movilidad urbana a nivel local, nacional y regional.
			</HeaderArticle>
			<ArticleLayout
				header="Siete claves para levantarnos"
				siguiente="/articulos/inversiones_sostenibles"
				url="/siete_claves"
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
							"Las crisis desatadas, agravadas y expuestas a raíz de la pandemia mundial de COVID-19 deben servirnos como un recordatorio de nuestra vulnerabilidad como seres humanos y, a su vez, como un llamado urgente a la acción.",
							'En cuestión de meses, el coronavirus expuso las fallas, las carencias y la fragilidad de nuestro sistema de desarrollo y de nuestro contrato social, basados en una explotación insostenible de los recursos y en la agudización permanente de las brechas de inequidad. La pandemia nos demostró que nuestros sistemas financieros y de salud, nuestras redes de bienestar y nuestras cadenas de suministro son tan vulnerables que, retomando las palabras del secretario general de Nacionales Unidas, Antonio Guterres, "un virus diminuto es capaz de derrumbarlos".',
							"Según el Grupo Intergubernamental de Expertos sobre el Cambio Climático (IPCC), atravesamos la peor crisis económica y humanitaria en 100 años. Sin embargo, estos impactos peligrosos y costosos que experimentamos ahora parecerán leves en comparación con los que enfrentaremos si no logramos mantener el calentamiento global por debajo de los 1.5 °C (con respecto a la era preindustrial) para finales de este siglo.",
						]}
					/>
					<img src={articulo2} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"En México, según datos de la Secretaría de Medio Ambiente y Recursos Naturales (Semarnat), los costos de la inacción tendrían un impacto extraordinario: al 2100 serían comparables a perder entre el 50% y el 200% del PIB nacional.",
							"Si bien estas cifras son alarmantes, no deberían traducirse en desesperanza o inacción. Por el contrario, tenemos ante nosotros todavía la oportunidad de tomar las medidas necesarias para, de manera conjunta, limitar el aumento de la temperatura global con soluciones que atiendan de manera simultánea los desafíos a los que nos enfrentamos como humanidad, bajo el entendimiento de que estas crisis (sanitaria, climática y económica) están interconectadas, y de que todas ellas afectan de manera desproporcionada a los más pobres y a los más vulnerables.",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						Este panorama obliga a ciudadanos, políticos, académicos,
						financieros, ONG y dirigentes empresariales a{" "}
						<span className="text-green1 font-medium">
							embarcarnos colectivamente en un viaje de transformación que nos
							lleve a un nuevo contrato social basado en el compromiso de
							aumentar el apoyo a los más vulnerables,{" "}
						</span>
						a la protección de los sistemas naturales de los que todos
						dependemos y a una acción colectiva más eficaz para hacer frente a
						las amenazas comunes.
					</p>
				</div>
				<div className="">
					<ArtParagraphs
						paragraphs={[
							"Es una mentira que se tenga que elegir entre el crecimiento económico o impulsar la equidad, la justicia social y un aprovechamiento respetuoso de nuestros recursos naturales que además nos haga resilientes. Existe evidencia de que es posible construir ese futuro. Diversos análisis del Instituto de Recursos Mundiales (WRI, por sus siglas en inglés) han demostrado que tiene sentido social, económico y ambiental el impulsar el desarrollo de las energías renovables, la eficiencia energética y la transición hacia una economía verde, y que ello es compatible con el objetivo nacional de combatir la pobreza y asegurar la autosuficiencia energética.",
							"Este panorama obliga a ciudadanos, políticos, académicos, financieros, ONG y dirigentes empresariales a embarcarnos colectivamente en un viaje de transformación que nos lleve a un nuevo contrato social basado en el compromiso de aumentar el apoyo a los más vulnerables, la protección de los sistemas naturales de los que todos dependemos y una acción colectiva más eficaz para hacer frente a las amenazas comunes.",
							"Todos debemos participar, porque las acciones de los gobiernos nacionales y subnacionales no podrán reducir por sí solas las emisiones ni descarbonizar sus economías.",
						]}
					/>
					<ArtList
						variant="list-disc"
						elements={[
							"El llamado al sector empresarial sería apostar por inversiones verdes y proyectos de eficiencia energética y energías renovables, y empujar a todos los integrantes de su cadena de suministro para garantizar medidas rigurosas e inmediatas con el fin de reducir a la mitad las emisiones globales para 2030 y llegar a emisiones netas cero en 2050.",
							"En el sector financiero, se deben consolidar y promover los estímulos financieros existentes para reactivar la economía; orientar la reactivación económica al cumplimiento de las metas climáticas; retomar los mecanismos financieros verdes del sector público mexicano que son pioneros, y sumar las iniciativas conjuntas del sector que promuevan la adopción de medidas sostenibles.",
							"Las ciudades pueden ser una piedra angular en la lucha contra el cambio climático. Se necesita crear mecanismos de gobernanza metropolitana; generar incentivos jurídicos y financieros para una distribución del suelo equitativa; relocalizar las estrategias de recuperación a la escala de barrio; reducir las brechas de inequidad en el acceso a servicios, bienes y oportunidades, y generar y hacer visibles los datos que sustenten las políticas de recuperación. Asimismo, se debe fortalecer a los gobiernos subnacionales con mejores jerarquías y mecanismos de seguimiento y rendición de cuentas; incorporar a las autoridades ejidales e indígenas en la toma de decisiones; añadir la dimensión de derechos humanos a las emergencias sanitaria y climática, y trabajar en la creación de un nuevo contrato social que sea sostenible.",
							"En materia de movilidad, se necesita recuperar el estatus del transporte público como servicio esencial y como tema prioritario; trazar un plan de movilidad integral con visión a largo plazo, flexible para su adaptación; implementar una nueva movilidad con ciclovías emergentes y la expansión de senderos peatonales, e integrar la perspectiva de género a los planes de movilidad. Apostar por la electromovilidad, por ejemplo, ayudaría a mejorar la calidad del aire, pues hoy aproximadamente el 95% de la población del mundo vive en áreas donde no se respira un aire limpio.",
							"En energía, se requiere alinear inversiones energéticas para lograr metas de acuerdos internacionales; promover proyectos a escala subnacional, conciliando los marcos jurídicos; impulsar la descentralización del sector eléctrico para atraer la inversión; integrar más fuentes renovables a la red eléctrica usando la tecnología existente y sumar mecanismos como cooperativas energéticas, e incorporar la justicia laboral.",
							"También debemos impulsar una transición a una economía circular en el manejo de los residuos plásticos posconsumo que son un problema a nivel mundial, compartido en toda la cadena de valor, desde los productores hasta los consumidores.",
							"Otro tema trascendental es que México necesita revitalizar sus programas y mecanismos que favorecen la conservación, la restauración, el manejo y el aprovechamiento de los recursos forestales. Necesitamos atender las necesidades del sector primario, como el acceso a bienes y servicios; impulsar la colaboración con todos los actores para la implementación de soluciones; reconocer a la actividad forestal como prioritaria en los planes de reactivación; potenciar el capital humano comunitario mediante la educación y capacitación, y apoyar la participación de las mujeres en la elección e implementación de soluciones. En esta década que inicia, denominada Década de la Restauración de Ecosistemas por las Naciones Unidas, México tiene la oportunidad de revertir la tendencia de degradación ambiental e incrementar los sumideros de carbono, estableciendo prácticas y objetivos que ayuden a reparar la estructura, función, diversidad y dinámica de los ecosistemas, a la vez que se mejoran los medios de vida de las comunidades rurales.",
						]}
					/>

					<ArtParagraphs
						paragraphs={[
							"El camino es claro, debemos impulsar políticas e inversiones inteligentes respaldadas por un liderazgo audaz que permita a las naciones del mundo, en el corto plazo, reconstruirse de mejor manera y, en el lago plazo, reactivar y reconfigurar sus economías para ser más fuertes, resilientes, justas y sostenibles.",
							"Resulta evidente que el viejo paradigma de desarrollo es insuficiente y obsoleto. No alcanza con crecer, necesitamos un nuevo modelo que no solo apunte a la convergencia de ingresos, sino también al cierre de la brecha social con un enfoque de derechos y que respete los límites del planeta.",
						]}
					/>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
