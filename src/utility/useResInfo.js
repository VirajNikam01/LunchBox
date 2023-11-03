import React, { useState, useEffect } from "react";
import { RESINFO_URL } from "./constant";

const useResInfo = (id) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const req = await fetch(RESINFO_URL + id);
    const res = await req.json()
    setData(res)
  };

  return data;
};

export default useResInfo;
