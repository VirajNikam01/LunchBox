import React from "react";
import { useNavigate } from "react-router-dom";

const ApiBlocked = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center flex-col gap-4   text-white">
      <h1 className="font-bold px-2 text-red-800 text-center">
        Country blocked! Your country is blocked from accessing this ressource!
      </h1>
      <button
        onClick={() => navigate(-1)}
        className="text-white bg-teal-500 rounded-lg px-3 py-1 hover:bg-slate-700 duration-300"
      >
        ⏮️Back
      </button>
    </div>
  );
};

export default ApiBlocked;
