import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import Button from "../../shared/Button";

import BackHome from "../../../images/backHome.png";
import TexturaHome1 from "../../../images/texturaHome1.png";

import "./modalStyles.scss";

const CloseIcon = ({
	className,
	action,
}: {
	className: string;
	action: any;
}) => (
	<svg
		width="31"
		height="32"
		viewBox="0 0 31 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		onClick={() => action()}
	>
		<rect
			x="0.869141"
			y="3.40991"
			width="3.49997"
			height="39.0996"
			transform="rotate(-45 0.869141 3.40991)"
			fill="#FFFFFF"
		/>
		<rect
			x="0.864136"
			y="28.5847"
			width="39.0996"
			height="3.49997"
			transform="rotate(-45 0.864136 28.5847)"
			fill="#FFFFFF"
		/>
	</svg>
);

const Modal = ({ shown, close }) => {
	return shown ? (
		<div
			className={`modal-backdrop flex w-full h-full justify-center items-center z-50`}
			onClick={() => {
				// close modal when outside of modal is clicked
				close();
			}}
		>
			<div
				className="modal-content relative w-9/12 sm:w-9/12 h-1/2 sm:h-3/4"
				onClick={(e) => {
					// do not close modal if anything inside modal content is clicked
					e.stopPropagation();
				}}
			>
				<ReactPlayer
					url="https://www.youtube.com/watch?v=htDn2oFkVc0"
					width="100%"
					height="100%"
					playing={shown}
					controls={true}
				/>
				<CloseIcon action={close} className="absolute cursor-pointer -right-8 sm:-right-12 -top-8 sm:-top-12 scale-50 sm:scale-100" />
			</div>
		</div>
	) : null;
};

const Home1 = () => {
	const [sun, setSun] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		setSun(true);
	}, []);
	const customStyles = {
		overlay: {
			backgroundColor: "black",
			opacity: 0.8,
			zIndex: 50,
		},
		content: {},
	};

	return (
		<>
			<section>
				<div className="min-h-screen relative overflow-hidden">
					<img
						src={BackHome}
						alt="Pacto Verde"
						className={`absolute max-w-none sm:w-5xl left-2/4 -translate-x-2/4 transition-all duration-1000 delay-300 ease-in-out ${
							sun ? "top-1/4 opacity-100" : "top-3/4 opacity-0"
						}`}
					/>
					<img
						src={TexturaHome1}
						alt="Pacto Verde"
						className="absolute -right-2 -bottom-8 hidden sm:block"
					/>
					<div className="absolute left-1/2 -translate-x-1/2 bottom-24 sm:bottom-12 w-full sm:w-2/3 lg:w-1/2">
						<div className="container">
							<p className="font-thin text-3xl xs:text-5xl sm:text-6xl lg:text-6xl leading-snug text-white mb-8 w-full">
								Una vía para la protección del planeta con{" "}
								<span className="font-medium">
									justicia social y económica.
								</span>
							</p>
							<Button
								text="Conoce más"
								variant="transparent"
								action={() => setIsOpen(true)}
							/>
						</div>
					</div>
				</div>
			</section>
			<Modal shown={isOpen} close={() => setIsOpen(false)} />
		</>
	);
};

export default Home1;
