import React from "react";

import mail from "../../images/mail.png";
import fb from "../../images/fb.png";
import tw from "../../images/tw.png";
import wa from "../../images/wa.png";

const ArticleHeader = ({
	title,
	percentage,
}: {
	title: string;
	percentage: number;
}) => {
	return (
		<div className="w-full h-20 z-20 fixed top-0 bottom-0 bg-white shadow-md border-b border-gray2">
			<div className="px-4">
				<div className="flex justify-between py-4">
					<div
						className="absolute h-1 bg-green4 left-0 bottom-0"
						style={{ width: `${percentage}%` }}
					></div>
					<div className="" style={{ maxWidth: "calc(100% - 180px)" }}>
						<p className="text-base sm:text-2xl">{title}</p>
					</div>
					<div className="flex gap-4 items-center justify-between pl-4 sm:pr-16 md:pr-20 lg:pr-24">
						<img src={mail} alt="Email" className="cursor-pointer " />
						<img src={fb} alt="Facebook" className="cursor-pointer " />
						<img src={tw} alt="Twitter" className="cursor-pointer " />
						<img src={wa} alt="Whatsapp" className="cursor-pointer " />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleHeader;
