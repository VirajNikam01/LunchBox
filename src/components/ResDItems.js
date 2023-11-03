import React from "react";
import { RESINFOIMG_URL } from "../utility/constant";

const ResDItems = ({ item }) => {
  const { name, price, imageId, description } = item;
  return (
    <div className="my-5 flex justify-between flex-col gap-4 sm:flex-row">
      <div className="lg:w-9/12">
        <h1 className="text-xl font-semibold">{name}</h1>
        <h3 className="text-xs text-slate-500">{description}</h3>
      </div>
      <div className="w-48">
        <img 
        className="rounded"
        src={RESINFOIMG_URL + imageId} alt={name} />
      </div>
    </div>
  );
};

export default ResDItems;
