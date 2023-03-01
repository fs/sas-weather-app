/* eslint-disable react/self-closing-comp */
import SearchBar from "../SearchBar";
import IconComponent from "../IconComponent";
import { WeatherCard } from "./styled";
import WeatherTextBoxComponent from "../WeatherTextBoxComponent";

const WeatherCardComponent = ({ weatherData }) => {
  return (
    <WeatherCard>
      <SearchBar />
      <WeatherTextBoxComponent weatherData={weatherData} />
      <IconComponent />
    </WeatherCard>
  );
};

export default WeatherCardComponent;
