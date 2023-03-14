/* eslint-disable react/self-closing-comp */
import { useContext, useState } from "react";
import SearchBar from "../SearchBar";
import IconComponent from "../IconComponent";
import WeatherCard from "./styled";
import WeatherTextBoxComponent from "../WeatherTextBoxComponent";
import useCurrentWeather from "../../hooks/useCurrentWeather";
import { LocationContext } from "../../context";

const WeatherCardComponent = () => {
  const [city, setCity] = useState();
  const { latitude, longitude } = useContext(LocationContext);

  const { weatherData, status, error } = useCurrentWeather({
    latitude,
    longitude,
    city,
  });

  return (
    <WeatherCard>
      <SearchBar setCity={setCity} />
      <WeatherTextBoxComponent
        weatherData={weatherData}
        status={status}
        error={error}
      />
      <IconComponent />
    </WeatherCard>
  );
};

export default WeatherCardComponent;
