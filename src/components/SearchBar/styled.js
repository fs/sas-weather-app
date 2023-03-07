import styled from "styled-components";
import { rgba } from "polished";
import AsyncSelect from "react-select/async";

const SearchDiv = styled.div(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  height: 47px;
  background: linear-gradient(
    269deg,
    ${rgba(theme.bgSearch, 0.75, 1)} -2%,
    ${rgba(theme.bgSearch, 0.3)} 100%
  );

  border-radius: 18px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    width: 465px;
    margin: 0 auto;
  }
`,
);

const StyledSelect = styled(AsyncSelect)`
  .Select__control {
    border: none;
    height: 47px;
    cursor: pointer;
    background-color: inherit;

    @media only screen and (min-width: 600px) {
      width: 400px;
    }
  }

  .Select__control--is-focused {
    box-shadow: none;
    border-radius: 18px;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__dropdown-indicator {
    display: none;
  }

  .Select__menu {
    background: inherit;
    border-radius: 18px;

    @media only screen and (min-width: 600px) {
      width: 465px;
    }
  }

  .Select__option {
    border-radius: 18px;
  }
`;

const SearchIconContainer = styled.div`
  margin: 13px 26px 14px 10px;
  cursor: pointer;
`;

export { SearchDiv, SearchIconContainer, StyledSelect };
