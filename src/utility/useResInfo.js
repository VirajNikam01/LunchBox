import React, { useState, useEffect } from "react";
import { RESINFO_URL } from "./constant";

const useResInfo = (id) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    try {
      const req = await fetch(
        RESINFO_URL + id + "=undefined&submitAction=ENTER"
      );
      const res = await req.json();
      console.log(res, "resInfo");
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  return data;
};

export default useResInfo;
