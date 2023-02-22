import { Search } from "react-bootstrap-icons";
import { SearchDiv, SearchInput, SearchIconContainer } from "./styles";

const SearchBar = () => {
  return (
    <SearchDiv>
      <SearchInput placeholder="Search" />
      <SearchIconContainer>
        <Search width={20} height={20} />
      </SearchIconContainer>
    </SearchDiv>
  );
};

export default SearchBar;
