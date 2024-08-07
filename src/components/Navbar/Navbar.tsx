// src/components/Navbar.tsx
import { MenuIcon, ShoppingCartIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import webLogo from "../../assets/social-icon/nav-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              <img src={webLogo} alt="Logo" className="h-8 w-auto" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Home
                </Link>
                <Link
                  to="/all-products"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  All Products
                </Link>
                <Link
                  to="/manage-products"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Manage Products
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/cart" className="text-white hover:text-gray-400">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              >
                {isOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/all-products"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            All Products
          </Link>
          <Link
            to="/manage-products"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Manage Products
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
