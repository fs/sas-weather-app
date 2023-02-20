import { useEffect } from "react";
import TestComponent from "./components/TestComponent";
import getLocation from "./functions/GetLocation";

const App = () => {
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div data-testid="test-weather-container">
      <TestComponent />
    </div>
  );
};

export default App;
