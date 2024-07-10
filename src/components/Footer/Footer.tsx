const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Sporting Goods Store</h2>
          <p className="text-sm">
            Providing top-quality sporting goods since 20XX
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.486 2 2 6.486 2 12c0 4.97 3.842 9.066 8.75 9.92V15.29H6.875V12h3.875V9.566c0-3.825 2.287-5.932 5.775-5.932 1.672 0 3.203.125 3.625.125v3.844h-2.344c-1.938 0-2.344.906-2.344 2.25v2.344h4.688l-.61 3.844h-4.078V22c5.098-.663 9-5.098 9-10.566 0-5.878-4.784-10.667-10.667-10.667z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.047 2H6.952C5.887 2 5.035 2.836 5.035 3.895v16.21c0 1.06.852 1.895 1.917 1.895h10.095c1.065 0 1.917-.835 1.917-1.895V3.895c0-1.06-.852-1.895-1.917-1.895zm-.53 2.262 1.312 1.334h-2.59c-.37 0-.672-.298-.672-.666v-2.36l1.95 1.692zm-2.432 1.907-1.425 1.46c-.226.23-.567.295-.855.161l-.785-.393-1.7 1.21c-.277.197-.67.128-.874-.166l-1.39-1.933-2.11.83c-.268.105-.567.032-.76-.182l-1.376-1.238-2.017.465c-.423.098-.78-.296-.685-.72l.783-3.22c.095-.392.44-.66.85-.66h12.307c.39 0 .728.275.81.658l.77 3.333c.065.29-.073.58-.337.746l-1.9 1.623zm0 4.597v6.314l-4.755-.009v-6.305l2.41-.001 2.342 2.274zm-5.27-3.995c.523 0 .948.406.948.905s-.425.905-.948.905-.948-.406-.948-.905.425-.905.948-.905zm-2.36 3.525c.522 0 .947.406.947.905s-.425.905-.947.905-.947-.406-.947-.905.425-.905.947-.905z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93V13H8V11h3V8l2.5 2.5-1.75 1.75L16 9l4 4-4 4-1.75-1.75-2.75 2.75z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Page Links */}
        <nav className="text-sm">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
