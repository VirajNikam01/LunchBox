import Shimmer from "../Shimmer";
import useFetch from "../utility/useFetch";
import Food from "./Food";
import MOCK_DATA from "../utility/swiggyMockData.json";

const FoodType = () => {
  //   const data = useFetch();
  //   console.log(data );
  //   if (data == null) return <Shimmer />;
  console.log(MOCK_DATA);
  const AllFood = MOCK_DATA?.data?.cards[1]?.card?.card?.imageGridCards?.info;
  AllFood.length = 9;

  return (
    <div>
      <h2 className="px-5 pt-5 text-2xl font-bold">
        {MOCK_DATA?.data?.cards[1]?.card?.card?.header?.title}
      </h2>
      <div className="flex flex-wrap items-center justify-evenly">
        {AllFood.map((dish) => (
          <Food key={dish.id} mind={dish} />
        ))}
      </div>
    </div>
  );
};

export default FoodType;
