import { useProducts } from "../hooks/useProducts";
import Header from "../components/Header";

const Products = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  if (isError) {
    return <p className="text-center mt-10 text-red-500">Error loading products</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <Header />

      <div className="p-4 md:p-8">

        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {products?.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-5 shadow bg-white hover:shadow-lg transition"
            >

              <h2 className="text-lg font-semibold">
                {product.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {product.description}
              </p>

              <p className="text-blue-600 font-bold mt-3 text-lg">
                ₹{product.price}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Products;