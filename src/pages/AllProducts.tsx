import React, { useState } from "react";
import { useGetProductsQuery } from "../redux/features/productsApi";
import ProductCard from "@/components/ProductCard/ProductCard";

const AllProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery({});
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const {data: products} = data;

  const filteredProducts = products
    .filter((product: { name: string; category: string; price: number; brand: string; rating: number; }) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category ? product.category === category : true) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (brand ? product.brand === brand : true) &&
        product.rating >= rating
      );
    })
    .sort((a: { price: number; }, b: { price: number; }) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  const clearFilters = () => {
    setSearchTerm("");
    setCategory("");
    setPriceRange([0, 1000]);
    setBrand("");
    setRating(0);
    setSortOrder("asc");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
        >
          <option value="">All Categories</option>
          <option value="football">Football</option>
          <option value="basketball">Basketball</option>
          <option value="tennis">Tennis</option>
          <option value="swimming">Swimming</option>
          <option value="Sports">Sports</option>
        </select>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
        >
          <option value="">All Brands</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Puma">Puma</option>
          <option value="Spalding">Spalding</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
          className="p-2 border rounded w-full md:w-1/4"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="p-2 border rounded w-full md:w-1/4"
        />
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="p-2 border rounded w-full md:w-1/4"
        >
          <option value={0}>All Ratings</option>
          <option value={1}>1 Star & Up</option>
          <option value={2}>2 Stars & Up</option>
          <option value={3}>3 Stars & Up</option>
          <option value={4}>4 Stars & Up</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
        <button
          onClick={clearFilters}
          className="p-2 bg-red-500 text-white rounded w-full md:w-1/4"
        >
          Clear Filters
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product: { _id: React.Key | null | undefined }) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
