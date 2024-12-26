import { Navbar } from "@/components/navbar";
import { ImagesSliderDemo } from "@/components/hero";
import { WobbleCardDemo } from "@/components/productCategories";
import { AppleCardsCarouselDemo } from "@/components/carousel";
import { FeaturesSectionDemo } from "@/components/feature";
export default function Home() {
  return (
		<div className="">
			<Navbar />
      <ImagesSliderDemo />
      <FeaturesSectionDemo/>
			<AppleCardsCarouselDemo />
			<WobbleCardDemo />
		</div>
	);
} 