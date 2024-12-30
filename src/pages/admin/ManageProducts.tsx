import { useState } from 'react';
import { useGetProductsQuery, useDeleteProductMutation } from '../../redux/features/productsApi';
import { toast } from 'react-toastify';
import AddProductModal from '../../components/Modal/AddProductModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Product {
  _id?: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stockQuantity: number;
  brand: string;
  rating: number;
  image: string;
}

const ManageProduct = () => {
  const { data, isLoading, error, refetch } = useGetProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProductId, setEditProductId] = useState<string | null>(null);
  const [productDetails, setProductDetails] = useState<Partial<Product>>({
    name: '',
    price: 0,
    description: '',
    category: '',
    stockQuantity: 0,
    brand: '',
    rating: 0,
    image: '',
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  const handleDelete = async () => {
    if (productToDelete) {
      try {
        await deleteProduct(productToDelete).unwrap();
        toast.success('Product deleted successfully');
        setShowDeleteConfirm(false);
        refetch();
      } catch (error) {
        toast.error('Error deleting product');
      }
    }
  };

  const handleEdit = (product: Product) => {
    setEditProductId(product._id || null);
    setProductDetails({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      stockQuantity: product.stockQuantity,
      brand: product.brand,
      rating: product.rating,
      image: product.image,
    });
    setShowEditModal(true);
  };

  const handleAddOrUpdateSuccess = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    refetch();
  };

  if (isLoading) return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
  if (error) return <div>Error loading products</div>;

  const products = data?.data || [];

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-6">Manage Products</h2>
      <div className='flex justify-end mb-4'>
      <button
        className="py-3 px-6 bg-gradient-to-r from-[#F95C6B] to-[#E51284] text-white rounded-md font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
        onClick={() => setShowAddModal(true)}
      >
        Add Product
      </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product: Product) => (
              <tr key={product._id}>
                <td className="px-6 py-4 hidden sm:table-cell">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4 hidden md:table-cell">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-center flex justify-center items-center gap-4">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
                    onClick={() => handleEdit(product)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center"
                    onClick={() => {
                      setProductToDelete(product._id || null); 
                      setShowDeleteConfirm(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <AddProductModal
          closeModal={() => setShowAddModal(false)}
          onSuccess={handleAddOrUpdateSuccess}
        />
      )}

      {showEditModal && (
        <AddProductModal
          productId={editProductId || undefined}
          initialName={productDetails.name || ''}
          initialPrice={productDetails.price || 0}
          initialDescription={productDetails.description || ''}
          initialCategory={productDetails.category || ''}
          initialStockQuantity={productDetails.stockQuantity || 0}
          initialBrand={productDetails.brand || ''}
          initialRating={productDetails.rating || 0}
          initialImage={productDetails.image || ''}
          closeModal={() => setShowEditModal(false)}
          onSuccess={handleAddOrUpdateSuccess}
        />
      )}

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete this product?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProduct;
