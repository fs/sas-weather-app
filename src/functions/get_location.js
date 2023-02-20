/* eslint-disable no-console */
const Success = (position) => {
  const coordinats = position.coords;

  console.log(`Latitude : ${coordinats.latitude}`);
  console.log(`Longitude: ${coordinats.longitude}`);
};

const GetLocation = () => {
  navigator.geolocation.getCurrentPosition(Success);
};

export default GetLocation;
