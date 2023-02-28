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
  });
  const { latitude, longitude } = useContext(LocationContext);

  const handleSuccess = (response) => {
    setData({
      status: "ok",
      country: response.data.location.country,
      city: response.data.location.name,
      tempC: response.data.current.temp_c,
      condition: response.data.current.condition.text,
      humidity: response.data.current.humidity,
      windKph: response.data.current.wind_kph,
    });
  };

  const handleError = () => {
    setData({
      status: "ok",
      country: null,
      city: null,
      tempC: null,
      condition: null,
      humidity: null,
      windKph: null,
    });
  };

  const getWeather = async () => {
    try {
      const response = await fetchWeather({ latitude, longitude });
      handleSuccess(response);
    } catch (err) {
      handleError();
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
