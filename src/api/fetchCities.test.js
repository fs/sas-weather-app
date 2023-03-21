import {
  mockErrorResponse,
  mockSuccessfulResponse,
  mockSuccessResult,
} from "__mocks__/mockCities";
import apiInstance from "api/apiInstance";
import fetchCities from "api/fetchCities";

jest.mock("./apiInstance");

describe("fetchCities", () => {
  test("should return array of cities", async () => {
    // Arrange
    const city = "Moscow";
    const params = {
      key: process.env.REACT_APP_WEATHER_API_KEY,
      q: city,
    };
    const searchUrl = "/search.json";

    const mockGetRequest = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(mockSuccessfulResponse);
        }),
    );

    apiInstance.get.mockImplementation(mockGetRequest);

    // Act
    const result = await fetchCities(city);

    // Assert
    expect(apiInstance.get).toHaveBeenCalledTimes(1);
    expect(apiInstance.get).toHaveBeenCalledWith(searchUrl, { params });
    expect(result).toEqual(mockSuccessResult);
  });

  test("should fetch failed city request", async () => {
    // Arrange
    const city = "Moscow";

    const params = {
      key: process.env.REACT_APP_WEATHER_API_KEY,
      q: city,
    };
    const searchUrl = "/search.json";

    const mockGetRequest = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(mockErrorResponse);
        }),
    );

    apiInstance.get.mockImplementation(mockGetRequest);

    // Act

    const result = async () => {
      await fetchCities(city);
    };

    expect(result()).rejects.toThrow(new Error(mockErrorResponse.statusText));
    expect(apiInstance.get).toHaveBeenCalledTimes(1);
    expect(apiInstance.get).toHaveBeenCalledWith(searchUrl, { params });
  });
});
