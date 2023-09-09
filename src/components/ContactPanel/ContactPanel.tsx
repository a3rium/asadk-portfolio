"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyToClipboard } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const ContactPanel = () => {
	const { toast } = useToast();

	return (
		<div className="mx-auto md:mx-0">
			<h2 className="text-white text-center text-lg md:text-xl font-medium mb-3">
				Contact
			</h2>
			<div className="flex items-center gap-2">
				<TooltipProvider delayDuration={150}>
					<Tooltip>
						<TooltipTrigger asChild>
							<button
								onClick={() => {
									toast({
										description: "Username copied!",
									});
									copyToClipboard("a3rium");
								}}
							>
								<Image
									width={32}
									height={32}
									src={"/icons/Discord.png"}
									alt="Discord"
								/>
							</button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Copy Discord Username</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<button
								onClick={() => {
									toast({
										description: "Email address copied!",
									});
									copyToClipboard("asadkothawala97@gmail.com");
								}}
							>
								<Image
									width={32}
									height={32}
									src={"/icons/Email.png"}
									alt="Email"
								/>
							</button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Copy Email Address</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link href="https://github.com/a3rium/" target="_blank">
								<Image
									width={32}
									height={32}
									src={"/icons/Github.png"}
									alt="Github"
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Github Profile Link</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href={"https://www.linkedin.com/in/asadkoths/"}
								target="_blank"
								className="flex gap-1 flex-item"
							>
								<Image
									src="/icons/Linkedin.png"
									alt="LinkedIn"
									width={28}
									height={28}
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>LinkedIn Profile Link</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	);
};

export default ContactPanel;
