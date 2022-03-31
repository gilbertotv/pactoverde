import React, { useEffect, useState } from "react";

import Button from "../../shared/Button";

import BackHome from "../../../images/backHome.png";
import TexturaHome1 from "../../../images/texturaHome1.png";

const Home1 = () => {
	const [sun, setSun] = useState(false);
	useEffect(() => {
		setSun(true);
	}, []);

	return (
		<section>
			<div className="min-h-screen relative overflow-hidden">
				<img
					src={BackHome}
					alt="Pacto Verde"
					className={`absolute max-w-none sm:w-5xl left-2/4 -translate-x-2/4 transition-all duration-1000 delay-300 ease-in-out ${
						sun ? "top-1/4 opacity-100" : "top-3/4 opacity-0"
					}`}
				/>
				<img
					src={TexturaHome1}
					alt="Pacto Verde"
					className="absolute -right-2 -bottom-8 hidden sm:block"
				/>
				<div className="absolute left-1/2 -translate-x-1/2 bottom-24 sm:bottom-12 w-full sm:w-2/3 lg:w-1/2">
					<div className="container">
						<p className="font-thin text-3xl xs:text-5xl sm:text-6xl lg:text-6xl leading-snug text-white mb-8 w-full">
							Una vía para la protección del planeta con{" "}
							<span className="font-medium">justicia social y económica.</span>
						</p>
						<Button text="Conoce más" variant="transparent" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home1;
