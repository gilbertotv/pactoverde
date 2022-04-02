import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";
import ArtParagraphs from "../../components/shared/ArtParagraphs";
import Referencias from "../../components/shared/Referencias";

import autor from "../../images/autores/autor7.jpg";
import articulo1 from "../../images/articulos/articulo7-1.jpg";
import articulo2 from "../../images/articulos/articulo7-2.jpg";

const Articles = () => {
	return (
		<Layout
			title='Hacia "Un pacto verde para México": el papel de la política educativa'
			description='Hacia "Un pacto verde para México": el papel de la política educativa'
			url="/articulos/hacia_pacto_verde"
			image={articulo1}
		>
			<HeaderArticle
				bgcolor="bg-green5"
				title='Hacia "Un pacto verde para México": el papel de la política educativa'
				titleColor="text-white"
				variant="lines"
				subImage={autor}
				subColor="text-white"
				subAuthor="Por: Blanca Heredia Rubio"
			>
				Doctora en Ciencia Política porla Universidad de Columbia, es académica
				del CIDE, directora fundadora de la unidad de investigación sobre
				educación y política educativa. Trabaja y escribe ampliamente sobre
				política mexicana, política educativa y talento intelectual joven.
			</HeaderArticle>
			<ArticleLayout
				header='Hacia "Un pacto verde para México"'
				siguiente="/articulos/pacto_verde_mexico"
				url="/hacia_pacto_verde"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<ArtParagraphs
						paragraphs={[
							"El cambio climático y los altísimos riesgos que entraña para la vida humana en el planeta no son un escenario posible; son una realidad arrolladora derivada, en buena medida, de patrones de vida y consumo basados en el uso masivo de energías fósiles, la cual ha sido ampliamente estudiada y documentada por la investigación científica más rigurosa en el mundo. Esa realidad en movimiento exige transformaciones colectivas y urgentes a escala planetaria a fin de preservar la habitabilidad de la tierra para los seres humanos.",
							"Existen en el mundo muy diversas iniciativas orientadas a detener el cambio climático. La más comprensiva e importante de ellas es el Green New Deal, resolución del Congreso de los Estados Unidos impulsada por la representante en la Cámara Baja Alexandria Ocasio-Cortez y por el senador Edward J. Markey, ambos del partido Demócrata. Dicha resolución fue presentada en 2019 y tiene como objetivos centrales promover activamente, desde el gobierno federal, la reducción acelerada de gases de efecto invernadero  y la transición a energías renovables; la creación de empleos vinculados a la producción y el uso de energías limpias, así como combatir la desigualdad social y racial en el entendido de que los altos costos del cambio climático afectan de forma no proporcional y especialmente devastadora a las poblaciones social y económicamente más marginadas, discriminadas y/o vulnerables.",
						]}
					/>
					<img src={articulo1} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"El Green New Deal, al igual que iniciativas análogas en otros países y a nivel internacional, involucran acciones gubernamentales en muchos ámbitos. Destacan, al respecto, las políticas en materia de energía, infraestructura, construcción, empleo, transporte y movilidad, así como en agricultura, vivienda y seguridad social, y políticas ambientales strictu sensu tanto generales como específicas. En lo concerniente a educación, la iniciativa estadounidense contiene solo dos menciones explícitas. La primera como parte del conjunto de servicios básicos que el Gobierno debe ocuparse de proveer a toda la población y, en especial, a la más desaventajada. La segunda se refiere a la obligación del Gobierno federal de ese país de ofrecer educación de calidad para todos y, de nuevo, muy particularmente a los grupos sociales más vulnerables. Esto con el fin de garantizar que todos los habitantes de los Estados Unidos estén en condiciones de participar activamente en la movilización nacional que propone la resolución, la cual debiera desplegarse durante los siguientes 10 años para contener el cambio climático y promover la justicia social y ambiental.",
							"México no cuenta aún con una iniciativa o un programa comparable al pacto verde de los Estados Unidos, la Unión Europea y otros países desarrollados. Dada la magnitud de la emergencia ambiental que enfrentamos a nivel nacional y global, resultaría clave y urgente impulsar las acciones y acuerdos requeridos para lograr articular una estrategia de ese tipo en el país. Entre los muy variados ámbitos que debiera contener una iniciativa de esa naturaleza, habría que incluir en ella a los temas educativos. Ese apartado delinearía el tipo de acciones por parte del Gobierno federal que resultarían indispensables para equipar a las y los estudiantes, así como a la población mexicana en general con los conocimientos, actitudes, valores, habilidades y herramientas para participar activa y responsablemente a nivel individual y colectivo, a favor del medio ambiente y la justicia ambiental.",
							"En México, la responsabilidad gubernamental sobre la educación ambiental se encuentra a cargo de la Secretaría de Medio Ambiente y Recursos Naturales (Semarnat). Ello indica que, hasta la fecha, la educación ambiental ha sido vista más como parte de la política de medio ambiente que como parte de la política educativa. A fin de elevar la prioridad, así como la difusión de la educación en esa materia al conjunto del sistema educativo, resultará indispensable un mayor involucramiento de la Secretaría de Educación Pública (SEP) en este ámbito.",
						]}
					/>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						Para avanzar en los hechos, también resultará muy importante
						concentrar la atención en dos ámbitos claves:{" "}
						<span className="text-red1 font-medium">
							la formación docente y la incorporación de asignaturas y/o
							contenidos curriculares centrados en el medio ambiente en los
							planes y programas oficiales de todos los niveles educativos.
						</span>
					</p>
				</div>
				<div className="">
					<img src={articulo2} className="my-12 max-w-full" alt="Pacto Verde" />
					<ArtParagraphs
						paragraphs={[
							"La firma de un convenio de colaboración entre la SEP y la Semarnat en abril de 2021 para impulsar contenidos, programas y actividades educativas orientadas a aumentar el conocimiento y el aprecio de los estudiantes de todos los niveles educativos en relación al medio ambiente constituye un primer paso significativo a favor del fortalecimiento de la educación ambiental en el país. Entre otras acciones, el convenio incluye las siguientes: incorporación de lo ambiental a los planes y programas de estudio; regionalización de contenidos ambientales; formación, actualización y capacitación docente en la materia; diseño, operación y evaluación de modelos de gestión ambiental escolar, así como la inclusión del enfoque de la sostenibilidad en la formación para el trabajo.",
							"Si bien se trata de un paso en la dirección correcta, el convenio mencionado requerirá para generar los efectos deseados un fondeo adecuado, mecanismos de coordinación interinstitucional ágiles y el compromiso de ambas dependencias de otorgarle a la educación ambiental una alta prioridad en la práctica. Para avanzar en los hechos, también resultará muy importante concentrar la atención en dos ámbitos clave: la formación docente y la incorporación de asignaturas y/o contenidos curriculares centrados en el medio ambiente en los planes y programas oficiales de todos los niveles educativos.",
							'Para hacer de la formación docente y la inclusión de contenidos ambientales en planes y programas los nodos detonadores del fortalecimiento y la universalización de la educación ambiental, resultará indispensable, asimismo, diseñar materiales y experiencias educativas sobre medio ambiente basados en el conocimiento científico que resulten relevantes y significativos para los educandos, así como desarrollar estrategias pedagógicas que potencien los aprendizajes en esa materia. En relación a este último punto, será de la mayor relevancia incluir conocimientos empíricos robustos, pero también habilidades de pensamiento crítico. Esto porque en un campo como el del medio ambiente tan marcado por la controversia y las "falsas noticias", resulta especialmente importante dotar al alumnado de herramientas conceptuales y analíticas que les permitan valorar la credibilidad y la veracidad de la muy variada y, con frecuencia encontrada, información disponible sobre el tema (Yahya, 2019).',
							"Un último punto sobre el cual resultaría indispensable trabajar para fortalecer la educación ambiental, entendida como parte clave de la solución al problema del cambio climático, tiene que ver con la necesidad de revisar y enriquecer el encuadre general que subyace y orienta las acciones del Gobierno mexicano en la materia. El encuadre dominante en México, hasta la fecha, incluye —centralmente— dos formas de conceptualizar y abordar el problema que deberían revisarse a fin de convertir la educación ambiental en una herramienta de transformación social capaz de contribuir efectivamente a frenar el calentamiento global y la destrucción de la biodiversidad. La primera es el énfasis en el aprecio por la naturaleza y la poca importancia concedida a los costos y los efectos profundamente desiguales —regionales y sociales— de la degradación ambiental sobre la habitabilidad del planeta para los seres humanos. La segunda orientación que debería revisarse tiene que ver con la tendencia a privilegiar, en materia de cambios de conducta, los comportamientos individuales (por ejemplo, no usar popotes, gastar menos agua y luz) sobre la acción colectiva, a pesar de ser esta última la única forma potencialmente efectiva para encarar y detener las causas sistémicas de la degradación ambiental acelerada en curso.",
						]}
					/>
				</div>
				<Referencias
					referencias={[
						{
							ref: "Yahya, G. (2019). Rethinking Education for the Green New Deal. Governance for an Eco-centered Curriculum—or not?.",
							subref: "Disponible en: ",
							link: "unevenearth.org/2019/11/rethinking-education-for-the-green-new-deal/",
						},
						{
							ref: "Gobierno de México (2021). Áreas de colaboración Semarnat-SEP.",
							subref: "Disponible en: ",
							link: "www.gob.mx/semarnat%7Ceducacionambiental/articulos/areas-de-colaboracion-semarnat-sep",
						},
					]}
				/>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
