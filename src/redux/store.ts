import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import { usersApi } from "./api/userApi";
import productReducer from "../redux/features/productSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../redux/features/authSlice";
export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    product: productReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
