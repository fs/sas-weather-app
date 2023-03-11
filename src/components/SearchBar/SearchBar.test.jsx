import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { mockSuccessResult } from "../../__mocks__/mockCities";
import SearchBar from "./SearchBar";
import fetchCities from "../../api/fetchCities";

jest.mock("../../api/fetchCities");

describe("SearchBar", () => {
  test("should call fetchCities", async () => {
    // Arrange
    const input = "Moscow";

    const expectedResult = mockSuccessResult;
    const mockFetchCities = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(expectedResult);
        }),
    );

    fetchCities.mockImplementation(mockFetchCities);

    render(<SearchBar />);
    const cityInput = screen.getByRole("combobox");

    // Act
    fireEvent.change(cityInput, {
      target: { value: input },
    });

    // Assert
    await waitFor(() => expect(mockFetchCities).toHaveBeenCalledWith(input));
  });
});
