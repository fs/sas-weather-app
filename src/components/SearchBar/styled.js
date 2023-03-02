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

const SearchInput = styled.div`
  flex-grow: 1;
  padding: 10px;
`;

const SearchIconContainer = styled.div`
  margin: 13px 26px 14px 10px;
  cursor: pointer;
`;

export { SearchDiv, SearchIconContainer, SearchInput };
