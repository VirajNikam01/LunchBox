import { Link } from "react-router-dom";
import MOCK_DATA from "../utility/swiggyMockData.json";
import Restraunant from "./Restraunant";

const AllRestraunants = () => {
  const data =
    MOCK_DATA.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
  console.log(data[0].info.id);

  return (
    <div className="mb-20">
      <h2 className="px-2 pt-5 text-2xl font-bold lg:px-5 lg:text-2xl lg:mt-12 mb-3">
        {MOCK_DATA.data.cards[2].card.card.header.title}
      </h2>
      <div className="flex flex-wrap justify-evenly lg:gap-5">
        {data.map((elem, i) => (
          <Link to={"resdetails/" + elem.info.id} key={i}>
            <Restraunant resData={elem.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllRestraunants;
