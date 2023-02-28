import styled from "styled-components";
import { rgba } from "polished";

const SearchDiv = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
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

const SearchInput = styled.input(
  ({ theme }) => `
  background: none;
  border: none;
  padding: 12px 0px 12px 26px;
  color: ${theme.fontColor};

  &:focus {
    border: none;
    outline: none;
  }

  flex-grow: 1;

  &::placeholder {
    color: ${rgba(theme.fontColor, 0.7)};
  }
`,
);

const SearchIconContainer = styled.div`
  margin: 13px 26px 14px 10px;
  cursor: pointer;
`;

export { SearchDiv, SearchInput, SearchIconContainer };
