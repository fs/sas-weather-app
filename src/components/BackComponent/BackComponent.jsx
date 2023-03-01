import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { sunnyTheme } from "../../global/themes";
import useCurrentWeather from "../../hooks/useCurrentWeather";
import LocationContext from "../../context";
import BackgroundColor from "./styled";
import WeatherCardComponent from "../WeatherCardComponent";

const initData = {
  country: null,
  city: null,
  tempC: null,
  condition: null,
  humidity: null,
  windKph: null,
};

const BackComponent = () => {
  const [theme] = useState(sunnyTheme);
  const [weatherData, setWeatherData] = useState({
    status: "init",
    data: initData,
    error: null,
  });
  const { latitude, longitude } = useContext(LocationContext);

  useCurrentWeather(setWeatherData, latitude, longitude, initData);

  return (
    <ThemeProvider theme={theme}>
      <BackgroundColor>
        <WeatherCardComponent weatherData={weatherData} />
      </BackgroundColor>
    </ThemeProvider>
  );
};

export default BackComponent;
