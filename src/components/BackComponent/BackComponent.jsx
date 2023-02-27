import { useContext, useEffect, useState } from "react";
import fetchWeather from "../../api/fetchWeather";
import LocationContext from "../../context";
import { BackgroundColor } from "./styles";
import WeatherCardComponent from "../WeatherCardComponent";

const BackComponent = () => {
  const [response, setResponse] = useState({ status: 404 });
  const { latitude, longitude } = useContext(LocationContext);

  const getWeather = async () => {
    setResponse(await fetchWeather({ latitude, longitude }));
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    getWeather();
  }, [latitude, longitude]);

  return (
    <BackgroundColor>
      <WeatherCardComponent response={response} />
    </BackgroundColor>
  );
};

export default BackComponent;
