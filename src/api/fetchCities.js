import apiInstance from "api/apiInstance";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const searchUrl = "/search.json";

const fetchCities = async (string) => {
  const params = {
    key: apiKey,
    q: string,
  };

  const response = await apiInstance.get(searchUrl, { params });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  const mappedData = response.data.map(({ name, country }) => ({
    label: `${name}, ${country}`,
    value: `${name}, ${country}`,
  }));

  return mappedData;
};

export default fetchCities;
