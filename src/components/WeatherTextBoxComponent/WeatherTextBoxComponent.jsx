import { useContext } from "react";
import LocationContext from "../../context";
import {
  WeatherBigText,
  WeatherInfo,
  WeatherTextBox,
  WeatherSmallText,
} from "./styled";
import useCurrentWeather from "../../hooks/useCurrentWeather";

const WeatherTextBoxComponent = () => {
  const { latitude, longitude } = useContext(LocationContext);
  const { weatherData, status, error } = useCurrentWeather(latitude, longitude);

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
