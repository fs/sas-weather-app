/* eslint-disable no-console */
const Success = (position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
};

const Error = () => {
  console.log("Not available");
  console.log("Not available");
};

const GetLocation = () => {
  navigator.geolocation.getCurrentPosition(Success, Error);
};

export default GetLocation;
