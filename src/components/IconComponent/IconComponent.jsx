import { BackgroundIcon } from "components/IconComponent/styled";
// import WeatherIcon from "img/rainy.png";

const IconComponent = ({ WeatherIcon }) => {
  return WeatherIcon ? (
    <BackgroundIcon src={WeatherIcon} alt="weatherIcon" />
  ) : null;
};

export default IconComponent;
