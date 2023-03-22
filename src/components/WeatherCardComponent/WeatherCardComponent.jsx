import { useContext, useState, useEffect } from "react";
import IconComponent from "components/IconComponent";
import SearchBar from "components/SearchBar";
import WeatherCard from "components/WeatherCardComponent/styled";
import WeatherTextBoxComponent from "components/WeatherTextBoxComponent";
import { commonStyles, defaultTheme, themes } from "global/themes";
import useCurrentWeather from "../../hooks/useCurrentWeather";
import LocationContext from "../../context";

const WeatherCardComponent = ({ handleChange }) => {
  const [city, setCity] = useState();
  const [icon, setIcon] = useState(null);

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

  const getTheme = (code) => {
    const theme = themes.find((element) => element.codes.includes(code));
    return theme || { name: defaultTheme, icon: null };
  };

  useEffect(() => {
    const weatherCode = weatherData.conditionCode;
    const chosenTheme = getTheme(weatherCode);

    setIcon(chosenTheme.icon);

    handleChange({ ...chosenTheme.name, ...commonStyles });
  }, [weatherData]);

  return (
    <WeatherCard>
      <SearchBar setCity={setCity} />
      <WeatherTextBoxComponent
        weatherData={weatherData}
        status={status}
        error={error}
        locationError={locationError}
      />
      <IconComponent WeatherIcon={icon} />
    </WeatherCard>
  );
};

export default WeatherCardComponent;
