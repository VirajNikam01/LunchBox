import React from "react";
import { RESINFOIMG_URL } from "../utility/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItems, clearCart } from "../utility/cartSlice";

const ResDItems = ({ item }) => {
  const { name, price, imageId, description } = item;

  const dispatch = useDispatch();

  const handelAddItems = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="my-5 flex justify-between flex-col gap-4 sm:flex-row">
      <div className="sm:w-9/12">
        <h1 className="text-xl font-semibold">{name}</h1>
        <h3 className="text-xs text-slate-500">{description}</h3>
      </div>
      <div className="relative w-48">
        <img className="rounded" src={RESINFOIMG_URL + imageId} alt={name} />

        <button
          onClick={handelAddItems}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black text-white transition-all duration-300 hover:bg-teal-500"
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default ResDItems;
