import { Search } from "react-bootstrap-icons";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import fetchCities from "../../api/fetchCities";
import { SearchDiv, SearchIconContainer, SearchInput } from "./styled";

const SearchBar = () => {
  const [error, setError] = useState(null);

  const loadOptions = async (inputValue, callback) => {
    if (inputValue !== "") {
      try {
        const result = await fetchCities(inputValue);
        setError(null);
        callback(result);
      } catch (e) {
        setError(e);
      }
    } else {
      callback([]);
    }
  };

  return (
    <>
      <SearchDiv>
        <SearchInput>
          <AsyncSelect placeholder="Search" loadOptions={loadOptions} />
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
