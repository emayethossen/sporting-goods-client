import MainLayout from "@/components/Layouts/MainLayout";
import About from "@/pages/About";
import AllProducts from "@/pages/AllProducts";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import ManageProducts from "@/pages/ManageProducts";
import SingleProduct from "@/pages/SingleProduct";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/product/:productId",
        element: <SingleProduct />,
      },
      {
        path: "/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
