import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart } from "../redux/features/cartSlice";
import ReactStars from "react-stars";

const SingleProduct = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) =>
    state.product.products.find((p) => p._id === productId)
  );
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover rounded-md"
        />
        <div className="md:ml-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
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
          <button
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
            className={`bg-blue-500 text-white py-2 px-4 rounded mt-4 ${
              product.stockQuantity === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={product.stockQuantity === 0}
          >
            {product.stockQuantity === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
