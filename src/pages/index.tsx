import React, { useRef, useState, useContext, useEffect } from "react";
import axios from "axios";

import Layout from "../components/layout/Layout";

import Home1 from "../components/layout/home/Home1";
import Home2 from "../components/layout/home/Home2";
import Home3, { IPreviewWP } from "../components/layout/home/Home3";
import Autorxs from "../components/layout/home/Autorxs";
import Contacto from "../components/layout/home/Contacto";

import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { AppContext } from "../context/AppContext";

const IndexPage = () => {
	const { baseUrl, categories } = useContext(AppContext);
	const [preview, setPreview] = useState<IPreviewWP[]>([]);
	const homeRef = useRef(null);
	const home2Ref = useRef(null);
	const home3Ref = useRef(null);
	const home4Ref = useRef(null);
	const home5Ref = useRef(null);

	const [homeShow, setHomeShow] = useState({
		home2: false,
		home3: false,
		home4: false,
		home5: false,
	});

	useEffect(() => {
		if (categories.get("preview")) {
			axios
				.get(
					`${baseUrl}/posts?categories=${categories.get(
						"preview"
					)}&timestamp=${new Date().getTime()}`
				)
				.then((res) => {
					if (res.data) {
						setPreview(
							res.data.map((prev) => prev.acf).sort((a, b) => a.order - b.order)
						);
					}
				})
				.catch((error) => {
					setPreview([
						{
							order: 1,
							title: 'Los irreductibles en "Un pacto verde para México"',
							summary:
								"Visión general de lo que significa un posible pact…ipales. y los retos y dificultades para lograrlo.",
							author: "Beatriz Paredes Rangel",
							resume: "Senadora de la LXV Legislatura de México",
							url: "/articulos/irreductibles_pacto_verde",
						},
						{
							order: 2,
							title:
								'El papel de los pueblos originarios hacia "Un pacto verde para México"',
							summary:
								"No habrá un pacto transformador sin los pueblos in…bles en el centro de toda política de desarrollo.",
							author: "Leticia Vázquez Esteban",
							resume: "Activista masewal y cooperativista de Tosepan",
							url: "/articulos/pueblos_originarios",
						},
						{
							order: 3,
							title:
								"El Big Push mexicano: Plan verde para un desarrollo sostenible",
							summary:
								"Un cambio estructural necesita impulsar al empleo,…ribución del ingreso y acuerdos público-privados.",
							author: "Jorge Mario Martínez Piva",
							resume:
								"Titular de la Unidad de Comercio Internacional e Industria de la CEPAL",
							url: "/articulos/big_push",
						},
					]);
				});
		}
	}, [categories, baseUrl]);

	useIntersectionObserver({
		refs: [home2Ref, home3Ref, home4Ref, home5Ref],
		callback: ({ isIntersecting, target }) => {
			const sectionData = target.getAttribute("data-section-id");
			if (isIntersecting) {
				switch (sectionData) {
					case "home2":
						setHomeShow({ ...homeShow, home2: true });
						break;
					case "home3":
						setHomeShow({ ...homeShow, home3: true });
						break;
					case "home4":
						setHomeShow({ ...homeShow, home4: true });
						break;
					case "home5":
						setHomeShow({ ...homeShow, home5: true });
						break;
					default:
						break;
				}
			}
		},
		options: {
			rootMargin: "0px",
			root: homeRef.current,
			threshold: [0.5],
		},
	});

	return (
		<Layout title="Home">
			<div ref={homeRef}>
				<div id="inicio">
					<Home1 />
				</div>
				<div data-section-id="home2" ref={home2Ref}>
					<Home2 showed={homeShow.home2} />
				</div>
				<div data-section-id="home3" ref={home3Ref}>
					<Home3 showed={homeShow.home3} preview={preview} />
				</div>
				<div id="autorxs" data-section-id="home4" ref={home4Ref}>
					<Autorxs showed={homeShow.home4} />
				</div>
				<div id="contacto" data-section-id="home5" ref={home5Ref}>
					<Contacto showed={homeShow.home5} />
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
