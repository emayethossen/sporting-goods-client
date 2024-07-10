import ReactStars from "react-stars";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-gray-600">Brand: {product.brand}</p>
      <p className="text-gray-600">In Stock: {product.stockQuantity}</p>
      <ReactStars
        count={5}
        value={product.rating}
        size={24}
        color2={"#ffd700"}
        edit={false}
      />
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-gray-800 font-bold mt-2">${product.price}</p>
      <Link
        to={`/product/${product._id}`}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
