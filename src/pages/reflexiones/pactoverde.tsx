import React from "react";
import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderPage from "../../components/pages/HeaderPage";

import reflexion1 from "../../images/reflexiones/reflexion1.jpg";

const Pactoverde = () => {
	return (
		<Layout title="Pacto Verde">
			<HeaderPage
				bgcolor="bg-green5"
				title="Un pacto verde para México"
				titleColor="text-white"
			>
				<p className="text-white font-light text-2xl">
					Por: Carlos Cabrera Espinosa y Carlo Altamirano Allende
					<br /> <span className="font-medium">Coordinadores editoriales</span>
				</p>
			</HeaderPage>
			<ArticleLayout
				isArticle={false}
				header="Un pacto verde para México"
				url="reflexiones/pactoverde"
			>
				<div className="relative pb-4 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<img src={reflexion1} alt="Pacto Verde" className="w-full mb-16" />
					<p className="mb-4">
						A medida que las ciudades, las regiones y los países de todo el
						mundo planifican la recuperación social y económica derivada de la
						pandemia del COVID-19, la necesidad de generar políticas que aborden
						de manera rápida, crítica, efectiva e integrada factores
						ambientales, económicos y sociales del desarrollo es más apremiante
						que nunca.
					</p>
					<p className="mb-4">
						¿Cómo transitar a una economía con cero emisiones netas de carbono
						que, a su vez, atienda las desigualdades sociales y la degradación
						ambiental hacia un bienestar generalizado? Desde la Fundación
						Friedrich-Ebert-Stiftung buscamos generar un espacio para la
						discusión plural y constructiva de un posible pacto verde para
						México que, partiendo de la crisis climática global, proponga un
						conjunto de políticas centradas en una descarbonización del sistema
						productivo nacional basado en el uso extensivo de energías
						renovables y la conservación del medio ambiente, que aborde de
						manera explícita medidas sociales y económicas para la reducción de
						desigualdades estructurales, y que incluya un mayor liderazgo del
						Estado en la definición de las reglas del juego y en la asignación
						de los recursos necesarios para esta recuperación y transformación
						económica de largo aliento.
					</p>
					<p className="mb-4">
						Esta publicación reúne a un nutrido grupo de voces expertas y
						reconocidas en el ámbito nacional e internacional del sector
						público, privado, productivo, de organizaciones de la sociedad civil
						y organismos internacionales que sugieren medidas concretas y con
						pertinencia en la realidad y el contexto mexicanos. Las y los
						autores proponen desde el ámbito de su competencia paquetes de
						política pública con una visión de futuro en áreas clave del
						desarrollo urbano, regional y nacional como lo son: biodiversidad y
						conservación; política y derechos laborales; el papel de los pueblos
						originarios; política científica, tecnológica y de innovación;
						política industrial; la importancia del sector empresarial; política
						educativa; política energética; sector financiero; economía social y
						solidaria; movilidad sostenible y diseño urbano; una perspectiva del
						cuidado y propuestas para una transformación social-ecológica, entre
						otros temas clave.
					</p>
					<p>
						En diversos países y regiones del mundo existen ya propuestas
						concretas de acuerdos y medidas que, desde una agenda progresista,
						buscan implementar acciones drásticas para modificar el modelo de
						desarrollo preponderante en la actualidad. Por ello, este volumen
						actúa como un semillero de nuevas visiones que sientan las bases
						para imaginar y transformar la realidad de México hacia un futuro
						incluyente y productivo para todas y todos.
					</p>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Pactoverde;
