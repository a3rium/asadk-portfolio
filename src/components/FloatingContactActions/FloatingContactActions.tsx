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

const FloatingContactActions = () => {
	const { toast } = useToast();

	return (
		<>
			<div className="fixed top-0 left-4 hidden md:flex md:flex-col md:gap-1 md:items-center">
				<div className="h-[150px] w-[2px] rounded-b-full bg-primary"> </div>
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
								className="flex gap-1 flex-item"
							>
								<Image
									src="/icons/Discord.png"
									alt="Discord"
									width={28}
									height={28}
								/>
							</button>
						</TooltipTrigger>
						<TooltipContent side="right">
							<p>Copy Discord Username</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href={"https://github.com/a3rium/"}
								target="_blank"
								className="flex gap-1 flex-item"
							>
								<Image
									src="/icons/Github.png"
									alt="Github"
									width={28}
									height={28}
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent side="right">
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
						<TooltipContent side="right">
							<p>LinkedIn Profile Link</p>
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
								className="flex gap-1 flex-item"
							>
								<Image
									src="/icons/Email.png"
									alt="Email"
									width={28}
									height={28}
								/>
							</button>
						</TooltipTrigger>
						<TooltipContent side="right">
							<p>Copy Email Address</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</>
	);
};

export default FloatingContactActions;
