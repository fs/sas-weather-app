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

export default WeatherCard;
