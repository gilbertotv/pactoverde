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
		<div className="h-screen">
			<div
				className={`h-screen sm:h-4/5 relative flex items-center overflow-hidden ${bgcolor}`}
			>
				<div className="container">
					<div className="lg:w-1/2 sm:w-2/3 sm:translate-y-12">
						<p
							className={`text-3xl sm:text-4xl font-bold mb-16 sm:mb-8 ${titleColor}`}
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
