import styled from "styled-components";

const Container = styled.div`
  height: 65%;
  width: 65%;

  padding: 75px 40px;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 11px;
`;

const BigText = styled.p`
  font-family: "Rubik";
  font-size: 46px;
  line-height: 55px;

  color: rgba(242, 251, 255, 0.7);

  margin: 0;
`;

const SmallText = styled.p`
  font-family: "Rubik";
  font-size: 34px;
  line-height: 40px;

  color: rgba(242, 251, 255, 0.7);

  margin: 0;
`;

export { Container, BigText, SmallText, TextContainer };
