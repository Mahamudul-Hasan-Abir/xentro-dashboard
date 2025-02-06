import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../redux/api/productApi";
import { useAppSelector } from "../../../redux/hooks";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: apiProducts } = useGetProductsQuery();
  const localProducts = useAppSelector((state) => state.product.localProducts);

  const allProducts = [...(apiProducts || []), ...localProducts];
  const product = allProducts.find((p) => p.id === id);
  const [deleteProduct] = useDeleteProductMutation();
  if (!product) {
    return (
      <div className="text-center text-xl font-bold my-10">
        Product not found
      </div>
    );
  }

  const handleDelete = async () => {
    try {
      await deleteProduct(product.id).unwrap();
      navigate("/products");
      toast.success("Product deleted successfully!");
    } catch (error) {
      console.error("Failed to delete the product:", error);
    }
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#3b81f6] mb-4">
        {product.name}
      </h1>
      {product.data ? (
        <div className="bg-white shadow-lg p-6 rounded-lg flex md:justify-between justify-center items-center">
          <div>
            {Object.entries(product.data).map(([key, value]) => (
              <p key={key} className="text-lg my-2">
                <span className="font-semibold">{key}:</span> {value}
              </p>
            ))}
          </div>

          <div
            onClick={handleDelete}
            className="bg-red-200 p-5  size-20 flex justify-center rounded-2xl cursor-pointer"
          >
            <MdDelete className="size-10 text-red-500"></MdDelete>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          No additional details available
        </p>
      )}
    </div>
  );
};

export default ProductDetails;
