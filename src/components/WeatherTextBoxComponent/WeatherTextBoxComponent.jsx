import { useContext, useEffect } from "react";
import LocationContext from "context";
import useCurrentWeather from "hooks/useCurrentWeather";
import {
  WeatherBigText,
  WeatherInfo,
  WeatherTextBox,
  WeatherSmallText,
} from "components/WeatherTextBoxComponent/styled";
import {
  cloudyTheme,
  commonStyles,
  rainyTheme,
  snowyTheme,
  thunderTheme,
} from "global/themes";

const WeatherTextBoxComponent = ({ handleChange }) => {
  const { latitude, longitude } = useContext(LocationContext);
  const { weatherData, status, error } = useCurrentWeather(latitude, longitude);

  useEffect(() => {
    if (weatherData.condition) {
      const weatherText = weatherData.condition;

      if (weatherText.includes("snow")) {
        handleChange({ ...snowyTheme, ...commonStyles });
      } else if (weatherText.includes("rain")) {
        handleChange({ ...rainyTheme, ...commonStyles });
      } else if (weatherText.includes("thunder")) {
        handleChange({ ...thunderTheme, ...commonStyles });
      } else if (weatherText.includes("cloud")) {
        handleChange({ ...cloudyTheme, ...commonStyles });
      }
    }
  }, [weatherData]);

  return (
    <WeatherInfo>
      {status === "error" && (
        <WeatherTextBox>
          <WeatherBigText>{error}</WeatherBigText>
        </WeatherTextBox>
      )}
      {status === "loading" && (
        <WeatherTextBox>
          <WeatherBigText>Загрузка погоды</WeatherBigText>
        </WeatherTextBox>
      )}
      {status === "success" && (
        <>
          <WeatherTextBox>
            <WeatherBigText>
              {weatherData.country}, {weatherData.city}
            </WeatherBigText>
            <WeatherBigText>{weatherData.tempC}°C</WeatherBigText>
            <WeatherBigText>{weatherData.condition}</WeatherBigText>
          </WeatherTextBox>
          <WeatherTextBox>
            <WeatherSmallText>
              Humidity: {weatherData.humidity}%
            </WeatherSmallText>
            <WeatherSmallText>
              Wind Speed: {weatherData.windKph} km/h
            </WeatherSmallText>
          </WeatherTextBox>
        </>
      )}
    </WeatherInfo>
  );
};

export default WeatherTextBoxComponent;
