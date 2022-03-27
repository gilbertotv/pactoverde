import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";

import autor from "../../images/autores/autor14.png";
import articulo1 from "../../images/articulos/articulo14-1.png";

const Articles = () => {
	const otherArts = [
		"El papel de los pueblos originarios hacia un pacto verde para México",
	];

	return (
		<Layout title="Artículos">
			<HeaderArticle
				bgcolor="bg-green2"
				title="Ciencia, tecnología e innovación para un Pacto Verde para México"
				titleColor="text-green3"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Carlo Altamirano Allende"
				subText="Licenciado y maestro en Física por la UNAM y doctor en Dimensiones Sociales y Humanas de la Ciencia y la Tecnología por la Universidad Estatal de Arizona, investiga y es consultor en el área de política científica, tecnológica y de innovación. Ha colaborado con el Conacyt, la Academia Nacional de Ciencias de Estados Unidos y la Asociación Americana para el Avance de la Ciencia (AAAS)."
			/>
			<ArticleLayout
				arts={otherArts}
				header="Ciencia, tecnología e innovación para un Pacto Verde para México"
				siguiente="/articulos/transicion_energetica"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<ArtParagraphs
						paragraphs={[
							"Nunca antes en la historia la humanidad había sido capaz de coordinarse a escala global para diseñar una respuesta sistémica ante una crisis de la magnitud exigida por la pandemia de COVID-19. Si bien esta ha sido ambivalente, desigual, caótica y, en cierta medida, insuficiente, esta coyuntura ha demostrado la compleja interrelación entre los sistemas sociales, político, financiero y económico de los grandes retos de la modernidad: la pobreza, el colapso socioecológico y las crisis pandémicas.",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-green1 font-medium">
							Es claro que México necesita de una agenda clara y unificada de
							largo aliento para cumplir con los objetivos planteados por un
							posible pacto verde.
						</span>
						Evidentemente, los recursos públicos para el sector no se
						incrementarán de la noche a la mañana, pues la ciencia y la
						tecnología compiten con otras grandes prioridades nacionales e,
						históricamente, el sector se queda con una rebanada mínima de
						recursos.
					</p>
				</div>
				<div className="">
					<ArtParagraphs
						paragraphs={[
							"En particular, la pandemia puso a prueba al sector de ciencia, tecnología e innovación (CTI) al demandar un despliegue acelerado de las capacidades de generación de conocimiento básico y aplicado a una escala global y cambios en las prácticas de validación de investigaciones, publicación de resultados, aplicación, circulación y gestión del conocimiento y, en general, de la evaluación del quehacer científico. Es decir, que la pandemia, al igual que la crisis climática, ha colocado la relación entre ciencia y política en el escenario principal de discusiones sobre los procesos de toma de decisiones en materia de políticas públicas, de generación de conocimientos para el bien común y la definición de agendas prioritarias de inversión en ciencia y tecnología para el desarrollo. En pocas palabras, en este momento lo que está sobre la mesa es la definición de una nueva política científica y tecnológica para el futuro de la democracia y la soberanía nacional.",
							"El objetivo de un posible pacto verde para México es multifacético: por un lado, la descarbonización de la economía del país hacia formas de producción y distribución basadas en la reducción drástica de emisiones de gases de efecto invernadero (GEI) y, por otro, la adopción de medidas efectivas para la reducción de la pobreza y el acceso equitativo a servicios básicos de vivienda, salud y movilidad, con un respeto irrestricto al ambiente y a los bienes comunes, a través de paquetes de medidas fiscales, laborales y económicas de largo plazo. Es evidente que el cambio tecnológico es crucial para disminuir y contrarrestar los efectos del cambio climático y la degradación ambiental, no obstante, es fundamental que se garantice que estas políticas públicas no ahonden las brechas de desigualdades sociales y económicas. ¿Cómo podemos transformar al sector de CTI para que esté al nivel de esté enorme reto?",
						]}
					/>
					<img src={articulo1} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"Los avances en ciencia y tecnología tienen el potencial para resolver muchos de estos retos; sin embargo, actualmente el ecosistema nacional de CTI está desarticulado y los objetivos que dirigen al sector no son cla- ros ni están optimizados colectiva- mente para tener un impacto social. En general, históricamente el desa- rrollo de la ciencia y la tecnología en el país ha sido marginal y ha carecido de una definición de alta prioridad para el desarrollo nacional. Esto se refleja en que los distintos actores involucrados (la academia, las agencias de financiamiento público, las empresas de corte tecnológico que realizan actividades de innovación, las oficinas de transferencia de tecnología, las dependencias gubernamentales con pre- supuesto para actividades en este ramo, entre otros) carecen de una agenda común.",
							"En México, los recursos federales destina¬ dos para ciencia, tecnología e innovación en el Presupuesto de Egresos de la Federación (PEF) se agrupan en lo que se conoce como el Anexo Transversal 12: Programa de Cien¬cia, Tecnología e Innovación, que incluye al ramo 38 del Consejo Nacional de Ciencia y Tecnología (Conacyt) pero también recursos a otros ramos y dependencias destinados a realizar funciones de CTI como Relaciones Exteriores, la Marina, la Fiscalía General de la República, la Secretaría de Gobernación o la Secretaría de Educación Pública, sin que exis¬ta una colaboración interinstitucional efectiva y continua entre estas dependencias en relación con el destino de estos recursos.",
							"Aun cuando el Conacyt es la cabeza del sector público de CTI y el principal financiador de la actividad de investigación y desarrollo del país, este solo percibe un ter¬cio del total de recursos fiscales destinados para CTI. Más aún, cabe recordar que tanto la Ley General de Educación (artículo 119) como la Ley de Ciencia y Tecnología (artículo 9 bis) vigentes establecen que la inversión total del Estado en actividades de CTI debe ser tal que el gasto nacional en este rubro no sea menor al 1% del PIB, cifra muy lejana al 0.31% que se alcanzó en 2020 para este indicador.",
							"El primer gran problema entonces es evidente: no existen los recursos necesarios por parte del Estado para realizar la actividad científica y tecnológica para cumplir con las demandas que el país requiere, y los recursos existentes se distribuyen de una forma no articulada, sin objetivos ni metas claras, y la institución a cargo de liderar los esfuerzos nacionales en esta materia recibe un recurso a todas luces insuficiente para financiar el fortalecimiento de la comunidad de CTI del país.",
							"Un segundo problema característico es que el sector privado no contribuye al desarrollo tecnológico y de innovación del país. Mientras que en países como Corea del Sur y Alemania la innovación tecnológica es impulsada y financiada principal¬ mente por las empresas, en México casi el 78% de los recursos de investigación y desarrollo provienen del Estado. Es decir, a pesar de existir programas de apoyo a la innovación desde Conacyt, la Secretaría de Economía o el SAT, estos no arrojan resul¬tados visibles y no contribuyen a que las empresas mexicanas despeguen y crezcan. ",
							"Se necesita desarrollar y fomentar un sector de la innovación comprometido, bajo modelos de innovación abierta e innovación responsable alineado con la agenda 2030 y sectores prioritarios nacionales. La Comisión Europea, por ejemplo, ha adoptado un marco conocido como Investigación e Innovación Responsable para financiar y eva¬luar proyectos de gran infraestructura en las ciencias. Este marco se basa en alinear la investigación y la innovación con las necesidades sociales más importantes de estos tiempos, y está relacionada con dimensiones de anticipación, reflexividad, inclusividad y capacidad de respuesta en prácticas científicas, así como en la evaluación de tecnologías. México podría traducir y adaptar este concepto de responsabilidad asociado a un compromiso ético y social de los resultados de la ciencia y la innova¬ción como métrica para evaluar proyectos y asignar recursos para la investigación con un impacto social medible en el corto, mediano y largo plazo.",
							"Un pacto verde para México podría —y debería— incentivar a las grandes empre¬sas tecnológicas del país para adoptar modelos de producción más amigables con el medio ambiente a través de leyes más estrictas que penalicen la generación de residuos del sector; que exijan una mayor infraestructura para el reciclaje a escala industrial y, en general, a tomar mayor responsabilidad en todo el ciclo de vida de los productos de la economía de mercado. Para que esto suceda, se requieren las tecnologías necesarias para lograrlo, por lo que el sector privado en el país debe comenzar por innovar más rápido y en esta dirección, mientras que el Estado tiene la obligación de sentar las bases para que las pequeñas empresas tengan la capaci-dad de innovación mediante programas de incentivos fiscales, de financiamiento, de construcción de talentos y de fomento a la propiedad industrial, además del derribo de barreras burocráticas que conllevan estos procesos.",
							"Es claro que México necesita de una agenda clara y unificada de largo aliento para cumplir con los objetivos planteados por un posible pacto verde. Evidentemente, los recursos públicos para el sector no se incrementarán de la noche a la mañana, pues la ciencia y la tecnología compiten con otras grandes prioridades nacionales e, históricamente, el sector se queda con una rebanada mínima de recursos. Por ello, es imperativo generar esquemas de cofinanciamiento con la iniciativa privada, con las universidades, con las entidades federativas y con organismos internaciones para impulsar, desde la ciencia básica y de frontera hasta los niveles más altos de inno¬vación, la generación de conocimiento en áreas estratégicas que están definiendo el futuro de los sistemas económicos a lo largo del planeta. ",
							"En el sector energético, por ejemplo, es necesario desarrollar nuevas tecnolo¬gías de baterías y almacenamiento de energía, de mejora de eficiencia energética de paneles solares, turbinas de viento, de captura de C02 de la atmósfera, de generación de reactores nucleares modulares y demás tecnologías para la generación de energías limpias. En el sector de transporte, el futuro se encuentra en la electromovilidad, por lo que la producción masiva de automóviles en el país se verá obligada a transitar hacia una producción de autos eléctricos; para ello, universidades y centros de investigación del país deberán formar las capacidades de quienes liderarán esta transición. ",
							"Sin embargo, no solo es en el ámbito de las tecnologías e ingenierías que se nece¬sita innovar. Los retos de la agenda de desarrollo sostenible demandan conocimien¬tos críticos en ciencias sociales y en áreas tan diversas como la investigación y el desarrollo de modelos para la erradicación de la pobreza en la región; el estudio del valor de marcado y valor intangible de los servicios ecosistémicos para reducir la explotación y degradación desmedida de la ecología; la recuperación y sistematiza¬ción de prácticas y tecnologías tradicionales para un manejo más sostenible de los recursos naturales; la generación de modelos de producción agrícola sostenible; el uso y el desarrollo de la ciencia de datos y modelos de inteligencia artificial como herramientas para el desarrollo económico sostenible de la industria nacional, etc. ",
							"Esta encrucijada es histórica. Antes de imaginar una ciencia y una tecnología comprometidas con el desarrollo sostenible del que se habla a lo largo de esta publi¬cación, se tiene que cuestionar la relación entre la ciencia y la política. ¿Qué tanto influye el conocimiento científico en las esferas federal, legislativas y estatales para las decisiones en política pública? Mientras no existan cuerpos colegiados y for¬mados de asesoría en temas de ciencia y tecnología en todos los ámbitos de la vida pública, no podremos avanzar en discusiones fructíferas sobre prioridades, agen¬das y definiciones de un futuro sostenible para las y los mexicanos. La clave está en pensar quién está decidiendo y con qué herramientas se cuentan para sustentar estas decisiones, y el futuro ya está aquí. •",
						]}
					/>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
