export interface SizeOption {
  sizeName: string;
  imageUrl?: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
  galleryUrls?: string[];
  description?: any[] | string;
  colors?: string[];
  sizes?: SizeOption[];
}
