export interface Product {
  _id: string;
  name: string;
  slug?: { current: string };
  category: string;
  price: number;
  rating: number;
  imageUrl: any;
  description?: string;
}
