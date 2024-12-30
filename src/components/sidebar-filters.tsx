import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function SidebarFilters() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="price">
				<AccordionTrigger>Price Range</AccordionTrigger>
				<AccordionContent>
					<div className="px-1">
						<Slider
							defaultValue={[0, 1000]}
							max={1000}
							step={50}
							className="my-4"
						/>
						<div className="flex justify-between text-sm text-gray-500">
							<span>₹0</span>
							<span>₹1000</span>
						</div>
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="size">
				<AccordionTrigger>Size</AccordionTrigger>
				<AccordionContent>
					<div className="space-y-2">
						{["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
							<div key={size} className="flex items-center space-x-2">
								<Checkbox id={`size-${size}`} />
								<Label htmlFor={`size-${size}`}>{size}</Label>
							</div>
						))}
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="color">
				<AccordionTrigger>Color</AccordionTrigger>
				<AccordionContent>
					<div className="space-y-2">
						{[
							"White",
							"Black",
							"Gray",
							"Red",
							"Blue",
							"Green",
							"Yellow",
							"Purple",
							"Pink",
						].map((color) => (
							<div key={color} className="flex items-center space-x-2">
								<Checkbox id={`color-${color}`} />
								<Label htmlFor={`color-${color}`}>{color}</Label>
							</div>
						))}
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="style">
				<AccordionTrigger>Style</AccordionTrigger>
				<AccordionContent>
					<div className="space-y-2">
						{[
							"Crew Neck",
							"V-Neck",
							"Henley",
							"Polo",
							"Graphic",
							"Long Sleeve",
						].map((style) => (
							<div key={style} className="flex items-center space-x-2">
								<Checkbox id={`style-${style}`} />
								<Label htmlFor={`style-${style}`}>{style}</Label>
							</div>
						))}
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
