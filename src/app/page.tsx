import { ImagesSliderDemo } from "@/components/hero";
import { WobbleCardDemo } from "@/components/productCategories";
import { AppleCardsCarouselDemo } from "@/components/carousel";
// import { FeaturesSectionDemo } from "@/components/feature";
import { CartProvider } from "@/context/CartContext";
export default function Home() {
  return (
		<div className="">
			<CartProvider>
				<ImagesSliderDemo />
				{/* <FeaturesSectionDemo /> */}
				<AppleCardsCarouselDemo />
				<WobbleCardDemo />
			</CartProvider>
		</div>
	);
} 