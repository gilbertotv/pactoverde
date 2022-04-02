import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";

import autor from "../../images/autores/autor17.jpg";
import articulo1 from "../../images/articulos/articulo17-1.jpg";
import articulo2 from "../../images/articulos/articulo17-2.jpg";

const Articles = () => {
	return (
		<Layout
			title="Hacia una transformación social-ecológica en México"
			description="Hacia una transformación social-ecológica en México"
			url="/articulos/transformacion_social"
			image={articulo1}
		>
			<HeaderArticle
				bgcolor="bg-green2"
				title="Hacia una transformación social-ecológica en México"
				titleColor="text-green3"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Mariana Blanco Puente"
			>
				Socióloga por la UNAM y maestra en Estudios Socioambientales por la
				Flacso Ecuador. Ha trabajado en temas de extractivismo, movimientos
				socioambientales y agroecología en América Latina. Actualmente es
				coordinadora en el Proyecto de Transformación Social-Ecológica en
				América Latina de la Fundación Friedrich-Ebert.
			</HeaderArticle>
			<ArticleLayout
				header="Hacia una transformación social-ecológica en México"
				siguiente="/articulos/trabajadores_industria"
				url="/transformacion_social"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<img src={articulo1} className="mb-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"Estamos en un momento clave para pensar en otros enfoques que trasciendan lo meramente económico para entender la realidad y darle solución a los grandes problemas sociales y ambientales que vivimos en América Latina y en nuestro país. En 2019, el 30.5 % de la población latinoamericana se encontraba en la pobreza, la cual se profundiza entre las mujeres, los pueblos indígenas y los afrodescendientes.",
							"México es uno de los países con los salarios más bajos en la región, mayores índices de empleo informal, brecha salarial y una gravísima crisis de derechos humanos por la situación de violencia generalizada y de género. Un país que, si bien se encuentra dentro de los más megabiodiversos en el mundo, ocupa el tercer lugar en asesinatos de defensores ambientales, según el último reporte de Global Witness de 2021, muchos de ellos pertenecientes a pueblos originarios. Los informes más actuales sobre el cambio climático ponen a la región de América Latina como una de las más vulnerables al cambio climático. México se verá especialmente afectado por las sequías y el estrés hídrico, el aumento de huracanes y ondas de calor, así como la disminución de los rendimientos en los cultivos.",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-green1 font-medium">
							Pensar un modelo diferente para México, uno que impulse, no un
							"pacto verde" en términos de un crecimiento verde de la economía y
							un acuerdo entre las élites políticas y económicas, sino una
							transformación social y ecológica{" "}
						</span>
						que incluya a los diferentes actores sociales, sobre todo a aquellos
						más vulnerables hoy en día, implica pensar en cambios estructurales
						en el país.
					</p>
				</div>
				<div className="">
					<ArtParagraphs
						paragraphs={[
							"Si pensamos en las últimas cuatro décadas de neoliberalismo en el país, podemos asociarlo a la creciente degradación ambiental de nuestros ecosistemas, al aumento de la deforestación de los territorios, el incremento de las concesiones y proyectos mineros —sobre todo de minería a gran escala y a cielo abierto—, el crecimiento desordenado de las ciudades, la contaminación, degradación y disminución de las fuentes de agua dulce, la disminución de la propiedad comunitaria y ejidal de la tierra, así como a la pérdida de la agrobiodiversidad y de las tierras de cultivo. El discurso basado en la idea del desarrollo a través de la explotación de los recursos naturales que se ha manejado en toda la región desde mediados del siglo XX, y que se profundizó durante el neoliberalismo, no ha logrado acabar con la desigualdad estructural y la pobreza. En todo caso, ha logrado abrir nuevos territorios a la lógica del mercado a actividades extractivas. Hay que pensar en otras alternativas al discurso del desarrollo y de la economía verde, las cuales no han logrado salir de la lógica extractivista para los países latinoamericanos y de la lógica de la mercantilización de la vida.",
							'Pensar un modelo diferente para México, uno que impulse, no un "pacto verde" en términos de un crecimiento verde de la economía y un acuerdo entre las élites políticas y económicas, sino una transformación social y ecológica que incluya a los diferentes actores sociales, sobre todo a aquellos más vulnerables hoy en día, implica pensar en cambios estructurales en el país.',
						]}
					/>
					<img src={articulo2} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"Un primer elemento es repensar aquellas actividades altamente devastadoras para los ecosistemas, productoras de grandes cantidades de GEI y consumidoras de energía y recursos naturales como, por ejemplo, la minería a gran escala, la cual genera un fuerte impacto en los territorios donde se instala; utiliza y contamina millones de litros de agua por día y destruye por completo el suelo y subsuelo, pero también quiebra las economías locales y despoja de sus tierras y territorios a comunidades enteras. Se tiene que empezar por procesos amplios de información, consultas y participación de los pueblos dueños de la tierra y no de imposición de proyectos mineros desde afuera. La implementación del Acuerdo de Escazú, ya ratificado por México, es un ejemplo de cómo avanzar hacia esa dirección.",
							"Dado que México es un país con una actividad industrial importante para la economía, hay que considerar que hoy en día esta resulta muy contaminante y está afectando a ríos y zonas relevantes en el país. Es por ello que también se debe avanzar hacia una industria más sostenible, con regulaciones ambientales pertinentes, así como reparación de los actuales daños ambientales que se observan en los principales corredores industriales.",
							"Una transición energética y un cambio del modelo energético en nuestro país son cruciales. A nivel mundial se está pensando en la neutralidad de carbono para mediados de siglo, y México tiene compromisos importantes para la reducción de sus emisiones de GEI: 50 % de sus emisiones para 2050, y la producción del 30 % de su energía de fuentes limpias para 2024. Para avanzar hacia este camino es necesario reflexionar sobre el abandono progresivo de la dependencia a la explotación del petróleo a través de una transición justa, ya que existen alrededor de 120 mil trabajadores en el sector estatal con quienes habría que negociar. Por otro lado, la transición energética no debería tratarse únicamente de sustituir el cómo se produce la energía, sino de repensar el modelo energético, es decir: ¿Cómo, para qué y para quién se produce la energía? ¿Se está utilizando para satisfacer las necesidades de toda la población? ¿Se está combatiendo la pobreza energética?",
							"La sustitución hacia energías renovables es un ámbito sobre el cual avanzar, sin embargo, para que represente una actividad incluyente hay que hacerla de manera democrática y no bajo las prácticas extractivistas de las empresas internacionales hasta ahora instaladas en el país. Un parque eólico a gran escala instalado sobre tierras de cultivo, sin consultas previas e información, profundiza la desigualdad y la pobreza en los territorios y en su población, especialmente en las mujeres. Por el contrario, se tienen que abrir las posibilidades a la diversidad de formas de producción de energía renovable y sus escalas. Existen pueblos indígenas que están demostrado que se pueden generar cooperativas de producción energética a menor escala.",
							"Repensar y replantear las ciudades es otro tema urgente para una región sumamente urbanizada como es América Latina y para un país en el que la mayor parte de la población vive en zonas urbanas. Aumentar la sostenibilidad de las ciudades significa replantearlas en relación a sus entornos, sus ecosistemas y sus dinámicas altamente contaminantes. Por tanto, la reconfiguración de la movilidad, la vivienda y sus economías se tendría que dar a través de una democratización de estas, incluyendo en sus decisiones a las poblaciones más vulnerables.",
							"Por su parte, México cuenta ya con una diversidad de actividades económicas rurales y también con un gran potencial para avanzar en una agricultura sostenible a través de técnicas agroecológicas, silvopastoriles, así como el aprovechamiento forestal sostenible. Avanzar en la sustitución de la agricultura convencional dependiente de insumos químicos y fortalecer una agricultura con insumos orgánicos y con prácticas ecológicas puede recuperar y fomentar un empleo más digno en las zonas rurales.",
							"Así como el cambio climático es ineludible, el avanzar en políticas de mitigación y adaptación en nuestros territorios también lo es. México es uno de los países en donde los efectos del cambio del clima ya se están observando, a través de las ondas de calor y del aumento en la temperatura, una mayor cantidad de huracanes y tormentas tropicales y una disminución de las fuentes de agua dulce. Es una realidad que hay que enfrentar con presupuestos y políticas públicas específicas en la materia.",
							"Finalmente, y en relación al punto anterior, se tiene que aumentar y reasignar el presupuesto para las instituciones en materia ambiental y políticas públicas ambientales, la administración de las áreas naturales protegidas, la gestión sostenible de terrenos forestales, así como del cuidado y la regeneración de zonas costeras y ecosistemas marinos. La disminución del presupuesto para materia ambiental en el país viene de varias décadas atrás, lo cual se manifiesta en el creciente deterioro de los ecosistemas. Una transformación social ecológica requiere instituciones ambientales activas, democráticas y transparentes que estén en el centro de las políticas de gobierno.",
							"Así como las políticas de cuidado reflexionan sobre poner la vida en el centro de la política, pensar en una transformación estructural del país que sea social y ecológica debe poner al centro, necesariamente, el cuidado de la naturaleza.",
						]}
					/>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
