"use client"
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
	return (
		<footer className="text-gray-700">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div>
						<h2 className="text-white text-lg font-semibold mb-4">
							Our Company
						</h2>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="hover:text-white transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/careers"
									className="hover:text-white transition-colors"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href="/press"
									className="hover:text-white transition-colors"
								>
									Press
								</Link>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h2 className="text-white text-lg font-semibold mb-4">
							Customer Service
						</h2>
						<ul className="space-y-2">
							<li>
								<Link
									href="/contact"
									className="hover:text-white transition-colors"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									className="hover:text-white transition-colors"
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href="/returns"
									className="hover:text-white transition-colors"
								>
									Returns & Exchanges
								</Link>
							</li>
							<li>
								<Link
									href="/shipping"
									className="hover:text-white transition-colors"
								>
									Shipping Information
								</Link>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h2 className="text-white text-lg font-semibold mb-4">
							Quick Links
						</h2>
						<ul className="space-y-2">
							<li>
								<Link
									href="/products"
									className="hover:text-white transition-colors"
								>
									All Products
								</Link>
							</li>
							<li>
								<Link
									href="/sale"
									className="hover:text-white transition-colors"
								>
									Sale Items
								</Link>
							</li>
							<li>
								<Link
									href="/new"
									className="hover:text-white transition-colors"
								>
									New Arrivals
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									className="hover:text-white transition-colors"
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					{/* Newsletter Signup */}
					<div>
						<h2 className="text-white text-lg font-semibold mb-4">
							Stay Connected
						</h2>
						<p className="mb-4">
							Subscribe to our newsletter for exclusive offers and updates.
						</p>
						<form
							className="flex flex-col space-y-2"
							onSubmit={(e) => e.preventDefault()}
						>
							<Input
								type="email"
								placeholder="Enter your email"
								className="border-gray-300 focus:border-gray-400"
							/>
							<Button
								type="submit"
								className="bg-blue-600 hover:bg-blue-700 text-white"
							>
								Subscribe
							</Button>
						</form>
					</div>
				</div>

				{/* Social Media Links */}
				<div className="mt-8 pt-8 border-t border-gray-200">
					<div className="flex justify-center space-x-6">
						<a href="#" className="text-gray-500 hover:text-gray-700">
							<span className="sr-only">Facebook</span>
							<Facebook className="h-6 w-6" />
						</a>
						<a href="#" className="text-gray-500 hover:text-gray-700">
							<span className="sr-only">Twitter</span>
							<Twitter className="h-6 w-6" />
						</a>
						<a href="#" className="text-gray-500 hover:text-gray-700">
							<span className="sr-only">Instagram</span>
							<Instagram className="h-6 w-6" />
						</a>
						<a href="#" className="text-gray-500 hover:text-gray-700">
							<span className="sr-only">YouTube</span>
							<Youtube className="h-6 w-6" />
						</a>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-8 text-center text-sm">
					<p>
						&copy; {new Date().getFullYear()} Your E-commerce Store. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
