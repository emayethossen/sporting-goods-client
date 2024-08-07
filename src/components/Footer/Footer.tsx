import { Link } from "react-router-dom";
import logo from "../../assets/social-icon/facebook.png";
import logo2 from "../../assets/social-icon/twitter.png";
import logo3 from "../../assets/social-icon/linkedin.png";
import webLogo from '../../assets/social-icon/nav-logo.png'

const Footer = () => {
  return (
    <div className="bg-gray-800 pt-6">
      <div className="flex justify-center">
        <img src={webLogo} alt="" className="w-[200px] h-[120px]" />
      </div>
      <footer className="grid lg:grid-cols-4 gap-12 md:grid-cols-2 w-3/4 p-10 mx-auto text-white">
        <div className="text-center lg:text-left space-y-4">
          <h2 className="footer-title font-bold text-2xl">Our Social Links</h2>
          <div className="space-y-6">
            <Link
              to="https://www.facebook.com/emayethossen4/"
              className="flex items-center justify-center"
            >
              <img className="w-8 h-8" src={logo} alt="" />
              <p className="ml-3">Facebook</p>
            </Link>
            <Link
              to="https://twitter.com/emayethossen"
              className="flex items-center justify-center"
            >
              <img className="w-8 h-8" src={logo2} alt="" />
              <p className="ml-3">Twitter</p>
            </Link>
            <Link
              to="https://www.linkedin.com/in/emayethossen"
              className="flex items-center justify-center"
            >
              <img className="w-8 h-8" src={logo3} alt="" />
              <p className="ml-3">LinkedIn</p>
            </Link>
          </div>
        </div>
        <div className="text-center lg:text-left space-y-4 hidden lg:flex flex-col">
          <h2 className="footer-title font-bold text-2xl">Company</h2>
          <Link to="/" className="link link-hover block">
            About Us
          </Link>
          <Link to="/" className="link link-hover block">
            Work
          </Link>
          <Link to="/" className="link link-hover block">
            Latest News
          </Link>
          <Link to="/" className="link link-hover block">
            Contact Us
          </Link>
        </div>
        <div className="text-center lg:text-left space-y-4 hidden lg:flex flex-col">
          <h2 className="footer-title font-bold text-2xl">Product</h2>
          <Link to="/" className="link link-hover block">
            Kids Toy
          </Link>
          <Link to="/" className="link link-hover block">
            Animals Toy
          </Link>
          <Link to="/" className="link link-hover block">
            Sports Toy
          </Link>
          <Link to="/" className="link link-hover block">
            Dolls
          </Link>
        </div>
        <div className="text-center lg:text-left space-y-4">
          <h2 className="footer-title font-bold text-2xl">Contact</h2>
          <Link to="/" className="link link-hover block">
            Chattogram, Bangladesh
          </Link>
          <Link to="/" className="link link-hover block">
            +8801881870749
          </Link>
          <Link to="/" className="link link-hover block">
            emayethossen786@gmail.com
          </Link>
        </div>
      </footer>
      <hr className="border w-3/4 mx-auto mt-6" />
      <div className="w-3/4 text-sm text-white mx-auto flex justify-between py-12">
        <p>@2024 Sporty Quest. All Rights Reserved</p>
        <p className="text-right">Powered by EMAYET</p>
      </div>
    </div>
  );
};

export default Footer;
