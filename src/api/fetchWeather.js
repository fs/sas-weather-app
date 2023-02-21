import apiInstance from "./apiInstance";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const weatherUrl = "/current.json";

const fetchWeather = async ({ latitude, longitude } = {}) => {
  const params = {
    key: apiKey,
    q: `${latitude},${longitude}`,
  };

  const data = await apiInstance.get(weatherUrl, { params });
  return data;
};

export default fetchWeather;
