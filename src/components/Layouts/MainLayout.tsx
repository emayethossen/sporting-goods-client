
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div className="">
      <ToastContainer />
      <Navbar />
      <Outlet ></Outlet>
      <Footer />
    </div>
  );
};
export default MainLayout;