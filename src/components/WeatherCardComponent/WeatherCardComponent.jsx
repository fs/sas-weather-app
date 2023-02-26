import SearchBar from "../SearchBar";
import { WeatherCard } from "./styles";

const WeatherCardComponent = ({ response }) => {
  // eslint-disable-next-line no-console
  console.log(response);
  if (response && response.status === 200) {
    return (
      <WeatherCard>
        <SearchBar />
        <p>{response.data.current.cloud}</p>
      </WeatherCard>
    );
  }

  return <div />;
};

export default WeatherCardComponent;
