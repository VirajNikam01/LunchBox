import { useParams } from "react-router-dom";
import useResInfo from "../utility/useResInfo";
import Shimmer from "../Shimmer";
import { RESINFOIMG_URL } from "../utility/constant";
import ResDCategary from "../components/ResDCategary";

const ResDetails = () => {
  const { resId } = useParams();
  const data = useResInfo(resId);
  if (data == null) return <Shimmer />;

  const {
    city,
    cloudinaryImageId,
    costForTwoMessage,
    locality,
    totalRatingsString,
    cuisines,
    avgRating,
    areaName,
    name,
    sla,
  } = data?.data?.cards[0]?.card?.card?.info;

  //for dish items

  let cards = data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  if (!cards) {
    cards = data?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  }

  const resDishes = cards.filter((elem) => {
    return elem.card.card["@type"].includes(
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  return (
    <div className="min-h-screen pt-12 sm:pt-20">
      <div className="  bg-black text-white w-full py-11 px-2">
        <div className="flex justify-between mx-auto lg:w-4/6">
          <div className="w-32 sm:w-52">
            <img
              className="w-full rounded"
              src={RESINFOIMG_URL + cloudinaryImageId}
              alt={name}
            />
          </div>
          <div>
            <h1 className="text-xl lg:text-4xl">{name}</h1>
            <h3 className="text-xs my-1 text-slate-400 lg:text-lg">
              {cuisines.join(", ")}
            </h3>
            <div className="flex justify-evenly items-center text-xs lg:text-xl lg:mt-5 ">
              <h1
                className={
                  avgRating >= 4
                    ? "bg-green-600 px-2 py-1 rounded-lg"
                    : "bg-red-700 px-2 py-1 rounded-lg"
                }
              >
                ⭐ {avgRating}
              </h1>
              <b className="px-3">|</b> <h1>{sla.slaString}</h1>{" "}
              <b className="px-3">|</b> <h1>{costForTwoMessage}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* res dish items */}
      <div className=" mt-10 lg:w-4/6 mx-auto">
        {resDishes.map((elem, i) => (
          <ResDCategary key={i} resDishes={elem.card.card} />
        ))}
      </div>
    </div>
  );
};

export default ResDetails;
