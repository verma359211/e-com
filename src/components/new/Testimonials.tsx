"use client";
// components/Testimonials.tsx
import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
	{
		id: 1,
		rating: 5,
		review:
			"Love this shirt! Fits perfectly and the fabric is thick without being stiff.",
		author: "Jeremiah - The Heavyweight Overshirt",
		image:
			"https://i.pinimg.com/736x/f9/98/86/f9988680743607aecd92c81c8aad31c1.jpg",
	},
	{
		id: 2,
		rating: 5,
		review: "Amazing fit !!!",
		author: "Tom - The Freaky cleaner",
		image:
			"https://i.pinimg.com/736x/7d/f4/4a/7df44a21e1dc5b9b1842df8f12f0c39a.jpg",
	},
	// Add more testimonials for the carousel
];

const Testimonials = () => {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	const nextTestimonial = () => {
		setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentTestimonial(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	return (
		<section className="px-4 max-w-7xl mx-auto mb-16">
			<h2 className="text-xl mb-4">People Are Talking</h2>

			<div className="relative">
				{/* Testimonial */}
				<div className="flex flex-col md:flex-row gap-6 items-center">
					<div className="w-full md:w-1/2 space-y-4">
						<div className="flex">
							{[...Array(5)].map((_, i) => (
								<svg
									key={i}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-5 h-5 text-yellow-400"
								>
									<path
										fillRule="evenodd"
										d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
										clipRule="evenodd"
									/>
								</svg>
							))}
						</div>
						<p className="text-lg font-medium">
							&quot;{testimonials[currentTestimonial].review}&quot;
						</p>
						<p className="text-sm text-gray-600">
							{testimonials[currentTestimonial].author}
						</p>
					</div>
					<div className="w-full md:w-1/2 h-96 relative">
						<Image
							src={testimonials[currentTestimonial].image}
							alt="Product testimonial"
							fill
							className="object-cover"
						/>
					</div>
				</div>

				{/* Navigation Arrows */}
				<button
					className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
					onClick={prevTestimonial}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>
				<button
					className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
					onClick={nextTestimonial}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
};

export default Testimonials;
