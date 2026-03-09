import api from "./axios";
import type { Product, ProductRequest } from "../types/productTypes";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get("/products");
  return response.data;
};

export const createProduct = async (data: ProductRequest) => {
  const response = await api.post("/products", data);
  return response.data;
};

export const updateProduct = async ({
  id,
  data,
}: {
  id: number;
  data: ProductRequest;
}) => {
  const response = await api.put(`/products/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id: number) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};