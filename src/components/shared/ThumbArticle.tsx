import React from "react";

import Button from "./Button";

export interface IThumbProps {
	image;
	title: string;
	summary?: string;
	subsummary?: string;
	buttonText: string;
}

const ThumbArticle = ({
	image,
	title,
	summary,
	subsummary,
	buttonText,
}: IThumbProps) => {
	return (
		<div className="relative w-full sm:h-full sm:pb-12 mb-12 sm:mb-4">
			<img src={image} alt="Pacto Verde" className="w-full" />
			<p className="text-green1 text-xl font-light mt-4 mb-8">{title}</p>
			{summary && (
				<p className="text-gray3 text-base font-bold">{summary}</p>
			)}
			{subsummary && (
				<p className="text-gray3 text-base font-medium">{subsummary}</p>
			)}
			<div className="sm:absolute sm:bottom-0 mt-4">
				<Button text={buttonText} variant="green" />
			</div>
		</div>
	);
};

export default ThumbArticle;