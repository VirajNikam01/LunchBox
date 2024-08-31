import { useState } from "react";
import Restraunant from "../components/Restraunant";
import MOCK_DATA from "../utility/swiggyMockData.json";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const [search, setSearch] = useState("");
  const data =
    MOCK_DATA.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
  console.log(data[0].info.id);

  const filtered = data.filter((elem) => {
    return elem.info.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen pt-10 w-full text-center">
      <div className=" px-3 sm:px-0 lg:pt-7 flex items-center justify-center max-w-screen-lg mx-auto">
        <Input
          type="text"
          className="sm:mr-5 me-2"
          placeholder="search here.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="px-10 hover:scale-105 ">Search</Button>
      </div>

      <div className="flex flex-wrap items-center justify-evenly lg:pt-6">
        {filtered.map((elem) => (
          <div>
            <Link to={"resdetails/" + elem.info.id} key={elem.info.id}>
              <Restraunant resData={elem.info} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
