import React, { useRef, useState } from "react";

import Layout from "../components/layout/Layout";

import Home1 from "../components/layout/home/Home1";
import Home2 from "../components/layout/home/Home2";
import Home3 from "../components/layout/home/Home3";
import Autorxs from "../components/layout/home/Autorxs";
import Contacto from "../components/layout/home/Contacto";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

const IndexPage = () => {
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
					<Home3 showed={homeShow.home3} />
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
