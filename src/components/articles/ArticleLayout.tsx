import React, { useContext, useMemo } from "react";
import { Link, navigate } from "gatsby";
import ArticleHeader from "./ArticleHeader";
import Button from "../shared/Button";

import { useScrollPercentage } from "react-scroll-percentage";
import { AppContext } from "../../context/AppContext";

interface IProps {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal;
	isArticle?: boolean;
	header: string;
	siguiente?: string;
	url: string;
}

const LiArticle = ({ title, url }: { title: string; url: string }) => (
	<li className="mb-4">
		<Link to={url}>{title}</Link>
	</li>
);

const ArticleLayout = ({
	children,
	isArticle = true,
	header,
	siguiente,
	url,
}: IProps) => {
	const [ref, percentage] = useScrollPercentage({
		threshold: 0,
	});
	const { thumbsArticles } = useContext(AppContext);

	const arts = useMemo(
		() =>
			thumbsArticles
				.slice()
				.sort(() => 0.5 - Math.random())
				.slice(0, 5),
		[thumbsArticles]
	);

	return (
		<>
			{percentage > 0.1 && (
				<ArticleHeader
					title={header}
					percentage={percentage * 1.16 * 100}
					url={siguiente ? url : `articulos${url}`}
				/>
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
										<Button
											text="Descargar"
											variant="green"
											action={() =>
												window.open(
													"http://library.fes.de/pdf-files/bueros/mexiko/18815-20220210.pdf"
												)
											}
										/>
									</div>
								</div>
								<div className="my-8 sm:grid sm:grid-cols-2 lg:grid-cols-2">
									<div className="sm:text-left py-4 sm:py-0">
										Escríbenos si te interesa colaborar con nosotrxs
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
					{siguiente && arts.length > 0 && (
						<div className="w-full sm:w-1/4 md:w-1/5 hidden sm:block text-base md:text-xl md:ml-8">
							<p className="mb-4 font-medium text-2xl">
								Explora más articulos:
							</p>
							<ol className="list-decimal list-outside marker:text-green5 marker:font-bold">
								{arts.map((art, i) => (
									<LiArticle
										key={`${i}article`}
										title={art.title}
										url={art.url}
									/>
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
