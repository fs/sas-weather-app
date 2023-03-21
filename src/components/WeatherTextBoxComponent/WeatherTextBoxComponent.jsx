import {
  WeatherBigText,
  WeatherInfo,
  WeatherTextBox,
  WeatherSmallText,
} from "components/WeatherTextBoxComponent/styled";

const WeatherTextBoxComponent = ({
  weatherData,
  status,
  error,
  locationError,
}) => {
  const { country, city, tempC, condition, humidity, windKph } = weatherData;
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
