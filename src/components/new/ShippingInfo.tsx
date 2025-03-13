// components/ShippingInfo.tsx
import React from "react";

const ShippingInfo = () => {
	return (
		<section className="border-t border-gray-200 py-12 mb-8">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
					{/* Complimentary Shipping */}
					<div className="flex flex-col items-center">
						<div className="mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-8 h-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1}
									d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
								/>
							</svg>
						</div>
						<h3 className="font-medium mb-2">Complimentary Shipping</h3>
						<p className="text-sm text-gray-600">
							Free on U.S. Orders Over $100
						</p>
					</div>

					{/* Convenient Clothes */}
					<div className="flex flex-col items-center">
						<div className="mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-8 h-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1}
									d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
								/>
							</svg>
						</div>
						<h3 className="font-medium mb-2">Convenient Clothes</h3>
						<p className="text-sm text-gray-600">Easy Returns Up to 30 Days</p>
					</div>

					{/* Quality First */}
					<div className="flex flex-col items-center">
						<div className="mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-8 h-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1}
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
						<h3 className="font-medium mb-2">Quality First</h3>
						<p className="text-sm text-gray-600">
							No Shortcuts in Our Production
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShippingInfo;
