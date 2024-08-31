import FoodType from "../components/FoodType";
import HomeHero from "../components/HomeHero";
import AllRestraunants from "../components/AllRestraunants";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HomeHero />
      <FoodType />
      <AllRestraunants />
    </div>
  );
};

export default Home;
