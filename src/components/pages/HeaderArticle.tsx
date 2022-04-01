import React from "react";

import textura1 from "../../images/texturaHeadLay1.png";
import textura2 from "../../images/texturaArticulos1.png";
import SubHeader from "./SubHeader";

interface IProps {
	title: string;
	titleColor: string;
	bgcolor: string;
	variant?: string;
	subImage: any;
	subColor: string;
	subAuthor?: string;
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal;
		subImage2?: any;
}

const HeaderPage = ({
	title,
	titleColor,
	bgcolor,
	variant,
	subImage,
	subColor,
	children,
	subAuthor,
	subImage2,
}: IProps) => {
	return (
		<>
			<div className="sm:min-h-screen mb-4">
				<div
					className={`min-h-headmob sm:min-h-head relative flex overflow-hidden ${bgcolor}`}
				>
					<div className="container">
						<div className="h-full lg:w-2/3 md:w-3/4 lg:pr-12 flex flex-col">
							<p
								className={`text-3xl sm:text-4xl font-bold mb-8 mt-28 sm:mt-52 xl:pr-32 ${titleColor}`}
							>
								{title}
							</p>
							<SubHeader image={subImage} color={subColor} author={subAuthor} image2={subImage2}>
								{children}
							</SubHeader>
						</div>
					</div>
					{variant === "circle" ? (
						<img
							src={textura2}
							alt="Pacto Verde"
							className="absolute -bottom-20 -right-24 sm:right-0"
						/>
					) : (
						<img
							src={textura1}
							alt="Pacto Verde"
							className="absolute -bottom-16 -right-44 sm:right-0"
						/>
					)}
				</div>
			</div>
			{subAuthor && (
				<div className="container">
					<div className="block sm:hidden py-6 my-6 border-b border-gray4">
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default HeaderPage;
