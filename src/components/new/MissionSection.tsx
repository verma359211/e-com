// components/MissionSection.tsx
import React from "react";
import Image from "next/image";

const MissionSection = () => {
	return (
		<section className="relative w-full h-[300px] md:h-[350px] mb-12">
			<Image
				src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Sustainable farming"
				fill
				className="object-cover"
			/>
			<div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
				<h2 className="text-2xl md:text-3xl text-white font-light mb-4">
					We&apos;re on a Mission To Clean Up the Industry
				</h2>
				<button className="bg-white text-black px-6 py-2 hover:bg-gray-100 transition">
					Learn More About Our Sustainability
				</button>
			</div>
		</section>
	);
};

export default MissionSection;
