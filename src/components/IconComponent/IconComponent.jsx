import WeatherIcon from "../../img/Rainy.png";
import { BackgroundIcon } from "./styled";

const BackComponent = () => {
  return (
    <BackgroundIcon>
      <img src={WeatherIcon} alt="weatherIcon" />
    </BackgroundIcon>
  );
};

export default BackComponent;
