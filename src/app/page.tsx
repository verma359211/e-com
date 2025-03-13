// pages/index.tsx
// import { useState, useEffect } from "react";
import Hero from "@/components/new/Hero";
import CategoryGrid from "@/components/new/CategoryGrid";
import FeaturedSections from "@/components/new/FeaturedSections";
import MissionSection from "@/components/new/MissionSection";
import EverlaneProducts from "@/components/new/EverlaneProducts";
import Testimonials from "@/components/new/Testimonials";
import HolidayPicks from "@/components/new/HolidayPicks";
import EverlaneOnYou from "@/components/new/EverlaneOnYou";
import ShippingInfo from "@/components/new/ShippingInfo";
import Footer from "@/components/new/Footer";
import Navbar from "@/components/new/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen">
				<Hero />
				<CategoryGrid />
				<FeaturedSections />
				<MissionSection />
				<EverlaneProducts />
				<Testimonials />
				<HolidayPicks />
				<EverlaneOnYou />
				<ShippingInfo />
			</main>

			<Footer />
		</>
	);
}
