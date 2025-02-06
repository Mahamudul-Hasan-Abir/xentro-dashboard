import ListCart from "../../../components/ListCart/ListCart";
import { useGetProductsQuery } from "../../../redux/api/productApi";
import { useAppSelector } from "../../../redux/hooks";
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
  const { data: apiProducts } = useGetProductsQuery();
  const localProducts = useAppSelector((state) => state.product.localProducts);
  const products = [...(apiProducts || []), ...localProducts];
  console.log(products);
  return (
    <div className="container">
      <h1 className="text-3xl font-semibold text-center my-6 text-[#3b81f6]">
        All Products
      </h1>
      <p className="hidden md:block text-sm w-[50%] mx-auto text-[#64748b]">
        This product list includes various electronic devices such as
        smartphones, laptops, headphones, and smartwatches from brands like
        Apple, Samsung, Google, and Beats. Each product has specific details
        like color, storage capacity, price, and technical specifications.
      </p>
      <div className="flex flex-wrap justify-center p-4">
        {products?.map((product, index) => (
          <ListCart key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
