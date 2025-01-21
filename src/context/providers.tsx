"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/context/CartContext";


export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<SessionProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange
            >
                <CartProvider>
				{children}
                </CartProvider>
			</ThemeProvider>
		</SessionProvider>
	);
};
