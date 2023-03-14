import { useEffect, useState } from "react";
import fetchWeather from "api/fetchWeather";
import { TestDiv } from "components/TestComponent/styled";

const TestComponent = () => {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const latitude = 48.8567;
      const longitude = 2.3508;
      try {
        const result = await fetchWeather({ latitude, longitude });
        setWeather(result.data);
      } catch (e) {
        setError(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <TestDiv>Hello world 2</TestDiv>
          <p>Weather information: {JSON.stringify(weather)}</p>
        </div>
      )}
    </div>
  );
};

export default TestComponent;
