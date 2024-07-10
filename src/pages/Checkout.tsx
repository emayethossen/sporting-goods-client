import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { clearCart } from "../redux/features/cartSlice";

const CheckoutPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    alert("Order placed successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={userDetails.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Order</h2>
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4 flex-grow">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">
              Total: $
              {cart.reduce((sum, item) => sum + item.price * item.quantity, 0) *
                1.15}
            </h2>
            <button
              onClick={handlePlaceOrder}
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
