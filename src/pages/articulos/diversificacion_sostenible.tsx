import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";

import autor from "../../images/autores/autor11.png";
import articulo1 from "../../images/articulos/articulo11-1.png";
import articulo2 from "../../images/articulos/articulo11-2.png";
import ArtSubtitle from "../../components/shared/ArtSubtitle";

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
				title="Diversificación sostenible: hacia una política industrial verde en México"
				titleColor="text-black"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Luis Fernando Godoy Rueda"
				subText="Es director general en la Unidad de Inteligencia Económica Global en la Secretaría de Economía. Es maestro en Administración Pública por la Universidad de Columbia, tiene más de 10 años de experiencia en el sector público, privado y en organismos internacionales como OPI Analytics, la CEPAL y Data-Pop Alliance, entre otros."
			/>
			<ArticleLayout
				arts={otherArts}
				header="Diversificación sostenible: hacia una política industrial verde en México"
				siguiente="/articulos/siete_claves"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<img
						src={articulo1}
						className="m-auto my-12 max-w-full"
						alt="Pacto Verde"
					/>
					<ArtParagraphs
						paragraphs={[
							"El COVID-19 y la emergencia climática siguen cambiando el curso de la economía global y, con ello, nuestra economía. Por un lado, el confinamiento se tradujo en un paro económico que a su vez se convirtió en pérdidas en empleo, modificaciones a las cadenas globales de valor, dificultades en la industria de servicios y una relevancia inusitada de la industria de la salud. Por otro, la crisis climática ha modificado las expectativas de crecimiento, los gobiernos adecuan sus políticas para tratar de cumplir con los Acuerdos de París y las grandes compañías adaptan sus narrativas hacia el futuro verde.  Se trata de dos fenómenos globales que impactan en diferentes momentos y niveles a todos los países, incluido el nuestro.",
							"Sin embargo, México atraviesa un momento particular. Primero, la firma del Tratado México, Estados Unidos y Canadá abrió inmediatamente nuevos horizontes en cuanto a la integración económica, el comercio, las inversiones y el desarrollo regional. Y segundo, el Gobierno mexicano ha abierto la puerta a nuevos planteamientos económicos que contrastan con aquellos fomentados durante el consenso de Washington: hoy se discute sobre políticas donde el Estado pueda tener una mayor participación en la economía.",
							"Ante estos fenómenos globales y nacionales, por primera vez nos podemos hacer la pregunta: ¿Es posible desarrollar políticas de desarrollo económico que permitan la diversificación sostenible de la economía? O, específicamente, ¿es factible desarrollar una política industrial verde identificando y fomentando a los sectores y actividades económicas que garanticen la sostenibilidad del país?",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-red1 font-medium">
							Es fundamental que se generen mecanismos de diálogo y cooperación
							internacional para que las políticas industriales sostenibles del
							sur global sean incorporadas en la visión del norte.
						</span>
					</p>
				</div>
				<div className="">
					<ArtSubtitle text="Una política con objetivos ambiciosos" />
					<ArtParagraphs
						paragraphs={[
							"Para lograr una política industrial sostenible es fundamental establecerla como una misión económica de largo alcance. Como lo ha sugerido Mariana Mazzucato, una misión económica de esta naturaleza requiere de nuevas formas de colaboración entre los sectores público y privado, un altísimo nivel de compromiso y coordinación, y la aceptación de riesgos y gastos muy elevados para alcanzar una meta a largo plazo. La política industrial sostenible tiene que resolver los grandes desafíos de México como la pobreza, la desigualdad, el crecimiento o la creación de empleos. Es decir, no se generará una política industrial sin objetivos precisos, y estos deberían ser orientados por la innovación, la diversificación y la inclusión de sectores y regiones tradicionalmente excluidas. La Agenda 2030 y los Objetivos de Desarrollo Sostenible proveen de un buen marco internacional, pero es necesaria la construcción de una agenda propia que refleje las necesidades y aspiraciones locales de dicha política.",
						]}
					/>
					<ArtSubtitle text="Una política en consenso" />
					<ArtParagraphs
						paragraphs={[
							"La construcción de una política industrial verde no está exenta de la política misma. Es necesario generar acuerdos y, posteriormente, un consenso entre los diferentes sectores de la sociedad sobre la ruta que el Estado mexicano debería de tomar para lograr una política industrial sostenible. Esta nueva iniciativa debe crearse conjuntamente en lugar de transmitirse desde arriba: los sindicatos, las mipymes, las empresas sociales y las organizaciones comunitarias deben estar sobre la mesa y dar forma a la dirección de esta política.",
							"La iniciativa privada en sus múltiples representaciones y sectores es crucial. Pero para asegurar la sostenibilidad de una política de esta naturaleza es necesario que todas las voces cuenten por igual. Una política industrial sostenible no es de los industriales, es de toda la sociedad. El Gobierno tendrá que fungir como facilitador, pero también ordena prioridades, contribuye con una agenda, fomenta el diálogo y asegura la vida institucional de una política de esta magnitud.",
						]}
					/>
					<img
						src={articulo2}
						className="m-auto my-12 max-w-full"
						alt="Pacto Verde"
					/>

					<ArtSubtitle text="Una política integral e inteligente" />
					<ArtParagraphs
						paragraphs={[
							"La política industrial sostenible debe tener aspiraciones ambientales, pero tiene que ser capaz de ver más allá de la mitigación del cambio climático y centrarse en nuevas oportunidades de inversión e innovación.  Asimismo, debe fomentar la inversión estratégica en determinadas actividades económicas y, al mismo tiempo, apoyar a las trabajadoras a adquirir nuevas habilidades y reducir las brechas digitales. El proceso de identificación de estas actividades es la clave para garantizar el éxito y disminuir los riesgos de esta política.",
							"Existen diversas formas de identificar industrias, actividades económicas y productos estratégicos para una política industrial verde. Desde la Secretaría de Economía, a través de la Unidad de Inteligencia Económica Global, hemos planteado que la metodología de complejidad económica tiene los elementos necesarios para generar un proceso de identificación estratégica de sectores.",
							"Cuando se combinan una serie de indicadores vinculados con la complejidad económica, es posible identificar oportunidades específicas en cadenas de valor, establecer canastas óptimas de diversificación, o incluso entender la vinculación entre regiones y actividades para el desarrollo de cierta industria. A través de los índices de complejidad y el índice de afinidad se diseñan recomendaciones a la medida de cada municipio o región, e incluso por sectores. Desde DataMéxico, hemos habilitado un panel de control sobre complejidad económica  que permite generar cálculos a la medida por región o por producto.",
						]}
					/>

					<ArtSubtitle text="Una política con el financiamiento adecuado" />
					<ArtParagraphs
						paragraphs={[
							"El sector privado, y particularmente el sector financiero, reconoce que existen fuentes de financiamiento suficientes para desarrollar una ruta de desarrollo sostenible. Esto implica que no hay excusas desde el punto de vista del mercado. Recientemente, BlackRock, uno de los grupos financieros más influyentes del mundo, ha anunciado que destinará 100 millones de dólares a un programa para acelerar el desarrollo de las soluciones que se necesitan para conseguir cero emisiones netas de carbono en 2050. Si bien la mayor parte de grupos financieros como BlackRock han establecido estrategias y servicios para inversiones sostenibles, los mercados no necesariamente encontrarán una dirección de este tipo por sí mismos, particularmente en el largo plazo. La nueva política industrial sostenible tiene que brindar una dirección estable y consistente para que la inversión, la regulación y el financiamiento converjan en una trayectoria verde.",
						]}
					/>

					<ArtSubtitle text="Una política global" />
					<ArtParagraphs
						paragraphs={[
							"Es fundamental que la política industrial sostenible tenga una mirada global, particularmente hacia las Américas, reconociendo que la economía mexicana se encuentra atada por su posición estratégica a la economía mundial. Esto implica generar mecanismos para ir planeando conjuntamente el desarrollo de la región, a través de nuestros tratados comerciales y otras formas de cooperación como la propia Agenda 2030.",
							"Al mismo tiempo, es necesario resolver las contradicciones que plantea el norte global en sus planes de industrialización verde y las consecuencias que tienen en los países del sur global. Los proyectos de Green New Deals de países como Estados Unidos y Reino Unido pueden generar tensiones respecto al desarrollo de un país como México. Para ello, es fundamental que se generen mecanismos de diálogo y cooperación internacional para que las políticas industriales sostenibles del sur global sean incorporadas en la visión del norte.",
							"México requiere de un gran acuerdo nacional para llevar a cabo una política industrial verde. Como nunca, existen las condiciones sociales, políticas y económicas para convocar a esta política, pero sobre todo existe la motivación de desacoplar el crecimiento y la industrialización de los abusos en los recursos naturales y del exceso de gases contaminantes.",
						]}
					/>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
