import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
// Import PrivateRoute
import AllUsers from "../Pages/Users/AllUsers/AllUsers";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import CreateProduct from "../Pages/Products/CreateProduct/CreateProduct";
import UserDetails from "../Pages/Users/UserDetails/UserDetails";
import ProductList from "../Pages/Products/ProductList/ProductList";
import ProductDetails from "../Pages/Products/ProductDetails/ProductDetails";
import ErrorPage from "../Pages/Error/ErrorPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <PrivateRoute />, // Protect all routes inside
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "users", element: <AllUsers /> },
          { path: "users/:id", element: <UserDetails /> },
          { path: "add-product", element: <CreateProduct /> },
          { path: "products", element: <ProductList /> },
          { path: "products/:id", element: <ProductDetails /> },
        ],
      },
    ],
  },
]);

export default router;
