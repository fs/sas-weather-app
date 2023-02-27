import styled from "styled-components";

export const BackgroundColor = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`;

export default BackgroundColor;
