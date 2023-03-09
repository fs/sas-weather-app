import { renderHook } from "@testing-library/react";
import useGeolocation from "./useGeolocation";

describe("Geolocation hook tests", () => {
  test("Test geolocation when permission granted", () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementation((success) =>
        Promise.resolve(
          success({
            coords: {
              latitude: 123321,
              longitude: 123321,
            },
          }),
        ),
      ),
    };

    global.navigator.geolocation = mockGeolocation;
    global.navigator.permissions = {
      query: jest
        .fn()
        .mockImplementationOnce(() => Promise.resolve({ state: "granted" })),
    };

    global.navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) =>
        expect(permissionStatus.state).toBe("granted"),
      );

    const { result } = renderHook(useGeolocation);

    expect(result.current).toEqual({
      latitude: 123321,
      longitude: 123321,
      status: "success",
      error: null,
    });
  });

  test("Test geolocation when permission denied", () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementation((success, rejected) => {
        rejected({
          message: "TEST_MSG",
        });
      }),
    };

    global.navigator.geolocation = mockGeolocation;

    global.navigator.permissions = {
      query: jest
        .fn()
        .mockImplementationOnce(() => Promise.resolve({ state: "denied" })),
    };

    const { result } = renderHook(useGeolocation);

    expect(result.current).toEqual({
      latitude: null,
      longitude: null,
      status: "error",
      error: "TEST_MSG",
    });
  });
});
