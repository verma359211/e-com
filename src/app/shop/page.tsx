"use client"
import { Navbar } from "@/components/navbar";
import ProductListingPage from "@/components/product/product-listing-page"
import Footer from "@/components/footer";
import { Product } from "@/types"; // Adjust the import path
import { useEffect, useState } from "react";

export default function Home() {
    const [cart, setCart] = useState<Product[]>([]);

    const handleAddToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
        console.log(`Added t-shirt to cart`);
    };
    useEffect(() => {
			console.log("Cart updated:", cart);
		}, [cart]);
  return (
		<div className="">
			<Navbar cart={cart} />
			<ProductListingPage onAddToCart={handleAddToCart} />
			<Footer />
		</div>
	); 
} 