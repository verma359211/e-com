"use client"
// components/EverlaneOnYou.tsx
import React, { useRef } from "react";
import Image from "next/image";

const socialPosts = [
	{
		id: 1,
		image:
			"https://i.pinimg.com/736x/be/96/9a/be969a4ee0cba365a8485d05b9508ace.jpg",
		username: "@user1",
	},
	{
		id: 2,
		image:
			"https://i.pinimg.com/736x/be/96/9a/be969a4ee0cba365a8485d05b9508ace.jpg",
		username: "@user2",
	},
	{
		id: 3,
		image:
			"https://i.pinimg.com/736x/be/96/9a/be969a4ee0cba365a8485d05b9508ace.jpg",
		username: "@user3",
	},
	{
		id: 4,
		image:
			"https://i.pinimg.com/736x/be/96/9a/be969a4ee0cba365a8485d05b9508ace.jpg",
		username: "@user4",
	},
	{
		id: 5,
		image:
			"https://i.pinimg.com/736x/be/96/9a/be969a4ee0cba365a8485d05b9508ace.jpg",
		username: "@user5",
	},
	{
		id: 6,
		image:
			"https://i.pinimg.com/736x/be/96/9a/be969a4ee0cba365a8485d05b9508ace.jpg",
		username: "@user6",
	},
];

const EverlaneOnYou = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (scrollRef.current) {
			const { current } = scrollRef;
			const scrollAmount = 300;
			if (direction === "left") {
				current.scrollLeft -= scrollAmount;
			} else {
				current.scrollLeft += scrollAmount;
			}
		}
	};

	return (
		<section className="px-4 max-w-7xl mx-auto mb-16">
			<div className="text-center mb-8">
				<h2 className="text-xl mb-2">Everlane On You</h2>
				<p className="text-sm text-gray-600">
					Share your style on Instagram with #EverlaneOnYou for a chance to be
					featured.
				</p>
			</div>

			<div className="relative">
				{/* Left Arrow */}
				<button
					className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
					onClick={() => scroll("left")}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				{/* Social Posts Gallery */}
				<div
					ref={scrollRef}
					className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
					style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
				>
					{socialPosts.map((post) => (
						<div
							key={post.id}
							className="flex-none w-64 h-64 relative group cursor-pointer"
						>
							<Image
								src={post.image}
								alt={`Social post by ${post.username}`}
								layout="fill"
								objectFit="cover"
								className="group-hover:scale-105 transition-transform duration-300"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
								<span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									{post.username}
								</span>
							</div>
						</div>
					))}
				</div>

				{/* Right Arrow */}
				<button
					className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
					onClick={() => scroll("right")}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
};

export default EverlaneOnYou;
