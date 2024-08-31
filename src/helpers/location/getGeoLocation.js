import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserLocation } from "../../utility/userSlice";

export const getGeoLocation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      // console.log(latitude,longitude)
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            dispatch(addUserLocation(data.address));
          }
        });
    });
  }, []);
};
