import { useEffect } from "react";
import TestComponent from "./components/TestComponent";
import getLocation from "./functions/GetLocation";

const App = () => {
  let coords = "test";

  const getCoords = async () => {
    coords = await getLocation();
    // eslint-disable-next-line no-console
    console.log(coords);
  };

  useEffect(() => {
    getCoords();
  }, []);

  return (
    <div data-testid="test-weather-container">
      <TestComponent />
    </div>
  );
};

export default App;
