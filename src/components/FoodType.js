import Shimmer from "../Shimmer";
import useFetch from "../utility/useFetch";
import Food from "./Food";

const FoodType = () => {
  const data = useFetch();
  console.log(data );
  if (data == null) return <Shimmer />;
  const AllFood = data?.cards[1]?.card?.card?.imageGridCards?.info
//   console.log(AllFood);


  return (
    <div className="flex flex-wrap items-center justify-center">
      <h2>Hello</h2>
      {AllFood.map((dish) => (
        <Food mind={dish} />
      ))}
    </div>
  );
};

export default FoodType;
