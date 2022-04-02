import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";
import Referencias from "../../components/shared/Referencias";

import autor from "../../images/autores/autor21.jpg";
import articulo1 from "../../images/articulos/articulo21-1.jpg";

const Articles = () => {
	return (
		<Layout
			title="La perspectiva de los cuidados para la economía verde"
			description="La perspectiva de los cuidados para la economía verde"
			url="/articulos/perspectiva_cuidados"
			image={articulo1}
		>
			<HeaderArticle
				bgcolor="bg-green5"
				title="La perspectiva de los cuidados para la economía verde"
				titleColor="text-white"
				variant="lines"
				subImage={autor}
				subColor="text-white"
				subAuthor="Por: Claudia Maldonado Trujillo"
			>
				Profesora-investigadora de la UAM Xochimilco y consejera académica de
				Coneval. Se especializa en teoría y métodos para la evaluación de
				políticas, política social y política pública comparada. Actualmente
				ocupa la Cátedra de Estudios de México en la Universidad del Sur de
				California.
			</HeaderArticle>
			<ArticleLayout
				header="La perspectiva de los cuidados para la economía"
				siguiente="/articulos/fiscalizacion_emisiones"
				url="/perspectiva_cuidados"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<ArtParagraphs
						paragraphs={[
							"El concepto de la economía viva (living) propone rediseñar nuestras economías para que la vida sea más valiosa que el dinero y el poder resida en hombres y mujeres ordinarios que cuidan de sí mismos, de su comunidad y el medio ambiente. El desafío para el futuro es construir una plataforma amplia para una economía intergeneracional y sensible al género, basada en la ética del cuidado al medio ambiente.",
						]}
					/>
					<p className="font-bold">Wendy Harcourt, 2014</p>
					<img src={articulo1} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"La pandemia generada por el virus Sars-Cov-2 reafirmó vulnerabilidades sistémicas e intensificó el debate global en torno al papel de la resiliencia y la protección social para enfrentar los riesgos crecientes actuales, especialmente aquellos asociados al cambio climático. En América Latina, la naturaleza de las afectaciones y los retrocesos sociales y económicos destacó la necesidad de adoptar medidas más agresivas para enfrentar las desigualdades estructurales de la región, especialmente la de género y la brecha digital (CEPAL, 2021). En México, al igual que en otros países, el shock de ingreso y sus efectos diferenciados y desigualadores (Coneval, 2021) reanimó el debate en torno a la necesidad de reducir la brecha económica de género como instrumento imprescindible para la recuperación económica y uno de los pilares de la visión de reconstruir mejor (build back better).",
							"En general, estos momentos de adversidad visibilizaron viejos y nuevos desafíos para la protección de las personas como sujetos de derechos, a lo largo del curso de vida, y les dieron inédita viabilidad política a algunas propuestas de política pública como el ingreso mínimo de emergencia y la construcción del sistema nacional de cuidados. Aunque la discusión no fructificó aún en pasos decisivos en esa dirección, se ha iniciado un proceso de reflexión y debate de gran relevancia. En este contexto, resulta indispensable mantener una mirada integral y comprehensiva que prevenga la fragmentación de la agenda y el avance desarticulado, incluso contradictorio, de algunas de estas propuestas.",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						En materia de bienestar, destaca el papel central de las funciones
						de cuidado en la protección de la vida,{" "}
						<span className="text-green1 font-medium">
							la reproducción y el bienestar, por un lado, y el énfasis en una
							visión postconsumista del bienestar, por otro.
						</span>
					</p>
				</div>
				<div className="">
					<ArtParagraphs
						paragraphs={[
							"En este texto se discute la necesaria relación entre la transición a la economía verde y la perspectiva de los cuidados. El planteamiento central es simple. En primer lugar, no hay economía verde posible en ausencia de una transformación profunda de la economía de los cuidados. En segundo lugar, la perspectiva de los cuidados y el movimiento del desarrollo verde comparten, con los Objetivos del Desarrollo Sostenible, una visión de sostenibilidad social basada en la inclusión y el bienestar que se refuerzan mutuamente. Finalmente, tomar los derechos de las personas en serio, con una perspectiva de justicia intergeneracional y balance planetario es en el fondo el núcleo de la visión de desarrollo del siglo XXI.",
							"El cuidado se refiere a las actividades que permiten la generación y regeneración del bienestar físico y emocional de las personas, que incluyen el cuidado a terceros y el autocuidado. La economía del cuidado se refiere a las relaciones que regulan la oferta y demanda de servicios de cuidado en la familia, la comunidad y los mercados. En general, la idea de economía del cuidado destaca una parte fundamental e imprescindible del proceso de producción que no se reconoce ni valora en términos monetarios y sociales, pero de la que depende cualquier proceso de producción de valor social y económico. Por esta razón, no hay desarrollo ni bienestar posibles sin que se cubran las funciones sociales básicas del cuidado. Históricamente, estas actividades fundamentales para la producción y el desarrollo económico las realizan las mujeres, con frecuencia en forma no remunerada. Cuando dichas actividades son remuneradas, como en los servicios públicos y privados de atención a la infancia o la edad adulta, suelen ser trabajos feminizados, precarios y de bajo reconocimiento social, lo que contribuye a su invisibilidad.",
							"Durante la segunda mitad del siglo XX, la inclusión de las mujeres en el mercado laboral, el cambio en la estructura y el curso de vida de los hogares y la expansión de la esperanza de vida en el mundo supusieron un aumento significativo en la demanda por cuidados. Ante la insuficiencia de las instituciones públicas y privadas, esta demanda sigue siendo atendida, en forma predominante y no remunerada, por mujeres. Eso supone una carga desproporcionada de tiempo que impide a las mujeres y niñas la acumulación de capital humano y la inclusión laboral en igualdad de oportunidades, perpetuando así la desigualdad sustantiva entre hombre y mujeres, frenando el potencial de desarrollo de la mitad de la población mundial y perpetuando un régimen de producción y consumo basado en la explotación del trabajo femenino no remunerado y no reconocido: un componente imprescindible para sostener la vida, la reproducción social y de la fuerza de trabajo, así como la producción económica, el desarrollo y el bienestar.",
							"La idea de construir sistemas integrales de cuidados supone el reconocimiento público de una responsabilidad comunitaria respecto a los cuidados y la necesidad de democratizarlos a través de mecanismos mixtos (público y privados) que liberen a las mujeres de esta desproporcionada carga social impuesta e involucren más directamente a todas las personas en la responsabilidad y el derecho al cuidado, y socialicen, a través de instituciones financiadas con impuestos generales, los costos reales de la prestación social del cuidado, legitimando, valorando, reconociendo y profesionalizando una parte importante de su oferta en beneficio del desarrollo de las personas, sin distinción alguna. Un sistema de cuidados permite ampliar el potencial económico y promover la innovación social porque libera el tiempo y el talento de las personas cuidadoras en beneficio individual, de la comunidad y la sociedad en general.",
							"Asimismo, como en el caso de infancia temprana, guarderías y, en general, el combate a la desigualdad y la exclusión desde el inicio del curso de vida, las intervenciones que aseguran las funciones de cuidado con calidad (atención, salud, educación y acompañamiento al desarrollo socioemocional y cognitivo) son altamente costo-efectivas, ya que afectan favorablemente las trayectorias de vida de las personas y previenen comportamientos de riesgo; es decir, contribuyen a la sostenibilidad fiscal de los regímenes de protección social.",
							"Como ha señalado la CEPAL (2021), la principal vía para la recuperación económica sostenible e inclusiva de América Latina implica priorizar la inclusión económica de las mujeres de forma categórica, no solo por razones de justicia social, sino como un imperativo de política económica. En América Latina, la participación económica remunerada de las mujeres ronda el 50 %, 25 puntos porcentuales debajo de la población masculina. En México, 52 % de las mujeres no puede trabajar en forma remunerada por su dedicación exclusiva a las labores de cuidado en el hogar (Enadis, 2017). Las mujeres dedican casi el triple de tiempo que los hombres a trabajo no remunerado (ENUT, 2019). Esta pobreza de tiempo está asociada sistemáticamente con menores oportunidades de educación, trabajo, desarrollo y bienestar, y opera como correa de transmisión de vulnerabilidades a los miembros menores del hogar, especialmente en los hogares de jefatura femenina. Es bien sabido, por ejemplo, que la escolaridad de la madre es un predictor muy importante de desarrollo infantil, aprovechamiento escolar, salud y alimentación en el hogar.",
							"Por su parte, la economía verde es un llamado a un cambio paradigmático en el modelo de crecimiento económico a favor de la sostenibilidad planetaria y la justicia intergeneracional. La economía verde busca redefinir y alcanzar la prosperidad dentro de los límites ecológicos del planeta poniendo a las personas en el centro de los procesos de desarrollo.  Por sus principios y su orientación, la economía verde apuesta al bienestar centrado en las personas y la protección al medio ambiente y a la construcción de riqueza para generar bienestar e inclusión en contraste con el crecimiento del valor de la producción como un fin en sí mismo. Al mismo tiempo, la economía verde hace suya la responsabilidad de progresar dentro de los límites planetarios respetando la justicia intergeneracional, con los principios de eficiencia y suficiencia, y la necesidad de un modelo de gobernanza abierto, participativo y descentralizado (GEC, 2020; Söderholm, 2021). Por ende, por visión y vocación transformadora, la atención a la economía de los cuidados es inseparable de la transición a una economía verde en su sentido más amplio: por eficiencia, equidad, inclusión y justicia intergeneracional.",
							"La noción de crecimiento verde ha sido discutida, incluso criticada, desde la economía política feminista, la ecología feminista (Bauhardt y Harcourt, 2019) y los enfoques postcrecimiento (o de decrecimiento de la economía) (Raworth, 2017). Pero en general, hay consenso en los valores centrales compartidos: bienestar, inclusión, eficiencia y respeto a los límites planetarios. En materia de bienestar destaca el papel central de las funciones de cuidado en la protección de la vida, la reproducción y el bienestar, por un lado, y el énfasis en una visión postconsumista del bienestar. Esta visión es cualitativamente distinta a la abundancia material y promueve la reutilización y la adopción de tecnologías limpias y mecanismos descentralizados de innovación social colaborativa. Vista así, la economía verde obliga a la reasignación equitativa, regenerativa y restaurativa de cargas de tiempo para la función del trabajo entre hombres y mujeres, y entre los individuos, la comunidad y el Estado.",
							"Por estas razones, es importante que la discusión sobre el futuro del desarrollo y la protección social del siglo XXI esté anclada en la perspectiva de los cuidados. Solo así será posible imaginar las políticas, las instituciones, los instrumentos y los modelos de gobernanza que reconozcan y respeten la dignidad de todas las personas, liberen su potencial productivo y creativo, y prevengan los procesos de explotación de recursos humanos, naturales y materiales que hoy amenazan con destruir al planeta.",
						]}
					/>
				</div>
				<Referencias
					referencias={[
						{
							ref: "Bauhardt, Christine y Wendy Harcourt (eds) (2019). Feminist Political Ecology and the Economics of Care. In Search for an Economic Alternative.",
							subref: "NY y Londres: Routledge.",
						},
						{
							ref: "Green Economy Coalition (2020).",
							subref: "The Green Economy.",
						},
						{
							ref: "Raworth, Kate (2017). Doughnut Economics: Seveb Ways to think like a 21st Century Economist.",
							subref: "Oxford: Random House.",
						},
						{
							ref: "Söderholm, Patrick (2020).",
							subref: "Sustainable Earth.",
						},
					]}
				/>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
