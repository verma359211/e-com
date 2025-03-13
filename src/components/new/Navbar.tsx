"use client"
// components/Navbar.jsx
import { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, ChevronRight, Menu, X } from "lucide-react";

const Navbar = () => {
	const [activeNav, setActiveNav] = useState(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mobileSubmenu, setMobileSubmenu] = useState(null);

	const primaryNav = [
		{ name: "Women", href: "/women", type: "women" },
		{ name: "Men", href: "/men", type: "men" },
		{ name: "About", href: "/about", type: "" },
		{ name: "Everworld Stories", href: "/stories", type: "" },
	];

	const categoryNav = [
		{ name: "Holiday Gifting", href: "/holiday-gifting" },
		{ name: "New Arrivals", href: "/new-arrivals" },
		{ name: "Best-Sellers", href: "/best-sellers" },
		{ name: "Clothing", href: "/clothing" },
		{ name: "Tops & Sweaters", href: "/tops-sweaters" },
		{ name: "Pants & Jeans", href: "/pants-jeans" },
		{ name: "Outerwear", href: "/outerwear" },
		{ name: "Shoes & Bags", href: "/shoes-bags" },
		{ name: "Sale", href: "/sale", className: "text-red-600" },
	];

	// Women's navigation content
	const womenHighlights = [
		{ name: "Shop All Women's", href: "/women" },
		{ name: "New Arrivals", href: "/women/new-arrivals" },
		{ name: "Best-Sellers", href: "/women/best-sellers" },
		{ name: "Cashmere Shop", href: "/women/cashmere" },
		{ name: "Winter Essentials", href: "/women/winter" },
		{ name: "Gift Guide for Her", href: "/women/gifts" },
	];

	const womenCategories = [
		{ name: "Sweaters", href: "/women/sweaters", image: true },
		{ name: "Pants", href: "/women/pants" },
		{ name: "Dresses & Jumpsuits", href: "/women/dresses" },
		{ name: "Tops", href: "/women/tops" },
		{ name: "Outerwear", href: "/women/outerwear" },
		{ name: "Denim", href: "/women/denim", image: true },
	];

	// Men's navigation content
	const menHighlights = [
		{ name: "Shop All Men's", href: "/men" },
		{ name: "New Arrivals", href: "/men/new-arrivals" },
		{ name: "Best-Sellers", href: "/men/best-sellers" },
		{ name: "Performance Collection", href: "/men/performance" },
		{ name: "Winter Essentials", href: "/men/winter" },
		{ name: "Gift Guide for Him", href: "/men/gifts" },
	];

	const menCategories = [
		{ name: "Sweaters & Sweatshirts", href: "/men/sweaters", image: true },
		{ name: "Pants & Chinos", href: "/men/pants" },
		{ name: "T-Shirts", href: "/men/tshirts" },
		{ name: "Button-Downs", href: "/men/buttondowns" },
		{ name: "Outerwear", href: "/men/outerwear" },
		{ name: "Denim", href: "/men/denim", image: true },
	];

	const handleNavHover = (type:any) => {
		if (window.innerWidth >= 768) {
			setActiveNav(type);
		}
	};

	const handleNavLeave = () => {
		if (window.innerWidth >= 768) {
			setActiveNav(null);
		}
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
		setMobileSubmenu(null);
	};

	const toggleMobileSubmenu = (type:any) => {
		setMobileSubmenu(mobileSubmenu === type ? null : type);
	};

	// Render appropriate dropdown content based on active navigation
	const renderDropdownContent = () => {
		if (activeNav === "women") {
			return (
				<div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-white border-t">
					{/* Women's Highlights */}
					<div className="col-span-1">
						<h3 className="text-xs uppercase tracking-wide text-gray-500 mb-4">
							HIGHLIGHTS
						</h3>
						<div className="space-y-4">
							{womenHighlights.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="block text-gray-800 hover:text-gray-600 transition-colors duration-200"
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>

					{/* Women's Categories */}
					<div className="col-span-1">
						<h3 className="text-xs uppercase tracking-wide text-gray-500 mb-4">
							CATEGORIES
						</h3>
						<div className="space-y-4">
							{womenCategories.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="block text-gray-800 hover:text-gray-600 transition-colors duration-200"
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>

					{/* Women's Featured Images - Hide on smaller screens */}
					<div className="hidden md:flex col-span-1 bg-rose-50 text-gray-800 p-6 items-end h-64 transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
						<div>
							<h3 className="text-xl font-medium">
								Winter
								<br />
								Essentials
							</h3>
							<div className="flex items-center mt-2">
								<span className="text-sm">Shop Now</span>
								<ChevronRight className="h-4 w-4 ml-1" />
							</div>
						</div>
					</div>

					<div className="hidden md:flex col-span-1 bg-amber-100 p-6 items-end h-64 transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
						<div>
							<h3 className="text-xl font-medium">
								The Cozy
								<br />
								Edit
							</h3>
							<div className="flex items-center mt-2">
								<span className="text-sm">Shop Collection</span>
								<ChevronRight className="h-4 w-4 ml-1" />
							</div>
						</div>
					</div>
				</div>
			);
		} else if (activeNav === "men") {
			return (
				<div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-white border-t">
					{/* Men's Highlights */}
					<div className="col-span-1">
						<h3 className="text-xs uppercase tracking-wide text-gray-500 mb-4">
							HIGHLIGHTS
						</h3>
						<div className="space-y-4">
							{menHighlights.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="block text-gray-800 hover:text-gray-600 transition-colors duration-200"
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>

					{/* Men's Categories */}
					<div className="col-span-1">
						<h3 className="text-xs uppercase tracking-wide text-gray-500 mb-4">
							CATEGORIES
						</h3>
						<div className="space-y-4">
							{menCategories.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="block text-gray-800 hover:text-gray-600 transition-colors duration-200"
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>

					{/* Men's Featured Images - Hide on smaller screens */}
					<div className="hidden md:flex col-span-1 bg-blue-700 text-white p-6 items-end h-64 transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
						<div>
							<h3 className="text-xl font-medium">
								Performance
								<br />
								Collection
							</h3>
							<div className="flex items-center mt-2">
								<span className="text-sm">Shop Now</span>
								<ChevronRight className="h-4 w-4 ml-1" />
							</div>
						</div>
					</div>

					<div className="hidden md:flex col-span-1 bg-gray-200 p-6 items-end h-64 transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
						<div>
							<h3 className="text-xl font-medium">
								Winter
								<br />
								Layers
							</h3>
							<div className="flex items-center mt-2">
								<span className="text-sm">Shop Collection</span>
								<ChevronRight className="h-4 w-4 ml-1" />
							</div>
						</div>
					</div>
				</div>
			);
		}
		return null;
	};

	// Mobile menu content
	const renderMobileMenu = () => {
		return (
			<div
				className={`fixed inset-0 bg-white z-50 overflow-y-auto ${
					mobileMenuOpen ? "block" : "hidden"
				} md:hidden`}
			>
				<div className="p-4 border-b">
					<div className="flex justify-between items-center">
						<Link href="/" className="text-xl font-medium tracking-widest">
							EVERLANE
						</Link>
						<button onClick={toggleMobileMenu} aria-label="Close Menu">
							<X className="h-6 w-6" />
						</button>
					</div>
				</div>

				<div className="p-4">
					{/* Primary Navigation Links */}
					<div className="space-y-4">
						{primaryNav.map((item) => (
							<div key={item.name} className="py-2 border-b">
								{item.type ? (
									<div>
										<div
											className="flex justify-between items-center"
											onClick={() => toggleMobileSubmenu(item.type)}
										>
											<span className="text-lg font-medium">{item.name}</span>
											<ChevronRight
												className={`h-5 w-5 transition-transform ${
													mobileSubmenu === item.type ? "rotate-90" : ""
												}`}
											/>
										</div>

										{mobileSubmenu === item.type && (
											<div className="mt-4 ml-4 space-y-4">
												{item.type === "women" ? (
													<>
														<div className="mb-6">
															<h3 className="text-xs uppercase tracking-wide text-gray-500 mb-2">
																HIGHLIGHTS
															</h3>
															<div className="space-y-3">
																{womenHighlights.map((subItem) => (
																	<Link
																		key={subItem.name}
																		href={subItem.href}
																		className="block text-gray-800 py-1"
																	>
																		{subItem.name}
																	</Link>
																))}
															</div>
														</div>
														<div>
															<h3 className="text-xs uppercase tracking-wide text-gray-500 mb-2">
																CATEGORIES
															</h3>
															<div className="space-y-3">
																{womenCategories.map((subItem) => (
																	<Link
																		key={subItem.name}
																		href={subItem.href}
																		className="block text-gray-800 py-1"
																	>
																		{subItem.name}
																	</Link>
																))}
															</div>
														</div>
													</>
												) : (
													<>
														<div className="mb-6">
															<h3 className="text-xs uppercase tracking-wide text-gray-500 mb-2">
																HIGHLIGHTS
															</h3>
															<div className="space-y-3">
																{menHighlights.map((subItem) => (
																	<Link
																		key={subItem.name}
																		href={subItem.href}
																		className="block text-gray-800 py-1"
																	>
																		{subItem.name}
																	</Link>
																))}
															</div>
														</div>
														<div>
															<h3 className="text-xs uppercase tracking-wide text-gray-500 mb-2">
																CATEGORIES
															</h3>
															<div className="space-y-3">
																{menCategories.map((subItem) => (
																	<Link
																		key={subItem.name}
																		href={subItem.href}
																		className="block text-gray-800 py-1"
																	>
																		{subItem.name}
																	</Link>
																))}
															</div>
														</div>
													</>
												)}
											</div>
										)}
									</div>
								) : (
									<Link href={item.href} className="block text-lg font-medium">
										{item.name}
									</Link>
								)}
							</div>
						))}
					</div>

					{/* Category Navigation Links */}
					{/* Category Navigation Links */}
					<div className="mt-6 space-y-3">
						<h3 className="text-xs uppercase tracking-wide text-gray-500 mb-2">
							SHOP BY CATEGORY
						</h3>
						{categoryNav.map((category) => (
							<Link
								key={category.name}
								href={category.href}
								className={`block py-2 ${
									category.className || "text-gray-800"
								}`}
							>
								{category.name}
							</Link>
						))}
					</div>

					{/* Mobile Account Links */}
					<div className="mt-8 space-y-4 border-t pt-4">
						<Link href="/account" className="flex items-center py-2">
							<User className="h-5 w-5 mr-3" />
							<span>My Account</span>
						</Link>
						<Link href="/cart" className="flex items-center py-2">
							<ShoppingBag className="h-5 w-5 mr-3" />
							<span>Shopping Bag</span>
						</Link>
					</div>

					{/* Currency Selector */}
					<div className="mt-6 pt-4 border-t">
						<button className="flex items-center py-2">
							<span className="mr-2">🇺🇸</span> USD
						</button>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="w-full">
			{/* Top Banner */}
			<div className="w-full bg-black text-white py-2 px-4 flex items-center text-sm">
				<div className="text-center flex-1 text-xs md:text-sm">
					<span className="md:inline">🚧 Work in Progress! 🚧</span>
					<span className="md:inline text-xs">
						This website is still under development
					</span>
				</div>
			</div>

			{/* Main Navigation */}
			<div className="border-b" onMouseLeave={handleNavLeave}>
				<div className="container mx-auto px-4 flex justify-between items-center py-4">
					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button onClick={toggleMobileMenu} aria-label="Open Menu">
							<Menu className="h-6 w-6" />
						</button>
					</div>

					{/* Left Nav - Hidden on Mobile */}
					<div className="hidden md:flex items-center space-x-8">
						{primaryNav.map((item) => (
							<div key={item.name} className="relative">
								<Link
									href={item.href}
									className={`text-gray-900 hover:text-gray-600 text-sm font-medium relative ${
										activeNav === item.type
											? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gray-900'
											: ""
									}`}
									onMouseEnter={() => item.type && handleNavHover(item.type)}
								>
									{item.name}
								</Link>
							</div>
						))}
					</div>

					{/* Logo - Centered on Mobile */}
					<div className="absolute left-1/2 transform -translate-x-1/2">
						<Link
							href="/"
							className="text-xl md:text-2xl font-medium tracking-widest"
						>
							EVERLANE
						</Link>
					</div>

					{/* Right Icons */}
					<div className="flex items-center space-x-4 md:space-x-6">
						<button aria-label="Search" className="hidden sm:block">
							<Search className="h-5 w-5" />
						</button>
						<button aria-label="Account" className="hidden sm:block">
							<User className="h-5 w-5" />
						</button>
						<button aria-label="Cart">
							<ShoppingBag className="h-5 w-5" />
						</button>
					</div>
				</div>

				{/* Category Navigation - Hidden on Mobile */}
				<div className="hidden md:flex container mx-auto px-4 justify-center space-x-4 md:space-x-6 py-3 overflow-x-auto">
					{categoryNav.map((category) => (
						<div key={category.name} className="relative">
							<Link
								href={category.href}
								className={`text-gray-800 hover:text-gray-600 text-sm whitespace-nowrap ${
									category.className || ""
								}`}
							>
								{category.name}
							</Link>
						</div>
					))}
				</div>

				{/* Dropdown Content - Hidden on Mobile */}
				<div className="hidden md:block">{renderDropdownContent()}</div>
			</div>

			{/* Mobile Menu */}
			{renderMobileMenu()}
		</div>
	);
};

export default Navbar;