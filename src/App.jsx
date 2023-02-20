import { useEffect } from "react";
import TestComponent from "./components/TestComponent";
import GetLocation from "./functions/GetLocation";

const App = () => {
  useEffect(() => {
    GetLocation();
  }, []);

  return (
    <div data-testid="test-weather-container">
      <TestComponent />
    </div>
  );
};

export default App;
