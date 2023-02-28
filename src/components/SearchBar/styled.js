import styled from "styled-components";

const SearchDiv = styled.div`
  height: 47px;
  width: 40%;
  background: linear-gradient(
    269.42deg,
    #f2fbff -1.71%,
    rgba(242, 251, 255, 0.5) 100%
  );
  opacity: 0.8;
  border-radius: 18px;
  display: flex;
  flex-direction: row;
  margin-top: 39px;
  @media only screen and (max-width: 600px) {
    width: 70%;
  }
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  margin-left: 26px;
  margin: 12px 0px 12px 26px;

  :focus {
    border: none;
    outline: none;
  }

  flex-grow: 1;

  ::placeholder {
    color: rgba(242, 251, 255, 0.7);
  }
`;

const SearchIconContainer = styled.div`
  margin: 13px 26px 14px 10px;
  cursor: pointer;
`;

export { SearchDiv, SearchInput, SearchIconContainer };
