import { useEffect, useState } from "react";
import fetchWeather from "api/fetchWeather";

const initData = {
  country: null,
  city: null,
  tempC: null,
  condition: null,
  humidity: null,
  windKph: null,
};

const useCurrentWeather = ({ latitude, longitude, city }) => {
  const [weatherData, setWeatherData] = useState({
    status: "init",
    weatherData: initData,
    error: null,
  });

  useEffect(() => {
    if (latitude && longitude) {
      const getWeather = async () => {
        try {
          setWeatherData({
            status: "loading",
            weatherData: initData,
            error: null,
          });

          const response = await fetchWeather({ latitude, longitude, city });
          setWeatherData(response);
        } catch (error) {
          setWeatherData({
            status: "error",
            weatherData: initData,
            error: error.message,
          });
        }
      };

      getWeather();
    }
  }, [latitude, longitude, city]);

  return weatherData;
};

export default useCurrentWeather;
