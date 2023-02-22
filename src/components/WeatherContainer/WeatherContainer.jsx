import { Container, BigText, SmallText, TextContainer } from "./styles";

const WeatherContainer = ({
  location,
  temperature,
  weather,
  humidity,
  wind,
}) => {
  return (
    <Container>
      <TextContainer>
        <BigText>{location}</BigText>
        <BigText>{temperature}</BigText>
        <BigText>{weather}</BigText>
      </TextContainer>
      <TextContainer>
        <SmallText>{humidity}</SmallText>
        <SmallText>{wind}</SmallText>
      </TextContainer>
    </Container>
  );
};

export default WeatherContainer;
