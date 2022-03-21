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
	subText: string;
	subAuthor?: string;
}

const HeaderPage = ({
	title,
	titleColor,
	bgcolor,
	variant,
	subImage,
	subColor,
	subText,
	subAuthor,
}: IProps) => {
	return (
		<div className="h-screen">
			<div
				className={`h-screen sm:h-4/5 relative flex sm:justify-end flex-col overflow-hidden ${bgcolor}`}
			>
				<div className="container">
					<div className="lg:w-1/2 sm:w-2/3">
						<p
							className={`text-3xl sm:text-4xl font-bold mb-4 sm:mb-36 mt-32 sm:mt-0 ${titleColor}`}
						>
							{title}
						</p>
						<SubHeader
							image={subImage}
							color={subColor}
							text={subText}
							author={subAuthor}
						/>
					</div>
				</div>
				{variant === "circle" ? (
					<img
						src={textura2}
						alt="Pacto Verde"
						className="absolute -bottom-20 right-0"
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
	);
};

export default HeaderPage;
