
import { useUpdateProductMutation } from '../../redux/features/productsApi';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const EditProductModal = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [updateProduct] = useUpdateProductMutation();

  const onSubmit = async (data) => {
    try {
      await updateProduct(data);
      toast.success('Product updated successfully');
    } catch (error) {
      toast.error('Error updating product');
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto hidden">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            <input type="text" name="name" placeholder="Name" ref={register} className="p-2 border rounded mb-2 w-full" />
            <input type="number" name="price" placeholder="Price" ref={register} className="p-2 border rounded mb-2 w-full" />
            <textarea name="description" placeholder="Description" ref={register} className="p-2 border rounded mb-2 w-full"></textarea>
            <input type="url" name="image" placeholder="Image URL" ref={register} className="p-2 border rounded mb-2 w-full" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
