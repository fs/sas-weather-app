import {
  WeatherBigText,
  WeatherInfo,
  WeatherTextBox,
  WeatherSmallText,
} from "./styled";

const WeatherTextBoxComponent = ({ weatherData, status, error }) => {
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
