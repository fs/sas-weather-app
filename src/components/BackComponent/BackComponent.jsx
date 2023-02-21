/* eslint-disable prettier/prettier */
import WeatherCardComponent from "../WeatherCardComponent";
import { BackgroundColor } from "./styles";

const BackComponent = () => {
    return (
        <BackgroundColor>
            <WeatherCardComponent />
        </BackgroundColor>
    );
  };

export default BackComponent;
