import { Navbar } from "@/components/navbar";
import { ImagesSliderDemo } from "@/components/hero";
import { WobbleCardDemo } from "@/components/productCategories";
import { AppleCardsCarouselDemo } from "@/components/carousel";
import { FeaturesSectionDemo } from "@/components/feature";
import Footer from "@/components/footer";
export default function Home() {
  return (
	  <div className="">
		  <Navbar cart={[]} />
		  <ImagesSliderDemo />
		  <FeaturesSectionDemo />
		  <AppleCardsCarouselDemo />
		  <WobbleCardDemo />
		  <Footer/>
		</div>
	);
} 