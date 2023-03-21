/* eslint-disable react/self-closing-comp */
import { useContext, useState, useEffect } from "react";
import IconComponent from "components/IconComponent";
import SearchBar from "components/SearchBar";
import WeatherCard from "components/WeatherCardComponent/styled";
import WeatherTextBoxComponent from "components/WeatherTextBoxComponent";
import {
  sunnyTheme,
  cloudyTheme,
  commonStyles,
  rainyTheme,
  snowyTheme,
  thunderTheme,
  defaultTheme,
} from "global/themes";
import useCurrentWeather from "../../hooks/useCurrentWeather";
import LocationContext from "../../context";

const WeatherCardComponent = ({ handleChange }) => {
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

  const getTheme = (code) => {
    const themes = [
      {
        codes: [1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201],
        name: rainyTheme,
      },
      { codes: [1000], name: sunnyTheme },
      { codes: [1003, 1006], name: cloudyTheme },
      { codes: [1087, 1273, 1276, 1279, 1282], name: thunderTheme },
      {
        codes: [1066, 1114, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225],
        name: snowyTheme,
      },
    ];

    const theme = themes.find((element) => element.codes.includes(code));
    return theme ? theme.name : defaultTheme;
  };

  useEffect(() => {
    const weatherCode = weatherData.conditionCode;
    const chosenTheme = getTheme(weatherCode);

    handleChange({ ...chosenTheme, ...commonStyles });
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
      <IconComponent />
    </WeatherCard>
  );
};

export default WeatherCardComponent;
