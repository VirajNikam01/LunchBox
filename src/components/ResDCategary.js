import React from "react";
import ResDItems from "./ResDItems";

const ResDCategary = ({ resDishes }) => {
  const { itemCards } = resDishes;
  console.log(itemCards);
  return (
    <div className="my-14 px-4">
      <h1 className="text-2xl font-bold bg-slate-200 py-2">{resDishes.title}</h1>
      {itemCards.map((elem, i) => (
        <div
        className="my-2 border-b-2"
        key={i}>
          <ResDItems item={elem.card.info} />
        </div>
      ))}
    </div>
  );
};

export default ResDCategary;
