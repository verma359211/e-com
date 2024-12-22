import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
// import { ThreeDCardDemo } from "@/components/ui/test";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/test";

export default function Home() {
  return (
		<div className="flex w-screen h-screen justify-center items-center">
			<Button>Press</Button>
			<ModeToggle />
			{/* <ThreeDCardDemo/> */}
			<ShootingStarsAndStarsBackgroundDemo />
		</div>
	);
} 