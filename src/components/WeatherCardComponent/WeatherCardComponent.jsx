/* eslint-disable react/self-closing-comp */
import IconComponent from "components/IconComponent";
import SearchBar from "components/SearchBar";
import WeatherCard from "components/WeatherCardComponent/styled";
import WeatherTextBoxComponent from "components/WeatherTextBoxComponent";

const WeatherCardComponent = ({ handleChange }) => {
  return (
    <WeatherCard>
      <SearchBar />
      <WeatherTextBoxComponent handleChange={handleChange} />
      <IconComponent />
    </WeatherCard>
  );
};

export default WeatherCardComponent;
