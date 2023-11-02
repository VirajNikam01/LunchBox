import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-2 sm:w-11/12 sm:mx-auto">
      {/* logo */}
      <div>
        <h2 className="font-serif font-bold text-xl text-teal-900">
          Lunch Box
        </h2>
      </div>

      {/* Nav Items */}
      <ul className="flex fixed justify-between items-center w-full py-6 px-3 text-xl bottom-0 left-0 bg-sky-100 sm:relative sm:gap-10 sm:w-fit sm:bg-transparent">
        <Link to={'/'}>
          <li className="px-2 mx-4 cursor-pointer transition-all duration-300 text-teal-9500 hover:text-teal-600">
            <i class="fa-solid fa-house">
              <span className="text-xs hidden lg:inline-block sm:ml-2">
                Home
              </span>
            </i>
          </li>
        </Link>
        <Link to={'search'}>
          <li className="px-2 mx-4 cursor-pointer transition-all duration-300 text-teal-9500 hover:text-teal-600">
            <i class="fa-solid fa-magnifying-glass">
              <span className="text-xs hidden lg:inline-block sm:ml-2">
                Search
              </span>
            </i>
          </li>
        </Link>
        <Link to={'contact'}>
          <li className="px-2 mx-4 cursor-pointer transition-all duration-300 text-teal-9500 hover:text-teal-600">
            <i class="fa-solid fa-message">
              <span className="text-xs hidden lg:inline-block sm:ml-2">
                Contact
              </span>
            </i>
          </li>
        </Link>
        <Link to={'cart'}>
          <li className="px-2 mx-4 cursor-pointer transition-all duration-300 text-teal-9500 hover:text-teal-600">
            <i class="fa-solid fa-cart-shopping">
              <span className="text-xs hidden lg:inline-block sm:ml-2">
                Cart
              </span>
            </i>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
