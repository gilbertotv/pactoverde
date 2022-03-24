import React from "react";
import Button from "../shared/Button";

interface IProps {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal;
	arts: string[];
}

const LiArticle = ({ title }: { title: string }) => (
	<li className="mb-4">
		<a href="#">{title}</a>
	</li>
);

const ArticleLayout = ({ children, arts }: IProps) => {
	return (
		<div className="container">
			<div className="flex">
				<div className="w-full sm:w-3/4 md:w-4/5 sm:mr-20 text-base md:text-xl">
					{children}
					<div className="border-t my-16">
						<div className="my-8">
							<a className="text-2xl sm:text-3xl text-green1" href="#">
								Siguiente artículo
							</a>
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
								<Button text="Contacto" variant="green" />
							</div>
						</div>
					</div>
				</div>
				<div className="w-full sm:w-1/4 md:w-1/5 hidden sm:block text-base md:text-xl sm:ml-8">
					<p className="mb-4">Conoce otros de los artículos</p>
					{arts.length && (
						<ol className="list-decimal list-outside marker:text-green5 marker:font-bold">
							{arts.map((art, i) => (
								<LiArticle key={`${i}article`} title={art} />
							))}
						</ol>
					)}
				</div>
			</div>
		</div>
	);
};

export default ArticleLayout;
