"use client";

import { useState,  } from "react";
import { ArrowLeft,  } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CartItem from "./components/cart-item";
import CartSummary from "./components/cart-summary";
import EmptyCart from "./components/empty-cart";
import { useCart } from "@/context/CartContext";

// Mock data for cart items
// const initialCartItems = [
// 	{
// 		id: "1",
// 		name: "Product 1",
// 		price: 19.99,
// 		quantity: 2,
// 		image: "/placeholder.svg?height=80&width=80",
// 		size: "M",
// 	},
// 	{
// 		id: "2",
// 		name: "Product 2",
// 		price: 29.99,
// 		quantity: 1,
// 		image: "/placeholder.svg?height=80&width=80",
// 		size: "L",
// 	},
// ];

export default function Cart() {
    const { cart } = useCart();
    const initialCartItems = cart;
	const [cartItems, setCartItems] = useState(initialCartItems);
	const [isLoading, setIsLoading] = useState(false);

	const updateQuantity = (id: string, newQuantity: number) => {
		setIsLoading(true);
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, quantity: newQuantity } : item
			)
		);
		setTimeout(() => setIsLoading(false), 500); // Simulate network delay
	};

	const removeItem = (id: string) => {
		setIsLoading(true);
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
		setTimeout(() => setIsLoading(false), 500); // Simulate network delay
	};

	const subtotal = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const tax = subtotal * 0.1; // Assume 10% tax
	const total = subtotal + tax;

	if (cartItems.length === 0) {
		return <EmptyCart />;
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<header className="mb-8">
				<div className="flex items-center justify-between mb-4">
					<Link
						href="/shop"
						className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Products
					</Link>
					<h1 className="text-2xl font-bold">Your Cart ({cartItems.length})</h1>
				</div>
			</header>

			<div className="grid gap-8 md:grid-cols-3">
				<div className="md:col-span-2">
					{cartItems.map((item) => (
						<CartItem
							key={item.id}
							item={item}
							updateQuantity={updateQuantity}
							removeItem={removeItem}
						/>
					))}
				</div>
				<div>
					<CartSummary subtotal={subtotal} tax={tax} total={total} />
					<div className="mt-8 space-y-4">
						<Button variant="outline" className="w-full" asChild>
							<Link href="/products">Continue Shopping</Link>
						</Button>
						<Button className="w-full">Proceed to Checkout</Button>
					</div>
				</div>
			</div>

			{isLoading && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
				</div>
			)}
		</div>
	);
}
