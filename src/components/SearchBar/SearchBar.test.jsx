import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { mockSuccessResult } from "../../__mocks__/mockCities";
import SearchBar from "./SearchBar";
import fetchCities from "../../api/fetchCities";

jest.mock("../../api/fetchCities");

describe("SearchBar", () => {
  test("should call fetchCities", async () => {
    // Arrange
    const input = "Moscow";

    const mockFetchCities = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(mockSuccessResult);
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

  test("should render valid options", async () => {
    // Arrange
    const input = "Moscow";

    const mockFetchCities = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(mockSuccessResult);
        }),
    );

    fetchCities.mockImplementation(mockFetchCities);

    render(<SearchBar />);
    const cityInput = screen.getByRole("combobox");

    // Act
    fireEvent.change(cityInput, {
      target: { value: input },
    });

    const option1 = await waitFor(() =>
      screen.getByText(mockSuccessResult[0].label),
    );
    const option2 = await waitFor(() =>
      screen.getByText(mockSuccessResult[1].label),
    );

    // Assert
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });

  test("should display no options", async () => {
    // Arrange
    const input = "notavalidcity";

    const mockFetchCities = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve([]);
        }),
    );

    fetchCities.mockImplementation(mockFetchCities);

    render(<SearchBar />);
    const cityInput = screen.getByRole("combobox");

    // Act
    fireEvent.change(cityInput, {
      target: { value: input },
    });

    const option = await waitFor(() => screen.getByText("No options"));

    // Assert
    expect(option).toBeInTheDocument();
  });
});
