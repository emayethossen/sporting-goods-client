import ReactStars from "react-stars";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-white shadow-md rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-t-lg rounded-b-none"
      />
      <div className="p-4">
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-gray-600">Brand: {product.brand}</p>
      <div className="flex justify-between">
        <p className="text-gray-800 font-bold mt-2">${product.price}</p>
        <div className="flex gap-2 items-center">
          <ReactStars
            count={5}
            value={product.rating}
            size={24}
            color2={"#ffd700"}
            edit={false}
          />
          <p>(98 reviews)</p>
        </div>

      </div>
      <Link
        to={`/product/${product._id}`}
        className="bg-gradient-to-r from-[#6495ED] to-[#4A90E2] hover:bg-gradient-to-r hover:from-[#7EC8F4] hover:to-[#6495ED] text-white py-2 px-4 rounded mt-4 inline-block"
      >
        View Details
      </Link>
      </div>
    </div>
  );
};

export default ProductCard;
