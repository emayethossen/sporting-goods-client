import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  Product,
} from "../redux/features/productsApi";

const ManageProducts = () => {
  const { data: products = [], error, isLoading } = useGetProductsQuery({});
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const { register, handleSubmit, reset, setValue } =
    useForm<Partial<Product>>();

  const onSubmit = async (data: Partial<Product>) => {
    try {
      if (editingProduct) {
        await updateProduct({ _id: editingProduct._id, ...data }).unwrap();
        toast.success("Product updated successfully");
      } else {
        await addProduct(data).unwrap();
        toast.success("Product added successfully");
      }
      reset();
      setEditingProduct(null);
    } catch (error: any) {
      console.error("Error saving product:", error);
      toast.error(
        `Error saving product: ${error.data?.message || error.message}`
      );
    }
  };

  const onEdit = (product: Product) => {
    setEditingProduct(product);
    setValue("name", product.name);
    setValue("category", product.category);
    setValue("stockQuantity", product.stockQuantity);
    setValue("brand", product.brand);
    setValue("rating", product.rating);
    setValue("description", product.description);
    setValue("price", product.price);
    setValue("image", product.image);
  };

  const onDelete = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      toast.success("Product deleted successfully");
    } catch (error: any) {
      console.error("Error deleting product:", error);
      toast.error(
        `Error deleting product: ${error.data?.message || error.message}`
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register("name")}
            placeholder="Product Name"
            className="p-2 border rounded"
          />
          <input
            {...register("category")}
            placeholder="Category"
            className="p-2 border rounded"
          />
          <input
            {...register("stockQuantity")}
            type="number"
            placeholder="Stock Quantity"
            className="p-2 border rounded"
          />
          <input
            {...register("brand")}
            placeholder="Brand"
            className="p-2 border rounded"
          />
          <input
            {...register("rating")}
            type="number"
            step="0.1"
            placeholder="Rating"
            className="p-2 border rounded"
          />
          <input
            {...register("description")}
            placeholder="Description"
            className="p-2 border rounded"
          />
          <input
            {...register("price")}
            type="number"
            step="0.01"
            placeholder="Price"
            className="p-2 border rounded"
          />
          <input
            {...register("image")}
            placeholder="Image URL"
            className="p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
        {editingProduct && (
          <button
            type="button"
            onClick={() => {
              reset();
              setEditingProduct(null);
            }}
            className="mt-4 bg-gray-500 text-white py-2 px-4 rounded ml-4"
          >
            Cancel
          </button>
        )}
      </form>

      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading products</p>
        ) : (
          Array.isArray(products) && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="p-4 border rounded shadow flex flex-col"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-full object-cover rounded mb-2"
                  />
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p>{product.category}</p>
                  <p>Brand: {product.brand}</p>
                  <p>In Stock: {product.stockQuantity}</p>
                  <p>Rating: {product.rating}</p>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="font-bold">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => onEdit(product)}
                    className="mt-2 bg-yellow-500 text-white py-1 px-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(product._id)}
                    className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default ManageProducts;
