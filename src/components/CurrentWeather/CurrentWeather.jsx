import { useContext, useEffect, useState } from "react";
import fetchWeather from "../../api/fetchWeather";
import LocationContext from "../../context";
import WeatherCardComponent from "../WeatherCardComponent";

const CurrentWeather = () => {
  const [response, setResponse] = useState({ status: 404 });
  const { latitude, longitude } = useContext(LocationContext);
  const getWeather = async () => {
    setResponse(await fetchWeather({ latitude, longitude }));
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    getWeather();
  }, [latitude, longitude]);

  return <WeatherCardComponent response={response} />;
};

export default CurrentWeather;
