export interface Product {
  _id: string;
  name: string;
  slug?: string ;
  category: string;
  price: number;
  rating: number;
  imageUrl: any;
  description?: string;
}
