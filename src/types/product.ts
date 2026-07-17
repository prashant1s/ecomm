export interface SizeOption {
  sizeName: string;
  imageUrl?: string;
  dimension?: string;
}
export interface ColorOption {
  colorName: string;
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
  sizes?: SizeOption[];
  sku?: string;   
  colors?: ColorOption[];
}
