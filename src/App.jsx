import LocationContext from "./context";
import TestComponent from "./components/TestComponent";
import useGeolocation from "./hooks/useGeolocation";

const App = () => {
  const location = useGeolocation();

  // eslint-disable-next-line no-console
  console.log("🚀 ~ file: App.jsx:7 ~ App ~ location:", location);
  return (
    <LocationContext.Provider value={location}>
      <div data-testid="test-weather-container">
        <TestComponent />
      </div>
    </LocationContext.Provider>
  );
};

export default App;
