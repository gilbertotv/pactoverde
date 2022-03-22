import React, { useContext } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { AppContext } from "../../context/AppContext";
import HamburgerMenu from "./HamburgerMenu";

const Option = ({
	text,
	onClick,
	linkAnchor,
	link,
}: {
	text: string;
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
	linkAnchor?: string;
	link?: string;
}) =>
	linkAnchor ? (
		<li className="py-4 sm:py-0">
			<AnchorLink
				to={linkAnchor}
				title={text}
				onAnchorLinkClick={() => onClick(false)}
				className="cursor-pointer text-5xl text-white hover:font-medium"
			/>
		</li>
	) : link ? (
		<li className="py-4 sm:py-0">
			<Link
				to={link}
				onClick={() => onClick(false)}
				className="cursor-pointer text-5xl text-white hover:font-medium"
			>
				{text}
			</Link>
		</li>
	) : (
		<li className="cursor-pointer text-5xl text-white hover:font-medium py-4 sm:py-0">
			{text}
		</li>
	);

const Menu = () => {
	const { menuOpen, setMenuOpen } = useContext(AppContext);
	return (
		<>
			<HamburgerMenu />
			<nav
				className={`w-screen h-screen absolute sm:fixed top-0 left-0 z-30 transition duration-500 ease-in-out bg-greenmain ${
					menuOpen ? "visible opacity-1" : "invisible opacity-0"
				}`}
			>
				<div className="flex h-full sm:translate-x-2/4 items-center justify-center sm:justify-start text-left">
					<ul className="flex flex-col sm:justify-between sm:h-full sm:p-24 p-12">
						<Option
							text="Inicio"
							onClick={() => setMenuOpen(false)}
							linkAnchor="/#inicio"
						/>
						<Option
							text="Artículos"
							link="/articulos"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Autorxs"
							onClick={() => setMenuOpen(false)}
							linkAnchor="/#autorxs"
						/>
						<Option
							text="Recursos"
							link="/recursos"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Reflexiones"
							link="/reflexiones"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Contacto"
							onClick={() => setMenuOpen(false)}
							linkAnchor="/#contacto"
						/>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Menu;
