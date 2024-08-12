import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { clearCart, updateProductStock } from "../redux/features/cartSlice";
import { toast } from "react-toastify";
import Modal from "react-modal";

Modal.setAppElement('#root');

const Checkout = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userDetails.name || !userDetails.email || !userDetails.phone || !userDetails.address) {
      toast.error("Please fill out all required fields.");
      return;
    }

    // Update product stock
    cartItems.forEach((item) => {
      dispatch(updateProductStock({ productId: item._id, quantity: item.quantity }));
    });

    // Clear the cart
    dispatch(clearCart());

    // Show the modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalWithVat = totalPrice * 1.15;

  return (
    <div className="container lg:w-5/6 mx-auto mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
          <form onSubmit={handlePlaceOrder}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
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
                required
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
                required
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
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
            >
              Place Order
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Order</h2>
          <div>
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4 flex-grow">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">
              Total with VAT (15%): ${totalWithVat.toFixed(2)}
            </h2>
          </div>
        </div>
      </div>

      {/* Modal for order confirmation */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Order Confirmation"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 rounded-md shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Order Placed Successfully</h2>
          <p>Your order has been placed successfully. Thank you for shopping with us!</p>
          <button
            onClick={handleCloseModal}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          >
            OK
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Checkout;
