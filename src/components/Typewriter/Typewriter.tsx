"use client";
import React, { useState, useRef, useEffect } from "react";
import { titles } from "@/data/about";

const Typewriter = () => {
	const [title, setTitle] = useState<string>();
	const [typedText, setTypedText] = useState<string>();
	const title_picker = useRef(0);
	const char_counter = useRef(0);
	const time_per_char = 300;

	useEffect(() => {
		let lastTitle: string;
		const changeTitle = () => {
			let timer: number;
			let newTitle: string;
			do {
				if (!lastTitle) {
					const index = Math.floor(Math.random() * titles.length);
					newTitle = titles[index];
				} else {
					const index = (titles.indexOf(lastTitle) + 1) % titles.length;
					newTitle = titles[index];
				}
			} while (newTitle === lastTitle);
			timer = newTitle.length * time_per_char + 250;
			setTitle(newTitle);
			lastTitle = newTitle;
			title_picker.current = window.setTimeout(changeTitle, timer);
		};
		changeTitle();
		return () => {
			window.clearTimeout(title_picker.current);
		};
	}, []);

	useEffect(() => {
		let charsTyped: number = 0;
		let typingForward: boolean = true;
		setTypedText("");
		const typeText = () => {
			if (title) {
				if (typingForward && title.length === charsTyped) {
					typingForward = false;
				}
				if (typingForward && charsTyped < title.length) {
					charsTyped = charsTyped + 1;
					setTypedText(title.slice(0, charsTyped));
					char_counter.current = window.setTimeout(typeText, 200);
				} else if (!typingForward && charsTyped != 0) {
					charsTyped = charsTyped - 1;
					setTypedText(title.slice(0, charsTyped));
					char_counter.current = window.setTimeout(typeText, 100);
				}
			}
		};
		typeText();
		return () => {
			window.clearTimeout(char_counter.current);
		};
	}, [title]);

	return (
		<>
			<span className="text-secondary font-semibold font-mono overflow-clip border-r-2 animate-blink">
				{typedText}
			</span>
		</>
	);
};

export default Typewriter;
