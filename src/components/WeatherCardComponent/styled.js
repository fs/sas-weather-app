import styled from "styled-components";

const WeatherCard = styled.div`
  height: 720px;
  margin: auto;
  position: relative;
  background: linear-gradient(
    252.44deg,
    rgba(239, 255, 253, 0.7) 0%,
    rgba(239, 255, 253, 0) 100%
  );
  border-radius: 85px;
  @media only screen and (min-width: 500px) {
    margin: 20px 100px;
  }
  @media only screen and (min-width: 930px) {
    margin: 80px 220px;
  }
  @media only screen and (min-width: 930px) {
    margin: 80px 220px;
  }
  @media only screen and (min-width: 1130px) {
    margin: 100px 220px;
  }
  @media only screen and (min-width: 1840px) {
    margin: 180px 313px 180px 327px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  color: ${(props) => props.theme.fontColor};
  /* backdrop-filter: blur(20px); */
`;

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

export {
  WeatherCard,
  WeatherInfo,
  WeatherTextBox,
  WeatherBigText,
  WeatherSmallText,
};
