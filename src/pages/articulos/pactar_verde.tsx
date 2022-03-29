import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";

import autor from "../../images/autores/autor4.jpg";
import articulo1 from "../../images/articulos/articulo4-1.png";

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
				title="Pactar verde y caminar hacia 2030"
				titleColor="text-white"
				variant="lines"
				subImage={autor}
				subColor="text-white"
				subAuthor="Por: Alfredo González"
			>
				Encargado del Secretariado Ejecutivo del Consejo Nacional de la Agenda
				2030 para el Desarrollo Sostenible desde marzo de 2021, con trayectoria
				en asuntos de pobreza, desigualdades y economía desde el gobierno
				federal, la sociedad civil y Naciones Unidas, en México y América
				Latina.
			</HeaderArticle>
			<ArticleLayout
				arts={otherArts}
				header="Pactar verde y caminar hacia 2030"
				siguiente="/articulos/regeneracion_ecologica"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<p className="mb-4">
						Entiendo aquí por pacto verde aquel entre quienes tienen mayor
						influencia en las decisiones que nos afectan a la mayoría de las
						personas para avanzar en acciones colectivas que sean positivas para
						el medio ambiente.
					</p>
					<p className="mb-4 font-semibold">
						Plantear un pacto verde para México debe empezar por entender a
						nuestro país en el contexto global. Somos un país de ingreso medio
						con enorme diversidad social, económica y política, y una alta
						desigualdad en una de las regiones más desiguales del mundo. Desde
						antes de la pandemia por COVID-19, pero aún más con su llegada,
						necesitamos actividad económica y empleo para toda la población y,
						particularmente, para el 43 % que está en situación de pobreza:
						hogares que hoy no ganan lo suficiente para cubrir sus necesidades
						más elementales de alimentación, salud, educación, vestido, vivienda
						y servicios.
					</p>
					<p className="mb-4">
						El reto es enorme y no es exclusivo de México. En otros países de
						ingreso medio se enfrentan retos muy similares. Algunos, como China
						e India, gracias a su dinamismo económico han contribuido a la
						disminución global del número de personas en pobreza, pero millones
						de personas en esos países y en muchos más todavía no logran salir
						de esa situación. Por supuesto, el problema es aún más grave en los
						países de ingreso bajo.
					</p>
					<img
						src={articulo1}
						className="my-12 max-w-full m-auto"
						alt="Pacto Verde"
					/>
					<p className="mb-4">
						En general, me refiero a los países que conforman lo que suele
						llamarse “sur global”. Para todas estas naciones, hablar de pactos
						verdes implica balancear las necesidades del presente y del futuro
						de millones de personas en sus respectivos territorios. En su
						conjunto, esos países necesitan atender, con los medios que tienen a
						su alcance hoy, a miles de millones para quienes es literalmente
						vital recibir al menos un pequeño ingreso de manera regular.
					</p>
					<p className="mb-4">
						Al mismo tiempo, el sur global tiene a élites que incluyen algunas
						de las personas más ricas del mundo, para cuyas familias el futuro
						está garantizado por generaciones y cuya riqueza les da una enorme
						influencia en las decisiones que afectan el futuro de la mayoría de
						la población mundial.
					</p>
					<p className="mb-4">
						En contraste, hay países de ingreso alto en los que la desigualdad
						es mucho menor, y donde la pobreza es más reducida y tiene formas
						menos precarias. Muchos de ellos cuentan con sistemas de protección
						social que (todavía) son pilares fundamentales de niveles altos de
						bienestar. Además, poseen una larga acumulación de recursos
						financieros, humanos y tecnológicos que les permiten plantearse
						objetivos de política nacional e internacional innovadores y
						ambiciosos.
					</p>
					<p className="mb-4">
						Por otra parte, hay que recordar que no todos los países han
						contribuido por igual a la crisis climática que vivimos hoy. La alta
						acumulación de gases de efecto invernadero que enfrentamos en la
						actualidad a nivel global es producto de largas trayectorias de
						desarrollo industrial, en parte protagonizadas por países que hoy
						son de ingreso alto gracias a una compleja historia de extractivismo
						colonial que todavía los sigue beneficiando.
					</p>
					<p className="mb-4">
						Aunque algunos de estos países ya no contribuyen mucho, sí lo han
						hecho antes. Algunos de ellos no lo hacen dentro de sus territorios,
						pero sí a través de las inversiones y la producción que tienen en
						otros países. Algunos otros, a pesar de ser países de ingreso alto
						con altas capacidades tecnológicas, siguen contribuyendo en muy
						buena medida.
					</p>
					<p className="mb-4">
						En este sentido, es importante saber cuánto contribuye cada quien;
						por ejemplo, mientras en México se genera el 1.2 % de las emisiones
						de dióxido de carbono de todo el mundo, en China se genera el 29 %;
						en Estados Unidos, el 15 %; en India, el 7 %; en Rusia, el 5 %, y en
						Japón, el 3 %, aproximadamente, según cifras de 2019 del Atlas
						Global del Carbono.
					</p>
					<p className="mb-4">
						También hay que saber que México está reactivando plantas
						hidroeléctricas y construyendo campos solares con la intención
						explícita de emprender una indispensable transición energética y, a
						diferencia de varios países de ingreso medio y alto, su mix
						energético es menos intensivo en carbón y ya no está construyendo
						nuevas centrales carboeléctricas. Asimismo, se trabaja con el sector
						privado, incluyendo pymes, para la reducción de sus emisiones de
						carbono, y en la movilidad cero-emisiones, la economía circular y la
						conservación y ampliación de grandes superficies de bosques y selvas
						en todo el territorio.
					</p>
					<p className="mb-4">
						Así, un pacto verde para México requiere incorporar la dimensión
						internacional a la conversación, saber ver que compartimos y
						enfrentamos dilemas imposibles, igual que muchos otros países, y que
						nuestro camino hacia una organización social más verde lleva ya
						algunos pasos y tendrá que ser distinto al de países (y élites) que
						gozan de ventajas estructurales con raíces históricas.
					</p>
					<p className="mb-4">
						Un pacto verde para México necesariamente deberá articularnos más y
						mejor entre países de ingreso bajo, medio y alto para impulsar
						formas de cooperación que nos permitan llevar a cabo transiciones
						diferenciadas que respondan a las necesidades y los dilemas
						distintos que enfrentamos naciones diferentes.
					</p>
					<p className="mb-4">
						Una lógica similar, guardada toda proporción, debería propiciarse al
						interior del país, entre regiones con necesidades y posibilidades
						distintas. Hay que identificar los nichos de transformación más
						viables que tenemos y acordar el ritmo al que debemos trabajar en
						ellos en las distintas actividades económicas y lugares del país.
					</p>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						Un pacto verde, para que realmente sea sostenible en México y en el
						mundo, tiene que
						<span className="text-green1 font-medium">
							proponer transiciones diferenciadas que se coordinen entre sí bajo
							los principios de justicia y equidad.
						</span>
					</p>
				</div>
				<div className="">
					<p className="mb-4">
						En este escenario, la Agenda 2030 para el Desarrollo Sostenible
						puede servirnos como un horizonte hacia el cual caminar en esas
						transiciones. Al ser un compromiso de todos los países representados
						en la ONU para reducir desigualdades, promover la paz y construir
						alianzas para mejorar en lo económico, en bienestar y en medio
						ambiente, esta agenda nos ofrece un punto de llegada para lo que
						podríamos esperar como resultado de un pacto verde. Y por ello puede
						también facilitar nuestra conversación sobre cómo llegar hasta allá.
					</p>
					<p className="mb-4">
						El 2030 nos alcanzará y habremos avanzado en muchos ámbitos, pero
						seguiremos necesitando deliberar y pactar para los años siguientes.
						Más nos vale ampliar la mirada, reconocer nuestras responsabilidades
						y posibilidades dentro y fuera del país, asumir que enfrentamos
						barreras estructurales que escapan a nuestro control inmediato,
						interactuar proactivamente con el resto del mundo, entender y
						atender las implicaciones para distintos grupos de población, y con
						esa mirada pactar verde.
					</p>
					<p className="mb-4">
						Esto también implica, por cierto, hablar de que no hay conocimiento
						libre de valores, que absolutamente todas actuamos desde nuestra
						experiencia particular, y que esto inevitablemente dará identidad al
						pacto verde que logremos construir. Por ello, será mejor si
						reflexionamos y asumimos desde el inicio nuestras posiciones
						ideológicas, las ponemos sobre la mesa y hablamos proponiendo de
						manera transparente nuestras prioridades.
					</p>
					<p className="mb-4">
						En ese sentido, afirmo que cualquier pacto verde deberá poner
						siempre como máxima prioridad cuidar y mejorar la vida de las
						personas que hoy, en este día y a esta hora, tienen las condiciones
						de vida más precarias y vulneradas; personas que muy probablemente
						ya enfrentan y enfrentarán más que nadie los efectos de la crisis
						climática y de todas las acciones que emprendamos para remediarla,
						dentro y fuera de nuestro país.
					</p>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
