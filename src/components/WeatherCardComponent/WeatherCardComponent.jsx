/* eslint-disable react/self-closing-comp */
import SearchBar from "../SearchBar";
import {
  WeatherBigText,
  WeatherCard,
  WeatherInfo,
  WeatherSmallText,
  WeatherTextBox,
} from "./styles";

const WeatherCardComponent = ({ data }) => {
  const { status, country, city, tempC, condition, humidity, windKph } = data;

  return (
    <WeatherCard>
      <SearchBar />
      <WeatherInfo>
        <WeatherTextBox>
          {(status === "error" && (
            <WeatherBigText>Ошибка получения данных</WeatherBigText>
          )) ||
            (status === "loading" && (
              <WeatherBigText>Загрузка погоды</WeatherBigText>
            ))}
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
      </WeatherInfo>
    </WeatherCard>
  );
};

export default WeatherCardComponent;
