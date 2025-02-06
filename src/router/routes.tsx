import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUsers from "../Pages/Users/AllUsers/AllUsers";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import CreateProduct from "../Pages/Products/CreateProduct/CreateProduct";

import UserDetails from "../Pages/Users/UserDetails/UserDetails";
import ProductList from "../Pages/Products/ProductList/ProductList";
import ProductDetails from "../Pages/Products/ProductDetails/ProductDetails";
import ErrorPage from "../Pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "users/:id",
        element: <UserDetails></UserDetails>,
      },

      {
        path: "add-product",
        element: <CreateProduct></CreateProduct>,
      },
      {
        path: "products",
        element: <ProductList></ProductList>,
      },
      {
        path: "products/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "login",
    element: <Login></Login>,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default router;
