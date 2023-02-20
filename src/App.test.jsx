import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
  };

  global.navigator.geolocation = mockGeolocation;
  render(<App />);
  const linkElement = screen.getByTestId("test-weather-container");
  expect(linkElement).toBeInTheDocument();
});
