import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { usePostProductMutation } from "../../../redux/api/productApi";
import { addLocalProduct } from "../../../redux/features/productSlice";
import { toast } from "sonner";

const CreateProduct = () => {
  const dispatch = useAppDispatch();
  const [postProduct] = usePostProductMutation();
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    capacity: "",
    capacityGB: "",
    generation: "",
    year: "",
    cpuModel: "",
    hardDiskSize: "",
    strapColour: "",
    caseSize: "",
    screenSize: "",
    price: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredData = Object.fromEntries(
      Object.entries(formData).filter(([, value]) => value !== "")
    );
    if (!filteredData.name) {
      alert("Product name is required!");
      return;
    }
    try {
      const newProduct = {
        name: filteredData.name,
        data: {
          ...filteredData,
        },
      };

      const response = await postProduct(newProduct).unwrap();

      dispatch(addLocalProduct(response));
      console.log(response);
      toast.success("Product added successfully!");
      setFormData({
        name: "",
        color: "",
        capacity: "",
        capacityGB: "",
        generation: "",
        year: "",
        cpuModel: "",
        hardDiskSize: "",
        strapColour: "",
        caseSize: "",
        screenSize: "",
        price: "",
        description: "",
      });
    } catch (error) {
      console.error("Failed to post the product:", error);
    }
  };

  return (
    <div className="container flex justify-center max-w-[800px] mx-auto">
      <form
        className=" w-full m-3 p-10 border-[1px] border-[#e2e8f0] rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold">Create Product</h1>

        <div className="my-4">
          <p className="mb-2 font-semibold">Product Title</p>
          <input
            className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <p className="text-[#64748b] mt-1 text-sm">
            Do not exceed 20 characters when entering the product name.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
          <div>
            <p className="mb-2 font-semibold">Color</p>
            <input
              className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="mb-2 font-semibold">Capacity</p>
            <input
              className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
              type="text"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="mb-2 font-semibold">Capacity GB</p>
            <input
              className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
              type="text"
              name="capacityGB"
              value={formData.capacityGB}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <p className="mb-2 font-semibold">Generation</p>
            <input
              className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
              type="text"
              name="generation"
              value={formData.generation}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="mb-2 font-semibold">Year</p>
            <input
              className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="mb-2 font-semibold">Cpu Model</p>
            <input
              className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
              type="text"
              name="cpuModel"
              value={formData.cpuModel}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
          <div>
            <p className="mb-2 font-semibold">Hard Disk Size</p>
            <input
              className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
              type="text"
              name="hardDiskSize"
              value={formData.hardDiskSize}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="mb-2 font-semibold">Strap Colour</p>
            <input
              className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
              type="text"
              name="strapColour"
              value={formData.strapColour}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="mb-2 font-semibold">Case Size</p>
            <input
              className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
              type="text"
              name="caseSize"
              value={formData.caseSize}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <p className="mb-2 font-semibold">Screen Size</p>
            <input
              className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
              type="number"
              name="screenSize"
              value={formData.screenSize}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="mb-2 font-semibold">Price</p>
            <input
              className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="my-5">
          <p className="mb-2 font-semibold">Description</p>
          <div className="w-full">
            <textarea
              className="w-full h-40 p-3 border-[1px] border-[#e2e8f0] rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              placeholder="Type your message here..."
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#3b81f6] px-5 py-2 my-5 text-white rounded-md w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
