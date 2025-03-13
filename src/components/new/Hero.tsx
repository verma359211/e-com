// components/Hero.tsx
import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="relative w-full h-[500px] md:h-[600px]">
			{/* Hero Image */}
			<div className="relative w-full h-full">
				<Image
					src="https://plus.unsplash.com/premium_photo-1708632849593-3e0d77b47b97?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Couple in cozy clothing"
					layout="fill"
					objectFit="cover"
					priority
				/>

				{/* Text Overlay */}
				<div className="absolute inset-0 flex flex-col justify-center items-start pl-8 md:pl-16 lg:pl-24">
					<h1 className="text-4xl md:text-5xl font-light text-white mb-4">
						Your Cozy Era
					</h1>
					<p className="text-white text-lg mb-6">
						Soft, warm essentials for the season ahead
					</p>
					<button className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition">
						Shop Now
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
