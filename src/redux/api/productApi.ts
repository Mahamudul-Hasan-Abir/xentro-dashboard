import { Product } from "../../Pages/Products/ProductList/ProductList";
import { removeLocalProduct } from "../features/productSlice";
import { baseApi } from "./api";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/objects",
      providesTags: ["Product"],
    }),
    postProduct: builder.mutation<Product, Omit<Product, "id">>({
      query: (newProduct) => ({
        url: "/objects",
        method: "POST",
        body: newProduct,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      /* extra */
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(productApi.util.invalidateTags(["Product"]));
        } catch (error) {
          console.error("Error re-fetching products:", error);
        }
      },

      invalidatesTags: ["Product"],
    }),
    productDetails: builder.query({ query: (id: string) => `objects/${id}` }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/objects/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        console.log(`Deleting product with ID: ${id}`);
        try {
          await queryFulfilled;
          dispatch(productApi.util.invalidateTags(["Product"]));
          dispatch(removeLocalProduct(id));
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      },
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  usePostProductMutation,
  useProductDetailsQuery,
  useDeleteProductMutation,
} = productApi;
