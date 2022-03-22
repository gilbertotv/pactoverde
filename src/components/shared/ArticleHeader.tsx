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
		<div className="w-full h-20 z-20 fixed top-0 bottom-0 bg-white">
			<div className="container">
				<div className="flex justify-between py-4">
					<div
						className="absolute h-2 bg-green4 left-0 bottom-0"
						style={{ width: `${percentage}%` }}
					></div>
					<div className="">
						<p className="text-base sm:text-2xl">{title}</p>
					</div>
					<div className="flex gap-2">
						<img src={mail} alt="Email" className="w-8 h-8 sm:w-12 sm:h-12" />
						<img src={fb} alt="Facebook" className="w-8 h-8 sm:w-12 sm:h-12" />
						<img src={tw} alt="Twitter" className="w-8 h-8 sm:w-12 sm:h-12" />
						<img src={wa} alt="Whatsapp" className="w-8 h-8 sm:w-12 sm:h-12" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleHeader;
