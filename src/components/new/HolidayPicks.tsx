// components/HolidayPicks.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HolidayPicks = () => {
	return (
		<section className="px-4 max-w-7xl mx-auto mb-16">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Holiday Gift Picks */}
				<div className="space-y-4">
					<h2 className="text-xl">Our Holiday Gift Picks</h2>
					<div className="relative h-64 md:h-80">
						<Image
							src="https://i.pinimg.com/736x/06/0a/4f/060a4fa1e947c69d1111af689f6a0b1a.jpg"
							alt="Stack of sweaters"
							fill
							className="object-cover"
						/>
					</div>
					<p className="text-sm text-gray-600">
						The exact sweaters we want to get (and gift) this winter
					</p>
					<Link
						href="/blog/holiday-picks"
						className="text-sm font-medium hover:underline"
					>
						Read Blog
					</Link>
				</div>

				{/* Cleaner Fashion */}
				<div className="space-y-4">
					<h2 className="text-xl">Cleaner Fashion</h2>
					<div className="relative h-64 md:h-80">
						<Image
							src="https://i.pinimg.com/736x/b1/cc/d9/b1ccd9d755c3c6320e6e764e71da953f.jpg"
							alt="Organic cotton field"
							fill
							className="object-cover"
						/>
					</div>
					<p className="text-sm text-gray-600">
						Learn how we&apos;re working to reduce our environmental impact
					</p>
					<Link
						href="/blog/cleaner-fashion"
						className="text-sm font-medium hover:underline"
					>
						Learn More
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HolidayPicks;
