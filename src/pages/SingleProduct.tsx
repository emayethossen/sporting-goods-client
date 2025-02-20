import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetSingleProductQuery } from "../redux/features/productsApi";
import { addToCart } from "../redux/features/cartSlice";
import ReactStars from "react-stars";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data: product, error, isLoading } = useGetSingleProductQuery(productId);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("Product:", product);
    console.log("Error:", error);
  }, [product, error]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-emerald-300 h-32 w-32"></div>
      </div>
    );
  }

  if (error || !product || !product.data) {
    return <div className="text-center text-red-500 text-xl mt-10">Product not found</div>;
  }

  const {
    _id,
    name,
    category,
    brand,
    rating,
    stockQuantity,
    description,
    price,
    image,
  } = product.data;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id,
        name,
        category,
        brand,
        rating,
        price,
        image,
        quantity,
        description,
        stockQuantity,
      })
    );
    toast.success(`${name} added to cart successfully!`);
  };

  const incrementQuantity = () => {
    if (quantity < stockQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container lg:w-5/6 mx-auto p-4 min-h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6">
        <img
          src={image || ""}
          alt={name || ""}
          className="w-64 md:w-1/2 h-64 object-cover rounded-md transform transition duration-500 hover:scale-105"
        />
        <div className="md:ml-4 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600 mt-2">{description}</p>
          <p className="text-gray-800 font-bold mt-2">Price: ${price}</p>
          <p className="text-gray-600"><span>Category:</span>{category}</p>
          <p className="text-gray-600">Brand: {brand}</p>
          <p className="text-gray-600">In Stock: {stockQuantity}</p>
          <ReactStars
            count={5}
            value={rating}
            size={24}
            color2={"#ffd700"}
            edit={false}
          />

          <div className="flex items-center mt-4 space-x-4">
            <p>Quantity: </p>
            <button
              onClick={decrementQuantity}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
              disabled={quantity === 1}
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
              disabled={quantity === stockQuantity}
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className={`bg-blue-500 text-white py-2 px-4 rounded mt-4 transform transition duration-500 hover:bg-blue-600 hover:scale-105 ${
              stockQuantity === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={stockQuantity === 0}
          >
            {stockQuantity === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
