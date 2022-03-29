import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";
import ArtSubtitle from "../../components/shared/ArtSubtitle";
import ArtList from "../../components/shared/ArtList";
import Referencias from "../../components/shared/Referencias";

import autor from "../../images/autores/autor16.jpg";
import articulo1 from "../../images/articulos/articulo16-1.png";

const Articles = () => {
	const otherArts = [
		"El papel de los pueblos originarios hacia un pacto verde para México",
		"El Big Push mexicano: Plan verde para un desarrollo sostenible",
		"Pactar verde y caminar hacia 2030",
		"Economía social y solidaria para la regeneración ecológica en México",
	];

	return (
		<Layout title="Artículos">
			<HeaderArticle
				bgcolor="bg-green6"
				title="Política agrícola para un Pacto Verde para México"
				titleColor="text-black"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Marcela Aedo"
			>
				Con más de 25 años de experiencia, es colaboradora de instituciones
				públicas, así como en agencias de cooperación internacional, tanto en
				Chile como en México, tales como INDAP, FAO, IICA y CEPAL. Participa en
				todas las etapas del ciclo de políticas públicas.
			</HeaderArticle>
			<ArticleLayout
				arts={otherArts}
				header="Política agrícola para un Pacto Verde para México"
				siguiente="/articulos/transformacion_social"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<ArtParagraphs
						paragraphs={[
							"El cambio climático se ha convertido en el problema ambiental más importante de nuestro tiempo. Este cambio se atribuye principalmente a las actividades del ser humano que alteran la composición global de la atmósfera por los gases de efecto invernadero (GEI), a lo que se suma la deforestación de grandes extensiones y la contaminación de recursos como el agua y el suelo.",
							"Uno de los sectores económicos más afectados por este cambio climático es el agropecuario, por su alta dependencia del clima y su vulnerabilidad a los cambios de este. Entre las principales afectaciones que se han observado, se encuentran:",
						]}
					/>
					<ArtList
						variant="list-disc"
						elements={[
							"El incremento de la temperatura ha ocasionado efectos negativos en el desarrollo vegetativo de los cultivos. La alteración en los ciclos biológicos de plagas y enfermedades afecta directamente la producción agrícola y/o pecuaria.",
							"Periodos de sequía más prolongados y eventos de lluvia más intensos que ocasionan menor producción en zonas habitualmente productoras y el desplazamiento de la producción a nuevas áreas.",
							"Debido a los eventos climáticos extremos, actualmente hay una alta volatilidad en los precios de los alimentos.",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						La región de América Latina, y específicamente México,
						<span className="text-red1 font-medium">
							es altamente biodiversa y rica en recursos para la producción
							agropecuaria, lo que la posiciona como una zona determinante para
							contribuir a los objetivos globales de sostenibilidad ambiental y
							conservación de especies
						</span>
						y líder en producción de alimentos y otros productos agrícolas.
					</p>
				</div>
				<div className="">
					<ArtParagraphs
						paragraphs={[
							"Es urgente optimizar el rendimiento agrícola de manera sostenible para alimentar a la población mundial pues, aunque logremos mitigar el impacto de la acción del hombre sobre el planeta, seguiremos padeciendo los efectos del calentamiento global durante los próximos 100 años, hasta que se logre iniciar su recuperación.",
							"Frente a esta realidad, y tomando en cuenta los compromisos internacionales de tratados y convenios sobre cambio climático, en diciembre de 2019 la Comisión Europea (CE) decidió implementar el “Pacto Verde Europeo”, con el fin de impulsar la sostenibilidad, reducir el impacto ambiental y garantizar la seguridad alimentaria. El objetivo es transformar el modelo agrícola y alimentario en Europa y alinearlo con la protección al medio ambiente y la lucha contra el cambio climático para alcanzar la neutralidad climática de la UE en 2050.",
						]}
					/>
					<img
						src={articulo1}
						className="m-auto my-12 max-w-full"
						alt="Pacto Verde"
					/>
					<ArtParagraphs
						paragraphs={[
							"Derivado de este Pacto, en mayo de 2020, la CE presentó dos programas para abordar este desafío:",
						]}
					/>
					<ArtList
						variant="list-disc"
						elements={[
							"De la Granja a la Mesa: busca alcanzar un impacto positivo o neutro del sistema alimentario sobre el medio ambiente. Todos los eslabones de la cadena de valor de la alimentación deben preservar los recursos, mitigar y adaptarse al cambio climático en sus procesos, proteger el suelo, el agua, el aire, la sanidad vegetal y la salud y el bienestar de las especies animales (CDE, 2021).",
							"Reintegrar la Naturaleza en Nuestras Vidas: estrategia de conservación y recuperación de la biodiversidad (CropLife, 2021).",
							"Como parte de estas estrategias, la CE propone reducir el uso de plaguicidas en un 50% antes de 2030 y utilizar su capacidad diplomática y económica para que sus socios comerciales hagan lo mismo. Esto supone la pérdida de tolerancias a las importaciones, por no estar autorizados ya en Europa, de cientos de productos de protección de cultivos que se utilizan actualmente por los agricultores y agroexportadores.",
						]}
					/>
					<ArtParagraphs
						paragraphs={[
							"Esta postura de la UE ha generado mucha inquietud en instancias ligadas a la agroexportación en otras partes del planeta. Según un análisis del Servicio de Investigación Económica del Departamento de Agricultura de los Estados Unidos, las consecuencias de adoptar las políticas del “pacto verde” en regiones fuera de la UE podrían ocasionar un aumento en el precio de los alimentos de hasta un 89% y una pérdida del bienestar social hasta en 1 trillón de dólares a nivel global. En Latinoamérica, se está alertando a gobiernos, agricultores, universidades y público en general sobre el impacto negativo que podría ocasionar el Pacto Verde en las agroexportaciones  (CropLife, 2021).",
						]}
					/>
					<ArtSubtitle text="Importancia de Latinoamérica como proveedora de alimentos a nivel mundial" />

					<ArtParagraphs
						paragraphs={[
							"La región de América Latina, y específicamente México, es altamente biodiversa y rica en recursos para la producción agropecuaria, lo que la posiciona como una zona determinante para contribuir a los objetivos globales de sostenibilidad ambiental y conservación de especies y líder en producción de alimentos y otros productos agrícolas. Actualmente, la agricultura regional latinoamericana genera el 13% del valor agregado agrícola mundial, pero estudios prospectivos indican que la región debe prepararse para incrementar la producción de alimentos entre 50 y 70% para 2050. Esto implica un enorme desafío productivo-tecnológico que tendrá muchas repercusiones económicas, sociales y ambientales.",
							"Por su importancia en los flujos comerciales y en la estabilidad política global (seguridad alimentaria), es urgente para la región acelerar las acciones para afrontar los actuales retos ambientales relacionados con el cambio climático, los riesgos a la biodiversidad y a la inseguridad alimentaria (CropLife, 2021), lo cual implica una alta correlación entre los retos del continente y la apuesta del Pacto Verde de la Unión Europea.",
							"El sector agropecuario de México ha sufrido cambios importantes a partir de la firma del Tratado de Libre Comercio de América del Norte (TLCAN) en 1992, lo que ha generado una dinámica de competencia que ha fortalecido la producción de ciertos cultivos (principalmente frutas subtropicales y hortalizas) y debilitado las capacidades de algunos otros (granos básicos). Esto desencadenó la consolidación de un sector agroexportador altamente dinámico y logró tasas de crecimiento por encima del PIB total del país, así como un sector campesino dedicado a la producción de granos básicos altamente empobrecido (entre el 72 y 82% de los hogares maiceros rurales destinan su producción al autoconsumo humano y no la comercializan).",
							"De acuerdo con los antecedentes de la Encuesta Nacional de Salud y Nutrición 2018, en las zonas rurales el 40.6% de la población presentaba inseguridad alimentaria leve, 17.8% moderada y 11.3% severa. A esta realidad, se añade la dependencia de las importaciones de granos básicos, principalmente maíz amarillo, trigo y arroz. Esto revela que la inseguridad y la dependencia alimentaria constituyen un reto de grandes dimensiones para las políticas públicas del país.",
							"México ha establecido compromisos con la Agenda 2030 para el Desarrollo Sostenible de las Naciones Unidas (ONU) coherentes con el Pacto Verde europeo, y ha emprendido una política pública orientada a la autosuficiencia alimentaria y el rescate del campo, cuyo cumplimiento exige la participación de todos los sectores y actores de la sociedad mediante alianzas para movilizar y compartir conocimientos, capacidades, tecnología y recursos financieros para asegurar su implementación en todos los países.",
						]}
					/>

					<ArtSubtitle text="¿Qué debe hacer Latinoamérica para sumarse a los esfuerzos contra el cambio climático?" />
					<ArtParagraphs
						paragraphs={[
							"Los países de América Latina -México en específico— llevan años fortaleciendo sus políticas y regulaciones para que la sostenibilidad agrícola en la región avance al lado de la ciencia y genere productos agroalimentarios cada vez más demandados globalmente. Esto permite prever que el sector agroalimentario será uno de los principales motores para la recuperación económica postpandemia de la región, así como avanzar en productividad, inocuidad y sostenibilidad (social, ambiental y económica).",
							"El nivel de mejora aún es muy marginal e insuficiente, por lo que es necesario avanzar con mayor celeridad en una serie de puntos que permitan alinearse prontamente con las nuevas imposiciones que cada vez aplicarán con mayor fuerza los mercados:",
						]}
					/>

					<ArtList
						variant="list-disc"
						elements={[
							"Mayor impulso a las Buenas Prácticas Agrícolas, que incluyen el uso responsable de las tecnologías ya desarrolladas en la agricultura industrial.",
							"Avanzar en el desarrollo y la construcción de capacidades institucionales para consolidar los sistemas de registro y control de uso de agroquímicos.",
							"Inversión en el desarrollo de biotecnologías que permitan la sustitución de agroquímicos en la producción agropecuaria para mantener los niveles productivos sin afectar la seguridad alimentaria de la población.",
							"Inversión en I+D en la región para la sustitución de cultivos afectados por el cambio climático y/o rescate de biodiversidad.",
							"Apoyo financiero y científico a los productores para adaptarse prontamente a los nuevos requerimientos de los mercados y las nuevas normativas estableciendo tiempos de adopción y adaptación.",
							"Poner en práctica directrices de seguridad que protejan a los agricultores y trabajadores en toda la cadena de valor proporcionando redes de seguridad social a corto plazo que protejan los ingresos de los grupos más vulnerables.",
							"Las Instituciones Financieras Internacionales (IFI), incluidos los bancos de desarrollo multilateral, deben apoyar al sector agropecuario en la adaptación y adopción de nuevas tecnologías.",
							"Facilitar la inversión en mecanización y automatización de la cosecha y de los procesos de la cadena de suministro (siempre que sea posible) para asegurar que se cumplan los protocolos de seguridad; además, la digitalización de las transacciones comerciales y de los trámites portuarios y aduaneros puede ayudar a reducir los costos de transacción y comerciales.",
							"Desarrollo de políticas específicas e integrales para las mujeres del campo e indígenas que permitan su reconocimiento e integración económica en el nuevo paradigma productivo que se afronta, y que logren el objetivo de reducir la desigualdad de género.",
							"Fomento al uso de energías renovables en el sector agropecuario que independice al sector del uso de las energías fósiles.",
							"Incentivar el Pago por Servicios Ambientales (PSA): incentivos económicos a los productores de zonas vulnerables (partes altas de las cuencas), de manera que continúen ofreciendo un servicio ambiental que beneficie a la sociedad. Adopción de prácticas de uso que garanticen la provisión de un servicio en particular (cobertura del suelo, secuestro de carbono, curvas de nivel para infiltración del agua y evitar escorrentías, entre otras).",
							"Participación de las instancias diplomáticas de Latinoamérica y México en el debate sobre las normativas que se están implementando a nivel global y que se expresen las brechas que la región tiene respecto a las normativas que se están desarrollando para una agricultura más sostenible.",
							"Los inminentes efectos del cambio climático frente a la seguridad alimentaria, en primer orden, y la posición agroexportadora, en segundo lugar, agravado por la crisis que está ocasionando la pandemia del COVID-19, obliga a México a abordar una agenda de agricultura sostenible que permita al país asumir los nuevos retos y un liderazgo en la región. La Agenda 2030 y el Pacto Verde constituyen un gran desafío para el sector y ofrecen una gran oportunidad para asumir dicho liderazgo. Así se posicionaría el sector agroalimentario del país en el contexto del nuevo paradigma de la bioeconomía, que orientará el futuro científico-tecnológico, económico, y social en el siglo XXI.",
						]}
					/>
				</div>
				<Referencias
					referencias={[
						{
							ref: "CDE (2021). Estrategia de la granja a la mesa. Pacto Verde Europeo. Centro de Documentación Europea, Universidad Francisco Vitoria.",
							subref: "Disponible en: ",
							link: "https://centro-documentacion-europea-ufv.eu/estrategia-de-la-granja-a-la-mesa",
						},
						{
							ref: "CropLife (2021). Pacto Verde Europeo y su Impacto en América Latina.",
							subref: "Disponible en: ",
							link: "https://croplifela.org/es/actualidad/articulos/pacto-verde-europeo-y-su-impacto-en-america-latina",
						},
					]}
				/>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
