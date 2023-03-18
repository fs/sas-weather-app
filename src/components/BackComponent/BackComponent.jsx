import { useState } from "react";
import { ThemeProvider } from "styled-components";
import WeatherCardComponent from "components/WeatherCardComponent";
import { sunnyTheme, commonStyles } from "global/themes";
import BackgroundColor from "components/BackComponent/styled";

const BackComponent = () => {
  const [theme, setTheme] = useState({
    ...sunnyTheme,
    ...commonStyles,
  });

  const handleChange = (newTheme) => {
    // eslint-disable-next-line no-console
    console.log(newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <BackgroundColor>
        <WeatherCardComponent handleChange={handleChange} />
      </BackgroundColor>
    </ThemeProvider>
  );
};

export default BackComponent;
