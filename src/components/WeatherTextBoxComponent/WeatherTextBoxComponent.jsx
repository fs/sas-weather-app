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
  sunnyTheme,
  cloudyTheme,
  commonStyles,
  rainyTheme,
  snowyTheme,
  thunderTheme,
  defaultTheme,
} from "global/themes";

const WeatherTextBoxComponent = ({ handleChange }) => {
  const { latitude, longitude } = useContext(LocationContext);
  const { weatherData, status, error } = useCurrentWeather(latitude, longitude);

  const getTheme = (code) => {
    const themes = [
      {
        codes: [1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201],
        name: rainyTheme,
      },
      { codes: [1000], name: sunnyTheme },
      { codes: [1003, 1006], name: cloudyTheme },
      { codes: [1087, 1273, 1276, 1279, 1282], name: thunderTheme },
      {
        codes: [1066, 1114, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225],
        name: snowyTheme,
      },
    ];

    const theme = themes.find((element) => element.codes.includes(code));
    return theme ? theme.name : defaultTheme;
  };

  useEffect(() => {
    const weatherCode = weatherData.conditionCode;
    const chosenTheme = getTheme(weatherCode);

    handleChange({ ...chosenTheme, ...commonStyles });
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
