export interface SizeOption {
  sizeName: string;
  imageUrl?: string;
  dimension?: string; // 👇 Added this
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
  sku?: string;   
}
