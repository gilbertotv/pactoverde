import React from "react";

const ArtList = ({
	variant,
	elements,
}: {
	variant: string;
	elements: string[];
}) => {
	return (
		<ul className={`${variant} marker:text-green1 marker:font-medium list-outside ml-8`}>
			{elements.map((el) => (
				<li className="mb-4">{el}</li>
			))}
		</ul>
	);
};

export default ArtList;
