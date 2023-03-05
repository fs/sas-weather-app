/* eslint-disable no-unused-vars */
import apiInstance from "./apiInstance";
import { mockResponse, mockSuccessResult } from "../__mocks__/mockWeather";
import fetchWeather from "./fetchWeather";

jest.mock("./apiInstance");

describe("fetchWeather", () => {
  test("should fetch successful weather request", async () => {
    const expectedLatitude = 57.141464;
    const expectedLongitude = 65.576912;

    const params = {
      key: process.env.REACT_APP_WEATHER_API_KEY,
      q: `${expectedLatitude},${expectedLongitude}`,
    };
    const weatherUrl = "/current.json";

    const expectedResponse = mockResponse;
    const mockGetRaquest = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(expectedResponse);
        }),
    );

    apiInstance.get.mockImplementation(mockGetRaquest);

    const result = await fetchWeather({
      latitude: expectedLatitude,
      longitude: expectedLongitude,
    });

    expect(apiInstance.get).toHaveBeenCalledTimes(1);
    expect(apiInstance.get).toHaveBeenCalledWith(weatherUrl, { params });
    expect(result).toEqual(mockSuccessResult);
  });
});
