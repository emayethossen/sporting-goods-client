import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  selectCartItems,
} from "../redux/features/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => selectCartItems(state));

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateCartItemQuantity({ _id: id, quantity }));
    }
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total price including VAT (15%)
  const totalWithVat = totalPrice * 1.15;

  // Check if any item is out of stock
  const isCartEmpty = cartItems.length === 0;
  const hasOutOfStockItem = cartItems.some((item) => item.stockQuantity === 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {isCartEmpty ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Clear Cart
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cartItems.map((item) => (
              <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-lg font-bold mt-2">{item.name}</h2>
                <p className="text-gray-600">{item.category}</p>
                <p className="text-gray-600">Brand: {item.brand}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">In Stock: {item.stockQuantity}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() =>
                      handleQuantityChange(item._id, item.quantity - 1)
                    }
                    className={`bg-gray-300 text-black py-1 px-3 rounded-l ${
                      item.quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="w-12 text-center"
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(item._id, item.quantity + 1)
                    }
                    className={`bg-gray-300 text-black py-1 px-3 rounded-r ${
                      item.quantity === item.stockQuantity
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={item.quantity === item.stockQuantity}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded mt-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 mb-6">
            <p className="text-lg font-semibold mb-4">
              Total with VAT (15%): ${totalWithVat.toFixed(2)}
            </p>
            {!hasOutOfStockItem && (
              <Link
                to="/checkout"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Proceed to Checkout
              </Link>
            )}
            {hasOutOfStockItem && (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded opacity-50 cursor-not-allowed"
                disabled
              >
                Proceed to Checkout
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
