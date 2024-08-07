import { useState } from "react";
import { useGetProductsQuery } from "../redux/features/productsApi";
import ProductCard from "@/components/ProductCard/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const AllProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery({});
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const products = data?.data || [];

  // Apply filters and sorting
  const filteredProducts = products
    .filter((product: any) => {
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category ? product.category === category : true;
      const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesBrand = brand ? product.brand === brand : true;
      const matchesRating = product.rating >= rating;

      return matchesSearchTerm && matchesCategory && matchesPriceRange && matchesBrand && matchesRating;
    })
    .sort((a: any, b: any) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const clearFilters = () => {
    setSearchTerm("");
    setCategory("");
    setPriceRange([0, 1000]);
    setBrand("");
    setRating(0);
    setSortOrder("asc");
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

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
          <option value="sports">Sports</option>
          <option value="fitness">Fitness</option>
          <option value="cycling">Cycling</option>
          <option value="gymnastics">Gymnastics</option>
          <option value="others">Others</option>
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
          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          className="p-2 border rounded w-full md:w-1/4"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
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
        {currentItems.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="mt-4">
        <nav className="flex justify-center">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => paginate(currentPage - 1)}
                  />
                </PaginationItem>
              )}
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href="#"
                    onClick={() => paginate(pageNumber)}
                    isActive={pageNumber === currentPage}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => paginate(currentPage + 1)}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </nav>
      </div>
    </div>
  );
};

export default AllProducts;
