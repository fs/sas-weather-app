import { Search } from "react-bootstrap-icons";
import { useState } from "react";
import Select from "react-select";
import fetchAutocomplete from "../Autocomplete/autocomplete";
import { SearchDiv, SearchIconContainer, SearchInput } from "./styled";

const SearchBar = () => {
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = async (string) => {
    if (string !== "") {
      try {
        const result = await fetchAutocomplete(string);
        setError(null);
        setOptions(result);
      } catch (e) {
        setError(e);
      }
    }
  };

  return (
    <>
      <SearchDiv>
        <SearchInput>
          <Select
            placeholder="Search"
            onInputChange={handleChange}
            options={options}
          />
        </SearchInput>
        <SearchIconContainer>
          <Search width={20} height={20} />
        </SearchIconContainer>
      </SearchDiv>
      {error && <span>Error: {error.message}</span>}
    </>
  );
};

export default SearchBar;
