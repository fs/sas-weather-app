const mockSuccessfulResponse = {
  data: [
    {
      id: 2145091,
      name: "Moscow",
      region: "Moscow City",
      country: "Russia",
      lat: 55.75,
      lon: 37.62,
      url: "moscow-moscow-city-russia",
    },
    {
      id: 2565560,
      name: "Moscow",
      region: "Idaho",
      country: "United States of America",
      lat: 46.73,
      lon: -117.0,
      url: "moscow-idaho-united-states-of-america",
    },
  ],
  status: 200,
};

const mockSuccessResult = [
  {
    label: "Moscow, Russia",
    value: "Moscow, Russia",
  },
  {
    label: "Moscow, United States of America",
    value: "Moscow, United States of America",
  },
];

const mockErrorResponse = {
  status: 404,
  statusText: "Not found",
};

export { mockSuccessfulResponse, mockSuccessResult, mockErrorResponse };
