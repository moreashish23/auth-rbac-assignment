import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productService";
import type { Product } from "../types/productTypes";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};