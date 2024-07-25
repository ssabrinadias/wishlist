export interface ProductDetails {
  name: string;
  description: string;
}

export interface Product {
  code: string;
  name: string;
  available: boolean;
  visible: boolean;
  details: ProductDetails;
  fullPriceInCents: string;
  salePriceInCents: string;
  rating: number;
  image: string;
  stockAvailable: boolean;
}

export interface Response {
  total: number;
  pageSize: number;
  totalPages: number;
  products: Product[];
}
