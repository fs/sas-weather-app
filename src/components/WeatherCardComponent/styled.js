import styled from "styled-components";

export const WeatherCard = styled.div`
  height: 720px;
  margin: auto;
  position: relative;
  background: linear-gradient(
    252.44deg,
    rgba(239, 255, 253, 0.7) 0%,
    rgba(239, 255, 253, 0) 100%
  );
  border-radius: 85px;
  @media only screen and (max-width: 599px) {
    background: none;
  }
  @media only screen and (min-width: 600px) {
    margin: 130px 50px;
  }
  @media only screen and (min-width: 800px) {
    margin: 130px 70px;
  }
  @media only screen and (min-width: 930px) {
    margin: 130px 100px;
  }
  @media only screen and (min-width: 1130px) {
    margin: 130px 150px;
  }
  @media only screen and (min-width: 1460px) {
    margin: 130px 180px;
  }
  @media only screen and (min-width: 1600px) {
    margin: 130px 250px;
  }
  @media only screen and (min-width: 1720px) {
    margin: 130px 290px;
  }
  @media only screen and (min-width: 1840px) {
    margin: 130px 310px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  color: ${(props) => props.theme.fontColor};
  /* backdrop-filter: blur(20px); */
`;

export default WeatherCard;
