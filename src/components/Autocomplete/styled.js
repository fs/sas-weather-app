import styled from "styled-components";
import { rgba } from "polished";

const ListStyle = styled.ul(
  ({ theme }) => `
  padding: 0;
  border-radius: 18px;
  background: linear-gradient(
    269deg,
    ${rgba(theme.bgSearch, 0.75, 1)} -2%,
    ${rgba(theme.bgSearch, 0.3)} 100%
  );
  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    width: 465px;
    margin: 0 auto;
  }
`,
);

const LiStyle = styled.li`
  list-style-type: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 18px;
  &:hover {
    text-decoration: underline;
  );
`;

export { ListStyle, LiStyle };
