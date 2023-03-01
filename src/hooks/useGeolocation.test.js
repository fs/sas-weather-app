import { renderHook } from "@testing-library/react";
import useGeolocation from "./useGeolocation";

test("Test geolocation access", () => {
  const { result } = renderHook(useGeolocation);

  expect(result.current).toEqual({
    latitude: null,
    longitude: null,
    status: "error",
    error: "Geolocation is not supported",
  });
});
