/* eslint-disable react/self-closing-comp */
import { useContext, useState } from "react";
import IconComponent from "components/IconComponent";
import SearchBar from "components/SearchBar";
import WeatherCard from "components/WeatherCardComponent/styled";
import WeatherTextBoxComponent from "components/WeatherTextBoxComponent";
import useCurrentWeather from "../../hooks/useCurrentWeather";
import LocationContext from "../../context";

const WeatherCardComponent = () => {
  const [city, setCity] = useState();
  const {
    latitude,
    longitude,
    error: locationError,
  } = useContext(LocationContext);

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
        locationError={locationError}
      />
      <IconComponent />
    </WeatherCard>
  );
};

export default WeatherCardComponent;
