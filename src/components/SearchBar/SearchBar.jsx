import { Search } from "react-bootstrap-icons";
import { useState } from "react";
import fetchAutocomplete from "../Autocomplete/Autocomplete";
import { SearchDiv, SearchInput, SearchIconContainer } from "./styled";
import OptionsList from "../Autocomplete/OptionsList";

const SearchBar = () => {
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (string) => {
    const fetchData = async () => {
      try {
        const result = await fetchAutocomplete(string);
        setError(null);
        setOptions(result.data);
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
  };

  return (
    <>
      <SearchDiv>
        <SearchInput
          placeholder="Search"
          onChange={(e) => handleChange(e.target.value)}
        />
        <SearchIconContainer>
          <Search width={20} height={20} />
        </SearchIconContainer>
      </SearchDiv>
      {error ? (
        <span>Error: {error.message}</span>
      ) : (
        <OptionsList options={options} />
      )}
    </>
  );
};

export default SearchBar;
