import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../Pages/Products/ProductList/ProductList";

interface ProductState {
  localProducts: Product[];
}

// const initialState: ProductState = {
//   localProducts: [],
// };
/* Extra */
const initialState: ProductState = {
  localProducts: JSON.parse(localStorage.getItem("localProducts") || "[]"),
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addLocalProduct: (state, action: PayloadAction<Product>) => {
      state.localProducts.push(action.payload);
      localStorage.setItem(
        "localProducts",
        JSON.stringify(state.localProducts)
      );
    },
    removeLocalProduct: (state, action: PayloadAction<string>) => {
      state.localProducts = state.localProducts.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem(
        "localProducts",
        JSON.stringify(state.localProducts)
      );
    },
  },
});

export const { addLocalProduct, removeLocalProduct } = productSlice.actions;
export default productSlice.reducer;
