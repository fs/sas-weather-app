import { useEffect, useState } from "react";
import fetchWeather from "../api/fetchWeather";

const initData = {
  country: null,
  city: null,
  tempC: null,
  condition: null,
  humidity: null,
  windKph: null,
};

const useCurrentWeather = (latitude, longitude) => {
  const [weatherData, setWeatherData] = useState({
    status: "init",
    weatherData: initData,
    error: null,
  });

  const getWeather = async () => {
    try {
      setWeatherData({
        status: "loading",
        weatherData: initData,
        error: null,
      });

      if (latitude !== null && longitude !== null) {
        const response = await fetchWeather({ latitude, longitude });
        setWeatherData(response);
      } else {
        setWeatherData({
          status: "error",
          weatherData: initData,
          error: "Latitude and longitude are not defined",
        });
      }
    } catch (err) {
      setWeatherData({
        status: "error",
        weatherData: initData,
        error: err,
      });
    }
  };

  useEffect(() => {
    getWeather();
  }, [latitude, longitude]);

  return weatherData;
};

export default useCurrentWeather;
