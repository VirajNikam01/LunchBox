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
  console.log(AllFood);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center">
        {AllFood.map((dish) => (
          <Food key={dish.id} mind={dish} />
        ))}
      </div>
    </div>
  );
};

export default FoodType;
