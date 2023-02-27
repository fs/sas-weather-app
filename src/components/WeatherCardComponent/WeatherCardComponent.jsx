/* eslint-disable react/self-closing-comp */
import SearchBar from "../SearchBar";
import {
  WeatherBigText,
  WeatherCard,
  WeatherInfo,
  WeatherSmallText,
  WeatherTextBox,
} from "./styles";

const WeatherCardComponent = ({ response }) => {
  // eslint-disable-next-line no-console
  console.log(response);
  if (response && response.status === 200) {
    return (
      <WeatherCard>
        <SearchBar />
        <WeatherInfo>
          <WeatherTextBox>
            <WeatherBigText>
              {response.data.location.country}, {response.data.location.name}
            </WeatherBigText>
            <WeatherBigText>{response.data.current.temp_c}°C</WeatherBigText>
            <WeatherBigText>
              {response.data.current.condition.text}
            </WeatherBigText>
          </WeatherTextBox>
          <WeatherTextBox>
            <WeatherSmallText>
              Humidity: {response.data.current.humidity}%
            </WeatherSmallText>
            <WeatherSmallText>
              Wind Speed: {response.data.current.wind_kph} km/h
            </WeatherSmallText>
          </WeatherTextBox>
        </WeatherInfo>
      </WeatherCard>
    );
  }

  return <div />;
};

export default WeatherCardComponent;
