import { useContext } from "react";
import LocationContext from "context";
import useCurrentWeather from "hooks/useCurrentWeather";
import {
  WeatherBigText,
  WeatherInfo,
  WeatherTextBox,
  WeatherSmallText,
} from "components/WeatherTextBoxComponent/styled";

const WeatherTextBoxComponent = () => {
  const {
    latitude,
    longitude,
    error: locationError,
  } = useContext(LocationContext);
  const { weatherData, status, error } = useCurrentWeather(latitude, longitude);

  return (
    <WeatherInfo>
      {status === "error" && (
        <WeatherTextBox>
          <WeatherBigText>{error}</WeatherBigText>
        </WeatherTextBox>
      )}

      {locationError === "User denied Geolocation" && (
        <WeatherTextBox>
          <WeatherBigText>
            This app requires geolocation access to work. Please grant this site
            geolocation permissions in your browser&apos;s settings.
          </WeatherBigText>
        </WeatherTextBox>
      )}
      {status === "loading" && (
        <WeatherTextBox>
          <WeatherBigText>Loading weather data, please wait</WeatherBigText>
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
