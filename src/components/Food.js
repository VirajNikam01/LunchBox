import { FOOD_URL } from "../utility/constant";

const Food = ({ mind }) => {
  const { imageId, action } = mind;
  return (
    <div>
      <img className="w-28 lg:w-32" src={FOOD_URL + imageId} alt={action.text} />
    </div>
  );
};

export default Food;
