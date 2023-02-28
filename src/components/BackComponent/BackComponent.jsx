import { useContext, useEffect, useState } from "react";
import fetchWeather from "../../api/fetchWeather";
import LocationContext from "../../context";
import BackgroundColor from "./styles";
import WeatherCardComponent from "../WeatherCardComponent";

const BackComponent = () => {
  const [data, setData] = useState({
    status: "loading",
    country: null,
    city: null,
    tempC: null,
    humidity: null,
    condition: null,
    windKph: null,
    error: null,
  });
  const { latitude, longitude } = useContext(LocationContext);

  const handleError = (error) => {
    setData({
      status: "error",
      country: null,
      city: null,
      tempC: null,
      condition: null,
      humidity: null,
      windKph: null,
      error,
    });
  };

  const getWeather = async () => {
    try {
      const response = await fetchWeather({ latitude, longitude });
      setData(response);
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    getWeather();
  }, [latitude, longitude]);

  return (
    <BackgroundColor>
      <WeatherCardComponent data={data} />
    </BackgroundColor>
  );
};

export default BackComponent;
