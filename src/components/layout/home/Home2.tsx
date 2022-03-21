import React from "react";

import TexturaHome2 from "../../../images/texturaHome2.png";
import LetreroHome from "../../../images/letreroHome.png";
import Puno1 from "../../../images/puno1.png";
import Puno2 from "../../../images/puno2.png";

const Home2 = ({ showed }) => {
	return (
		<section>
			<div className="min-h-screen bg-bluehome flex items-center">
				<div className="container">
					<div className="relative flex flex-col md:flex-row w-full">
						<div
							className={`absolute h-px md:w-px ${
								showed ? "w-full md:h-full visible" : "w-0 md:h-0 invisible"
							} border border-pinkhome top-1/2 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2 sm:-mt-12 md:mt-0 transition-all duration-1000 ease-in-out`}
						></div>
						<div className={`w-full md:w-1/2 pr-4 py-12`}>
							<p className="text-5xl text-white font-thin">
								La explotación y destrucción de los bienes comunes y planetarios
								han erosionado el sentido de{" "}
								<span className="font-semibold text-pinkhome">
									bienestar y democracia.
								</span>
							</p>
						</div>
						<div className="w-full md:w-1/2 flex items-center justify-center py-12 md:py-0">
							<img src={TexturaHome2} alt="Pacto Verde" className="" />
							<img
								src={LetreroHome}
								alt="Pacto Verde"
								className="absolute z-10 translate-y-20"
							/>
							<img
								src={Puno1}
								alt="Pacto Verde"
								className={`absolute z-0 transition-all duration-1000 ease-in-out -translate-x-12 ${
									showed
										? "visible opacity-1 -translate-y-16"
										: "invisible opacity-0"
								}`}
							/>
							<img
								src={Puno2}
								alt="Pacto Verde"
								className={`absolute z-0 translate-x-12 transition-all duration-1000 ease-in-out delay-500 -translate-x-12 ${
									showed
										? "visible opacity-1 -translate-y-16"
										: "invisible opacity-0"
								}`}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home2;
