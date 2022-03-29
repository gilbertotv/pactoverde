import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";

import autor from "../../images/autores/autor3.jpg";
import articulo1 from "../../images/articulos/articulo3-1.png";
import articulo2 from "../../images/articulos/articulo3-2.png";
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
				title="El Big Push mexicano: Plan Verde para un desarrollo sostenible"
				titleColor="text-white"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Jorge Mario Martínez Piva"
			>
				Jefe de la Unidad de Comercio Internacional e Industria de la Sede
				Subregional de la CEPAL en México. Es licenciado en Derecho por la
				Universidad de Costa Rica, máster en Economía por la Universidad
				Nacional (Costa Rica), y doctor en Economía por la Universidad Autónoma
				de Madrid. Su trabajo combina los temas comerciales, de integración
				regional y de política industrial.
			</HeaderArticle>
			<ArticleLayout
				arts={otherArts}
				header="El Big Push mexicano: Plan Verde para un desarrollo sostenible"
				siguiente="/articulos/pactar_verde"
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
						El análisis de diversas experiencias exitosas de desarrollo
						económico y social muestra que estas han derivado de intensos
						cambios en las estructuras económicas y sociales de los países. No
						solo se modificaron las estructuras productivas, lo que otorgó un
						mayor peso a los sectores manufactureros y de servicios, sino que
						este cambio se tradujo en mejoras de la productividad, por lo que
						también ganaron peso los sectores con alto contenido tecnológico.
						Esto hace pensar que el cambio estructural necesario para el
						desarrollo va acompañado de transformaciones en la estructura
						productiva y del empleo que los orienta hacia sectores dinámicos,
						con creciente productividad y de alto contenido tecnológico. Sin
						embargo, enfocarse solo en eso sería insuficiente. Hoy sabemos que
						<span className="font-medium">
							los cambios estructurales también deben ser progresivos, es decir
							que deben, además, generar una transformación hacia procesos
							productivos que incrementen el empleo con derechos, el
							mejoramiento de las condiciones sociales de la población, la
							construcción de sistemas universales de protección social y que
							favorezcan la protección del medio ambiente
						</span>{" "}
						(Cepal, 2016).
					</p>
					<p className="mb-4">
						La transformación de las estructuras productivas no surge
						espontáneamente del mercado ni de las fuerzas que definen la
						economía política de un país. Existe una inercia en la estructura
						productiva que tiende a mantener su especialización en los sectores
						dominantes, así como a mantener las instituciones y los acuerdos
						entre los actores económicos. Estas inercias, en el caso de los
						países en desarrollo, suelen ser trampas de baja innovación y
						productividad, de las cuales solo se puede salir a través de un
						impulso coordinado de medidas, tanto públicas como privadas, o lo
						que es lo mismo, de un esfuerzo por lograr acuerdos políticos para
						el desarrollo.
					</p>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						Un gran impulso ambiental requiere al menos de tres elementos
						modernizadores:
						<span className="text-green1 font-medium">
							una política industrial adecuada al siglo XXI; una sólida política
							de ciencia, tecnología e innovación, y acuerdos público-privados
							para coordinar las inversiones productivas
						</span>
						hacia la sostenibilidad ambiental.
					</p>
				</div>
				<div className="border-b border-gray2">
					<p className="mb-4">
						Los acuerdos políticos para el desarrollo deben procurar un cambio
						estructural progresivo de la economía a través de un conjunto de
						políticas complementarias de innovación, empleo, distribución del
						ingreso e inversiones que además aseguren crecimiento económico. Sin
						embargo, también deben atender los datos alarmantes sobre el cambio
						climático, por lo que se requiere incorporar la dimensión ambiental
						como parte fundamental del cambio estructural. Se trata, pues, de
						combinar las dimensiones de crecimiento, igualdad y cuidado
						ambiental teniendo como contrapartida un salto tecnológico,
						productivo e institucional que conduzca a un nuevo estilo de
						desarrollo. La Cepal ha denominado a la combinación de estas
						dimensiones como el “gran impulso ambiental”. Estamos hablando de un
						esfuerzo coordinado de inversiones complementarias capaz de
						redefinir la trayectoria de crecimiento, los patrones de producción
						y consumo, y la construcción de capacidades en un contexto
						político-institucional en el que se respetan derechos y se fortalece
						la democracia.
					</p>
					<img
						src={articulo2}
						className="m-auto my-12 max-w-full"
						alt="Pacto Verde"
					/>
					<p className="mb-4">
						El concepto de gran impulso ambiental se construye sobre de la
						propuesta de Rosenstein-Rodan del gran impulso (big push) para el
						desarrollo, que propone la coordinación de la inversión pública y
						privada en nuevos sectores que serán los que muevan y lideren la
						economía en el futuro. La propuesta de Cepal es que esta
						coordinación de inversiones cambie la estructura económica y genere
						un nuevo estilo de desarrollo más igualitario y sostenible. El “gran
						impulso ambiental” es necesario para el desarrollo sostenible y se
						alinea con los esfuerzos que están haciendo diversos países y
						regiones en el mundo, como es el caso del Pacto Verde Europeo, los
						estímulos fiscales y la búsqueda de energías sostenibles en los
						Estados Unidos, así como los esfuerzos de China por reducir
						emisiones de gases de efecto invernadero. Esta alineación global
						augura una coordinación de inversiones e incentivos en materia
						ambiental y refuerza el gran impulso ambiental que puedan hacer
						países como México. También augura la coordinación de estándares
						ambientales para los procesos productivos, lo que incentiva la
						transformación de la matriz productiva e impulsa nuevos sectores
						alineados con nuevas tendencias mundiales. Es necesario tener claro
						que estas propuestas implican abandonar una trayectoria de
						desarrollo contaminante por una nueva, liderada por nuevas
						tecnologías y nuevos sectores económicos. Por esta razón, las
						señales y los incentivos que se den a los sectores productivos en
						esta dirección alcanzan relevancia en la consecución de la
						transición que se avecina.
					</p>
					<p className="mb-4">
						El gran impulso ambiental es, principalmente, una respuesta a
						algunos de los dilemas actuales del desarrollo: ¿cómo conciliar el
						desarrollo basado en el desempeño y el crecimiento económico, al
						tiempo que se generan empleos de alta productividad y se responde al
						reto del cambio climático? El gran impulso ambiental no solo es
						necesario, sino que significa además una oportunidad para el diseño
						de un modelo de desarrollo sostenible que abra espacio a nuevos
						sectores que liderarán la economía sostenible del futuro. Reconocer
						la necesidad de cambiar la matriz energética y el patrón de
						producción y consumo es una oportunidad para implementar una nueva
						política industrial basada en un keynesianismo ambiental (Cepal,
						2016; Altenburg y Rodrik, 2017) en donde los objetivos de pleno
						empleo y cuidado ambiental se armonizan en un conjunto de
						inversiones con un sendero de crecimiento bajo en carbono.
					</p>
					<p className="mb-4">
						Un gran impulso ambiental requiere al menos de tres elementos
						modernizadores: una política industrial adecuada al siglo XXI; una
						sólida política de ciencia, tecnología e innovación, y acuerdos
						público-privados para coordinar las inversiones productivas hacia la
						sostenibilidad ambiental.
					</p>
					<p className="mb-4">
						Una política industrial para el siglo XXI debe tener en cuenta la
						interconexión productiva y financiera global, así como la
						importancia de abandonar una trayectoria de desarrollo contaminante.
						El Estado deberá aplicar diversos instrumentos para promover el
						desarrollo de actividades económicas específicas sobre la base de
						las prioridades del desarrollo nacional. Una política industrial
						moderna debe contribuir al surgimiento de nuevos sectores
						productivos y estimular la innovación y un cambio estructural
						favorables al desacople de una economía basada en carbono.
					</p>
					<p className="mb-4">
						Una política de ciencia, tecnología e innovación sólida facilita la
						interacción entre los diversos agentes que crean, aplican, adaptan y
						mejoran las tecnologías. En este sentido, el nivel de innovación
						dependerá en gran medida de la cooperación entre estos agentes.
						Existe un amplio campo para la aplicación de políticas orientadas a
						fortalecer las alianzas Estado-empresa-universidad con el fin de
						promover la innovación necesaria para que se creen nuevas
						tecnologías y nuevos sectores económicos dinámicos desacoplados de
						la economía del carbono.
					</p>
					<p className="mb-4">
						Como ya se expresó, existen inercias que inhiben el cambio
						estructural, por lo que la política de ciencia, tecnología e
						innovación es esencial para superar dichas inercias al tiempo que se
						crean nuevas oportunidades empresariales. El papel del Estado es
						fundamental tanto en la propuesta de ciencia, tecnología e
						innovación como en la atracción de las capacidades públicas y
						privadas de investigación hacia grandes misiones de la
						investigación. El Estado puede impulsar cosas que nadie está
						haciendo, romper las inercias del modelo económico y liderar así
						agendas de innovación de interés nacional (Mazzucato, 2019).
					</p>
					<p className="mb-4">
						Finalmente, hay que subrayar la relevancia de los acuerdos
						público-privados como mecanismo para la coordinación de proyectos de
						inversión hacia sectores bajos en carbono, en el sentido del gran
						impulso ambiental. La inversión pública por sí sola no podría
						generar los cambios profundos que se requieren en las estructuras
						productivas. Las alianzas y coaliciones que están en la base del
						gran impulso ambiental son las que efectivamente pueden conducir a
						una nueva matriz productiva y a un nuevo estilo de desarrollo. El
						gran impulso ambiental ofrece grandes oportunidades para países que,
						como México, tienen enormes recursos tanto naturales como humanos.
					</p>
				</div>
				<Referencias
					referencias={[
						{
							ref: "Altenburg, T. y Dani Rodrik (2017). Green Industrial Policy: Accelerating Structural Change Towards",
							subref:
								"Wealthy Green Economies. Altenburg, T. y C. Assmann (eds.). Green Industrial Policy. Concept, Policies, Country Experiences, Ginebra y Bonn: UN Environment / German Development Institute (Deutsches Institut für Entwicklungspolitk, DIE).",
						},
						{
							ref: "Mazzucato, M. (2019). El valor de las cosas. Quién produce y quién gana en la economía global",
							subref: "Madrid: Taurus.",
						},
						{
							ref: "Cepal (2016). Horizontes 2030: la igualdad en el centro del desarrollo sostenible.",
							subref: "Disponible en: ",
							link: "cepal.org/sites/default/files/publication/files/40159/S1600653_es.pdf",
						},
					]}
				/>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
