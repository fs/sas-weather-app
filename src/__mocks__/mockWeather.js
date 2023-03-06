const mockSuccessfulResponse = {
  data: {
    location: {
      name: "Tyumen",
      region: "Tyumen'",
      country: "Russia",
      lat: 57.14,
      lon: 65.58,
      tz_id: "Asia/Yekaterinburg",
      localtime_epoch: 1678033310,
      localtime: "2023-03-05 21:21",
    },
    current: {
      last_updated_epoch: 1678032900,
      last_updated: "2023-03-05 21:15",
      temp_c: -3.0,
      temp_f: 26.6,
      is_day: 0,
      condition: {
        text: "Light snow showers",
        icon: "//cdn.weatherapi.com/weather/64x64/night/368.png",
        code: 1255,
      },
      wind_mph: 6.9,
      wind_kph: 11.2,
      wind_degree: 170,
      wind_dir: "S",
      pressure_mb: 1000.0,
      pressure_in: 29.53,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 86,
      cloud: 60,
      feelslike_c: -7.9,
      feelslike_f: 17.8,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 1.0,
      gust_mph: 13.6,
      gust_kph: 22.0,
    },
  },
  status: 200,
};

const mockSuccessResult = {
  status: "success",
  error: null,
  data: {
    country: mockSuccessfulResponse.data.location.country,
    city: mockSuccessfulResponse.data.location.name,
    tempC: mockSuccessfulResponse.data.current.temp_c,
    condition: mockSuccessfulResponse.data.current.condition.text,
    humidity: mockSuccessfulResponse.data.current.humidity,
    windKph: mockSuccessfulResponse.data.current.wind_kph,
  },
};

const mockErrorResponse = {
  status: 404,
  statusTest: "Not Found",
};

const mockErrorResult = {
  status: "error",
  data: {
    country: null,
    city: null,
    tempC: null,
    condition: null,
    humidity: null,
    windKph: null,
  },
  error: mockErrorResponse.statusText,
};

export {
  mockSuccessfulResponse,
  mockSuccessResult,
  mockErrorResponse,
  mockErrorResult,
};
