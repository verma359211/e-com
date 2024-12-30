import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
	return (
		<footer className="text-white">
			<div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Brand and Description */}
					<div className="col-span-1 md:col-span-2">
						<h2 className="text-2xl font-bold mb-4">Your T-Shirt Brand</h2>
						<p className="text-gray-300 mb-4">
							Unique designs for unique individuals. Express yourself with our
							premium quality t-shirts.
						</p>
					</div>

					{/* Quick Links */}
					<div className="col-span-1">
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/shop"
									className="hover:text-gray-300 transition-colors"
								>
									Shop
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="hover:text-gray-300 transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-gray-300 transition-colors"
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									className="hover:text-gray-300 transition-colors"
								>
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* Newsletter Signup */}
					<div className="col-span-1">
						<h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
						<form className="space-y-2">
							<Input
								type="email"
								placeholder="Enter your email"
								className="bg-gray-800 text-white border-gray-700 focus:border-white"
							/>
							<Button
								type="submit"
								className="w-full bg-white text-gray-900 hover:bg-gray-200"
							>
								Subscribe
							</Button>
						</form>
					</div>
				</div>

				{/* Social Media and Copyright */}
				<div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
					<div className="flex space-x-4 mb-4 md:mb-0">
						<a href="#" className="hover:text-gray-300 transition-colors">
							<Facebook size={24} />
						</a>
						<a href="#" className="hover:text-gray-300 transition-colors">
							<Instagram size={24} />
						</a>
						<a href="#" className="hover:text-gray-300 transition-colors">
							<Twitter size={24} />
						</a>
					</div>
					<p className="text-sm text-gray-400">
						© {new Date().getFullYear()} Your T-Shirt Brand. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
