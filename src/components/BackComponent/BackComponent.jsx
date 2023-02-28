import { ThemeProvider } from "styled-components";
import { useState } from "react";
import WeatherCardComponent from "../WeatherCardComponent";
import { BackgroundColor } from "./styled";
import { rainyTheme } from "../../global/themes";

const BackComponent = () => {
  const [theme] = useState(rainyTheme);

  return (
    <ThemeProvider theme={theme}>
      <BackgroundColor>
        <WeatherCardComponent />
      </BackgroundColor>
    </ThemeProvider>
  );
};

export default BackComponent;
