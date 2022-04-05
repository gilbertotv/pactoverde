import React, { useState, useRef } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";

import Button from "../../shared/Button";
import Footer from "../Footer";

const convertJsontoUrlencoded = (obj) => {
	let str = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
		}
	}
	return str.join("&");
};

const Contacto = ({ showed }) => {
	const [form, setForm] = useState({ name: "", email: "" });
	const [loading, setLoading] = useState(false);
	const [formMessage, setFormMessage] = useState("");
	const comment = useRef(null);
	const TOKEN =
		typeof window !== "undefined" &&
		window.btoa(`daniela.castro:P4ct0V3rd32022`);

	const handleChanges = (e) => {
		e.preventDefault();
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const sendForm = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			await axios({
				url: `https://pactoverde.mx/wp/wp-json/contact-form-7/v1/contact-forms/5/feedback`,
				headers: {
					Authorization: `Basic ${TOKEN}`,
					"Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
				},
				method: "POST",
				data: convertJsontoUrlencoded({
					["your-subject"]: "Contacto",
					["your-name"]: form.name,
					["your-email"]: form.email,
					["your-message"]: comment.current.innerText,
				}),
			});
			setLoading(false);
			setFormMessage("Tu mensaje ha sido enviado");
			setForm({ name: "", email: "" });
			comment.current.innerText = "";
		} catch (error) {
			setLoading(false);
			setFormMessage("Ocurrió un error");
		}
	};

	return (
		<div className="min-h-screen flex flex-col">
			<div className="text-white flex grow justify-center relative items-center">
				<div className="container">
					<h2 className={`inline-block text-gray1 text-4xl sm:text-6xl`}>
						Escríbenos si te interesa colaborar con nosotrxs
					</h2>
					<form
						className="w-full text-black mt-12 my-4"
						onSubmit={(e) => sendForm(e)}
					>
						<div className="sm:grid sm:grid-cols-2 sm:gap-12 ">
							<div className="relative flex flex-col items-center py-2 mt-4 sm:mt-0 sm:w-4/5">
								<input
									name="name"
									className="appearance-none bg-transparent w-full mr-3 pb-6 px-2 focus:outline-none text-lg sm:text-2xl"
									type="text"
									placeholder="Nombre"
									aria-label="Name"
									value={form.name}
									onChange={(e) => handleChanges(e)}
								/>
								<div
									className={`absolute h-px border-b border-red1 left-0 bottom-0 transition-all duration-1000 ease-in-out ${
										showed ? "visible w-full" : "invisible w-0"
									}`}
								></div>
							</div>
							<div className="relative flex flex-col items-center py-2 mt-4 sm:mt-0 sm:w-4/5">
								<input
									name="email"
									className="appearance-none bg-transparent w-full mr-3 pb-6 px-2 focus:outline-none text-lg sm:text-2xl"
									type="mail"
									placeholder="Email"
									aria-label="Email"
									value={form.email}
									onChange={(e) => handleChanges(e)}
								/>
								<div
									className={`absolute h-px border-b border-red1 left-0 bottom-0 transition-all duration-1000 ease-in-out delay-500 ${
										showed ? "visible w-full" : "invisible w-0"
									}`}
								></div>
							</div>
						</div>
						<div className="sm:grid sm:grid-cols-2 sm:gap-12 sm:mt-16 ">
							<div className="relative flex flex-col items-center py-2 mt-4 sm:mt-0 sm:w-4/5">
								<span
									ref={comment}
									contentEditable="true"
									className="outline-none w-full mr-3 pb-6 px-2 focus:outline-none text-lg sm:text-2xl"
									placeholder="Mensaje"
								></span>
								{/*<input
									name="message"
									className="appearance-none bg-transparent w-full mr-3 pb-6 px-2 focus:outline-none text-lg sm:text-2xl"
									type="tel"
									placeholder="Mensaje"
									aria-label="Mensaje"
									value={form.message}
									onChange={(e) => handleChanges(e)}
								/>*/}
								<div
									className={`absolute h-px border-b border-red1 left-0 bottom-0 transition-all duration-1000 ease-in-out delay-1000 ${
										showed ? "visible w-full" : "invisible w-0"
									}`}
								></div>
							</div>
							<div className="text-center sm:text-left mt-8 sm:mt-4">
								{loading ? (
									<BeatLoader color="#FF4A53" />
								) : formMessage === "" ? (
									<Button
										text="Enviar"
										variant="red"
										disabled={form.email === ""}
									/>
								) : (
									<p className="text-base text-red1 text-xl">{formMessage}</p>
								)}
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
