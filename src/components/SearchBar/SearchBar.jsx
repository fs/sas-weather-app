import { Search } from "react-bootstrap-icons";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import fetchCities from "api/fetchCities";
import {
  SearchDiv,
  SearchIconContainer,
  selectStyles,
} from "components/SearchBar/styled";

const SearchBar = () => {
  const [error, setError] = useState(null);

  const loadOptions = async (inputValue) => {
    if (inputValue !== "") {
      try {
        const result = await fetchCities(inputValue);
        setError(null);
        return { options: result };
      } catch (e) {
        setError(e);
      }
    }
    return { options: [] };
  };

  return (
    <>
      <SearchDiv>
        <AsyncPaginate
          debounceTimeout={350}
          placeholder="Search"
          loadOptions={loadOptions}
          styles={selectStyles}
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
