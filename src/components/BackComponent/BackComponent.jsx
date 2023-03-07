import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { rainyTheme, commonStyles } from "../../global/themes";
import BackgroundColor from "./styled";
import WeatherCardComponent from "../WeatherCardComponent";

const BackComponent = () => {
  const [theme] = useState({ ...rainyTheme, ...commonStyles });

  return (
    <ThemeProvider theme={theme}>
      <BackgroundColor>
        <WeatherCardComponent />
      </BackgroundColor>
    </ThemeProvider>
  );
};

export default BackComponent;
