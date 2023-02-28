/* eslint-disable react/self-closing-comp */
import SearchBar from "../SearchBar";
import IconComponent from "../IconComponent";
import {
  WeatherBigText,
  WeatherCard,
  WeatherInfo,
  WeatherSmallText,
  WeatherTextBox,
} from "./styled";

const WeatherCardComponent = ({ data }) => {
  const { status, country, city, tempC, condition, humidity, windKph } = data;

  if (status === "ok") {
    return (
      <WeatherCard>
        <SearchBar />
        <WeatherInfo>
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
        </WeatherInfo>
      </WeatherCard>
    );
  }
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
        </WeatherTextBox>
      </WeatherInfo>
      <IconComponent />
    </WeatherCard>
  );
};

export default WeatherCardComponent;
