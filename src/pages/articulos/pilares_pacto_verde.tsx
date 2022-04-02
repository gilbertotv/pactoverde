import React from "react";

import ArticleLayout from "../../components/articles/ArticleLayout";
import Footer from "../../components/layout/Footer";
import Layout from "../../components/layout/Layout";
import HeaderArticle from "../../components/pages/HeaderArticle";

import autor from "../../images/autores/autor6.jpg";
import articulo1 from "../../images/articulos/articulo6-1.jpg";
import Referencias from "../../components/shared/Referencias";

const Articles = () => {
	return (
		<Layout
			title='Pilares para "Un pacto verde para México"'
			description='Pilares para "Un pacto verde para México"'
			url="/articulos/pilares_pacto_verde"
			image={articulo1}
		>
			<HeaderArticle
				bgcolor="bg-green2"
				title='Pilares para "Un pacto verde para México"'
				titleColor="text-green3"
				variant="circle"
				subImage={autor}
				subColor="text-black"
				subAuthor="Por: Julia Carabias Lillo"
			>
				Ecóloga de la Facultad de Ciencias de la UNAM, dedicada a la
				conservación, manejo y restauración de ecosistemas tropicales y a las
				políticas ambientales. Fue Secretaria de Medio Ambiente, Recursos
				Naturales y Pesca de 1994 a 2000. En 2017 recibió la Medalla Belisario
				Domínguez, en 2018 ingresó a El Colegio Nacional y en 2019 recibió el
				Doctorado Honoris causa de la UNAM.
			</HeaderArticle>
			<ArticleLayout
				header='Pilares para "Un pacto verde para México"'
				siguiente="/articulos/hacia_pacto_verde"
				url="/pilares_pacto_verde"
			>
				<div className="relative pb-16 sm:pb-24">
					<div
						className={`hidden sm:block absolute -right-12 top-0 w-px border-l border-gray2 transition-all duration-1000 ease-in-out h-full`}
					></div>
					<p className="mb-4">
						La pandemia por la enfermedad COVID-19 va a marcar un antes y un
						después en la historia de la humanidad. La manera en que logremos
						superar la crisis sanitaria y sus consecuencias económicas y
						sociales marcará el derrotero de todos los que nazcan en este
						milenio. De ese tamaño es el reto y la responsabilidad de nuestras
						decisiones actuales.
					</p>
					<p className="mb-4">
						La hiperglobalización sin controles de finales del siglo pasado y de
						lo que va de este, excluyendo la participación del Estado y dejando
						al libre mercado la ruta del desarrollo, acabó provocando
						recurrentes crisis económicas, estancamiento del crecimiento
						económico y grandes brechas —lacerantes e inaceptables— de
						desigualdades entre y dentro de las naciones.
					</p>
					<p className="mb-4">
						Pero no solo eso, la ciencia ha demostrado desde hace muchos años, y
						cada vez con más certidumbre, los impactos que este modelo de
						desarrollo ha tenido sobre la naturaleza (IPCC 2021, IPBES 2019,
						PNUMA 2021). El extractivismo depredador y la generación de desechos
						sin control, en nombre de una supuesta modernidad, se convirtió, al
						paso del tiempo, en el freno del progreso, poniendo en riesgo a la
						propia humanidad o, al menos, a las formas de vida que nos hemos
						dado.
					</p>
					<p className="mb-4">
						En la actualidad, la aceptación de la evidencia científica sobre el
						cambio climático es casi unánime. Las aseveraciones del último
						reporte del IPCC (2021) no dejan lugar a duda sobre la urgencia de
						reducir a la mitad las emisiones de gases de efecto invernadero en
						2030, y en 2050 alcanzar un nivel neto de cero de estas para que la
						temperatura promedio global se limite, tal y como se estableció en
						el Acuerdo de París (AP), por debajo de los 2°C encima de los
						niveles preindustriales.
					</p>
					<p className="mb-4">
						Tras los estragos de la pandemia, muchos países están encauzando sus
						esfuerzos de reactivación económica con la perspectiva de impulsar
						una economía verde que responda a los retos del cambio climático.
						Así, la transición energética hacia una matriz con predominancia de
						energías renovables empieza a perfilarse como el motor de un
						desarrollo hacia carbono neutro. A pesar de ello, persiste la
						incertidumbre de si se alcanzará la meta del AP, ya que el conjunto
						de las Contribuciones Determinadas a Nivel Nacional (NDC, por sus
						siglas en inglés), anunciadas hasta la fecha, son definitivamente
						insuficientes. Se requiere mayor compromiso colectivo y
						financiamiento para lograr la sustentabilidad del desarrollo y el
						respeto y cuidado de la vida humana y del resto de las especies.
					</p>
				</div>
				<div className="relative sm:translate-x-24 lg:translate-x-48 py-8 mb-16 sm:mb-24">
					<div className="h-px w-full border-t border-gray2 absolute top-0 left-0"></div>
					<div className="h-px w-full border-t border-gray2 absolute bottom-0 left-0"></div>
					<p className="text-2xl sm:text-3xl italic">
						<span className="text-green1 font-medium">
							Necesitamos revisar cómo, dónde y qué producimos, quién lo hace y
							qué consumimos para revertir el deterioro del patrimonio natural y
							cultural del país.{" "}
						</span>
						Un sistema alimentario sustentable, con soluciones basadas en la
						naturaleza, debe reconocer las diferencias del territorio nacional
						tanto económicas, sociales y ambientales, como culturales.
					</p>
				</div>
				<div className="">
					<p className="mb-4">
						Aunque aún no se concreta globalmente, va ganando consensos la ruta
						de reencauzar la globalización, regular mercados, poner fin a la
						austeridad, aumentar la inversión pública y promover el crecimiento
						económico, garantizando la protección social, generando empleos
						dignos, verdes e incluyentes, y reconociendo los límites que impone
						el funcionamiento de los sistemas físico-químico-biológicos del
						planeta. Incluso la UNCTAD (2019) propuso un Nuevopacto verde Global
						con nuevas reglas económicas y mecanismos de financiamiento, y la
						Unión Europea un pacto verde Europeo (EU, 2019), ambos desde antes
						de la pandemia.
					</p>
					<p className="mb-4">
						En este contexto global, estamos obligados en México, como señala el
						Grupo Nuevo Curso de Desarrollo (GNCD, 2021), a una reconstrucción y
						transformación con cambios estructurales para el bienestar, la
						inclusión y la sustentabilidad.
					</p>
					<p className="mb-4">
						México carece de una política de largo plazo para transitar hacia el
						desarrollo sustentable. En lo que respecta a la sustentabilidad
						ambiental, se han implementado medidas muy pertinentes en los
						últimos cinco lustros, pero, por falta de financiamiento o por giros
						de visión, han quedado interrumpidas incurriendo en una regresión.
						Es claramente el caso de la actual política energética que, lejos de
						alinearse con una política de acción climática, vuelve a colocarse
						en la ruta de la dependencia de los combustibles fósiles, frenando
						el avance de las energías limpias y alejándose de la posibilidad de
						alcanzar las NDC comprometidas por México al firmar el Acuerdo de
						París (Tudela, 2020). Resulta inaplazable una revisión profunda de
						las políticas de transporte y del subsector de generación de
						electricidad para volver a impulsar las energías limpias con
						incentivos económicos, así como la eliminación de obstáculos
						normativos y un financiamiento público que apuntale la inversión
						privada. Sin embargo, aunque esto es indispensable para atender la
						emergencia climática, no es suficiente para lograr la
						sustentabilidad del desarrollo.
					</p>
					<p className="mb-4">
						Debemos también atender los otros desequilibrios que el desarrollo
						está causando en los sistemas biológicos, químicos e hidrológicos
						provocados, principalmente, por el sistema alimentario imperante. La
						actual forma de producción de alimentos es la principal causa de la
						pérdida de biodiversidad (por la deforestación), de la alteración de
						los flujos de nutrientes (exceso de nitrógeno y fósforo por la
						aplicación de agroquímicos) y de la modificación del ciclo
						hidrológico (sobreexplotación de cuerpos de agua para riego);
						también influye en la pérdida del conocimiento tradicional del uso
						de los recursos naturales y la agrobiodiversidad.
					</p>
					<p className="mb-4">
						Necesitamos revisar cómo, dónde y qué producimos, quién lo hace y
						qué consumimos para revertir el deterioro del patrimonio natural y
						cultural del país. Un sistema alimentario sustentable, con
						soluciones basadas en la naturaleza, debe reconocer las diferencias
						del territorio nacional tanto económicas, sociales y ambientales,
						como culturales. A grandes rasgos, desde la dimensión productiva, en
						los sitios de producción intensiva de alimentos habrá que cambiar la
						tecnología para hacerla más amigable con el ambiente, disminuyendo
						el uso de agroquímicos, eliminando aquellos que son nocivos para la
						salud humana y de los ecosistemas y regulando el consumo de agua con
						criterios ambientales. Desde la perspectiva del consumo, la
						disminución de la demanda de productos cárnicos disminuirá la
						deforestación y la generación de metano. Estas acciones
						significarían un alivio para la naturaleza, para aminorar la pérdida
						de la biodiversidad y para mitigar el cambio climático.
					</p>
					<p className="mb-4">
						En contraste, en las regiones de alta biodiversidad, que coinciden
						con los territorios de los pueblos indígenas y campesinos, debe
						priorizarse la agroecología eliminando fuego agropecuario,
						rescatando los saberes locales y diversificando los sistemas
						productivos para hacer uso de la biodiversidad sin deforestar.
						Actividades productivas como el manejo forestal sustentable, el
						ecoturismo, el manejo de la vida silvestre, la producción
						agroforestal y silvopastoril son una canasta de opciones productivas
						con respeto al medio ambiente que generan ingresos y nuevos empleos,
						sobre todos para los jóvenes sin tierra y las mujeres.
					</p>

					<img src={articulo1} className="my-12 max-w-full" alt="Pacto Verde" />
					<p className="mb-4">
						Una estrategia productiva diversificada debe ir acompañada de una
						robusta política de conservación de ecosistemas naturales mediante
						las áreas naturales protegidas, en grandes extensiones de
						territorio, con la mínima intervención humana posible para la
						permanencia de la biodiversidad y su evolución.
					</p>
					<p className="mb-4">
						Estas políticas y acciones, que ya tenían su curso pero fueron
						frenadas por falta de presupuesto y de voluntad, pueden
						implementarse en los paisajes de zonas estratégicas por su
						diversidad natural y cultural, bajo programas de manejo rural
						sustentable elaborados con la participación de todos los actores
						involucrados, financiados con recursos mixtos provenientes de
						diversas instituciones de gobierno y de fondos y fundaciones
						privadas nacionales, internacionales y multilaterales.
					</p>
					<p className="mb-4">
						Sin embargo, estas acciones están excluidas hoy de las prioridades
						nacionales, como lo refleja el presupuesto destinado a la prevención
						del deterioro ambiental y a la conservación de los ecosistemas
						naturales. Programas como el pago por servicio ambientales, las
						áreas naturales protegidas, la restauración de zonas estratégicas
						por su biodiversidad y servicios ecosistémicos, el manejo
						sustentable de los bosques, y en general de la flora y fauna, están
						reducidos a su mínima expresión.
					</p>
					<p className="mb-4">
						Revertir estas tendencias para enfrentar la emergencia ambiental, no
						solo la climática, va a requerir de la recuperación de la confianza
						en las instituciones y de entablar un diálogo nacional, plural y
						constructivo, organizado con reglas claras para lograr la inclusión
						y evitar las descalificaciones. Diálogo que requiere la
						participación de todos los actores: Gobierno federal, estatales y
						locales; iniciativa privada; organizaciones de productores,
						sindicales y de la sociedad civil; académicos y científicos;
						partidos políticos.
					</p>
					<p className="mb-4">
						El Congreso de la Unión sería un actor ideal para propiciar este
						diálogo y construir la agenda nacional del desarrollo sustentable de
						largo alcance, basada en la Agenda 2030 y sus 17 Objetivos de
						Desarrollo Sustentable, con metas concretas y una ruta crítica de
						corto plazo rescatando los programas exitosos y escalándolos a nivel
						nacional, reconociendo las especificidades de cada región del
						territorio, escuchando y respetando a la ciencia con un horizonte de
						largo plazo, financiamiento adecuado y un compromiso
						intergeneracional. Esta pueda ser la base de un Nuevo Pacto para el
						Desarrollo Sustentable o "Un pacto verde para México" para combatir
						la emergencia. No hay tiempo que perder.
					</p>

					<Referencias
						referencias={[
							{
								ref: "Tudela, F. (2020). El cambio climático: balance temprano. En Becerra, R y J. Woldenberg (coords.) Balance temprano. México: IETD.",
								subref: "Disponible en: ",
								link: "https://ietd.org.mx/presentacion-del-libro-balance-temprano-desde-la-izquierda-democratica/",
							},
							{
								ref: "EU (2019). A European Green Deal.",
								subref: "Disponible en: ",
								link: "ec.europa.eu/info/strategy/priorities-2019-2024/european-green-deal_en",
							},
							{
								ref: "GNCD (2021). Renovar políticas para un nuevo curso de desarrollo en México.",
								subref: "Disponible en: ",
								link: "www.nuevocursodedesarrollo.unam.mx",
							},
							{
								ref: "IPBES (2019). Summary for policymakers of the global assessment report on biodiversity and ecosystem services of the Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services. IPBES secretariat, Bonn, Germany.",
								subref: "Disponible en: ",
								link: "ipbes.net/sites/default/files/2020-02/ipbes_global_assessment_report_summary_for_policymakers_es.pdf",
							},
							{
								ref: "Gobierno de México. (2016). Estrategia Nacional sobre Biodiversidad de México.",
								subref: "Ciudad de México.",
							},
							{
								ref: "IPCC (2021). Summary for Policymakers. Climate Change 2021: The Physical Science Basis. Contribution of Working Group I to the Sixth Assessment Report of the Intergovernmental Panel on Climate Change. Cambridge University Press.",
								subref: "Disponible en: ",
								link: "ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf",
							},
							{
								ref: "PNUMA (2021). Hacer las paces con la naturaleza.",
								subref: "Disponible en: ",
								link: "unep.org/es/resources/making-peace-nature",
							},
							{
								ref: "UNCTAD (2019). Informe sobre el Comercio y el Desarrollo 2019.",
								subref: "Disponible en: ",
								link: "unctad.org/es/system/files/official-document/tdr2019overview_es.pdf",
							},
						]}
					/>
				</div>
			</ArticleLayout>
			<Footer />
		</Layout>
	);
};

export default Articles;
