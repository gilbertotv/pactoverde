import React from "react";

const ArtParagraphs = ({ paragraphs }: { paragraphs: string[] }) => {
	return (
		<>
			{paragraphs.map((p) => (
				<p key={p} className="mb-4">
					{p}
				</p>
			))}
		</>
	);
};

export default ArtParagraphs;
