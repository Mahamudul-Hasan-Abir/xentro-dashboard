import { useEffect, useState } from "react";
import ListCart from "../../../components/ListCart/ListCart";
import { useGetProductsQuery } from "../../../redux/api/productApi";
import { useAppSelector } from "../../../redux/hooks";
import Spinner from "../../../components/Spinner/Spinner";

export interface ProductData {
  color?: string;
  capacity?: string;
  "capacity GB"?: number;
  price?: number;
  generation?: string;
  year?: number;
  "CPU model"?: string;
  "Hard disk size"?: string;
  "Strap Colour"?: string;
  "Case Size"?: string;
  Description?: string;
  "Screen size"?: number;
  Generation?: string;
  Price?: string;
  Capacity?: string;
}

export interface Product {
  id: string;
  name: string;
  data: ProductData | null;
}

const ProductList = () => {
  const {
    data: apiProducts,
    error,
    isFetching,
    isLoading,
  } = useGetProductsQuery();
  const localProducts = useAppSelector((state) => state.product.localProducts);
  const [filterData, setFilterData] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Move `products` inside useEffect
    const products = [...(apiProducts || []), ...localProducts];

    if (products) {
      const newFilterData = products.filter((product: Product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterData(newFilterData);
    }
  }, [apiProducts, localProducts, searchTerm]); // Add dependencies here
  if (error) {
    console.error("Error fetching users:", error);
    return <p className="text-red-500">Failed to load users.</p>;
  }

  if (isLoading || isFetching) {
    return <Spinner />;
  }
  return (
    <div className="container max-w-[800px] mx-auto">
      <h1 className="text-3xl font-semibold text-center my-6 text-[#3b81f6]">
        All Products
      </h1>
      <p className="hidden md:block text-sm w-[50%] mx-auto text-[#64748b]">
        This product list includes various electronic devices such as
        smartphones, laptops, headphones, and smartwatches from brands like
        Apple, Samsung, Google.
      </p>
      <div className="mt-5">
        <p className="mb-2 font-semibold">Search Product By Name:</p>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-10 rounded-lg p-5 border-[#e2e8f0] border-[1px]"
          type="text"
          placeholder="Enter product name..."
        />
      </div>
      <div className="flex flex-wrap justify-center py-4">
        {filterData.length > 0 ? (
          filterData.map((product, index) => (
            <ListCart key={product.id} product={product} index={index} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-5">
            No products found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
