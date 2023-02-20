/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const setGeoOnSuccess = (position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
};

const setGeoOnError = () => {
  return "Not available";
};

const getLocation = async () => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).catch(setGeoOnError);

  return position.coords;
};

export default getLocation;
