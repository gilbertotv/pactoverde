import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";

import autor from "../../images/autores/autor8.jpg";
import articulo1 from "../../images/articulos/articulo8-1.png";

const Articles = () => {
	const otherArts = [
		"El papel de los pueblos originarios hacia un pacto verde para México",
		"El Big Push mexicano: Plan verde para un desarrollo sostenible",
		"Pactar verde y caminar hacia 2030",
	];

	return (
		<Layout title="Artículos">
			<HeaderArticle
				bgcolor="bg-green6"
				title="Un pacto verde para México"
				titleColor="text-black"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Alfonso Ramírez Cuéllar"
			>
				Diputado federal por la LXIV Legislatura y coordinador del grupo de
				trabajo por la transición hacendaria. Antropólogo, historiador y
				abogado, es fundador de El Barzón y un líder prominente de la izquierda
				mexicana, en donde se destaca su lucha en defensa del consumidor y en
				contra de los monopolios. En la actual legislatura, su trabajo se ha
				enfocado en la definición de políticas públicas para una gestión
				sostenible del agua en el país.
			</HeaderArticle>
			<ArticleLayout
				arts={otherArts}
				header="Un pacto verde para México"
				siguiente="/articulos/derecho_movilidad"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<ArtParagraphs
						paragraphs={[
							"No hay mayor coincidencia entre los ciudadanos de que el agua es vida. El agua es un factor indispensable para la vida humana, es crucial para la salud, alimentos, desarrollo económico, para el ejercicio de otros derechos y para la conservación de los ecosistemas y su biodiversidad. En las próximas décadas se espera un aumento en su demanda, asociado principalmente al crecimiento poblacional y a los hábitos de consumo de ciertos bienes con una huella hídrica elevada.",
							"En nuestro país, si bien se cuenta con una gran variedad de recursos naturales, en los últimos años las fuentes disponibles para extraer agua han comenzado a escasear. Por un lado, debido a causas naturales como la mala distribución natural de agua, el aumento de la temperatura —que a nivel global altera los ciclos del agua provocando desastres como inundaciones o sequías— y, por otro, debido a causas inherentes a actividades humanas y su mala gestión como el aumento de la población, corrupción, ineficiencia en el uso de agua para la agricultura, sobreexplotación de acuíferos (de los 105 acuíferos de la nación, 653 se encuentran sobreexplotados), así como una infraestructura hidráulica vieja y en mal estado (de los 105 acuíferos de la nación, 653 se encuentran sobreexplotados).",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-green1 font-medium">
							La Conagua ha estimado que se requieren, como mínimo, 90,285
							millones de pesos durante los próximos cuatro años para cumplir
							con la Agenda del Agua 2030.
						</span>
						En contraste, el presupuesto para Conagua ha disminuido
						drásticamente: pasó de 32,300 mdp en 2018 a 24,674 mdp en 2021, lo
						que significó 31% de disminución real. Es importante reconocer que
						para 2022 se tienen proyectos 33,916.3 mdp, lo que implica un
						incremento de 31.22% más en términos reales.
					</p>
				</div>
				<div className="">
					<ArtParagraphs
						paragraphs={[
							"Es importante reconocer que la distribución de agua es desigual tanto de manera natural como a nivel de política pública, es decir, mientras el centro y el norte de México son mayormente áridos o semiáridos y las entidades reciben un 25 % de agua de lluvia, el sur y el sureste del país reciben casi el 50 % de lluvia; sin embargo, sus habitantes tienen menor acceso al agua debido a que no cuentan con los servicios básicos de infraestructura, como es el agua entubada en la vivienda. En nuestro país existen 8.2 millones de personas sin acceso a agua potable y, considerando el crecimiento demográfico en los próximos ocho años, se deberá proporcionar servicios de agua potable a 36.8 millones de habitantes más.",
							"Para resolver una problemática tan compleja y con tantas aristas como es el garantizar el acceso al agua para todos, debemos partir de que se requiere de un esfuerzo integral de actores, sociedad civil, expertos y científicos, entre otros.",
							"Por un lado, es necesario realizar acciones que estén encaminadas a remediar la situación de nuestras fuentes de agua y regresar a un equilibrio y balance entre lo que se recarga y lo que se extrae. Por ejemplo, en la cuenca del Valle de México la recarga del acuífero es de 24 m3 por segundo, mientras que se extraen 55 m3 por segundo. A la par, se deberán promover y fomentar medidas complementarias para incrementar la oferta hídrica como la cosecha de agua de lluvia, la recuperación de áreas naturales de conservación y el mejoramiento de suelos degradados, que pueden contribuir a la recarga de acuíferos mediante escurrimientos superficiales.",
							"Además, se deben diseñar e implementar políticas para la adopción y el fomento del uso de tecnologías para aprovechar aguas residuales, tecnificar el riego y monitorear el uso en el sector agrícola e industrial, ramos que utilizan la mayor parte de agua en México. Datos de la Comisión Nacional del Agua (Conagua) señalan que la agricultura utiliza entre 68 y 70 %, mientras que la industria y las hidroeléctricas cerca de 14 %, y solo aproximadamente el 10 % está destinado al uso doméstico, por lo que con la implementación adecuada y oportuna de políticas públicas se permitirá una reducción considerable del agua y fomentaría el uso sustentable del recurso.",
							"Asimismo, se debe concientizar a la población de la importancia de cuidar el vital líquido, ya que, por ejemplo, en la Ciudad de México las personas gastan un promedio de 366 litros diarios por persona, los cuales varían desde 50 a 500 litros dependiendo de la zona.",
						]}
					/>
					<img
						src={articulo1}
						className="m-auto my-12 max-w-full"
						alt="Pacto Verde"
					/>
					<ArtParagraphs
						paragraphs={[
							"Como propuesta concreta, se encuentra la creación de un Fondo Federal que será construido con el 15 % de los recursos destinados a los programas de agua e hidroagrícola a cargo de la Conagua, y serán destinados exclusivamente a la conservación, el incremento, el aprovechamiento sostenible y la restauración de los recursos hídricos, así como sus recursos asociados.",
							"Lo anterior impulsará la búsqueda de un equilibrio entre la oferta natural del recurso hídrico, así como de su captación, conducción y distribución, lo que permitiría una asignación más equilibrada a las personas, la valoración de los servicios ambientales que presta, la disminución de emisiones contaminantes que provocan el cambio climático, una mayor eficiencia en su uso y una valoración sobre el aprovechamiento preferente para el consumo humano y la producción de alimentos.",
							"En este mismo sentido, se requiere de proyectos de inversión para el mejoramiento o establecimiento de infraestructura hídrica que permita distribuir de manera equitativa y a toda la población agua suficiente y de calidad garantizando de esta forma el derecho que tenemos todos de acceso al agua.",
							"Sin embargo, no basta con diseñar políticas adecuadas para este fin, es necesario contar con el presupuesto suficiente para implementarlas, la Conagua ha estimado que se requieren, como mínimo, 90,285 millones de pesos durante los próximos cuatro años para cumplir con la Agenda del Agua 2030. En contraste, el presupuesto para Conagua ha disminuido drásticamente: pasó de 32,300 mdp en 2018 a 24,674 mdp en 2021, lo que significó 31.0 % de disminución real. Es importante reconocer que para 2022 se tienen proyectos 33,916.3 mdp, lo que implica un incremento de 31.22 % más en términos reales.",
						]}
					/>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
