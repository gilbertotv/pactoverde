import React from "react";

interface IProps {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal;
	title: string;
	subtitle: string | any[];
	color: string;
	showed?: boolean;
}

const HomeLayoutTitle = (props: IProps) => {
	const { title, subtitle, color, showed } = props;
	return (
		<section>
			<div className="min-h-screen relative flex items-center py-8 md:py-0 overflow-hidden">
				<div className="container">
					<h2
						className={`inline-block relative text-gray1 text-4xl sm:text-6xl pb-4`}
					>
						{title}
						<div
							className={`absolute left-0 bottom-0 h-px border border-${color} transition-all duration-1000 ease-in-out ${
								showed ? "w-full visible" : "w-0 invisible"
							}`}
						></div>
					</h2>
					<p className={`mt-4 mb-8 font-light text-xl text-${color}`}>
						{Array.isArray(subtitle)
							? subtitle!.map((title) => (
									<React.Fragment key={`${title}`}>{title}</React.Fragment>
							  ))
							: subtitle}
					</p>
					{props.children}
				</div>
			</div>
		</section>
	);
};

export default HomeLayoutTitle;
