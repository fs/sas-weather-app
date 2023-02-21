import styled from "styled-components";

const SearchDiv = styled.div`
  width: 464px;
  height: 47px;
  background: linear-gradient(
    269.42deg,
    #f2fbff -1.71%,
    rgba(242, 251, 255, 0.3) 100%
  );
  opacity: 0.5;
  border-radius: 18px;
  display: flex;
  flex-direction: row;

  margin-top: 39px;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  margin-left: 26px;
  margin: 12px 0px 12px 26px;
  /* :focus {
    border: none;
    outline: none;
  } */

  ::placeholder {
    color: rgba(242, 251, 255, 0.7);
  }
`;

export { SearchDiv, SearchInput };
