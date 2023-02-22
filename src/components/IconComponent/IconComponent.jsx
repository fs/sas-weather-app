import WeatherIcon from "../../img/Rainy.png";
import { BackgroundIcon } from "./styles";

const BackComponent = () => {
  return (
    <BackgroundIcon>
      <img src={WeatherIcon} width={340} height={340} alt="weatherIcon" />
    </BackgroundIcon>
  );
};

export default BackComponent;
