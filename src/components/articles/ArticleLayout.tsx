import React from "react";
import { Link, navigate } from "gatsby";
import ArticleHeader from "./ArticleHeader";
import Button from "../shared/Button";

import { useScrollPercentage } from "react-scroll-percentage";

interface IProps {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal;
	arts: string[];
	isArticle?: boolean;
	header: string;
	siguiente?: string;
}

const LiArticle = ({ title }: { title: string }) => (
	<li className="mb-4">
		<a href="#">{title}</a>
	</li>
);

const ArticleLayout = ({
	children,
	arts,
	isArticle = true,
	header,
	siguiente,
}: IProps) => {
	const [ref, percentage] = useScrollPercentage({
		threshold: 0,
	});

	return (
		<>
			{percentage > 0.1 && (
				<ArticleHeader title={header} percentage={percentage * 1.11 * 100} />
			)}
			<div ref={ref} className="container">
				<div className="flex">
					<div className="w-full sm:w-3/4 md:w-4/5 sm:mr-20 text-base md:text-xl">
						{children}
						{isArticle ? (
							<div className="border-t border-gray2 my-16">
								<div className="my-8">
									<Link
										className="text-2xl sm:text-3xl text-green1"
										to={`${siguiente}`}
									>
										Siguiente artículo
									</Link>
								</div>
								<div className="my-8 sm:grid sm:grid-cols-2 lg:grid-cols-2">
									<div className="sm:text-left py-4 sm:py-0">
										Descarga la publicación completa aquí
									</div>
									<div className="flex justify-center py-4 sm:py-0">
										<Button text="Descargar" variant="green" />
									</div>
								</div>
								<div className="my-8 sm:grid sm:grid-cols-2 lg:grid-cols-2">
									<div className="sm:text-left py-4 sm:py-0">
										Escríbenos si te interesa colaborar con nostrxs
									</div>
									<div className="flex justify-center py-4 sm:py-0">
										<Button
											text="Contacto"
											variant="green"
											action={() => navigate("/#contacto")}
										/>
									</div>
								</div>
							</div>
						) : (
							<div className="h-36"></div>
						)}
					</div>
					{arts.length > 0 && (
						<div className="w-full sm:w-1/4 md:w-1/5 hidden sm:block text-base md:text-xl sm:ml-8">
							<p className="mb-4">Conoce otros de los artículos</p>
							<ol className="list-decimal list-outside marker:text-green5 marker:font-bold">
								{arts.map((art, i) => (
									<LiArticle key={`${i}article`} title={art} />
								))}
							</ol>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ArticleLayout;
