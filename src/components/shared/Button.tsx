import React from "react";

interface IProps {
	text: string;
	variant: string;
	action?: () => {};
}

const Button = ({ text, variant, action }: IProps) => {
	return (
		<>
			{variant === "green" && (
				<button
					className="w-full sm:w-52 border-solid border border-green1 text-lg p-2 font-medium text-green1 hover:bg-green2"
					onClick={action}
				>
					{text}
				</button>
			)}
			{variant === "red" && (
				<button
					className="w-full sm:w-52 border-solid border border-red1 text-lg p-2 font-medium text-red1 hover:bg-red2"
					onClick={action}
				>
					{text}
				</button>
			)}
			{variant === "transparent" && (
				<button
					className="w-full sm:w-52 border-solid border border text-lg p-2 font-medium text-white"
					onClick={action}
				>
					{text}
				</button>
			)}
		</>
	);
};

export default Button;
