import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";
import ArtSubtitle from "../../components/shared/ArtSubtitle";
import ArtList from "../../components/shared/ArtList";
import Referencias from "../../components/shared/Referencias";

import autor from "../../images/autores/autor18.jpg";
import articulo1 from "../../images/articulos/articulo18-1.jpg";

const Articles = () => {
	return (
		<Layout
			title='Los trabajadores y la industria dentro de "Un pacto verde para México"'
			description='Los trabajadores y la industria dentro de "Un pacto verde para México"'
			url="/articulos/trabajadores_industria"
			image={articulo1}
		>
			<HeaderArticle
				bgcolor="bg-green6"
				title='Los trabajadores y la industria dentro de "Un pacto verde para México"'
				titleColor="text-black"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Luis Escobar Ramos"
			>
				Licenciado en Derecho por la Universidad Veracruzana, es miembro activo
				del Sindicato de Telefonistas de la República Mexicana desde 1987.
				Coordinador de sindicatos de los ramos industrial, automotriz, de la
				salud, periodístico, ciencia y tecnología y textil, entre otros, desde
				2008.
			</HeaderArticle>
			<ArticleLayout
				header='Política agrícola para "Un pacto verde para México"'
				siguiente="/articulos/perspectiva_norteamericana"
				url="/trabajadores_industria"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<ArtParagraphs
						paragraphs={[
							"En la historia de la humanidad han existido momentos que marcaron un antes y un después y que han afectado el flujo cotidiano del mundo entero. El que vivimos ahora es uno de ellos; estamos en un nuevo capítulo con alcances importantes derivado de la pandemia ocasionada por la COVID-19, la cual detuvo el mundo de tal manera que nos ha permitido, dentro de sus aspectos positivos, ubicar la alta vulnerabilidad que como seres vivos padecemos. Esto ha propiciado un espacio para la reflexión sobre las afectaciones que hemos generado a los ecosistemas, de lo cual hemos sido partícipes y testigos, y ha permitido repensar el giro que debemos dar a nuestras actitudes y a nuestro comportamiento en pro del planeta y de la salud ambiental, lo que deberá reflejarse a través de acciones colaborativas con la naturaleza y requerirá el impulso y la contribución de los sectores productivos, los gobiernos y la sociedad.",
							"Paralelamente, estamos viviendo un proceso de recambio tecnológico denominado Cuarta Revolución Industrial, también conocida como 4.0 o Revolución Tecnológica, el cual no debe estar disociado del cuidado del medio ambiente ni debe ser motivo para continuar en la ruta de deterioro que hemos labrado desde hace ya muchos años. Esta ha profundizado el efecto de fenómenos naturales y provocado afectaciones a los sectores más desprotegidos de la sociedad, por lo que es indispensable, hoy más que nunca, pensar, diseñar, implementar y operar la tecnología colocando como eje central al individuo y al medio ambiente en que se desarrolla.",
						]}
					/>
					<ArtSubtitle text="Situación de los trabajadores, medio ambiente y acciones para un pacto" />
					<ArtParagraphs
						paragraphs={[
							"La lógica del capital por garantizar sus ganancias a costa de la vida misma del planeta construye procesos de trabajo en donde hombres y mujeres viven en una precariedad salarial, de salud y laboral, e incluso violencia, parecida a los inicios de la Revolución Industrial. El mayor impacto de estas políticas se ubica en las mujeres trabajadoras de todo el mundo, migrantes o minorías étnicas expuestas a diferentes sustancias químicas en sus diferentes áreas de trabajo, lo que profundiza las desigualdades existentes.",
						]}
					/>
					<img
						src={articulo1}
						className="m-auto my-12 max-w-full"
						alt="Pacto Verde"
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-red1 font-medium">
							Los sindicatos debemos abrir nuestras agendas para incorporar la
							lucha por el medio ambiente desde una perspectiva de género y de
							derechos humanos,{" "}
						</span>
						convirtiéndonos en un espacio de reflexión y crítica de las grandes
						empresas globales y de las políticas públicas que las avalan.
					</p>
				</div>
				<div className="">
					<ArtParagraphs
						paragraphs={[
							"Este panorama ha llevado a las organizaciones sindicales independientes en México a realizar un análisis pormenorizado de los diferentes sectores productivos, así como de las correspondientes acciones que permitan coadyuvar a la mejora de la salud ambiental, del entorno social y, por supuesto, del planeta. El análisis es el siguiente:",
						]}
					/>

					<ArtSubtitle text="A.	Agricultura y ganadería" />

					<ArtParagraphs
						paragraphs={[
							"Este demandante sector, proveedor de la base alimenticia de los mexicanos, tiene como uno de sus insumos principales el agua, y de ello deriva la preocupación por su escasez y contaminación en muchas zonas del país. A nivel nacional, se dice que más de un tercio de las cuencas presentan una fuerte presión hídrica, determinada principalmente por los asentamientos humanos y la actividad agrícola. Otro insumo fundamental para el desarrollo de estas actividades es la tierra, por lo que en el afán de contar con ella se deforestan cientos de miles de hectáreas de bosques. Algunas acciones en pro del ambiente en estas actividades son:",
						]}
					/>

					<ArtList
						variant="list-disc"
						elements={[
							"Para enfrentar y revertir lo anterior, se requiere el diseño de una política pública con enfoque ecológico-ambiental que se traduzca en leyes y reglamentos que regulen y, sí es necesario, prohíban el uso de productos (plaguicidas) que contaminan las cuencas acuíferas y la propia tierra.",
							"Se debe prohibir, con base en la aplicación de la ley, el uso de transgénicos.",
							"Someter a una exhaustiva revisión la ley agraria y realizar un censo sobre la utilización y el grado de producción de las tierras registradas.",
							"Implementar programas de concientización, educación y cuidado de los recursos naturales a los ejidatarios y productores rurales.",
							"Detener el otorgamiento de tierras cuya utilización implique la destrucción de bosques o selvas.",
							"Establecimiento de un programa de monitoreo de la calidad del agua de las cuencas acuíferas, así como su saneamiento.",
						]}
					/>
					<ArtSubtitle text="B.	Industria petrolera" />

					<ArtParagraphs
						paragraphs={[
							"Este ramo industrial es la base de la economía nacional hasta el momento, a través de la empresa productiva del Estado Petróleos Mexicanos. Para el logro de su cometido principal, realiza por sí misma, o a través de empresas filiales o terceras, labores de exploración, extracción, producción y transformación del petróleo en aguas profundas o en tierra firme. Dentro de toda esta cadena productiva se han ocasionado daños irreversibles a ríos, mares, ciudades y a la población por medio de la contaminación provocada por sustancias químicas que son sumamente agresivas y fuente de enfermedades como el cáncer. Hoy, no solo México, sino el mundo, está viviendo un proceso de transformación energética, lo que hace imprescindible que se tomen las siguientes acciones de mejora en este sector:",
						]}
					/>

					<ArtList
						variant="list-disc"
						elements={[
							"El regulador sectorial y la autoridad ambiental deberán fortalecer las medidas y aplicar las sanciones respectivas a efecto de evitar, en la medida de lo posible, los accidentes en esta industria, los cuales causan daños irreversibles a la flora y fauna marina y a los habitantes de las poblaciones involucradas.",
							"Elaboración de un programa sectorial de transición energética para el país que permita ajustarnos a la tendencia mundial de impulso a las energías limpias que, dicho sea de paso, hoy se encuentran en manos de empresas trasnacionales. Esto requerirá la recuperación de la rectoría del Estado en la materia, y en este proceso deberán ser contemplados los trabajadores de las empresas productivas del Estado.",
						]}
					/>

					<ArtSubtitle text="C.	Industria extractiva" />

					<ArtParagraphs
						paragraphs={[
							"La industria minera es generadora de altos índices de contaminación química, cuyos efectos se asocian con el incremento de cáncer en las zonas contaminadas por arsénico. La falta de saneamiento disminuye también la disponibilidad de agua de buena calidad. De forma general, es altamente probable encontrar plomo en las zonas mineras en donde se extrae carbón, oro y plata. En este sector, se requiere lo siguiente:",
						]}
					/>

					<ArtList
						variant="list-disc"
						elements={[
							"Ante el proceso globalizador y la firma de acuerdos comerciales en los que participa nuestro país, como el T-MEC, se hace necesario plasmar en ellos la mejora de las condiciones de seguridad e higiene, económicas y laborales de los trabajadores mexicanos como del resto de las actividades productivas.",
							"Fortalecer la regulación en cuanto a los recursos naturales tomando como premisa principal los aspectos ambientales y de protección de los trabajadores y la población.",
							"Ante la presencia de químicos y minerales altamente nocivos, deben implementarse sistemas de alerta y vigilancia epidemiológica, con tendencia a su prohibición.",
							"Ante la transición energética en curso y la detección de grandes yacimientos de litio —uno de los más preciados minerales para la elaboración de baterías—, en el estado de Sonora, se debe establecer una legislación en la que el Estado haga valer su función rectora, con la posibilidad de implementar esquemas de asociación público-privada con empresas nacionales que lleven beneficios para los trabajadores y habitantes de esas zonas del país.",
						]}
					/>

					<ArtSubtitle text="D.	Industria de las telecomunicaciones y tecnologías de la información y las comunicaciones (TIC)" />

					<ArtParagraphs
						paragraphs={[
							"El sector de las telecomunicaciones ha pasado por un vertiginoso proceso de modernización tecnológica desde la década de 1990. Hoy, como se ha mencionado, nos encontramos inmersos en la Cuarta Revolución Industrial, lo que permitirá mayores velocidades de transmisión de datos, imágenes y contenidos, así como el acceso a servicios de telemedicina, banca electrónica, videoconferencia, teleeducación y teletrabajo, entre otros beneficios. Sin embargo, estos avances tecnológicos están trayendo consigo riesgos potenciales a la salud ambiental, motivo por el cual se hace imprescindible implementar acciones contundentes, tales como:",
						]}
					/>

					<ArtList
						variant="list-disc"
						elements={[
							"El regulador sectorial deberá realizar estudios tendentes a ubicar los impactos del uso de las tecnologías y los dispositivos de telecomunicaciones en la salud ambiental y sobre las personas. Igualmente, la gobernanza de las telecomunicaciones deberá implementarse desde la óptica de salud ambiental.",
							"Después de la reforma efectuada a la Ley Federal del Trabajo en materia de Teletrabajo al cierre del año anterior, estando en curso en este momento la Norma Oficial Mexicana que regulará los aspectos de salud, psicosociales y de seguridad e higiene, es fundamental para los trabajadores dar seguimiento puntual a estos aspectos.",
							"El teletrabajo permitió mantener en cierto porcentaje las actividades económicas, lo que tuvo un impacto importante en la disminución de los índices de contaminación y mejoró la calidad del aire en las ciudades más pobladas del país. Por ello, desde el punto de vista de los trabajadores es una modalidad que debe prevalecer, siempre y cuando se respete lo establecido tanto en la contratación individual como en la colectiva.",
							"Dentro de la revisión de aspectos de política pública deben contemplarse planes de estudios y carreras que atiendan la imperante necesidad de contar con profesionales expertos en analizar los impactos ambientales de la tecnología, así como su tratamiento para evitarlos.",
							"Plantear una iniciativa de ley que contemple la responsabilidad social de las empresas del sector de telecomunicaciones, TIC, proveedores de servicios en línea y plataformas digitales, a fin de asumir la tarea de crear un fondo para la creación de basureros tecnológicos que impidan el deterioro medioambiental.",
						]}
					/>

					<ArtParagraphs
						paragraphs={[
							"En términos generales, los trabajadores en lo individual no somos decisores, sin embargo, sí podemos incidir a través de la contratación colectiva auténtica.",
							"Finalmente, y ante lo ya expuesto, los sindicatos debemos abrir nuestras agendas para incorporar la lucha por el medio ambiente desde una perspectiva de género y de derechos humanos, convirtiéndonos en un espacio de reflexión y crítica de las grandes empresas globales y de las políticas públicas que las avalan.",
						]}
					/>
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
							link: "https://cepal.org/sites/default/files/publication/files/40159/S1600653_es.pdf",
						},
					]}
				/>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
