import styled from "styled-components";
import { rgba } from "polished";

const WeatherCard = styled.div(
  ({ theme }) => `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 720px;
  padding: 40px;

  background: linear-gradient(
    252deg,
    ${rgba(theme.bgWhite, 0.75)} 0%,
    ${rgba(theme.bgWhite, 0)} 100%
  );
  border-radius: 85px;
  color: ${theme.fontColor};

  @media only screen and (max-width: 649px) {
    background: none;
  }

  @media only screen and (min-width: 650px) {
    margin: 110px 50px;
  }

  @media only screen and (min-width: 800px) {
    margin: 120px auto;
    width: 680px;
  }

  @media only screen and (min-width: 1280px) {
    margin: 130px auto;
    width: 990px;
  }

  @media only screen and (min-width: 1460px) {
    margin: 130px auto;
    width: 1280px;
  }
`,
);

export default WeatherCard;
