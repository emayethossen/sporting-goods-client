import { Link } from "react-router-dom";
import logo from "../../assets/social-icon/facebook.png";
import logo2 from "../../assets/social-icon/twitter.png";
import logo3 from "../../assets/social-icon/linkedin.png";
import webLogo from '../../assets/social-icon/nav-logo.png'

const Footer = () => {
  return (
    <div className="bg-[#E0F7FA]">
      <div className="container mx-auto px-12 bg-[#E0F7FA] text-[#121416]">
        {/* <div className="flex justify-center">
          <img src={webLogo} alt="" className="w-[200px] h-[120px]" />
        </div> */}
        <footer className="grid lg:grid-cols-5 gap-12 md:grid-cols-2 p-4 justify-center items-center">
          <div className="col-span-2 p-4 space-y-6 md:space-y-8">
            <div className='flex justify-center md:justify-start'>
              <img src={webLogo} alt="Prt logo" width={120} height={60} />
            </div>
            <p className='font-semibold'>Discover expert tips, heartwarming stories, and essential advice to ensure your pets live a happy, healthy life. Join our community for the best in pet care and companionship.</p>
            <form className="max-w-md  mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="py-3 px-6 bg-gradient-to-r from-[#6495ED] to-[#4A90E2] text-white rounded-md font-semibold hover:bg-gradient-to-r hover:from-[#7EC8F4] hover:to-[#6495ED] focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Subscribe
              </button>

            </form>
          </div>
          <div className="text-center space-y-4">
            <h2 className="footer-title font-bold text-2xl">Links</h2>
            <div className="space-y-6 flex flex-col items-center justify-center">
              <Link
                to="https://www.facebook.com/emayethossen4/"
                className="flex items-center justify-center"
              >
                <img className="w-8 h-8" src={logo} alt="" />
              </Link>
              <Link
                to="https://twitter.com/emayethossen"
                className="flex items-center justify-center"
              >
                <img className="w-8 h-8" src={logo2} alt="" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/emayethossen"
                className="flex items-center justify-center"
              >
                <img className="w-8 h-8" src={logo3} alt="" />
              </Link>
            </div>
          </div>
          {/* <div className="text-center lg:text-left space-y-4 hidden lg:flex flex-col">
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
        </div> */}
          <div className="text-center lg:text-left space-y-4 hidden lg:flex flex-col">
            <h2 className="footer-title font-bold text-2xl">Product</h2>
            <Link to="/" className="link link-hover block">
              Football
            </Link>
            <Link to="/" className="link link-hover block">
              Cricket
            </Link>
            <Link to="/" className="link link-hover block">
              Chess
            </Link>
            <Link to="/" className="link link-hover block">
              Others
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
            <Link to="/" className="link link-hover block">
              emayethossen786@gmail.com
            </Link>
          </div>
        </footer>
        <hr className="border w-3/4 mx-auto mt-2" />
        <div className="w-3/4 text-sm font-semibold mx-auto flex justify-between py-4">
          <p>@2024 Sporty Quest. All Rights Reserved</p>
          <p className="text-right">Powered by EMAYET</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
