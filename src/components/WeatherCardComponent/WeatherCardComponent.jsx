import SearchBar from "../SearchBar";
import { WeatherCard } from "./styled";
import IconComponent from "../IconComponent";

const WeatherCardComponent = () => {
  return (
    <WeatherCard>
      <SearchBar />
      <IconComponent />
    </WeatherCard>
  );
};

export default WeatherCardComponent;
