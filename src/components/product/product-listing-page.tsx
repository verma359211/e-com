"use client"
import { useState } from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Home, Search, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/product-card";
import SidebarFilters from "@/components/sidebar-filters";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";



// Dummy t-shirt products data
const dummyProducts: Product[] = [
	{
		id: "1",
		name: "Classic White Tee",
		price: 499,
		image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		color: "White",
		size: "M",
	},
	{
		id: "2",
		name: "Vintage Black T-Shirt",
		price: 599,
		image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		color: "Black",
		size: "L",
	},
	{
		id: "3",
		name: "Graphic Print Tee",
		price: 699,
		image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		color: "Gray",
		size: "S",
	},
	{
		id: "4",
		name: "Striped Sailor Shirt",
		price: 799,
		image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		color: "Blue/White",
		size: "XL",
	},
	{
		id: "5",
		name: "V-Neck Red T-Shirt",
		price: 549,
		image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		color: "Red",
		size: "M",
	},
	{
		id: "6",
		name: "Eco-Friendly Green Tee",
		price: 899,
		image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		color: "Green",
		size: "L",
	},
	{
		id: "7",
		name: "Retro Band T-Shirt",
		price: 749,
		image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		color: "Black",
		size: "S",
	},
	{
		id: "8",
		name: "Sports Team Jersey",
		price: 999,
		image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		color: "Red/White",
		size: "XL",
	},
	{
		id: "9",
		name: "Tie-Dye Summer Tee",
		price: 649,
		image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		color: "Multi",
		size: "M",
	},
	{
		id: "10",
		name: "Minimalist Logo Shirt",
		price: 579,
		image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		color: "Navy",
		size: "L",
	},
	{
		id: "11",
		name: "Pocket Detail T-Shirt",
		price: 629,
		image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		color: "Beige",
		size: "S",
	},
	{
		id: "12",
		name: "Long Sleeve Henley",
		price: 849,
		image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		color: "Burgundy",
		size: "M",
	},
];



export default function ProductListingPage() {
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 8;
	const totalPages = Math.max(
		1,
		Math.ceil(dummyProducts.length / productsPerPage)
	);

	const { addToCart } = useCart();

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = dummyProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	return (
		<div className="container mx-auto px-4 py-8">
			<header className="mb-8">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">
								<Home className="h-4 w-4" />
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href="/shop">shop</BreadcrumbLink>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
					<div className="relative w-full sm:w-64">
						<Input
							type="text"
							placeholder="Search t-shirts..."
							className="pl-10"
						/>
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
					</div>
					<Select>
						<SelectTrigger className="w-full sm:w-40">
							<SelectValue placeholder="Style" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Styles</SelectItem>
							<SelectItem value="classic">Classic</SelectItem>
							<SelectItem value="graphic">Graphic</SelectItem>
							<SelectItem value="v-neck">V-Neck</SelectItem>
							<SelectItem value="long-sleeve">Long Sleeve</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</header>

			<div className="flex flex-col md:flex-row gap-8">
				<aside className="w-full md:w-64 mb-8 md:mb-0">
					<SidebarFilters />
				</aside>

				<main className="flex-1">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{currentProducts.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
								onAddToCart={() => addToCart(product)}
							/>
						))}
					</div>

					<div className="mt-8 flex justify-center items-center space-x-2">
						<Button
							variant="outline"
							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
							disabled={currentPage === 1}
						>
							<ChevronLeft className="h-4 w-4 mr-2" />
							Previous
						</Button>
						<span className="text-sm font-medium">
							Page {currentPage} of {totalPages}
						</span>
						<Button
							variant="outline"
							onClick={() =>
								setCurrentPage((prev) => Math.min(prev + 1, totalPages))
							}
							disabled={currentPage === totalPages}
						>
							Next
							<ChevronRight className="h-4 w-4 ml-2" />
						</Button>
					</div>
				</main>
			</div>
		</div>
	);
}
