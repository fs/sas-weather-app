import styled from "styled-components";
import { rgba } from "polished";

import { commonStyles } from "global/themes";

const SearchDiv = styled.div`
  position: relative;
  display: flex;

  @media only screen and (max-width: 649px) {
    width: 100%;
  }

  @media only screen and (min-width: 650px) {
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
    boxShadow: "none",
    innerHeight: 45,
    cursor: "pointer",
    borderRadius: "18px",
  }),
  menu: (styles) => ({
    ...styles,
    width: "100%",
    borderRadius: "18px",
    background: `linear-gradient(
      269deg,
      ${rgba(commonStyles.bgSearch, 0.75, 1)} -2%,
      ${rgba(commonStyles.bgSearch, 0.5)} 100%
    )`,
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    borderRadius: "18px",
    backgroundColor: isFocused
      ? rgba(commonStyles.bgSearch, 1)
      : rgba(commonStyles.bgSearch, 0.3),
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
