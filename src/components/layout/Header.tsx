import React, { useContext } from "react";
import { Link } from "gatsby";

import { AppContext } from "../../context/AppContext";
import HamburgerMenu from "./HamburgerMenu";
import Menu from "./Menu";

import logo from "../../images/page_logo.png";

interface IProps {}

const Header = (props: IProps) => {
	return (
		<header>
			<div className="p-4 absolute top-0 left-0 w-screen z-10">
				<Link className="w-32 sm:w-40 inline-flex" to="/">
					<img src={logo} alt="Pacto Verde México" className="w-full" />
				</Link>
			</div>
			<Menu />
		</header>
	);
};

export default Header;
