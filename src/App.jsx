import { LocationContext } from "./context";
import useGeolocation from "./hooks/useGeolocation";
import BackComponent from "./components/BackComponent/index";

const App = () => {
  const location = useGeolocation();
  // eslint-disable-next-line no-console
  console.log("🚀 ~ file: App.jsx:7 ~ App ~ location:", location);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LocationContext.Provider value={location}>
      <div data-testid="test-weather-container">
        <BackComponent />
      </div>
    </LocationContext.Provider>
  );
};

export default App;
