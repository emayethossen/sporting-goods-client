import { useState, useEffect } from "react";
import { useAddProductMutation, useUpdateProductMutation } from "../../redux/features/productsApi";
import { toast } from "react-toastify";

interface AddProductModalProps {
  productId?: string;
  initialName?: string;
  initialPrice?: number;
  initialDescription?: string;
  initialCategory?: string;
  initialStockQuantity?: number;
  initialBrand?: string;
  initialRating?: number;
  initialImage?: string;
  closeModal: () => void;
  onSuccess: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  productId,
  initialName = "",
  initialPrice = 0,
  initialDescription = "",
  initialCategory = "",
  initialStockQuantity = 0,
  initialBrand = "",
  initialRating = 0,
  initialImage = "",
  closeModal,
  onSuccess,
}) => {
  const [name, setName] = useState(initialName);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);
  const [category, setCategory] = useState(initialCategory);
  const [stockQuantity, setStockQuantity] = useState(initialStockQuantity);
  const [brand, setBrand] = useState(initialBrand);
  const [rating, setRating] = useState(initialRating);
  const [image, setImage] = useState(initialImage);

  const [addProduct, { isLoading: isCreating }] = useAddProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  useEffect(() => {
    setName(initialName);
    setPrice(initialPrice);
    setDescription(initialDescription);
    setCategory(initialCategory);
    setStockQuantity(initialStockQuantity);
    setBrand(initialBrand);
    setRating(initialRating);
    setImage(initialImage);
  }, [
    productId,
    initialName,
    initialPrice,
    initialDescription,
    initialCategory,
    initialStockQuantity,
    initialBrand,
    initialRating,
    initialImage,
  ]);

  const handleSave = async () => {
    try {
      const productData = {
        name,
        price,
        description,
        category,
        stockQuantity,
        brand,
        rating,
        image,
      };

      console.log("Product Data Sent:", productData);

      if (productId) {
        const response = await updateProduct({ _id: productId, ...productData }).unwrap();
        console.log("Update Response:", response);
        toast.success("Product updated successfully");
      } else {
        const response = await addProduct(productData).unwrap();
        console.log("Add Response:", response);
        toast.success("Product added successfully");
      }
      onSuccess();
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("Error saving product");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 md:mx-0">
        <h2 className="text-2xl font-bold mb-4">
          {productId ? "Edit Product" : "Add Product"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Stock Quantity</label>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(parseInt(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Rating</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(parseFloat(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
            disabled={isCreating || isUpdating}
          >
            {isCreating || isUpdating ? "Saving..." : "Save"}
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
            disabled={isCreating || isUpdating}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
