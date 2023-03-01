import apiInstance from "../../api/apiInstance";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const searchUrl = "/search.json";

const fetchAutocomplete = async (string) => {
  const params = {
    key: apiKey,
    q: string,
  };
  const data = await apiInstance.get(searchUrl, { params });

  return data;
};

export default fetchAutocomplete;
