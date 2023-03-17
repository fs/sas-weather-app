import { useState } from "react";
import { ThemeProvider } from "styled-components";
import WeatherCardComponent from "components/WeatherCardComponent";
import {
  rainyTheme,
  sunnyTheme,
  cloudyTheme,
  thunderTheme,
  snowyTheme,
  commonStyles,
} from "global/themes";
import BackgroundColor from "components/BackComponent/styled";

const BackComponent = () => {
  const [theme] = useState({
    ...rainyTheme,
    ...sunnyTheme,
    ...cloudyTheme,
    ...thunderTheme,
    ...snowyTheme,
    ...commonStyles,
  });

  return (
    <ThemeProvider theme={theme}>
      <BackgroundColor>
        <WeatherCardComponent />
      </BackgroundColor>
    </ThemeProvider>
  );
};

export default BackComponent;
