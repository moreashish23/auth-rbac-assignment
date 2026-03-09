export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface ProductRequest {
  name: string;
  price: number;
  description: string;
}