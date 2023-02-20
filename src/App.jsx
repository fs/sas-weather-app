import { useEffect, useState } from "react";
import TestComponent from "./components/TestComponent";

const App = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setlongitude] = useState();

  const Success = (position) => {
    setLatitude(position.coords.latitude);
    setlongitude(position.coords.longitude);
  };

  const Error = () => {
    setLatitude("Not available");
    setlongitude("Not available");
  };

  const GetLocation = () => {
    navigator.geolocation.getCurrentPosition(Success, Error);
  };

  useEffect(() => {
    GetLocation();
  }, []);

  return (
    <div data-testid="test-weather-container">
      <TestComponent />
      <p>{longitude}</p>
      <p>{latitude}</p>
    </div>
  );
};

export default App;
