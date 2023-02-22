import IconComponent from "../IconComponent";
import WeatherCardComponent from "../WeatherCardComponent";
import { BackgroundColor } from "./styles";

const BackComponent = () => {
  return (
    <BackgroundColor>
      <IconComponent />
      <WeatherCardComponent />
    </BackgroundColor>
  );
};

export default BackComponent;
