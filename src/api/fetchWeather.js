import apiInstance from "./apiInstance";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const weatherUrl = "/current.json";

const fetchWeather = async ({ longitude, latitude, city }) => {
  const params = {
    key: apiKey,
  };

  if (city) {
    params.q = city;
  } else {
    params.q = `${longitude},${latitude}`;
  }

  const response = await apiInstance.get(weatherUrl, { params });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return {
    status: "success",
    error: null,
    weatherData: {
      country: response.data.location.country,
      city: response.data.location.name,
      tempC: response.data.current.temp_c,
      condition: response.data.current.condition.text,
      humidity: response.data.current.humidity,
      windKph: response.data.current.wind_kph,
    },
  };
};

export default fetchWeather;
