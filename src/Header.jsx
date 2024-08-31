import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getGeoLocation } from "./helpers/location/getGeoLocation";

const Header = () => {
  const cart = useSelector((store) => store.cart.items);
  const location = useSelector((store) => store.user.location);
  console.log(cart, location);
  getGeoLocation();

  return (
    <div className="flex items-center justify-center w-full fixed z-10 h-16 shadow-2xl bg-white px-2 sm:px-0 ">
      <div className="max-w-screen-xl w-full mx-auto flex justify-between items-center">
        {/* logo */}
        <div>
          <Link to={"/"}>
            {" "}
            <h2 className="font-serif font-bold text-xl text-teal-900">
              Lunch Box
            </h2>
          </Link>
        </div>

        {/* location */}
        <div className=" w-40   overscroll-auto md:w-fit ">
          {location && (
            <p className="whitespace-nowrap overflow-auto">🌐{`${location.suburb}, ${location.state}, ${location.postcode}`}</p>
          )}
        </div>

        {/* Nav Items */}
        <ul className="flex h-16 sm:h-fit fixed justify-between items-center w-full  px-3 text-xl bottom-0 left-0 bg-white shadow-2xl sm:relative sm:gap-10 sm:w-fit ">
          <Link to={"/"}>
            <li className="px-2  cursor-pointer transition-all duration-300 text-teal-9500 hover:text-teal-600">
              <i className="fa-solid fa-house">
                <span className="text-xs hidden lg:inline-block sm:ml-2">
                  Home
                </span>
              </i>
            </li>
          </Link>
          <Link to={"search"}>
            <li className="px-2 cursor-pointer transition-all duration-300 text-teal-9500 hover:text-teal-600">
              <i className="fa-solid fa-magnifying-glass">
                <span className="text-xs hidden lg:inline-block sm:ml-2">
                  Search
                </span>
              </i>
            </li>
          </Link>
          <Link to={"contact"}>
            <li className="px-2 cursor-pointer transition-all duration-300 text-teal-9500 hover:text-teal-600">
              <i className="fa-solid fa-message h-full ">
                <span className="text-xs hidden lg:inline-block sm:ml-2">
                  Contact
                </span>
              </i>
            </li>
          </Link>
          <Link to={"cart"}>
            <li className="px-2 mx-4 cursor-pointer transition-all duration-300 text-teal-9500 hover:text-teal-600">
              <i className="fa-solid fa-cart-shopping">
                <span className="text-xs hidden lg:inline-block sm:ml-2">
                  Cart
                </span>
                <span className="text-xs mx-1 p-2 text-white bg-teal-500 rounded-xl">
                  {cart.length}
                </span>
              </i>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
