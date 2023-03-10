/* eslint-disable no-unused-vars */
import apiInstance from "./apiInstance";
import {
  mockErrorResponse,
  mockErrorResult,
  mockSuccessfulResponse,
  mockSuccessResult,
} from "../__mocks__/mockWeather";
import fetchWeather from "./fetchWeather";

jest.mock("./apiInstance");

describe("fetchWeather", () => {
  test("should fetch successful weather request", async () => {
    const latitude = 57.141464;
    const longitude = 65.576912;

    const params = {
      key: process.env.REACT_APP_WEATHER_API_KEY,
      q: `${latitude},${longitude}`,
    };
    const weatherUrl = "/current.json";

    const expectedResponse = mockSuccessfulResponse;
    const mockGetRequest = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(expectedResponse);
        }),
    );

    apiInstance.get.mockImplementation(mockGetRequest);

    const result = await fetchWeather({
      latitude,
      longitude,
    });

    expect(apiInstance.get).toHaveBeenCalledTimes(1);
    expect(apiInstance.get).toHaveBeenCalledWith(weatherUrl, { params });
    expect(result).toEqual(mockSuccessResult);
  });

  test("should fetch failed weather request", () => {
    const latitude = 57.141464;
    const longitude = 65.576912;

    const params = {
      key: process.env.REACT_APP_WEATHER_API_KEY,
      q: `${latitude},${longitude}`,
    };
    const weatherUrl = "/current.json";

    const expectedResponse = mockErrorResponse;
    const mockGetRequest = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(expectedResponse);
        }),
    );

    apiInstance.get.mockImplementation(mockGetRequest);

    const result = async () => {
      await fetchWeather({
        latitude,
        longitude,
      });
    };

    expect(result()).rejects.toThrow(new Error(expectedResponse.statusText));
    expect(apiInstance.get).toHaveBeenCalledTimes(1);
    expect(apiInstance.get).toHaveBeenCalledWith(weatherUrl, { params });
  });
});
