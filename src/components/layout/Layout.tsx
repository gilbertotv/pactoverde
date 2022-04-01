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
	description?: string;
	image?: any;
	url?: string;
}

const Layout = (props: IProps) => {
	const { title, description, image, url } = props;
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Pacto Verde - {title}</title>
				<link rel="canonical" href="https://www.pactoverde.com/" />
				<meta name="description" content={description} />
				<meta name="image" content={image} />
				<meta property="og:url" content={`https://www.pactoverde.com${url}`} />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image} />
				<meta property="og:description" content={description} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />
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
				<main className="overflow-hidden">{props.children}</main>
			</motion.main>
		</>
	);
};

export default Layout;
