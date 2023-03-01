import { useEffect } from "react";
import fetchWeather from "../api/fetchWeather";

const useCurrentWeather = (setWeatherData, latitude, longitude, initData) => {
  const handleError = (error) => {
    setWeatherData({
      status: "error",
      data: initData,
      error,
    });
  };

  const getWeather = async () => {
    try {
      setWeatherData({
        status: "loading",
        data: initData,
        error: null,
      });
      const response = await fetchWeather({ latitude, longitude });
      setWeatherData(response);
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    getWeather();
  }, [latitude, longitude]);
};

export default useCurrentWeather;
