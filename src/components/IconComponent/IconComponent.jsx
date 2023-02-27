import WeatherIcon from "../../img/rainy.png";
import { BackgroundIcon } from "./styled";

const BackComponent = () => {
  return (
    <BackgroundIcon>
      <img src={WeatherIcon} alt="weatherIcon" />
    </BackgroundIcon>
  );
};

export default BackComponent;
