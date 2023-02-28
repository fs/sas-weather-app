import styled from "styled-components";

const BackgroundColor = styled.div`
  background-color: rgba(113, 43, 117, 1);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`;

const ErrorMessageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  aling-items: center;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 55px;
    color: rgba(242, 251, 255, 0.7);
    margin: 0;
  }
`;

export { BackgroundColor, ErrorMessageBox };
