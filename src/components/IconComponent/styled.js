import styled from "styled-components";

export const BackgroundIcon = styled.img`
  position: absolute;
  z-index: -1;

  @media only screen and (max-width: 599px) {
    background: none;
  }

  @media only screen and (min-width: 600px) {
    right: -120px;
    top: -80px;
    width: 300px;
  }

  @media only screen and (min-width: 1280px) {
    right: -120px;
    top: -100px;
    width: 380px;
  }

  @media only screen and (min-width: 1680px) {
    right: -200px;
    top: -160px;
    width: 500px;
  }
`;

export default BackgroundIcon;
