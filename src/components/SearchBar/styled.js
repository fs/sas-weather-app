import styled from "styled-components";
import { rgba } from "polished";

import { commonStyles } from "../../global/themes";

const SearchDiv = styled.div`
  position: relative;
  display: flex;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    width: 465px;
    margin: 0 auto;
  }
`;

const selectStyles = {
  container: () => ({
    width: "100%",
  }),
  control: (styles) => ({
    ...styles,
    width: "100%",
    background: `linear-gradient(
      269deg,
      ${rgba(commonStyles.bgSearch, 0.75, 1)} -2%,
      ${rgba(commonStyles.bgSearch, 0.3)} 100%
    )`,
    border: "none",
    innerHeight: 45,
    cursor: "pointer",
    borderRadius: "18px",
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused
      ? rgba(commonStyles.colorWhite, 0.6)
      : rgba(commonStyles.colorWhite, 0.3),
    color: commonStyles.colorBlack,
    cursor: "pointer",
  }),
  indicatorsContainer: () => ({
    display: "none",
  }),
};

const SearchIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  cursor: pointer;
`;

export { SearchDiv, SearchIconContainer, selectStyles };
