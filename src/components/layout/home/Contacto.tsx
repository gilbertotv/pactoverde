import React, { useState } from "react";
import Button from "../../shared/Button";
import Footer from "../Footer";

const Contacto = ({ showed }) => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleChanges = (e) => {
		e.preventDefault();
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<div className="min-h-screen flex flex-col">
			<div className="sm:mt-32 text-white flex justify-center relative">
				<div className="container">
					<h2 className={`inline-block text-gray1 text-4xl sm:text-6xl`}>
						Escríbenos si te interesa colaborar con nostrxs
					</h2>
					<form className="w-full text-black sm:mt-12 my-4">
						<div className="sm:grid sm:grid-cols-2 sm:gap-12 ">
							<div className="relative flex flex-col items-center py-2 mt-4 sm:mt-0">
								<input
									name="name"
									className="appearance-none bg-transparent w-full mr-3 pb-6 px-2 focus:outline-none"
									type="text"
									placeholder="Nombre"
									aria-label="Name"
									value={form.name}
									onChange={(e) => handleChanges(e)}
								/>
								<div
									className={`absolute h-px border-b border-red1 lef-0 bottom-0 transition-all duration-1000 ease-in-out ${
										showed ? "visible w-full" : "invisible w-0"
									}`}
								></div>
							</div>
							<div className="relative flex flex-col items-center py-2 mt-4 sm:mt-0">
								<input
									name="email"
									className="appearance-none bg-transparent w-full mr-3 pb-6 px-2 focus:outline-none"
									type="mail"
									placeholder="Email"
									aria-label="Email"
									value={form.email}
									onChange={(e) => handleChanges(e)}
								/>
								<div
									className={`absolute h-px border-b border-red1 lef-0 bottom-0 transition-all duration-1000 ease-in-out delay-500 ${
										showed ? "visible w-full" : "invisible w-0"
									}`}
								></div>
							</div>
						</div>
						<div className="sm:grid sm:grid-cols-2 sm:gap-12 sm:mt-16 ">
							<div className="relative flex flex-col items-center py-2 mt-4 sm:mt-0">
								<input
									name="message"
									className="appearance-none bg-transparent w-full mr-3 pb-6 px-2 focus:outline-none"
									type="tel"
									placeholder="Mensaje"
									aria-label="Mensaje"
									value={form.message}
									onChange={(e) => handleChanges(e)}
								/>
								<div
									className={`absolute h-px border-b border-red1 lef-0 bottom-0 transition-all duration-1000 ease-in-out delay-1000 ${
										showed ? "visible w-full" : "invisible w-0"
									}`}
								></div>
							</div>
							<div className="text-center sm:text-left mt-8 sm:mt-4">
								<Button text="Enviar" variant="red" />
							</div>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contacto;
