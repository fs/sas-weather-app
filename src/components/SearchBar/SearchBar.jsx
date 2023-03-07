import { Search } from "react-bootstrap-icons";
import { useState } from "react";
import fetchCities from "../../api/fetchCities";
import { SearchDiv, SearchIconContainer, StyledSelect } from "./styled";

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
        <StyledSelect
          classNamePrefix="Select"
          placeholder="Search"
          loadOptions={loadOptions}
        />
        <SearchIconContainer>
          <Search width={20} height={20} />
        </SearchIconContainer>
      </SearchDiv>
      {error && <span>Error: {error.message}</span>}
    </>
  );
};

export default SearchBar;
