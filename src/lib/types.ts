export type Product = {
	id: string;
	name: string;
	price: number;
	originalPrice?: number;
	description: string;
	images: string[];
	category: string;
	subcategory: string;
	colors: {
		name: string;
		hex: string;
	}[];
	sizes: string[];
	details: string[];
	sustainability: string[];
};

export type Category = {
	id: string;
	name: string;
	slug: string;
	parent?: string;
	subcategories?: string[];
};


// types/index.ts
// export interface Product {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
// }

// export interface Category {
//   name: string;
//   image: string;
//   href: string;
// }

export interface FeaturedSection {
  title: string;
  image: string;
  buttonText: string;
  href: string;
}

export interface SocialPost {
  id: number;
  image: string;
  username: string;
}

export interface Testimonial {
  id: number;
  rating: number;
  review: string;
  author: string;
  image: string;
}