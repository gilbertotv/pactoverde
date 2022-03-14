import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import logo from "../../images/page_logo.png";
import HamburgerMenu from "./HamburgerMenu";
import Menu from "./Menu";

interface IProps {}

const Header = (props: IProps) => {
	const { menuOpen } = useContext(AppContext);
	return (
		<header>
			<div className="p-4">
				<img src={logo} alt="Pacto Verde México" className="w-36" />
				<HamburgerMenu />
			</div>
			{<Menu />}
		</header>
	);
};

export default Header;
