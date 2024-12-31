import ReactStars from "react-stars";
import { Link } from "react-router-dom";

const SingleProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden group hover:shadow-xl transform transition duration-300 hover:scale-105">
      <div className="flex flex-col sm:flex-row-reverse">
        {/* Image */}
        <div className="relative sm:w-1/3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 sm:h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Badge */}
          <span className="absolute top-2 right-2 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-lg">
            {product.category}
          </span>
        </div>

        {/* Product Info */}
        <div className="p-4 sm:w-2/3 space-y-3">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>

          {/* Brand */}
          <p className="text-sm text-gray-500">Brand: {product.brand}</p>

          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</p>
            <ReactStars
              count={5}
              value={product.rating}
              size={20}
              color2={"#ffd700"}
              edit={false}
            />
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description || "No description available."}
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-between mt-3">
            {/* <button
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200"
              onClick={() => alert(`Added ${product.name} to cart!`)}
            >
              Add to Cart
            </button> */}
            <Link
              to={`/product/${product._id}`}
              className="bg-gradient-to-r from-[#6495ED] to-[#4A90E2] hover:bg-gradient-to-r hover:from-[#7EC8F4] hover:to-[#6495ED] text-white py-2 px-4 rounded font-semibold mt-4 inline-block"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
