import { Link } from "react-router-dom";
import { Product } from "../../Pages/Products/ProductList/ProductList";
import { PiDevicesDuotone } from "react-icons/pi";
interface ProductCardProps {
  product: Product;
}
interface ProductCardProps {
  product: Product;
  index: number;
}
const colorSchemes = [
  { textColor: "#a854f7", divBgColor: "#f3e7ff" },
  { textColor: "#f87315", divBgColor: "#ffedd5" },
  { textColor: "#0ba5e9", divBgColor: "#dff1fe" },
  { textColor: "#f8151e", divBgColor: "#ffdcdc" },
];
const ListCart: React.FC<ProductCardProps> = ({ product, index }) => {
  const colorScheme = colorSchemes[index % colorSchemes.length];
  return (
    <Link
      to={`/products/${product.id}`}
      className="w-full justify-between items-center min-h-40 rounded overflow-hidden mb-2 shadow-xl bg-white p-4 flex"
    >
      <div className="flex gap-5">
        <div
          className="p-3 rounded-xl"
          style={{ backgroundColor: colorScheme.divBgColor }}
        >
          <PiDevicesDuotone
            className="size-20"
            style={{ color: colorScheme.textColor }}
          />
        </div>
        <h2 className="font-bold text-xl mb-2 mt-3">{product.name}</h2>
      </div>
      {product.data && (
        <div className="text-gray-700">
          {Object.entries(product.data).map(([key, value]) => (
            <p key={key}>
              <span className="font-semibold">{key}:</span> {value}
            </p>
          ))}
        </div>
      )}
    </Link>
  );
};

export default ListCart;
