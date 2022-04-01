import React from "react";

interface IProps {
	image: any;
	author?: string;
	color: string;
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal;
	image2: any;
}

const SubHeader = ({ image, author, color, children, image2 }: IProps) => {
	return (
		<div className="w-full flex flex-col sm:mt-auto">
			{author && (
				<p className={`text-2xl font-light mb-8 ${color}`}>{author}</p>
			)}
			<div className="flex flex-col sm:flex-row sm:pb-0">
				<div
					className={`sm:ml-12 text-base font-normal sm:order-2 ${color} ${
						author && "hidden sm:block"
					}`}
				>
					{children}
				</div>
				<div className="flex flex-col shrink-0">
					<img
						src={image}
						alt="Pacto Verde"
						className={`w-40 sm:self-start sm:order-1 absolute z-10 sm:relative bottom-0 left-1/2 sm:left-0 ${
							image2 ? "-translate-x-full sm:translate-x-0" : "-translate-x-1/2 sm:translate-x-0"
						}`}
					/>
					{image2 && (
						<img
							src={image2}
							alt="Pacto Verde"
							className="w-40 sm:mt-4 sm:self-start sm:order-1 absolute z-10 sm:relative bottom-0 left-1/2 sm:left-0"
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default SubHeader;
