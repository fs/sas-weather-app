/* eslint-disable no-console */
const setGeoOnsuccess = (position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
};

const setGeoOnError = () => {
  console.log("Not available");
  console.log("Not available");
};

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(setGeoOnsuccess, setGeoOnError);
};

export default getLocation;
