import type { Product, Category } from "./types";

export const categories: Category[] = [
	{
		id: "women",
		name: "Women",
		slug: "women",
		subcategories: ["tops", "bottoms", "dresses", "outerwear", "accessories"],
	},
	{
		id: "men",
		name: "Men",
		slug: "men",
		subcategories: ["tops", "bottoms", "outerwear", "accessories"],
	},
	{
		id: "tops",
		name: "Tops & Sweaters",
		slug: "tops-sweaters",
		parent: "clothing",
	},
	{
		id: "bottoms",
		name: "Pants & Jeans",
		slug: "pants-jeans",
		parent: "clothing",
	},
	{
		id: "outerwear",
		name: "Outerwear",
		slug: "outerwear",
		parent: "clothing",
	},
	{
		id: "shoes",
		name: "Shoes & Bags",
		slug: "shoes-bags",
		parent: "accessories",
	},
];

export const products: Product[] = [
	{
		id: "rewool-oversized-shirt-jacket",
		name: "The ReWool® Oversized Shirt Jacket",
		price: 167,
		originalPrice: 238,
		description:
			"Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it's made with a GRS-certified recycled Italian wool blend. Thick, cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions.",
		images: [
			"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop",
		],
		category: "men",
		subcategory: "outerwear",
		colors: [
			{ name: "Black", hex: "#000000" },
			{ name: "Olive", hex: "#556B2F" },
		],
		sizes: ["XS", "S", "M", "L", "XL", "XXL"],
		details: [
			"Made with 70% recycled wool, 25% polyamide, 5% other fibers",
			"Fully lined sleeves for added warmth",
			"Two front chest flap pockets and on-seam pockets",
			"Button closure",
			"Dry clean only",
		],
		sustainability: [
			"Made with GRS-certified recycled Italian wool blend",
			"Produced in a factory that meets our standards for ethical manufacturing",
		],
	},
	{
		id: "organic-cotton-turtleneck",
		name: "The Organic Cotton Long-Sleeve Turtleneck",
		price: 35,
		originalPrice: 50,
		description:
			"A classic turtleneck made from 100% organic cotton. Perfect for layering or wearing on its own.",
		images: [
			"https://images.unsplash.com/photo-1608228088998-57828365d486?q=80&w=1974&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
		],
		category: "men",
		subcategory: "tops",
		colors: [
			{ name: "Black", hex: "#000000" },
			{ name: "Navy", hex: "#000080" },
			{ name: "White", hex: "#FFFFFF" },
		],
		sizes: ["XS", "S", "M", "L", "XL"],
		details: [
			"Made with 100% organic cotton",
			"Classic turtleneck design",
			"Ribbed collar, cuffs, and hem",
			"Machine wash cold, tumble dry low",
		],
		sustainability: [
			"Made with GOTS-certified organic cotton",
			"Produced in a factory that meets our standards for ethical manufacturing",
		],
	},
	{
		id: "wool-flannel-pant",
		name: "The Wool Flannel Pant",
		price: 97,
		originalPrice: 138,
		description:
			"A tailored pant made from premium wool flannel. Features a comfortable elastic waistband and a relaxed fit.",
		images: [
			"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop",
		],
		category: "men",
		subcategory: "bottoms",
		colors: [
			{ name: "Heather Charcoal", hex: "#36454F" },
			{ name: "Navy", hex: "#000080" },
		],
		sizes: ["28", "30", "32", "34", "36", "38", "40"],
		details: [
			"Made with 100% premium wool flannel",
			"Elastic waistband with drawstring",
			"Side pockets and back welt pocket",
			"Relaxed fit",
			"Dry clean only",
		],
		sustainability: [
			"Made with RWS-certified wool",
			"Produced in a factory that meets our standards for ethical manufacturing",
		],
	},
	{
		id: "cloud-cardigan",
		name: "The Cloud Relaxed Cardigan",
		price: 132,
		originalPrice: 188,
		description:
			"A cozy, oversized cardigan made from a soft wool blend. Perfect for lounging or layering.",
		images: [
			"https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1608228088998-57828365d486?q=80&w=1974&auto=format&fit=crop",
		],
		category: "men",
		subcategory: "tops",
		colors: [
			{ name: "Black", hex: "#000000" },
			{ name: "Oatmeal", hex: "#E8E4D7" },
			{ name: "Brown", hex: "#964B00" },
		],
		sizes: ["XS", "S", "M", "L", "XL", "XXL"],
		details: [
			"Made with 60% wool, 30% nylon, 10% alpaca",
			"Button closure",
			"Ribbed cuffs and hem",
			"Patch pockets",
			"Hand wash cold, lay flat to dry",
		],
		sustainability: [
			"Made with RWS-certified wool",
			"Produced in a factory that meets our standards for ethical manufacturing",
		],
	},
	{
		id: "waffle-crew",
		name: "The Waffle Long-Sleeve Crew",
		price: 60,
		originalPrice: 80,
		description:
			"A textured waffle knit crew neck made from soft, breathable cotton. Perfect for everyday wear.",
		images: [
			"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1608228088998-57828365d486?q=80&w=1974&auto=format&fit=crop",
		],
		category: "men",
		subcategory: "tops",
		colors: [
			{ name: "Bone", hex: "#E3DAC9" },
			{ name: "Black", hex: "#000000" },
			{ name: "Navy", hex: "#000080" },
			{ name: "Olive", hex: "#556B2F" },
		],
		sizes: ["XS", "S", "M", "L", "XL", "XXL"],
		details: [
			"Made with 100% cotton waffle knit",
			"Crew neck design",
			"Ribbed collar, cuffs, and hem",
			"Machine wash cold, tumble dry low",
		],
		sustainability: [
			"Made with GOTS-certified organic cotton",
			"Produced in a factory that meets our standards for ethical manufacturing",
		],
	},
];
