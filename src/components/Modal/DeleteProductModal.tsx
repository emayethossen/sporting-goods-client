import React from "react";
import { useDeleteProductMutation } from "../../redux/features/productsApi";
import { toast } from "react-toastify";

const DeleteProductModal = () => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async () => {
    try {
      await deleteProduct();
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Error deleting product");
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto hidden">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Delete Product</h2>
            <p>Are you sure you want to delete this product?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={() => {}}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
