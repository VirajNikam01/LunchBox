const HomeHero = () => {
  return (
    <div className="homehero relative text-center">
      <img
        className="img"
        src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
        alt="img"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className=" text-black font-extrabold text-3xl font-serif lg:text-6xl tracking-widest	">
          LunchBox
        </h1>
        <p className="text-white py-1  text-sm w-screen lg:w-full lg:text-2xl">
          Find the best restaurants, cafés and bars in Pune
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
