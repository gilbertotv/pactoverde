import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";

import autor from "../../images/autores/autor2.jpg";
import articulo1 from "../../images/articulos/articulo2-1.jpg";

const Articles = () => {
	return (
		<Layout
			title='El papel de los pueblos originarios hacia "Un pacto verde para México"'
			description='El papel de los pueblos originarios hacia "Un pacto verde para México"'
			url="/articulos/pueblos_originarios"
			image={articulo1}
		>
			<HeaderArticle
				bgcolor="bg-green6"
				title='El papel de los pueblos originarios hacia "Un pacto verde para México"'
				titleColor="text-white"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Leticia Vásquez Esteban"
			>
				Mujer masewal cooperativista que actualmente coordina el Proyecto de
				Revitalización Lingüística de la Unión de Cooperativas Tosepan. Estudió
				en la Universidad Intercultural del Estado de Puebla la licenciatura en
				Desarrollo Sustentable y trabaja en temas como defensa del territorio,
				juventudes y feminismo.
			</HeaderArticle>

			<ArticleLayout
				header="El papel de los pueblos originarios"
				siguiente="/articulos/big_push"
				url="/pueblos_originarios"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<p className="mb-4">
						Las comunidades que habitamos territorios ancestrales, los vivimos y
						los cuidamos sabemos que la Tierra está viva y entendemos el mundo a
						través de su sabiduría. Pero cuando la gente crece sin generar algún
						tipo de relación con ella o simplemente sin poner los pies en la
						tierra, es muy difícil que entienda nuestra forma de ver, hacer y
						sentir el mundo; porque cuando no tenemos una relación con lo que
						nos rodea, con lo que comemos, con lo que consumimos, es complejo
						llegar a entender el proceso integral de lo que implica nuestro
						estar en el planeta
					</p>
					<p className="mb-4">
						No obstante, para las comunidades esto es evidente. Sabemos que si
						no sembramos no tendremos alimentos; sabemos que si no cuidamos el
						agua no tendremos qué beber; sabemos que si no racionamos la cosecha
						del maíz nuestros animales no alcanzarán a comer. También sabemos
						que cuando los alimentos son más baratos es porque se producen con
						agroquímicos y/o maquinaria, o porque un jornalero recibió menos del
						salario mínimo. Tenemos conciencia de todo ello porque nosotros
						trabajamos la tierra.
					</p>
					<p className="mb-4">
						Sin embargo, nuestra participación en las decisiones que se toman
						respecto al uso de los recursos naturales que yacen en nuestros
						territorios es nula; por eso nos toca defender cuando tratan de
						imponer leyes que no son legítimas. Señalamos que ello debe cambiar,
						que el esquema sistemático de violaciones de derechos es
						inaceptable. Puntualmente se requiere construir procesos
						participativos en los que pueblos originarios, comunidades
						equiparables y otras minorías tomen parte los procesos o
						sencillamente se respeten sus decisiones y demandas, su autonomía.
					</p>
					<img src={articulo1} className="my-12 max-w-full" alt="Pacto Verde" />
					<p className="mb-4 font-medium">
						Resulta incongruente que lascomunidades alimentemos el mundopero que
						poco se nos tome en cuentapara la toma de decisiones. Según datos de
						la FAO, la agricultura familiar produce el 70% de los alimentosque
						consumimos, entonces ¿por quése siguen desarrollando políticas y
						propuestas sin nosotrxs?
					</p>
					<p className="mb-4">
						Actualmente, hacia donde apunta nuestra mirada es hacia un horizonte
						para la autonomía energética, alimentaria, tecnológica y financiera.
						Creemos firmemente que necesitamos recuperar el control de nuestros
						recursos, decidir cómo queremos producir, cómo queremos consumir,
						pero también cómo queremos dignificar nuestro trabajo. Hacer
						gobernanza y vida comunitaria para alcanzar lo que para nosotrxs es
						el buen vivir.
					</p>
					<p className="mb-4">
						A lo largo de nuestra historia de resistencia y reexistencia, de un
						pasado y un presente colonialistas, que enajena e indiviualiza a
						través de instrumentos oficiales, hemos aprendido que no hay camino
						si no es en colectivo, que no hay posibilidad sin la diversidad, que
						no se siembra maíz sin frijol.
					</p>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						Nuestra lucha evoca e invoca un cambio profundo de las reglas con
						las que se rige el sistema mundo, porque{" "}
						<span className="text-red1 font-medium">
							cuestiona las formas de producción y de consumo.
						</span>
					</p>
				</div>
				<div className="">
					<p className="mb-4">
						Para nosotros las relaciones son colectivas y es koujtakiloyan (un
						bosque de frutos). En este planteamiento nosotros nos oponemos a
						cualquier propuesta de monocultivo o agricultura extensiva porque
						desde nuestra cosmovisión la Tierra está viva pero, en la caja
						cuadrada del capital, que mercantiliza, enajena y cosifica a la
						madre tierra como recurso natural, no se comprende nuestro
						masewalnemilis (forma de vida).
					</p>
					<p className="mb-4">
						Con una ruta trazada por jóvenes, mujeres y abuelos, nos miramos
						entre verdes y azules un buen vivir, que rompa con la idea
						antropocentrista con la que se construyen nuestras relaciones con el
						entorno. A partir de esta reflexión hemos tenido que entender las
						herramientas del sistema capitalista, que es hegemónico y
						patriarcal. Nos ha quedado claro que no podremos vivir ni cambiar la
						estructura y la narrativa capitalistas a partir de sus propios
						instrumentos. Nos parece que el régimen imperialista trata de
						imponer una ideología de bienestar construida a partir del mal
						llamado desarrollo, energías verdes, economías verdes que, lejos de
						atender las problemática ambientales y sociales, intensifican las
						desigualdades.
					</p>
					<p className="mb-4">
						Es en respuesta a ello que las comunidades ejercemos nuestro derecho
						a la libre autodeterminación, para determinar el camino que queremos
						caminar, que es por la diversidad, por la utopía de otros mundos
						posibles. Es desde nuestra propia agenda y nuestros propios modos
						que creemos que podemos ir abonando a las diferentes agendas. Para
						nosotros es un plan de vida que tiene por objeto el Yeknemilis, Xan
						TlanLatamato buen vivir, mediante la autonomía energética, la
						soberanía alimentaria, laeconomía social y solidaria, la educación
						con identidad y la autonomía tecnológica;a través de valores como
						powkaitalis (tomar en cuenta al otro),
						chiwpawkachiwalis(transparencia), tamakepali (ayuda mutua)y mawisyot
						(respeto), entre otros.
					</p>
					<p className="mb-4">
						El sistema actual está en crisis desde hace varios años. Nosotros
						creemos que es porque carece de valores y está por colapsar; es
						imposible sostener los ritmos de vida actuales de la industria, que
						se basan en un consumismo excesivo, en relaciones impersonales, en
						intereses privados, en la acumulación de capital, en la
						mercantilización, en la privatización, el individualismo y la
						hegemonía política, económica y cultural.
					</p>
					<p className="mb-4">
						Por eso, para nosotras fue importante buscar otras formas de
						organización y gobernanza, aquí hablamos desde el cooperativismo, la
						comunidad y las asambleas. Organizamos también ha sido todo un reto,
						porque implica un proceso largo de informarse, comunicar, decidir,
						consensuar y accionar en colectivo, eso con varias comunidades muy
						diversas (con su propia lengua, forma de organización y geografía),
						pero sabemos también que en esta diversidad yace la fortaleza, pues
						es esta misma la que ha ido entretejiendo lazos y puentes. En ese
						sentido, creo que las comunidades tenemos mucho que aportar.
					</p>
					<p className="mb-4">
						En colectivo, hemos decidido la administración y el uso de nuestros
						recursos y hemos hecho un análisis de la contraparte, los proyectos
						extractivistas o de crecimiento económico, que muchas veces se nos
						han presentado como desarrollo y políticas verdes, pero que sabemos
						llevan consigo intenciones de despojo.
					</p>
					<p className="mb-4">
						Conocemos varias políticas públicas, esfuerzos internacionales y
						proyectos que han fracasado por cómo se define lo que es un problema
						público, por su diseño hermético y porque no se llevan a cabo
						procesos participativos y contextualizados. En principio, porque las
						decisiones politicoeconómicas que se toman en nuestro país atienden
						intereses privados. Así que, desde nuestra experiencia, hasta que no
						se lleven a cabo procesos informativos participativos, que se
						comuniquen, se decidan en colectivo, sean consensuados y luego
						apropiados para su ejercicio, continuaremos ejecutando propuestas
						que están destinadas a fracasar.
					</p>
					<p className="mb-4">
						Sigue pareciendo incoherente y contradictorio que, aunque datos
						estadísticos y organizaciones internacionales reconocen que somos
						los pueblos originarios del mundo quienes preservamos ecosistemas,
						manejamos, conservamos y desarrollamos biodiversidad de flora y
						fauna, siguen sin reconocerse en los instrumentos de política
						ambiental los derechos de los pueblos originarios como pilar
						fundamental para desarrollar dichos mecanismos.
					</p>
					<p className="mb-4">
						Incluso que se respeten los derechos de los pueblos originarios y
						comunidades equiparables del mundo sigue siendo una deuda, y sobre
						esa deuda las comunidades tenemos varias experiencias de despojo,
						militarización, persecución, hostigamiento, criminalización y
						discriminación, hasta llegar a la muerte.
					</p>
					<p className="mb-4">
						Nos parece contradictorio entonces que nos inviten a formar parte de
						agendas que plasman nuestros nombres en documentos que no van
						respetar nuestra elección de vida y que van a seguir concesionando
						nuestros territorios, patentando nuestros conocimientos ancestrales
						y legitimando el uso de semillas transgénicas.Sostenemos que hasta
						que no se disponga de la escucha y el respeto, no podremos enfrentar
						ni reparar ningún daño ambiental o crisis climática. Entonces, es
						necesario poner sobre la mesa que se requiere un cambio estructural
						que problematice la desigualdad social y a quienes poseen los medios
						de producción, colocando explí­citamente que el 50% de la población
						mundial posee solo el 1% de la riqueza generada, mientras que el 1%
						de los más ricos se reparte casi el 50% de todos los bienes del
						mundo (según la revista Forbes).
					</p>
					<p className="mb-4">
						De este lado estamos dispuestxs al diálogo, pero desde la
						horizontalidad, no para insertarnos a programas hechos para
						nosotrxs, sino para proponer, compartir y recuperar. Para
						coconstruir, codiseñar y deconstruir lo que haga falta. Retomo la
						palabra de los hermanxs zapatistas: "Nunca más un México sin
						nosotrxs". Ahora, para comenzar este diálogo primero es necesario
						que nos escuchen, que nos conozcan, que conozcan nuestras demandas
						y, por lo tanto, también nuestra historia, porque hasta ahora sigue
						prevaleciendo un sistema colonizador que afirma que solo la ciencia
						posee la razón, y que hay una raza suprema pronunciada por un color
						de piel, y en esas condiciones no se puede dar un diálogo desde la
						horizontalidad.
					</p>
					<p className="mb-4">
						Con todo lo anterior, el diálogo va a ser largo, principalmente
						porque desde nuestro entender toda problemática está interconectada
						y debe analizarse desde una perspectiva de interseccionalidad.
						Nuestra lucha evoca e invoca un cambio profundo de las reglas con
						las que se rige el sistema mundo, porque cuestiona las formas de
						producción y de consumo. Creemos que es necesario replantearse las
						formas de producción de energía, de información, de los alimentos.
					</p>
					<p className="mb-4">
						Por ejemplo, hoy sabemos que el 76.7% de la energía que se produce
						en México es destinada para el sector de transporte y de la
						industria, y solo 17.8% es de uso residencial, que es la que usamos
						para abastecer nuestros hogares, instituciones educativas y
						hospitales, según datos de la Sener (2018).
					</p>
					<p className="mb-4">
						Después de todo lo señalado, pensar en un Green New Deal para México
						desde los pueblos originarios implica rascar muy hondo, porque
						implica polemizar los modos de vida de los países desarrollados y
						sus modelos de producción y de consumo, que se justifican a través
						del crecimiento económico, que se acompaña del despojo y el
						desplazamiento de comunidades para la instalación de grandes
						extensiones de corredores solares, eólicos, etc. De modo que hemos
						llegado a la conclusión de que las energías renovables, verdes,
						sostenibles o ecológicas no garantizan un respeto por las diversas
						formas de vida, incluso no garantizan accesibilidad o energía para
						las comunidades.
					</p>
					<p className="mb-4 font-medium">
						Dicen los abuelos que la Tierra está viva, por eso nosotros somos
						lxs guardianes del territorio. •
					</p>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
