// components/FeaturedSections.tsx
import React from "react";
import Image from "next/image";

const featuredSections = [
	{
		title: "New Arrivals",
		image:
			"https://i.pinimg.com/736x/c0/5f/63/c05f6305c78a3c13732621477b5fb8a3.jpg",
		buttonText: "Shop Now",
		href: "/collections/new-arrivals",
	},
	{
		title: "Best Sellers",
		image:
			"https://i.pinimg.com/736x/02/66/3d/02663d5ddad99719295662374ff0738b.jpg",
		buttonText: "Shop Now",
		href: "/collections/best-sellers",
	},
	{
		title: "The Holiday Outfit",
		image:
			"https://i.pinimg.com/736x/06/0a/4f/060a4fa1e947c69d1111af689f6a0b1a.jpg",
		buttonText: "Shop Now",
		href: "/collections/holiday-outfit",
	},
];

const FeaturedSections = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto mb-12">
			{featuredSections.map((section) => (
				<div
					key={section.title}
					className="relative h-[350px] group cursor-pointer"
				>
					<Image
						src={section.image}
						alt={section.title}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-500"
					/>
					<div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
						<h2 className="text-2xl text-white font-light mb-4">
							{section.title}
						</h2>
						<button className="bg-white text-black px-6 py-2 hover:bg-gray-100 transition">
							{section.buttonText}
						</button>
					</div>
				</div>
			))}
		</section>
	);
};

export default FeaturedSections;
