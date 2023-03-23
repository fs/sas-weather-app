import { act, renderHook } from "@testing-library/react";
import {
  mockFetchErrorResponse,
  mockFetchErrorResult,
  mockGeolocationErrorResult,
  mockSuccessResult,
} from "__mocks__/mockWeather";
import fetchWeather from "api/fetchWeather";
import useCurrentWeather from "./useCurrentWeather";

jest.mock("api/fetchWeather");

describe("useCurrentWeather", () => {
  test('should get weather with status "success" when lon and lat are passed to the function', async () => {
    const mockFetchWeather = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(mockSuccessResult);
        }),
    );
    const latitude = 57.141464;
    const longitude = 65.576912;

    fetchWeather.mockImplementation(mockFetchWeather);

    const { result } = renderHook(() =>
      useCurrentWeather({ latitude, longitude }),
    );
    await act(async () => {
      await mockFetchWeather;
    });
    expect(result.current).toEqual(mockSuccessResult);
  });

  test('should get weather with status "success" when city is passed to the function', async () => {
    const mockFetchWeather = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(mockSuccessResult);
        }),
    );
    const city = "Tyumen, Russia";

    fetchWeather.mockImplementation(mockFetchWeather);

    const { result } = renderHook(() => useCurrentWeather({ city }));
    await act(async () => {
      await mockFetchWeather;
    });
    expect(result.current).toEqual(mockSuccessResult);
  });

  test('should get weather with status "error" and error "Geolocation is unavailable" when lon and lat are both undefined', async () => {
    const latitude = undefined;
    const longitude = undefined;

    const { result } = renderHook(() =>
      useCurrentWeather({ latitude, longitude }),
    );

    expect(result.current).toEqual(mockGeolocationErrorResult);
  });

  test('should get weather with status "error" and error text from API call when the call resolves with an error', async () => {
    const mockFetchWeather = jest.fn(
      () =>
        new Promise(() => {
          throw mockFetchErrorResponse;
        }),
    );
    const latitude = 57.141464;
    const longitude = 65.576912;

    fetchWeather.mockImplementation(mockFetchWeather);

    const { result } = renderHook(() =>
      useCurrentWeather({ latitude, longitude }),
    );
    await act(async () => {
      await mockFetchWeather;
    });
    expect(result.current).toEqual(mockFetchErrorResult);
  });
});
