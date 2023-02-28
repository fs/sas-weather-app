import styled from "styled-components";

export const BackgroundIcon = styled.div`
  position: absolute;
  right: -200px;
  top: -163px;
  z-index: -1;
  @media only screen and (max-width: 599px) {
    display: none;
  }
`;

export default BackgroundIcon;
