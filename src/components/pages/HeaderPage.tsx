import React from "react";

import textura1 from "../../images/texturaHeadLay1.png";

interface IProps {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal;
	title: string;
	titleColor: string;
	bgcolor: string;
}

const HeaderPage = ({ children, title, titleColor, bgcolor }: IProps) => {
	return (
		<div className="sm:min-h-screen sm:h-screen sm:h-auto mb-4">
			<div className={`min-h-headmob sm:min-h-head relative flex overflow-hidden ${bgcolor}`}>
				<div className="container">
					<div className="h-full lg:w-2/3 md:w-3/4 lg:pr-16 pb-12 sm:pb-4">
						<p
							className={`text-3xl sm:text-4xl font-bold mb-16 sm:mb-8 mt-36 sm:mt-52 xl:pr-72 ${titleColor}`}
						>
							{title}
						</p>
						<div className="text-xl sm:text-3xl font-medium text-black">
							{children}
						</div>
					</div>
				</div>
				<img
					src={textura1}
					alt="Pacto Verde"
					className="absolute -bottom-16 -right-44 sm:right-0"
				/>
			</div>
		</div>
	);
};

export default HeaderPage;
