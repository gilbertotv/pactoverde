import React from "react";

interface Reference {
	ref: string;
	subref: string;
	link?: string;
}

const Referencias = ({ referencias }: { referencias: Reference[] }) => {
	return (
		<div className="mt-8">
			<p className="text-green1 font-bold mb-4 text-xl">Referencias</p>
			{referencias.map((ref, i) => (
				<React.Fragment key={`ref${i}`}>
					<p className="font-bold">{ref.ref}</p>
					<p className="mb-4 break-all">
						{ref.subref}
						{ref.link && (
							<a href={ref.link} target="_blank">
								{ref.link}
							</a>
						)}
					</p>
				</React.Fragment>
			))}
		</div>
	);
};

export default Referencias;
