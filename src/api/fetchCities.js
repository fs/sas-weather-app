import apiInstance from "./apiInstance";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const searchUrl = "/search.json";

const fetchCities = async (string) => {
  const params = {
    key: apiKey,
    q: string,
  };
  const data = await apiInstance.get(searchUrl, { params });

  const mappedData = data.data.map(({ name, country }) => ({
    label: `${name}, ${country}`,
    value: `${name}, ${country}`,
  }));

  const preparedOptions = { options: mappedData };

  return preparedOptions;
};

export default fetchCities;
