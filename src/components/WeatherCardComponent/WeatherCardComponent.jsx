/* eslint-disable react/self-closing-comp */
import IconComponent from "components/IconComponent";
import SearchBar from "components/SearchBar";
import WeatherCard from "components/WeatherCardComponent/styled";
import WeatherTextBoxComponent from "components/WeatherTextBoxComponent";

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
