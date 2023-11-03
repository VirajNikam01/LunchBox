import { useState } from "react";
import Restraunant from "../components/Restraunant";
import MOCK_DATA from "../utility/swiggyMockData.json";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const data =
    MOCK_DATA.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
  console.log(data[0].info.id);

  const filtered = data.filter((elem) => {
    return elem.info.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen pt-20 w-full text-center">
      <div className=" lg:pt-7 flex items-center justify-center w-full">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" border-2 border-teal-900 w-3/4 rounded py-1  px-3 lg:w-2/4"
          type="text"
          placeholder="search here.."
        />
      </div>

      <div className="flex flex-wrap items-center justify-evenly lg:pt-6">
        {filtered.map((elem) => (
          <div>
            <Link to={'resdetails/' + elem.info.id} key={elem.info.id} >
              <Restraunant resData={elem.info} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
