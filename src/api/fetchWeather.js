import apiInstance from "./apiInstance";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const weatherUrl = "/current.json";

const fetchWeather = async ({ latitude, longitude } = {}) => {
  const params = {
    key: apiKey,
    q: `${latitude},${longitude}`,
  };

  const response = await apiInstance.get(weatherUrl, { params });

  if (response.status === 200) {
    return {
      status: "success",
      error: null,
      data: {
        country: response.data.location.country,
        city: response.data.location.name,
        tempC: response.data.current.temp_c,
        condition: response.data.current.condition.text,
        humidity: response.data.current.humidity,
        windKph: response.data.current.wind_kph,
      },
    };
  }

  return {
    status: "error",
    data: {
      country: null,
      city: null,
      tempC: null,
      condition: null,
      humidity: null,
      windKph: null,
    },
    error: response.statusText,
  };
};

export default fetchWeather;
