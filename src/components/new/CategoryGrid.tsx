// components/CategoryGrid.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
	{
		name: "Shirts",
		image:
			"https://i.pinimg.com/736x/33/64/44/3364447a362fe477ec498e5004ca6662.jpg",
		href: "/categories/shirts",
	},
	{
		name: "Denim",
		image:
			"https://i.pinimg.com/736x/33/64/44/3364447a362fe477ec498e5004ca6662.jpg",
		href: "/categories/denim",
	},
	{
		name: "Tees",
		image:
			"https://i.pinimg.com/736x/33/64/44/3364447a362fe477ec498e5004ca6662.jpg",
		href: "/categories/tees",
	},
	{
		name: "Pants",
		image:
			"https://i.pinimg.com/736x/33/64/44/3364447a362fe477ec498e5004ca6662.jpg",
		href: "/categories/pants",
	},
	{
		name: "Sweaters",
		image:
			"https://i.pinimg.com/736x/33/64/44/3364447a362fe477ec498e5004ca6662.jpg",
		href: "/categories/sweaters",
	},
	{
		name: "Outerwear",
		image:
			"https://i.pinimg.com/736x/33/64/44/3364447a362fe477ec498e5004ca6662.jpg",
		href: "/categories/outerwear",
	},
];

const CategoryGrid = () => {
	return (
		<section className="py-12 px-4 max-w-7xl mx-auto">
			<h2 className="text-center text-xl mb-8">Shop by Category</h2>
			<div className="grid grid-cols-3 md:grid-cols-6 gap-4">
				{categories.map((category) => (
					<Link href={category.href} key={category.name}>
						<div className="flex flex-col items-center cursor-pointer group">
							<div className="w-full aspect-square relative mb-2 overflow-hidden rounded-sm">
								<Image
									src={category.image}
									alt={category.name}
									layout="fill"
									objectFit="cover"
									className="group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<span className="text-sm uppercase tracking-wide">
								{category.name}
							</span>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default CategoryGrid;
