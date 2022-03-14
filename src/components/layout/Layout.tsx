import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";

interface IProps {
	title: string;
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal;
}

const Layout = (props: IProps) => {
	const { title } = props;
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Pacto Verde - {title}</title>
				<link rel="canonical" href="https://www.pactoverde.com/" />
			</Helmet>
			<Header />
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
