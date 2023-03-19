/* eslint-disable no-unused-vars */
import { act, renderHook } from "@testing-library/react";
import { mockSuccessResult } from "__mocks__/mockCities";
import fetchWeather from "api/fetchWeather";
import useCurrentWeather from "./useCurrentWeather";

jest.mock("api/fetchWeather");

const initData = {
  country: null,
  city: null,
  tempC: null,
  condition: null,
  humidity: null,
  windKph: null,
};

describe("useCurrentWeather", () => {
  test('should get weather with status "success"', async () => {
    const mockFetchWeather = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(mockSuccessResult);
        }),
    );
    const latitude = 57.141464;
    const longitude = 65.576912;

    fetchWeather.mockImplementation(mockFetchWeather);

    const { result } = renderHook(() => useCurrentWeather(latitude, longitude));
    await act(async () => {
      await mockFetchWeather;
    });
    expect(result.current).toEqual(mockSuccessResult);
  });
});
