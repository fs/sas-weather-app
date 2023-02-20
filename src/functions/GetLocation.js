/* eslint-disable no-console */
const setGeoOnSuccess = (position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
};

const setGeoOnError = () => {
  console.log("Not available");
  console.log("Not available");
};

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(setGeoOnSuccess, setGeoOnError);
};

export default getLocation;
