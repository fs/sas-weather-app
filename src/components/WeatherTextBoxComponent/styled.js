import styled from "styled-components";

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 70px;

  width: 100%;
  padding: 80px;

  box-sizing: border-box;
`;

const WeatherTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const WeatherBigText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 55px;
  color: rgba(242, 251, 255, 0.7);
  margin: 0;
`;

const WeatherSmallText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: rgba(242, 251, 255, 0.7);
  margin: 0;
`;

export { WeatherSmallText, WeatherBigText, WeatherTextBox, WeatherInfo };
