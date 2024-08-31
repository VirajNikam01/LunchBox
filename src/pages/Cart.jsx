import { useDispatch, useSelector } from "react-redux";
import ResDItems from "../components/ResDItems";
import { useNavigate } from "react-router-dom";
import { clearCart, removeItems } from "../utility/cartSlice";

const Cart = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pt-16">
      <div className="sm:w-9/12 mx-auto sm:my-20">
        {!!items.length && (
          <button
          onClick={()=> dispatch(clearCart())}
          className="bg-teal-700 text-white rounded px-2 py-1 transition-all duration-300 hover:bg-black">
            Clear Cart
          </button>
        )}
        {items.length == 0 ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
            <h1 className="text-xl">Your cart is empty!</h1>{" "}
            <h2 className="text-xs my-1">
              Explore our wide selection and find something you like
            </h2>
            <button
              onClick={() => navigate("/search")}
              className="bg-teal-600 text-white rounded px-2 py-1 my-4 "
            >
              Explore More
            </button>
          </div>
        ) : (
          items.map((item) => <ResDItems item={item} />)
        )}
      </div>
    </div>
  );
};

export default Cart;
