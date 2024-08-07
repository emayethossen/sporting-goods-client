
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/features/productsApi";
import ReactStars from "react-stars";
import { Product } from "../ProductData/Product";

const FeaturedProducts: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery({});
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const products = data?.data || [];

  const handleViewDetails = (id: string) => {
    navigate(`/product/${id}`);
  };

  const handleShowAll = () => {
    navigate("/all-products");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.slice(0, 6).map((product: Product) => (
          <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-gray-600">Brand: {product.brand}</p>
              <ReactStars
                count={5}
                value={product.rating}
                size={24}
                color2={"#ffd700"}
                edit={false}
              />
              <p className="mt-2">{product.description}</p>
              <p className="mt-2 font-bold text-lg">${product.price}</p>
              <button
                onClick={() => handleViewDetails(product._id)}
                className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleShowAll}
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
