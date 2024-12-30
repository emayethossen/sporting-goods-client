import MainLayout from "@/components/Layouts/MainLayout";
import About from "@/pages/About";
import AllProducts from "@/pages/AllProducts";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ManageProducts from "@/pages/admin/ManageProducts";
import Register from "@/pages/Register";
import SingleProduct from "@/pages/SingleProduct";
import { createBrowserRouter } from "react-router-dom";
import ManageBlog from "@/pages/admin/ManageBlog";
import AllBlogs from "@/components/Blogcard/AllBlog";
import BlogDetails from "@/components/Blogcard/SingleBlog";
import CreatePost from "@/pages/admin/CreateBlog";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import Dashboard from "@/pages/admin/Dashboard";
import Profile from "@/pages/admin/Profile";
import ManageUser from "@/pages/admin/ManageUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <AllBlogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children:[
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "blogs",
        element: <ManageBlog />,
      },
      {
        path: "products",
        element: <ManageProducts />,
      },
      {
        path: "users",
        element: <ManageUser />,
      },
      {
        path: "create-blog",
        element: <CreatePost />,
      },
    ]
  },
  
]);

export default router;
