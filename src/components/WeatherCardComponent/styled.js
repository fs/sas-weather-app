import styled from "styled-components";

export const WeatherCard = styled.div`
  height: 720px;
  background: linear-gradient(
    252.44deg,
    rgba(239, 255, 253, 0.7) 0%,
    rgba(239, 255, 253, 0) 100%
  );
  border-radius: 85px;
  backdrop-filter: blur(20px);

  @media only screen and (min-width: 1080px) {
    margin: 130px 180px 180px 180px;
  }
  @media only screen and (min-width: 1840px) {
    margin: 180px 313px 180px 327px;
  }
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.fontColor};
`;

export default WeatherCard;
