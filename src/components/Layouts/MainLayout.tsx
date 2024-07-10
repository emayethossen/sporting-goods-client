
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet ></Outlet>
      <Footer />
    </div>
  );
};
export default MainLayout;