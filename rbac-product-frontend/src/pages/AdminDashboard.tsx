import { useProducts } from "../hooks/useProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct, deleteProduct, updateProduct } from "../api/productService";
import { useForm } from "react-hook-form";
import { useState } from "react";
import type { ProductRequest, Product } from "../types/productTypes";
import Header from "../components/Header";

const AdminDashboard = () => {
  const queryClient = useQueryClient();
  const { data: products } = useProducts();

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const { register, handleSubmit, reset } = useForm<ProductRequest>({
    defaultValues: {
      name: "",
      price: 0,
      description: "",
    },
  });

  const clearForm = () => {
    setEditingProduct(null);
    reset({
      name: "",
      price: 0,
      description: "",
    });
  };

  const createMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      clearForm();
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      clearForm();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const onSubmit = (data: ProductRequest) => {
    if (editingProduct !== null) {
      updateMutation.mutate({ id: editingProduct.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    reset({
      name: product.name,
      price: product.price,
      description: product.description,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <Header />

      <div className="p-4 md:p-8">

        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="border p-4 md:p-6 rounded shadow bg-white">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              {editingProduct ? "Update Product" : "Create Product"}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

              <input
                placeholder="Product Name"
                className="border p-2 w-full rounded"
                {...register("name", { required: true })}
              />

              <input
                type="number"
                placeholder="Price"
                className="border p-2 w-full rounded"
                {...register("price", { required: true })}
              />

              <textarea
                placeholder="Description"
                className="border p-2 w-full rounded"
                {...register("description", { required: true })}
              />

              <div className="flex flex-wrap gap-2 pt-2">

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  {editingProduct ? "Update Product" : "Add Product"}
                </button>

                {editingProduct && (
                  <button
                    type="button"
                    onClick={clearForm}
                    className="bg-gray-400 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                )}

              </div>

            </form>
          </div>

          <div className="border p-4 md:p-6 rounded shadow bg-white">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Product List
            </h2>

            <div className="space-y-4 md:hidden">
              {products?.map((product) => (
                <div
                  key={product.id}
                  className="border rounded p-4 shadow-sm bg-gray-50"
                >
                  <h3 className="font-semibold text-lg">{product.name}</h3>

                  <p className="text-gray-600 mt-1">
                    ₹{product.price}
                  </p>

                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded w-full"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteMutation.mutate(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded w-full"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border">

                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2 text-left">Name</th>
                    <th className="border p-2 text-left">Price</th>
                    <th className="border p-2 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {products?.map((product) => (
                    <tr key={product.id}>
                      <td className="border p-2">{product.name}</td>
                      <td className="border p-2">₹{product.price}</td>

                      <td className="border p-2">
                        <div className="flex gap-2">

                          <button
                            onClick={() => handleEdit(product)}
                            className="bg-yellow-500 text-white px-3 py-1 rounded"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => deleteMutation.mutate(product.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                          >
                            Delete
                          </button>

                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;