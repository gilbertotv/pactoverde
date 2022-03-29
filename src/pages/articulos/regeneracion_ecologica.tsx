import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";

import autor from "../../images/autores/autor5.jpg";
import articulo1 from "../../images/articulos/articulo5-1.png";
import articulo2 from "../../images/articulos/articulo5-2.png";
import Referencias from "../../components/shared/Referencias";

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
				bgcolor="bg-green6"
				title="Economía social y solidaria para la regeneración ecológica en México"
				titleColor="text-white"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Alberto Irezabal Vilaclara"
			>
				Ingeniero industrial por la Universidad Iberoamericana y doctor en
				Gestión Avanzada de Organizaciones y Economía Social por la Universidad
				Mondragón, en España. Es director del Centro Internacional de
				Investigación de la Economía Social y Solidaria. Tiene una extensa
				experiencia de trabajo con comunidades tseltales de Chiapas en finanzas
				solidarias.
			</HeaderArticle>
			<ArticleLayout
				arts={otherArts}
				header="Economía social y solidaria"
				siguiente="/articulos/pilares_pacto_verde"
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
					<p className="mb-4">
						Llevamos varios años escuchando el mensaje de alarma de diversos
						referentes internacionales, líderes políticos y religiosos,
						científicos y filósofos que nos advierten que las cosas no van bien
						en nuestro planeta, nuestra casa común. No solo hablan de los
						estragos de las diversas crisis económicas o del cambio climático,
						sino que muchos coinciden en un proceso más complejo de crisis
						civilizatoria que amenaza la vida en general, especialmente visible
						en las regiones y los sectores más vulnerables. Uno de los últimos
						llamados de emergencia fue el que realizó António Guterres,
						secretario general de la Naciones Unidas, en su discurso inaugural
						ante la asamblea general de 2021: “estamos ante la orilla del
						abismo, caminando en la dirección equivocada […]. Enfrentamos la
						mayor cascada de crisis de nuestras vidas” (ONU, 2021). Y es que
						cuando hablamos de crisis civilizatoria tenemos que entender que
						todo está conectado, y que pretender resolver el problema
						multidimensional del cambio climático implica obligatoriamente
						considerar diferentes dimensiones como la pobreza y desigualdad
						social, el modelo de generación y distribución energética, el modelo
						económico e inclusive la propia forma de pensarnos como sociedad.
						Estamos en un momento histórico como civilización en el que habrá
						que enfrentar un dilema entre colapso o transformación
						civilizatoria, entre extinción o supervivencia (Toledo, 2020).
					</p>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-red1 font-medium">
							Es viable un estilo de producción agroecológica y regenerativa
						</span>
						que contribuya tanto a la soberanía alimentaria de las familias
						campesinas como a la del país, a través de los diversos productos
						orgánicos que entregan al mercado.
					</p>
				</div>
				<div className="border-b border-gray2">
					<p className="mb-4">
						Es visible el deterioro ecológico que vive el planeta y nuestro
						México. Nos enfrentamos al incremento sostenido de la temperatura
						global derivado de los gases de efecto invernadero y a la pérdida de
						biodiversidad, con indicadores alarmantes: el 70% de la superficie
						del planeta ha sido alterada por la actividad humana; el 66% de los
						océanos tiene algún tipo de impacto; el 85% de los humedales se han
						perdido y hay más de un millón de especies en peligro de extinción
						(Carabias, 2020). México es reconocido como uno de los 17 países
						megadiversos del planeta, los cuales sostienen entre el 60 y 70% de
						su biodiversidad, y destaca como centro de origen de diversas
						especies, muchas de ellas endémicas al país (Gobierno de México,
						2016). Por otro lado, contrasta por ser uno de los países en donde
						la mayor parte de la población vive en situación de pobreza y por su
						extrema desigualdad social. Es paradójico que en muchos de los
						municipios más pobres del país se encuentran las regiones de mayor
						biodiversidad.
					</p>
					<p className="mb-4">
						Si bien el riesgo es grande, también hay esperanza. En muchas de
						estas regiones ricas en cultura y biodiversidad, pero pobres en
						términos económicos, podemos encontrar diversas estrategias para la
						superación de esta crisis y construir resiliencia a nivel familiar,
						comunitario y territorial. Son ejemplo de ello los cientos de
						cooperativas y ejidos indígenas y campesinos desde cuya propia
						cosmovisión, y con base en los principios de la economía social y
						solidaria, se organizan para producir —y vivir— en armonía con la
						madre Tierra. Se basan en un modelo alternativo de hacer economía
						—producción, distribución, consumo y reinversión— al servicio de las
						personas y su buen vivir (Marañon y López, 2013). Tienen su
						referente en la vida comunitaria, el cual está sustentado por el
						principio de la reciprocidad (Razeto, 1999), que compete no solo a
						la vida social, sino también a la relación con la naturaleza (Toledo
						y Espejel, 2014). Consolida vínculos sociales armónicos y duraderos
						entre comunidades sin la explotación del trabajo ajeno (Coraggio,
						2007) y está enfocada en construir un desarrollo alternativo
						(Comparte, 2011). Como alternativas económico-productivas en sus
						territorios, tienen la posibilidad de actuar como vehículos de
						desarrollo socioeconómico territorial (Giovannini, 2012), debido a
						que nacieron en la base, desde una dimensión colectiva. Cuentan con
						un objetivo social arraigado a su territorio y cultura, y se
						articulan con otros movimientos, locales y externos, buscando
						prácticas innovadoras que eviten su fracaso.{" "}
						<span className="font-semibold">
							Demuestran que es viable un estilo de producción agroecológica y
							regenerativa que contribuya tanto a la soberanía alimentaria de
							las familias campesinas como del país, a través de los diversos
							productos orgánicos que entregan al mercado.
						</span>
					</p>
					<img
						src={articulo2}
						className="m-auto my-12 max-w-full"
						alt="Pacto Verde"
					/>
					<p className="mb-4">
						Hay que apostar por este tipo de experiencias colectivas basadas en
						la economía social y solidaria para contribuir a mejorar la
						situación de pobreza y exclusión que viven millones de familias
						campesinas e indígenas en nuestro país, y así, progresivamente a
						revertir los efectos del cambio climático y promover sociedades más
						resilientes. Para ello, es imperativo que se den dos condiciones:
					</p>
					<p className="mb-4">
						1. Un cambio en la política pública nacional actual, en especial
						mediante ajustes a los programas de transferencias condicionadas,
						que no solo apoye a los individuos, sino que promueva organizaciones
						de economía social y solidaria, las cuales tienen mayores
						condiciones para ser exitosas en el incremento de la resiliencia
						familiar y la regeneración del patrimonio biocultural del país en el
						largo plazo.
					</p>
					<p className="mb-4">
						2. La articulación de diversos actores, públicos y privados, que se
						sumen a la lucha y resistencia de estas organizaciones para asegurar
						sus medios de vida y el cuidado de la madre Tierra. La tarea es
						compleja y es responsabilidad de todas y todos. Somos las
						universidades, fundaciones y empresas privadas quienes tenemos que
						blindar a estas experiencias, frágiles pero esperanzadores, del
						contexto adverso y desfavorable que enfrentan. De esta forma podrán
						escalar su trabajo y transformar su territorio disminuyendo la
						pobreza y la desigualdad, y probar que es posible una regeneración
						ecológica. Por último, será importante sumar a gobiernos locales y
						nacionales, los cuales, con base en experiencias de economía social
						y solidaria locales probadas, podrán sumar su apoyo para una
						necesaria transformación nacional.
					</p>
				</div>
				<Referencias
					referencias={[
						{
							ref: "Carabias, J. (2020). Desarrollo Social con Sustentabilidad Ambiental.",
							subref: "Revista IBERO, 4-10. Disponible en: ",
							link: "https://doi.org/ISSN 2594-2662",
						},
						{
							ref: "Comparte (2011). El desarrollo alternativo por el que trabajamos Aprendizajes desde la experiencia.",
							subref: "ALBOAN.",
						},
						{
							ref: "Coraggio, J. L. (2007). El papel de la Economía Social y Solidaria en la Estrategia de Inclusión Social.",
							subref: "FLACSO y SENPLADES, Quito, 10-13.",
						},
						{
							ref: "Giovannini, M. (2012). Social Enterprises for Development as Buen Vivir.",
							subref:
								"Journal of Enterprising Comm, 6(3), 284-299. Disponible en: ",
							link: "https://doi.org/10.1108/17506201211258432",
						},
						{
							ref: "Gobierno de México. (2016). Estrategia Nacional sobre Biodiversidad de México.",
							subref: "Ciudad de México.",
						},
						{
							ref: "Guterres, A. (2021). Discurso de apertura en la asamblea general de las Naciones Unidas.",
							subref: "21 de septiembre de 2021. Disponible en: ",
							link: "un.org/sg/en/node/259283",
						},
						{
							ref: "Marañon, B., y D. López. (2013). La solidaridad económica y el buen vivir en México: Una reflexión crítica. Miradas sobre la economía social y solidaria en México, 121.",
							subref: "México: Universidad Iberoamericana Puebla.",
						},
						{
							ref: "Razeto, L. (1999). La economía de solidaridad: concepto, realidad y proyecto.",
							subref: "Persona y Sociedad, 13(2), 1-19.",
						},
						{
							ref: "Toledo, V. (2020). Hacia una política por la vida.",
							subref: "Revista IBERO, 14-17. Disponible en: ",
							link: "https://doi.org/ISSN 2594-2662",
						},
						{
							ref: "Toledo, V. M., & Espejel, B. O. (2014). México, Regiones que caminan hacia la sustentabilidad: Una geopolítica de las resistencias  bioculturales.",
							subref: "México: Universidad Iberoamericana Puebla.",
						},
					]}
				/>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
