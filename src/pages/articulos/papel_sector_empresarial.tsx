import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";

import autor from "../../images/autores/autor10.jpg";
import articulo1 from "../../images/articulos/articulo10-1.jpg";

const Articles = () => {
	return (
		<Layout
			title='El papel del sector empresarial para "Un pacto verde para México"'
			description='El papel del sector empresarial para "Un pacto verde para México"'
			url="/articulos/papel_sector_empresarial"
			image={articulo1}
		>
			<HeaderArticle
				bgcolor="bg-green2"
				title='El papel del sector empresarial para "Un pacto verde para México"'
				titleColor="text-green3"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Claudia Jañez Sánchez"
			>
				Empresaria mexicana, presidenta del Consejo Ejecutivo de Empresas
				Globales en México (2019 a 2021), presidenta para América Latina y
				directora global de Diversidad e Inclusión de DuPont hasta febrero de
				2021. Ha sido reconocida por diversas revistas (Expansión, Fortune,
				Forbes y Líderes en México) como una de las líderes más importantes e
				influyentes en los negocios.
			</HeaderArticle>
			<ArticleLayout
				header="El papel del sector empresarial"
				siguiente="/articulos/diversificacion_sostenible"
				url="/papel_sector_empresarial"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<ArtParagraphs
						paragraphs={[
							"Desde finales de los años noventa, México ha sido un país atractivo para la inversión privada, tanto nacional como extranjera, en la manufactura de distintas industrias y servicios; sin embargo, desde hace varios años hemos enfrentado retos muy relevantes por la falta de crecimiento económico. La inversión extranjera se encuentra por debajo del potencial del país como destino para la inyección de capital, especialmente si consideramos todas sus ventajas competitivas, como lo son la localización geográfica, nuestra relación comercial formal con más de 40 países en el mundo, puertos en los océanos Pacífico y Atlántico, lugares turísticos casi para todos los gustos y talento joven dispuesto a trabajar, solo por mencionar algunas.",
							"Por lo anterior, es urgente que juntos, sector público y sector privado generemos un ecosistema sostenible en favor de la inversión privada, para poder apuntalar los sectores con mayor potencial para las exportaciones. En paralelo, es necesario generar una agenda económica que permita retener y atraer inversión privada, tanto extranjera, como nacional. Asimismo, debe garantizarse el acceso a energía a costos competitivos, así como el suministro, para no interrumpir las cadenas productivas y las líneas de producción manufacturera.",
							"La modernización y ampliación de las redes de infraestructura logística y de transporte deben considerarse una necesidad estratégica para el crecimiento económico, ya que permiten que las cadenas productivas tengan un flujo continuo y estable. Además de esto, como país debemos pensar en formas que nos permitan fortalecer la proveeduría nacional e incrementar el contenido nacional en industrias clave y en beneficio de las pymes mexicanas, la cuales generan siete de cada 10 empleos formales en el país.",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-green1 font-medium">
							El sector público, el sector privado y la sociedad civil debemos
							apostar por un diálogo mucho más constructivo, basado en la
							confianza mutua y en la corresponsabilidad,{" "}
						</span>
						así como unir esfuerzos para rediseñar la actividad productiva y
						económica de México para lograr un país más competitivo, moderno,
						innovador e incluyente que sea mucho más atractivo para la
						inversión.
					</p>
				</div>
				<div className="">
					<ArtParagraphs
						paragraphs={[
							"Ahora más que nunca es necesario tomar ventaja de los tratados internacionales, el T-MEC y del Tratado con la Unión Europea, y fortalecer la relación comercial con Asia Pacífico para diversificar la inversión extranjera directa en México y en favor del desarrollo económico del país.",
							"Hoy es necesario hablar de un capitalismo con rostro social que no solo atienda el interés de los accionistas y dueños del dinero, sino que también promueva un ambiente de negocios que impacte positivamente a la sociedad y tenga una visión del futuro. Que no solo busque el retorno de inversión, sino desarrollar al país en donde se desenvuelve y que tenga en mente los retos a los que se enfrentará la humanidad a la hora de hacer negocios. Cada vez con mayor frecuencia los inversionistas y las entidades financieras exigen transparencia y compromiso con la sostenibilidad de largo plazo a cambio de inversiones y líneas de crédito; una mayor preocupación por el compromiso que las empresas en las que trabajan tienen con la sociedad y cada vez más vemos compañías que basan sus estrategias en temas de sostenibilidad. En otras palabras, las empresas y la inversión privada, aunadas a políticas públicas adecuadas y respeto al Estado de Derecho, deben generar más y mejores empleos, así como movilidad y progreso social que busquen el desarrollo de la humanidad.",
						]}
					/>
					<img src={articulo1} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"La pandemia del COVID-19 nos enseñó importantes lecciones y probablemente una de las más relevantes es que no podemos dar nada por sentado. Debemos aprender a navegar en la incertidumbre; por eso, la crisis sanitaria, adicional a la crisis económica que trajo consigo, han sido un punto de inflexión para tener empresas más responsables, más humanas, más conscientes de las necesidades de nuestros colaboradores, de nuestro entorno y, sobre todo, la oportunidad para construir organizaciones que nos permitan adaptarnos mejor a los cambios repentinos, ser más creativos hacia el futuro y de esta manera contribuir a un crecimiento más equitativo.",
							'Las empresas, los empresarios y la sociedad en general no podemos aspirar únicamente a recuperar "la normalidad" que teníamos antes de la pandemia, debemos reconstruirla y mejorarla. Si logramos aprender de esta pandemia, podremos en un futuro no lejano ser mejores personas, mejores empresas y mejores ciudadanos. Para ello se requiere liderazgo y creo que en la comunidad empresarial tenemos una labor fundamental para impulsar esta reconstrucción y reconvertir la capacidad existente de bienes e insumos con el fin de responder a la reconfiguración de la demanda y la oferta en los principales mercados del mundo.',
							"También debemos tener presente que hay tendencias que llegaron para quedarse: inteligencia artificial, educación y entretenimiento a distancia, comercio electrónico, pagos móviles, ciberseguridad, entre otros, y que debemos adaptar la política de desarrollo económico hacia estas nuevas tendencias globales para generar más y mejores empleos y un crecimiento mucho más sostenible.",
							"El sector público, el sector privado y la sociedad civil debemos apostar por un diálogo mucho más constructivo, basado en la confianza mutua y en la corresponsabilidad, así como unir esfuerzos para rediseñar la actividad productiva y económica de México para lograr un país más competitivo, moderno, innovador e incluyente que sea mucho más atractivo para la inversión.",
							"Es en estos momentos de crisis cuando nosotros como comunidad empresarial debemos reconocer nuestra corresponsabilidad para mejorar el bienestar de las familias mexicanas y poner al centro de nuestros modelos de negocio los problemas sociales. Nuestro papel como empresas no debe limitarse a generar empleos. Solo de esta forma podremos lograr una visión innovadora de país de largo plazo, en donde se apueste por la excelencia logística e infraestructura de vanguardia, no solo para atraer la inversión extranjera, sino para que también se desarrolle el talento local y se trabaje en pro de la sociedad mexicana.",
						]}
					/>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
