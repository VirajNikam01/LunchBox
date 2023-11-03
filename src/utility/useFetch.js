import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const req = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4414883&lng=73.8273467&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resp = await req.json();
    setdata(resp?.data);
  };

  return data;
};

export default useFetch;
