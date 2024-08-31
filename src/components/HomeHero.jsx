import { useSelector } from "react-redux";
import CarouselPlugin from "./HomeCarousel";

const HomeHero = () => {
  const location = useSelector((store) => store.user.location);

  return (
    <div className="homehero relative  bg-red-700 text-white w-full h-72">
      <div className="absolute text-center left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full sm:w-fit  ">
        <h1 className="  font-extrabold text-3xl font-serif lg:text-6xl tracking-widest	">
          LunchBox
        </h1>
        <p className="  py-1 text-sm  lg:text-xl">
          Find the best restaurants, cafes and bars in {location? location.suburb : 'Pune'}
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
