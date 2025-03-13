import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

type ProductCardProps = {
	product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
	const { id, name, price, originalPrice, images, colors } = product;
	const discount = originalPrice
		? Math.round((1 - price / originalPrice) * 100)
		: null;

	return (
		<Link href={`/products/${id}`} className="group block">
			<div className="relative aspect-[3/4] overflow-hidden mb-3">
				{discount && (
					<div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 z-10">
						{discount}% off
					</div>
				)}

				<Image
					src={
						images[0] ||
						"https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop"
					}
					alt={name}
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-300"
				/>
			</div>

			<h3 className="font-medium text-sm truncate">{name}</h3>

			<div className="flex items-center mt-1">
				{originalPrice ? (
					<>
						<span className="line-through text-gray-500 text-sm mr-2">
							${originalPrice}
						</span>
						<span className="font-medium">${price}</span>
					</>
				) : (
					<span className="font-medium">${price}</span>
				)}
			</div>

			{colors.length > 0 && (
				<div className="flex mt-2 space-x-1">
					{colors.slice(0, 4).map((color) => (
						<div
							key={color.name}
							className="w-4 h-4 rounded-full border"
							style={{ backgroundColor: color.hex }}
							title={color.name}
						/>
					))}

					{colors.length > 4 && (
						<div className="w-4 h-4 rounded-full border flex items-center justify-center text-xs">
							+{colors.length - 4}
						</div>
					)}
				</div>
			)}
		</Link>
	);
}
