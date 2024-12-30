"use client";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-8">
			<WobbleCard
				containerClassName="col-span-1 lg:col-span-2 h-full bg-grey-900 min-h-[500px] lg:min-h-[300px]"
				className=""
			>
				<div className="max-w-xs">
					<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						Gippity AI powers the entire universe
					</h2>
					<p className="mt-4 text-left  text-base/6 text-neutral-200">
						With over 100,000 mothly active bot users, Gippity AI is the most
						popular AI platform for developers.
					</p>
				</div>
				
			</WobbleCard>
			<WobbleCard containerClassName="col-span-1 min-h-[300px] bg-yellow-900">
				<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
					No shirt, no shoes, no weapons.
				</h2>
				<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
					If someone yells “stop!”, goes limp, or taps out, the fight is over.
				</p>
			</WobbleCard>
			<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-teal-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
				<div className="max-w-sm">
					<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						Signup for blazing-fast cutting-edge state of the art Gippity AI
						wrapper today!
					</h2>
					<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
						With over 100,000 mothly active bot users, Gippity AI is the most
						popular AI platform for developers.
					</p>
				</div>
				
			</WobbleCard>
		</div>
	);
}
