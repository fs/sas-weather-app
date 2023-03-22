import { BackgroundIcon } from "components/IconComponent/styled";

const IconComponent = ({ WeatherIcon }) => {
  return WeatherIcon ? (
    <BackgroundIcon src={WeatherIcon} alt="weatherIcon" />
  ) : null;
};

export default IconComponent;
