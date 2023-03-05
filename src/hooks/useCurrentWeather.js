import { useEffect } from "react";
import fetchWeather from "../api/fetchWeather";

const useCurrentWeather = (setWeatherData, latitude, longitude, initData) => {
  const getWeather = async () => {
    try {
      setWeatherData({
        status: "loading",
        data: initData,
        error: null,
      });

      if (latitude !== null && longitude !== null) {
        const response = await fetchWeather({ latitude, longitude });
        setWeatherData(response);
      }
    } catch (err) {
      setWeatherData({
        status: "error",
        data: initData,
        error: err,
      });
    }
  };

  useEffect(() => {
    getWeather();
  }, [latitude, longitude]);
};

export default useCurrentWeather;
