"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

interface Product {
	id: string;
	name: string;
	price: number;
	image: string;
	color: string;
	size: string;
}

interface ProductCardProps {
	product: Product;
	onAddToCart: (productId: string) => void;
}

export default function ProductCard({
	product,
	onAddToCart,
}: ProductCardProps) {
	const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
			<div className="relative">
				<Image
					src={product.image}
					alt={product.name}
					width={300}
					height={300}
					className="w-full h-48 object-cover"
				/>
				<Dialog open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen}>
					<DialogTrigger asChild>
						<button
							className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
							aria-label="Quick view"
						>
							<Eye className="h-5 w-5 text-gray-600" />
						</button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>{product.name}</DialogTitle>
							<DialogDescription>
								Quick view of the t-shirt details
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<Image
								src={product.image}
								alt={product.name}
								width={300}
								height={300}
								className="w-full h-64 object-cover rounded-md"
							/>
							<p className="text-lg font-semibold">
								₹{product.price.toFixed(2)}
							</p>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-sm font-medium">Color</p>
									<p className="text-sm text-gray-500">{product.color}</p>
								</div>
								<div>
									<p className="text-sm font-medium">Size</p>
									<p className="text-sm text-gray-500">{product.size}</p>
								</div>
							</div>
							<p className="text-sm text-gray-500">
								This comfortable {product.color} t-shirt is perfect for everyday
								wear. Made with high-quality cotton for a soft feel and lasting
								durability.
							</p>
						</div>
						<div className="flex justify-end">
							<Button
								onClick={() => {
									onAddToCart(product.id);
									setIsQuickViewOpen(false);
								}}
							>
								Add to Cart
							</Button>
						</div>
					</DialogContent>
				</Dialog>
			</div>
			<div className="p-4">
				<h3 className="text-lg font-semibold mb-2 text-gray-600">
					{product.name}
				</h3>
				<p className="text-gray-600 mb-1">₹{product.price.toFixed(2)}</p>
				<p className="text-sm text-gray-500 mb-4">
					Color: {product.color} | Size: {product.size}
				</p>
				<Button
					onClick={() => onAddToCart(product.id)}
					className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
				>
					Add to Cart
				</Button>
			</div>
		</div>
	);
}
