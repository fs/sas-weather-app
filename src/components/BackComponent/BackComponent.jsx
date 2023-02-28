import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { sunnyTheme } from "../../global/themes";
import fetchWeather from "../../api/fetchWeather";
import LocationContext from "../../context";
import BackgroundColor from "./styled";
import WeatherCardComponent from "../WeatherCardComponent";

const BackComponent = () => {
  const [theme] = useState(sunnyTheme);
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
    <ThemeProvider theme={theme}>
      <BackgroundColor>
        <WeatherCardComponent data={data} />
      </BackgroundColor>
    </ThemeProvider>
  );
};

export default BackComponent;
