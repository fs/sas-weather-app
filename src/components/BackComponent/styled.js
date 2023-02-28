import styled from "styled-components";

const BackgroundColor = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  position: fixed;
  height: 100vh;
  width: 100%;
`;

export default BackgroundColor;
