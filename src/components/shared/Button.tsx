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
					className="w-full sm:w-52 border-solid border border-green1 text-lg p-2 font-medium text-green1 hover:bg-green1 hover:text-white hover:border-green1"
					onClick={action}
				>
					{text}
				</button>
			)}
			{variant === "red" && (
				<button
					className="w-full sm:w-52 border-solid border border-red1 text-lg p-2 font-medium text-red1 hover:bg-red1 hover:text-white hover:border-red1"
					onClick={action}
				>
					{text}
				</button>
			)}
			{variant === "transparent" && (
				<button
					className="w-full sm:w-52 border-solid border border text-lg p-2 font-medium text-white hover:bg-white hover:text-red1 hover:border-red1"
					onClick={action}
				>
					{text}
				</button>
			)}
		</>
	);
};

export default Button;
