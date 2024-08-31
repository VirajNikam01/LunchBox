const Footer = () => {
  return (
    <div className="bg-black py-10 px-3 mb-16 sm:mb-0">
      <h1 className="text-center text-slate-50 mb-3 sm:text-2xl">For better experience,download the Lunch Box app now</h1>
      {/* Footer Content */}
      <div className="bg-gray-900 flex justify-between text-slate-100 px-1 sm:px-8 sm:w-4/6 py-4 m-auto">
        {/* left */}
        <div className="text-white">
          <h1 className="text-teal-700 font-bold ">LunchBox</h1>

          <h2 className="text-sm text-slate-100">All Rights Reserved by LunchBox</h2>
        </div>

        {/* Right */}
        <div>
         <h1> +91-2365412589</h1>
         <h1>Pune, India</h1>
  
        </div>
      </div>
      <h1 className="text-slate-50 mt-5 text-center bg-slate-900 px-7 py-2">Crafted With ❤️ by Viraj Nikam</h1>
    </div>
  );
};

export default Footer;
