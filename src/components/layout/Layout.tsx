import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

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
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					type: "spring",
					mass: 0.35,
					stiffness: 50,
					duration: 0.5,
				}}
			>
				<main>{props.children}</main>
			</motion.main>
		</>
	);
};

export default Layout;
