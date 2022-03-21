import React from "react";

interface IProps {
	image: any;
	author?: string;
	text: string;
	color: string;
}

const SubHeader = ({ image, author, text, color }: IProps) => {
	return (
		<div className="w-full flex flex-row sm:flex-col">
			{author && <p className={`text-2xl font-light ${color}`}>{author}</p>}
			<div className="flex flex-col sm:flex-row">
				<p
					className={`sm:ml-12 text-xl font-normal sm:order-2 ${color} ${
						author && "invisible sm:visible"
					}`}
				>
					{text}
				</p>
				<img src={image} alt="Pacto Verde" className="w-40 sm:order-1 absolute z-10 sm:relative bottom-0 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0" />
			</div>
		</div>
	);
};

export default SubHeader;
