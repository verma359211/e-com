import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface CartItemProps {
	item: {
		id: string;
		name: string;
		price: number;
		quantity: number;
		image: string;
		size: string;
	};
	updateQuantity: (id: string, quantity: number) => void;
	removeItem: (id: string) => void;
}

export default function CartItem({
	item,
	updateQuantity,
	removeItem,
}: CartItemProps) {
	return (
		<div className="flex items-center space-x-4 py-4 border-b">
			<Image
				src={item.image}
				alt={item.name}
				width={80}
				height={80}
				className="rounded-md"
			/>
			<div className="flex-grow">
				<Link
					href={`/products/${item.id}`}
					className="text-lg font-medium hover:underline"
				>
					{item.name}
				</Link>
				<p className="text-gray-600">
					${item.price.toFixed(2)} - Size: {item.size}
				</p>
			</div>
			<div className="flex items-center space-x-2">
				<Select
					value={item.quantity.toString()}
					onValueChange={(value) => updateQuantity(item.id, parseInt(value))}
				>
					<SelectTrigger className="w-20">
						<SelectValue placeholder="Quantity" />
					</SelectTrigger>
					<SelectContent>
						{[1, 2, 3, 4, 5].map((num) => (
							<SelectItem key={num} value={num.toString()}>
								{num}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Button
					variant="ghost"
					size="icon"
					onClick={() => removeItem(item.id)}
					aria-label={`Remove ${item.name} from cart`}
				>
					<Trash2 className="h-5 w-5" />
				</Button>
			</div>
			<div className="text-right">
				<p className="font-medium">
					${(item.price * item.quantity).toFixed(2)}
				</p>
			</div>
		</div>
	);
}
