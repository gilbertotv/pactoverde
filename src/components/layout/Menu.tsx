import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Option = ({ text }) => <li className="text-5xl text-white">{text}</li>;

const Menu = () => {
	const { menuOpen } = useContext(AppContext);
	return (
		<nav
			className={`w-screen h-screen fixed top-0 lef-0 z-10 transition duration-500 ease-in-out bg-greenmenu ${
				menuOpen ? "visible opacity-1" : "invisible opacity-0"
			}`}
		>
			<div className="flex h-full sm:translate-x-2/4 items-center text-left">
				<ul className="flex flex-col justify-between h-full sm:p-24 p-12">
					<Option text="Inicio" />
					<Option text="Artículos" />
					<Option text="Autorxs" />
					<Option text="Recursos" />
					<Option text="Reflexiones" />
					<Option text="Contacto" />
				</ul>
			</div>
		</nav>
	);
};

export default Menu;
