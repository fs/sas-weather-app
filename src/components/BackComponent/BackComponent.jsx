import { ThemeProvider } from "styled-components";
import { useState } from "react";
import WeatherCardComponent from "../WeatherCardComponent";
import { BackgroundColor } from "./styled";
import { rainyTheme, commonStyles } from "../../global/themes";

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
