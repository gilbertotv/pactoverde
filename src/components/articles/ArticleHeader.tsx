import React from "react";
import {
	EmailShareButton,
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";

import mail from "../../images/mail.png";
import fb from "../../images/fb.png";
import tw from "../../images/tw.png";
import wa from "../../images/wa.png";

const ArticleHeader = ({
	title,
	percentage,
	url,
}: {
	title: string;
	percentage: number;
	url: string;
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
						<EmailShareButton url={`https://www.pactoverde.mx/${url}`}>
							<img src={mail} alt="Email" className="cursor-pointer " />
						</EmailShareButton>
						<FacebookShareButton
							url={`https://www.pactoverde.mx/${url}`}
						>
							<img src={fb} alt="Facebook" className="cursor-pointer " />
						</FacebookShareButton>
						<TwitterShareButton
							url={`https://www.pactoverde.mx/${url}`}
						>
							<img src={tw} alt="Twitter" className="cursor-pointer " />
						</TwitterShareButton>
						<WhatsappShareButton
							url={`https://www.pactoverde.mx/${url}`}
						>
							<img src={wa} alt="Whatsapp" className="cursor-pointer " />
						</WhatsappShareButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleHeader;
