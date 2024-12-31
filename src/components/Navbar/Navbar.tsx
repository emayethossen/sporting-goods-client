import { MenuIcon, XIcon, ShoppingCartIcon, UserCircleIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import webLogo from "../../assets/social-icon/nav-logo.png";
import { logout } from "../../redux/features/authSlice";
import { RootState } from "../../redux/store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-[#E0F7FA] text-[#121416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src={webLogo} alt="Logo" className="h-12 w-auto" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-[#FEF2F2]"
                >
                  Home
                </Link>
                {/* {user && user.role === 'admin' && (
                                    <>
                                        <Link
                                            to="/admin/dashboard"
                                            className="px-3 py-2 rounded-md text-base font-semibold hover:bg-[#FEF2F2]"
                                        >
                                            Dashboard
                                        </Link>
                                    </>
                                )}
                                {user && user.role === 'user' && (
                                    <>
                                        <Link
                                            to="/user/dashboard"
                                            className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-[#FEF2F2]"
                                        >
                                            Dashboard
                                        </Link>
                                    </>
                                )} */}

                <Link
                  to="/products"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                >
                  Products
                </Link>
                <Link
                  to="/blogs"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                >
                  Blog
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="text-[#121416] hover:text-gray-500">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            {user ? (
              <div className="relative">
                <div className="md:flex gap-4 justify-center items-center">

                  <button onClick={toggleProfileMenu}>
                    <UserCircleIcon className="h-8 w-8 text-gray-700 hover:text-gray-800" />
                  </button>
                </div>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">

                    {user && user.role === 'user' && (
                      <>
                        <Link
                          to="/user/dashboard"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                        >
                          Dashboard
                        </Link>
                        <Link
                          to="/user/profile"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                        >
                          Profile
                        </Link>
                        <Link
                          to="/user/orders"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                        >
                          Orders
                        </Link>
                        <Link
                          to="/user/address"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                        >
                          Address
                        </Link>
                      </>
                    )}
                    {/* Extra admin links in profile menu */}
                    {user && user.role === 'admin' && (
                      <>
                        <Link to="/admin/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]">
                          Dashboard
                        </Link>
                        <Link
                          to="/admin/profile"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                        >
                          Profile
                        </Link>
                        <Link to="/admin/users" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]">
                          Manage User
                        </Link>
                        <Link to="/admin/products" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]">
                          Manage Products
                        </Link>
                        <Link to="/admin/blogs" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]">
                          Manage Blog
                        </Link>
                      </>
                    )}

                    <button
                      onClick={handleLogout}
                      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                    >
                      Logout
                    </button>
                  </div>
                )}

                {/* <button
                  onClick={handleLogout}
                  className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-[#FEF2F2]"
                >
                  Logout
                </button> */}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-semibold hidden md:flex hover:bg-[#FEF2F2]"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-semibold hidden md:flex hover:bg-[#FEF2F2]"
                >
                  Sign Up
                </Link>
              </>
            )}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-500 focus:text-white"
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
            className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-[#FEF2F2]"
          >
            Home
          </Link>
          {/* {user && user.role === 'admin' && (
            <>
              <Link
                to="/admin/dashboard"
                className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-[#FEF2F2]"
              >
                Dashboard
              </Link>
            </>
          )}
          {user && user.role === 'user' && (
            <>
              <Link
                to="/user/dashboard"
                className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-[#FEF2F2]"
              >
                Dashboard
              </Link>
            </>
          )} */}

          <Link
            to="/products"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
          >
            Products
          </Link>
          <Link
            to="/blogs"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
          >
            Contact
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-[#FEF2F2]"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-[#FEF2F2]"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-[#FEF2F2]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
