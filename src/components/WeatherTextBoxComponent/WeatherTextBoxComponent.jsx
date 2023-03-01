import {
  WeatherBigText,
  WeatherInfo,
  WeatherTextBox,
  WeatherSmallText,
} from "./styled";

const WeatherTextBoxComponent = ({ weatherData }) => {
  const {
    data: { country, city, tempC, condition, humidity, windKph },
    status,
  } = weatherData;

  return (
    <WeatherInfo>
      {status === "error" && (
        <WeatherTextBox>
          <WeatherBigText>Ошибка получения данных</WeatherBigText>
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
              {country}, {city}
            </WeatherBigText>
            <WeatherBigText>{tempC}°C</WeatherBigText>
            <WeatherBigText>{condition}</WeatherBigText>
          </WeatherTextBox>
          <WeatherTextBox>
            <WeatherSmallText>Humidity: {humidity}%</WeatherSmallText>
            <WeatherSmallText>Wind Speed: {windKph} km/h</WeatherSmallText>
          </WeatherTextBox>
        </>
      )}
    </WeatherInfo>
  );
};

export default WeatherTextBoxComponent;
