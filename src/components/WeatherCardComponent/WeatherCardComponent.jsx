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
  // eslint-disable-next-line no-console
  return (
    <WeatherCard>
      <SearchBar />
      <WeatherInfo>
        <WeatherTextBox>
          <WeatherBigText>
            {data.location.country}, {data.location.name}
          </WeatherBigText>
          <WeatherBigText>{data.current.temp_c}°C</WeatherBigText>
          <WeatherBigText>{data.current.condition.text}</WeatherBigText>
        </WeatherTextBox>
        <WeatherTextBox>
          <WeatherSmallText>
            Humidity: {data.current.humidity}%
          </WeatherSmallText>
          <WeatherSmallText>
            Wind Speed: {data.current.wind_kph} km/h
          </WeatherSmallText>
        </WeatherTextBox>
      </WeatherInfo>
    </WeatherCard>
  );
};

export default WeatherCardComponent;
