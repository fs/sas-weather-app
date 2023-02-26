import LocationContext from "./context";
import useGeolocation from "./hooks/useGeolocation";
import BackComponent from "./components/BackComponent/index";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";

const App = () => {
  const location = useGeolocation();

  // eslint-disable-next-line no-console
  console.log("🚀 ~ file: App.jsx:7 ~ App ~ location:", location);
  return (
    <LocationContext.Provider value={location}>
      <div data-testid="test-weather-container">
        <BackComponent>
          <CurrentWeather />
        </BackComponent>
      </div>
    </LocationContext.Provider>
  );
};

export default App;
