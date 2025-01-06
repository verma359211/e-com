"use client"
import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { Product } from "@/types"; // Adjust the import path as necessary

interface CartContextType {
	cart: Product[];
	addToCart: (product: Product) => void;
	removeFromCart: (productId: string) => void;
	getTotalItems: () => number;
}

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the cart context
export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};

interface CartProviderProps {
	children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [cart, setCart] = useState<Product[]>(() => {
		// Retrieve cart from localStorage
		if (typeof window !== "undefined") {
			const storedCart = localStorage.getItem("cart");
			return storedCart ? JSON.parse(storedCart) : [];
		}
		return [];
	});

	// Persist cart to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (product: Product) => {
		setCart((prevCart) => [...prevCart, product]);
	};

	const removeFromCart = (id: string) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	};

	const getTotalItems = () => cart.length;

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, getTotalItems }}
		>
			{children}
		</CartContext.Provider>
	);
};
