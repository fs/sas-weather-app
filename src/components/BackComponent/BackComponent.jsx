import { useContext, useEffect, useState } from "react";
import fetchWeather from "../../api/fetchWeather";
import LocationContext from "../../context";
import { BackgroundColor, ErrorMessageBox } from "./styles";
import WeatherCardComponent from "../WeatherCardComponent";

const BackComponent = () => {
  const [data, setData] = useState();
  const { latitude, longitude } = useContext(LocationContext);
  const [error, setError] = useState(true);

  const getWeather = async () => {
    try {
      const response = await fetchWeather({ latitude, longitude });
      setData(response.data);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getWeather();
  }, [latitude, longitude]);

  return (
    <BackgroundColor>
      {error ? (
        <ErrorMessageBox>
          <p>Ошибка получения данных</p>
        </ErrorMessageBox>
      ) : (
        <WeatherCardComponent data={data} />
      )}
    </BackgroundColor>
  );
};

export default BackComponent;
