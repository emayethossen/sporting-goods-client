import { useGetProductsQuery } from "../../redux/features/productsApi";
import { Product } from "../ProductData/Product";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery({});

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
  if (error) return <div>Error loading products</div>;

  const products = data?.data || [];

  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold mb-3 text-center">Featured Products</h2>
      <p className="text-center mb-8">"Discover our exclusive collection of featured products, handpicked for their exceptional quality and unbeatable value. Elevate your shopping experience with the latest trends and must-have items, all in one place."</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.slice(0, 6).map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
