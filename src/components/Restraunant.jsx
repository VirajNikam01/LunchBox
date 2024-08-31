import { RESTRO_URL } from "../utility/constant";

const Restraunant = ({ resData }) => {
  const { name, areaName, cloudinaryImageId, cuisines, locality, avgRating } =
    resData;

  return (
    <div className=" relative w-72 min-h-fit lg:w-72 lg:h-96 shadow-lg rounded-xl my-5 pb-2 cursor-pointer transition-all duration-500 hover:scale-95 ">
      <img
        className="w-11/12 h-40  mx-auto mt-2 rounded-xl lg:h-1/2"
        src={RESTRO_URL + cloudinaryImageId}
        alt=""
      />
      <div className="mt-3 ml-2">
        <h1 className=" font-bold">{name}</h1>
        <h4 className=" font-semibold text-gray-700">{areaName}</h4>
        <p className="leading-tight text-slate-600">{cuisines.join(", ")}</p>
        <h6>{locality}</h6>
        <h1
          className={
            avgRating >= 4
              ? "bg-green-600 p-1 px-4 font-bold my-3 rounded-lg w-fit"
              : "bg-red-700 p-1 px-4 font-bold my-3 rounded-lg w-fit"
          }
        >
          {avgRating}
        </h1>
      </div>
    </div>
  );
};

export default Restraunant;
