import React, { useState } from "react";
import { Product } from "../ProductData/Product";

interface ProductFormProps {
  onSubmit: (data: Partial<Product>) => void;
  initialData?: Partial<Product>;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || "");
  const [category, setCategory] = useState(initialData.category || "");
  const [brand, setBrand] = useState(initialData.brand || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [price, setPrice] = useState(initialData.price || 0);
  const [stockQuantity, setStockQuantity] = useState(initialData.stockQuantity || 0);
  const [rating, setRating] = useState(initialData.rating || 0);
  const [image, setImage] = useState(initialData.image || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      category,
      brand,
      description,
      price: Number(price),
      stockQuantity: Number(stockQuantity),
      rating: Number(rating),
      image,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Stock Quantity"
        value={stockQuantity}
        onChange={(e) => setStockQuantity(Number(e.target.value))}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
