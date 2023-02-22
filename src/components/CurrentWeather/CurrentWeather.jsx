import { useContext, useEffect, useState } from "react";
import WeatherContainer from "../WeatherContainer/WeatherContainer";
import fetchWeather from "../../api/fetchWeather";
import LocationContext from "../../context";

const CurrentWeather = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = useContext(LocationContext);

  const getWeather = async () => {
    setWeather(await fetchWeather({ latitude, longitude }));
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(latitude, longitude);
    getWeather();
  }, [latitude, longitude]);

  // eslint-disable-next-line no-console
  console.log(weather);

  return <WeatherContainer props={weather} />;
};

export default CurrentWeather;
