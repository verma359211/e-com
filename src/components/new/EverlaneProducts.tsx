"use client";
// components/EverlaneProducts.tsx
import React, { useRef } from "react";
import Image from "next/image";

const products = [
	{
		id: 1,
		name: "The Oversized Shirt Jacket",
		price: "$88",
		image:
			"https://i.pinimg.com/736x/06/0a/4f/060a4fa1e947c69d1111af689f6a0b1a.jpg",
	},
	{
		id: 2,
		name: "The Premium-Weight Relaxed Jean",
		price: "$98",
		image:
			"https://i.pinimg.com/736x/06/0a/4f/060a4fa1e947c69d1111af689f6a0b1a.jpg",
	},
	{
		id: 3,
		name: "The Flannel Overshirt",
		price: "$88",
		image:
			"https://i.pinimg.com/736x/06/0a/4f/060a4fa1e947c69d1111af689f6a0b1a.jpg",
	},
	{
		id: 4,
		name: "The Cashmere Crew",
		price: "$145",
		image:
			"https://i.pinimg.com/736x/06/0a/4f/060a4fa1e947c69d1111af689f6a0b1a.jpg",
	},
	{
		id: 5,
		name: "The Italian Leather Boot",
		price: "$225",
		image:
			"https://i.pinimg.com/736x/06/0a/4f/060a4fa1e947c69d1111af689f6a0b1a.jpg",
	},
];

const EverlaneProducts = () => {
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
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-xl">Everlane Favorites</h2>
				<div className="text-sm text-gray-500">
					Beautifully Functional. Personally Designed. Universally Crafted.
				</div>
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

				{/* Products Carousel */}
				<div
					ref={scrollRef}
					className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
					style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
				>
					{products.map((product) => (
						<div key={product.id} className="flex-none w-64">
							<div className="relative h-80 mb-2 group cursor-pointer">
								<Image
									src={product.image}
									alt={product.name}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<h3 className="text-sm font-medium">{product.name}</h3>
							<p className="text-sm">{product.price}</p>
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

export default EverlaneProducts;

// Add this to globals.css
/*
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
*/
