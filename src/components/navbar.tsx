"use client"

import * as React from "react"
import Link from "next/link"
import { ShoppingCart } from 'lucide-react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Switch } from "@/components/ui/switch" 
import { ModeToggle } from "@/components/ui/mode-toggle"
// import { Product } from "@/types"
import { useCart } from "@/context/CartContext"

const NavItems = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Wishlist", href: "/wishlist" },
]

export function Navbar() {
	const { cart } = useCart();
	const [isOpen, setIsOpen] = React.useState(false);
	// const [cartItemCount, setCartItemCount] = React.useState(cart.length); // Example cart item count

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center px-4">
				<div className="mr-4 hidden md:flex">
					<Link href="/" className="mr-6 flex items-center space-x-2">
						<span className="hidden font-bold sm:inline-block">Hi</span>
					</Link>
					<NavigationMenu>
						<NavigationMenuList>
							{NavItems.map((item) => (
								<NavigationMenuItem key={item.title}>
									<Link href={item.href} legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											{item.title}
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
							aria-label="Open main menu"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="w-[300px] sm:w-[400px]">
						<nav className="flex flex-col gap-4">
							{NavItems.map((item) => (
								<Link
									key={item.title}
									href={item.href}
									className="block px-2 py-1 text-lg"
									onClick={() => setIsOpen(false)}
								>
									{item.title}
								</Link>
							))}
						</nav>
					</SheetContent>
				</Sheet>
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						<Button variant="ghost" className="w-9 px-0">
							<svg
								className="h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
							<span className="sr-only">Search</span>
						</Button>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="relative">
								Account
								<span className="sr-only">Toggle account menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem>
								<Link href="/login">Login</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href="/signup">Sign Up</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<Button variant="ghost" size="icon" className="relative">
						<ShoppingCart className="h-5 w-5" />
						<span className="sr-only">Open cart</span>
						<span className="absolute right-0 top-0 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
							{cart.length}
						</span>
					</Button>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}

