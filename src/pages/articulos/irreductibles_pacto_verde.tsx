import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";

import autor from "../../images/autores/autor1.png";
import articulo1 from "../../images/articulos/articulo1-1.png";

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
				title="Los irreductibles en un pacto verde para México"
				titleColor="text-white"
				variant="lines"
				subImage={autor}
				subColor="text-white"
				subAuthor="Por: Beatriz Paredes Rangel"
				subText="Actual senadora de la LXV Legislatura, con una extensa trayectoria en el servicio público como legisladora, gobernadora de Tlaxcala (1987-1992), dirigente de la Confederación Nacional Campesina y presidenta del PRI (2007-2011), así como embajadora de México en Brasil (2012-2016) y en Cuba (1993-1994). Tiene especial interés en la generación de políticas públicas para un desarrollo sostenible para México."
			/>
			<ArticleLayout
				arts={otherArts}
				header="Los irreductibles en un pacto verde para México"
				siguiente="/articulos/pueblos_originarios"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<p className="mb-4">
						<span className="text-green1 font-bold">
							¿Qué significa un pacto verde?
						</span>
						<br /> Un pacto siempre es un compromiso, un acuerdo de voluntades
						materializado o no a través de un documento firmado. Eso es lo
						ideal, un documento en el que se plasmen los propósitos y mecanismos
						para llevarlo a cabo. Lo relevante es estar en concordancia con un
						fin específico establecido por todos los convocados sin importar su
						ubicación social, económica o política, y que se cumplan los
						acuerdos adquiridos.
					</p>
					<p className="mb-4">
						<span className="text-green1 font-bold">¿Verde?</span> <br />
						Queda claro que se trata de los objetivos establecidos en la Agenda
						2030 de los Acuerdos de París, de cómo cada país firmó y estuvo de
						acuerdo en establecer medidas, acciones y compromisos para que en
						2050 no se rebase el grado y medio de calentamiento global en el
						mundo. Ahí se acordó revisar periódicamente los avances logrados por
						país y se fijó la fecha de evaluación en 2030. Sin embargo, las
						últimas mediciones indican que, antes de lo previsto, el
						calentamiento global está alcanzando niveles preocupantes. Podríamos
						convenir, entonces, en que ya existe un marco de referencia: los
						Acuerdos de París, que tuvieron la aceptación de numerosas naciones
						del mundo y que fueron suscritos por los representantes del Estado
						Mexicano. Lo importante debe ser, entonces, entender la necesidad de
						un pacto verde en México como una oportunidad para avanzar, como el
						diseño de una hoja de ruta y de un calendario de cumplimiento de
						compromisos, pero, eso sí, lo suficientemente específico por
						sectores, ramas productivas, áreas de actividad y niveles de
						intervención gubernamental, que haga posible que sus objetivos se
						realicen y exista la información y los parámetros de referencia para
						llevar a cabo una evaluación de verdad.
					</p>
					<img src={articulo1} className="my-12 max-w-full" alt="Pacto Verde" />
					<p className="mb-4">
						<span className="text-green1 font-bold">
							¿Cuáles han sido las dificultades para la concreción de un
							verdadero Pacto Verde en México?
						</span>
						<br />
						Me parece esencial reconocer que los compromisos medioambientales
						que adquieren las instituciones mexicanas muchas veces se quedan en
						la esfera de lo declarativo y, después de realizar declaraciones o
						suscribir importantes documentos, ni la acción de los funcionarios
						ni el diseño de las políticas públicas se corresponden a los textos
						suscritos o a los discursos dichos. Lamentablemente, la política
						ecológica en nuestro país adolece de una alta dosis de simulación.
						Pienso que resulta indispensable hacer un análisis riguroso de las
						políticas públicas sectoriales y su correspondencia con los
						compromisos medioambientales y en torno al cambio climático que ha
						asumido el país. Asimismo, creo que es necesario revisar el papel de
						las empresas paraestatales del sector energético, principalmente
						Pemex y CFE, para tener la certeza de que sus decisiones se enmarcan
						en el cumplimiento de los Acuerdos de París.
					</p>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						No se pueden tener pactos verdes si no existen genuinos
						medioambientalistas. Y esa es una tarea
						<span className="text-green1 font-medium">
							—la de generar una conciencia medioambiental en el país—
						</span>{" "}
						que es esencial abordar.
					</p>
				</div>
				<div className="">
					<p className="mb-4">
						En el sector de la salud pública también es indispensable una
						revisión de la manera en que manejan los desechos las grandes
						unidades hospitalarias. Desde luego, existe un gran debate en México
						sobre la política energética. La biodiversidad del entorno natural
						mexicano, al mismo tiempo que es una de las grandes fortalezas del
						país, es uno de los mayores desafíos. El deterioro que han sufrido
						selvas, bosques y manglares en los últimos años es muy grave. Una
						rápida revisión del territorio chiapaneco y de la península de
						Yucatán evidencian cómo la acción institucional está muy lejos de
						los discursos medioambientalistas. La disminución presupuestal a
						instituciones como Conafor y Conabio refuerzan nuestra preocupación.
						El problema de la acción institucional tiene un alto grado de
						dificultad y no se constriñe solamente a la acción del Gobierno
						federal; es indispensable que los otros órdenes de gobierno, el
						estatal, con 32 entidades federativas, y el municipal, con mas de
						2,000 municipios, asuman su responsabilidad y adquieran un papel En
						ese sentido, un esfuerzo de sensibilización sobre la trascendencia
						de las politicas medioambientales y el compromiso de un pacto verde,
						en todos los órdenes de gobierno, especialmente el municipal,
						parecería una acción indispensable en el corto plazo. Es necesario
						un alto nivel de concientización sobre la problemática
						medioambiental y los riesgos que significa el cambio climático que
						venga desde las bases mismas de la sociedad, y allí, el papel del
						municipio es central. En una sola frase: No se pueden tener pactos
						verdes si no existen genuinos medioambientalistas. Y esa es una
						tarea —la de generar una conciencia medioambiental en el país— que
						es esencial abordar.
					</p>
					<p className="mb-4">
						<span className="text-green1 font-bold">
							El papel de las nuevas generaciones
						</span>{" "}
						<br />
						Sin duda, la comprensión de la problemática del cambio climático por
						parte de los jóvenes resulta fundamental. Se trata de multiplicar
						miles de aliados en la sociedad civil para generar una masa crítica
						que obligue a las autoridades a implementar las políticas correctas
						y que, mediante una conducta ciudadana consciente y comprometida,
						estimule que la sociedad civil tenga una actitud responsable en sus
						actividades económicas. Todos los esfuerzos que se realicen en el
						sector educativo, en todos los niveles, pueden ser de enorme
						utilidad para fomentar el compromiso ecologista de la niñez, la
						adolescencia y la juventud. En la reforma al artículo 3°
						constitucional, que es el que consagra los derechos a la educación
						en México, se estableció que la educación debía fomentar el cuidado
						del medio ambiente; con ello se abrió una ventana de oportunidad
						para incidir en programas de estudio y prácticas escolares para
						promover una conciencia ecologista. Hay que aprovecharla. Hay que
						convocar un amplio movimiento de adolescentes y jóvenes en favor de
						la preservación medioambiental y la restauración del entorno.
					</p>
					<p className="text-green1 font-bold mb-4">
						¿Y el entorno empresarial?
					</p>
					<p className="mb-4">
						Las actividades económicas en México tradicionalmente no se han
						compadecido de la problemática ecológica. Además de que es deseable
						que los grandes capitanes de la industria se pongan a tono con las
						directrices de la contemporaneidad y asuman y cumplan compromisos en
						cuanto al papel del sector industrial en los Acuerdos de París, hay
						que desarrollar una política mixta de regulaciones que eviten
						excesos y deterioro, así como de estímulos que alienten mejores
						prácticas. Sería recomendable que en un diálogo
						Gobierno-representación empresarial, se llegara a algunos
						compromisos.
					</p>
					<p className="text-green1 font-bold pb-4">
						El rescate de la naturaleza
					</p>
					<p className="mb-4">
						Es indispensable la protección inmediata y el restablecimiento del
						equilibrio natural de amplias zonas, antes verdes y hoy
						deforestadas. El concepto de áreas naturales protegidas es hoy más
						vigente si se acepta no solo como protección de especies animales y
						vegetales en peligro de extinción, lo cual en sí mismo es muy
						relevante, sino con un alcance aún mayor: el de restablecer el
						hábitat de producción de oxígeno, agua y el humus o tierra
						inherente; esa debe ser la nueva concepción. Se requiere de acciones
						urgentes: planes de protección para combatir la deforestación,
						prohibición del uso de determinados maderables, limitación de a
						producción de papel con maderables y, desde luego, vigorosas
						campañas de reforestación con vegetación local y no vegetación
						intrusiva exógena. El reto es que las áreas naturales protegidas se
						conviertan en el centro de la recuperación natural del hábitat. Será
						necesario revisar las políticas pesqueras, de sanidad vegetal, de
						fertilización y de recuperación de suelos para que la producción
						alimentaria se realice de manera compatible con la protección al
						medio ambiente.
					</p>
					<p className="text-green1 font-bold pb-4">El gran desafío: El agua</p>
					<p className="mb-4">
						Los recursos hídricos del país están a punto de enfrentar una severa
						crisis. Si reconocemos la disparidad en su distribución, el hecho de
						que hay amplias regiones que apenas disponen de lo indispensable y
						zonas en donde se desperdicia en grandes cantidades; la problemática
						del agua en la frontera norte; la modificación del régimen de
						lluvias; la combinación de sequías e inundaciones y la escasa
						inversión en las últimas décadas para atender la complejidad y la
						profundidad del problema hidráulico del país, nos daremos cuenta de
						que es un asunto de la más alta prioridad. No parece existir una
						comprensión clara en los niveles de toma de decisiones sobre la
						magnitud e importancia del tema.
					</p>
					<p className="text-green1 font-bold pb-4">Los irreductibles</p>
					<p className="mb-4">
						Tal vez debemos aspirar a un pacto verde que no solo reproduzca las
						frases y los conceptos de los importantes acuerdos internacionales
						en la materia, sino que establezca un número determinado de
						compromisos irreductibles, de obligado cumplimiento para las partes,
						que permitan la persistencia del país y su viabilidad en el tiempo
						garantizando condiciones de bienestar para su población y de
						recuperación y protección para su entorno natural. Convenir en esos
						irreductibles y lograr su realización en el tiempo puede ser una
						medida pequeña pero alcanzable si existiese el compromiso de todos
						por la perdurabilidad de México.
					</p>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
