import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";
import ArtSubtitle from "../../components/shared/ArtSubtitle";

import autor from "../../images/autores/autor23.jpg";
import articulo1 from "../../images/articulos/articulo23-1.jpg";
import articulo2 from "../../images/articulos/articulo23-2.jpg";
import articulo3 from "../../images/articulos/articulo23-3.jpg";

const Articles = () => {
	return (
		<Layout
			title="La transformación productiva de apoyo a la economía verde"
			description="La transformación productiva de apoyo a la economía verde"
			url="/articulos/transformacion_productiva"
			image={articulo1}
		>
			<HeaderArticle
				bgcolor="bg-green5"
				title="La transformación productiva de apoyo a la economía verde"
				titleColor="text-white"
				variant="lines"
				subImage={autor}
				subColor="text-white"
				subAuthor="Por: Clemente Ruiz Durán"
			>
				Investigador de la UNAM, miembro del Sistema Nacional de Investigadores
				nivel III. Investiga sobre desarrollo industrial en América Latina, el
				futuro de la industria automotriz y los efectos del cambio climático. Es
				columnista de El Financiero.
			</HeaderArticle>
			<ArticleLayout
				header="La transformación productiva de apoyo"
				siguiente="/articulos/irreductibles_pacto_verde"
				url="/transformacion_productiva"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<img src={articulo1} className="mb-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"Desastres recientes propugnan la necesidad del recambio productivo",
							"Este 2021 ha hecho evidente que el proceso de cambio climático se aceleró, y los desastres naturales se multiplicaron con efectos negativos sobre la población. Sus consecuencias cada vez son más visibles: el número de huracanes se ha elevado alrededor del mundo, lo que para nuestro país está siendo especialmente grave, ya que México queda enclavado en una tierra de huracanes que han tendido a ser más violentos y extremos cada año. La Administración Nacional Oceánica y Atmosférica de Estados Unidos predijo una temporada activa de huracanes para 2021 en el Atlántico, con un pronóstico de que ocurran entre seis y 10. De ellos, de tres a cinco probablemente se conviertan en huracanes importantes de categoría 3 o superior en la escala Saffir-Simpson. Esta situación se asemeja a la vivida en la temporada 2020, en que hubo 14 huracanes en la cuenca del Atlántico, la mayor cantidad desde 2005, año del Katrina. Seis de ellos fueron huracanes importantes, incluido el Laura, que tocó tierra en Luisiana en agosto, y los Eta e Iota, que causaron devastaciones en Centroamérica en noviembre.",
							"A lo acontecido en el Atlántico se sumaron los efectos sobre la Costa del Pacífico, en donde la temporada de huracanes inició oficialmente el 15 de mayo en el océano Pacífico oriental y el 1 de junio en el Pacífico central, previéndose que estos terminen el 30 de noviembre. Este año, sin embargo, la temporada se adelantó con la tormenta tropical Andrés, que inició el 9 de mayo pasado marcando el segundo año consecutivo con actividad de pretemporada.",
							"Ciertamente, estos fenómenos meteorológicos siempre han existido y se repiten año con año, pero también es cierto que cada vez aparecen con más intensidad, y esto es derivado del proceso de deshielo que se observa, ya que el hielo de los polos se derrite y el agua resultante entra en las corrientes oceánicas de todo el planeta haciendo que, entre otras cosas, el nivel del mar suba drásticamente. Como consecuencia del deshielo, la temperatura del agua del planeta cambiará, y con ello la temperatura del aire, provocando huracanes, tormentas tropicales y ciclones que cada vez tendrán mayor intensidad.",
							"Lo anterior obliga a pensar en un rediseño de los asentamientos humanos en todo el territorio nacional; tenemos que disminuir los riesgos para minimizar los daños y preservar la vida. Es necesario restituir los fondos que se destinaban a enfrentar estos fenómenos naturales y la propuesta de presupuesto debería contemplar estos recursos. Si el Gobierno federal no los contempla corresponderá a los diputados solicitar la instauración de un Fondo Nacional para los Desastres Naturales. En una perspectiva más amplia, se debería establecer un programa para reducir las emisiones de gases de efecto invernadero. Por ello, es momento de repensar la política energética de México, ya que con la actual política estamos intensificando el calentamiento global. Siempre se puede rectificar en beneficio del país.",
							"Recambio productivo para alentar un desarrollo amigable con el medio ambiente",
							"Ante el desastre, se requiere hacer un esfuerzo para realizar cambios sustantivos en la estructura productiva. De lo contrario, la situación se va a agudizar en los próximos años y afectará a grupos cada vez más grandes de la población. Sin ser catastrofista, se puede argumentar que nadie estará a salvo de este panorama. Esta situación se ha ido empeorando año con año. En 2021, la intensidad de los huracanes se elevó para alcanzar las categorías 3 a 5 en la escala Saffir-Simpson. Esta elevación ha ido en aumento, de un promedio de alrededor de 1.6 por año en las décadas de 1970 y 1980, a un promedio de 3.1 a 3.8 por año en las décadas de 2000 y 2010. Ahora, a principios de la década de 1920, se ha elevado aún más, ya que los huracanes han alcanzado la categoría 5.",
							"El cambio climático ha sido identificado como la principal razón por la que ocurren huracanes más fuertes. Ante esto, se plantea la necesidad de recambios estratégicos para alcanzar las metas de reducción de los gases efecto invernadero. Entre los identificados estarían los de la generación de electricidad, ya que hoy por hoy las fuentes de abastecimiento de la energía eléctrica son fundamentalmente de combustibles fósiles, y su contribución al efecto invernadero es de aproximadamente el 27 %.",
							"En esta perspectiva, correspondería al Gobierno federal buscar alternativas para diversificar las fuentes de energía como la solar, la eólica, la geotérmica y la nuclear. Sin embargo, este Gobierno carece de una estrategia para diversificar las fuentes de energía y busca centralizar a través de una reforma constitucional todas las decisiones en la Comisión Federal de Electricidad. La meta podría ser que se tomaran como ejemplos de diversificación a los países europeos que han mostrado tener una visión de largo plazo para la generación de energía, tal como se muestra en el Cuadro 1.",
						]}
					/>
					<img src={articulo2} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"Esta transformación de las fuentes de energía es necesaria para poder introducir en el país un cambio hacia la electromovilidad. Si no se logra un proceso sostenido en la generación de energía eléctrica de fuentes renovables el proyecto se verá truncado, ya que los sistemas de transporte colectivo como el metro y los vehículos eléctricos adquirirán energía eléctrica de fuentes contaminantes. Hoy, el 71% proviene de petróleo y gas, es decir, se queman hidrocarburos para abastecer a la economía. La apuesta debería de ser que el origen de la energía proviniera del viento o del sol. En Dinamarca, el 56.3 % de la energía proviene del viento, y en Canadá, el 60.9 % proviene de fuentes hidroeléctricas.",
							"Una preocupación adicional es el reto de la sustitución del transporte urbano por transporte de energía eléctrica, como son los metros de la Ciudad de México, Guadalajara y Monterrey, que se han convertido en el eje neural del transporte, ya que brindan apoyo para que se realicen hasta 1,640 millones de viajes en la Ciudad de México y más de 100 millones de viajes en Guadalajara, por ejemplo. Un sistema que ha venido a apoyar esta transformación han sido los autobuses como el Metrobús, que se ha empezado a electrificar en un acuerdo público-privado en la Ciudad de México, en donde se llegó a un acuerdo para que la empresa ADO opere la línea 3.",
							"El otro gran reto es transformar la producción de automóviles hacia vehículos híbridos o eléctricos. En esta perspectiva, serán necesarios grandes acuerdos con las empresas automotrices para que aceleren la transformación de sus plantas productivas. Hoy día algunas empresas automotrices han empezado instalar plantas de producción de automóviles eléctricos, como es el caso de la Ford en Cuautitlán. La expectativa es que otras plantas empiecen a producir progresivamente más automóviles híbridos y eléctricos que hoy representan tan solo el 0.25 % del parque vehicular del país.",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-red1 font-medium">
							Se requiere de un gran esfuerzo público-privado para modificar la
							estructura de generación eléctrica,{" "}
						</span>
						así como de un gran pacto público-privado que impulse este proceso.
					</p>
				</div>
				<div className="">
					<img src={articulo3} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtSubtitle text="Una reflexión final" />
					<ArtParagraphs
						paragraphs={[
							"El aceleramiento del cambio climático ha forzado a que las economías rediseñen su estrategia de generación de energía eléctrica, y México se ha quedado rezagado en este proceso. Se requiere de un gran esfuerzo público-privado para modificar la estructura de generación eléctrica, así como de un gran pacto público-privado que impulse este proceso. A lo anterior se suma la necesidad de establecer consejos de planeación para impulsar la transformación del transporte público en cada ciudad del país, lo cual es una magna tarea que debe contemplar un horizonte de al menos 30 años para sustituir el transporte de gasolina por transporte eléctrico.",
							"Finalmente, es necesario establecer un Consejo de Planeación para el Desarrollo de la Industria Automotriz en México, con el fin de lograr compromisos público-privados que proyecten que en 30 años desaparezca el automóvil tradicional y sea sustituido por vehículos de energía limpia, como son los automóviles eléctricos y los de hidrógeno. Es momento de una gran concertación que visualice nuestro país al menos al año 2050.",
						]}
					/>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
