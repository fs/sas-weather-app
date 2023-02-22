import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    status: "init",
    error: null,
  });

  useEffect(() => {
    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude, status: "success", error: null });
    };

    const handleError = (error) => {
      setLocation({
        latitude: null,
        longitude: null,
        status: "error",
        error: error.message,
      });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      setLocation({
        latitude: null,
        longitude: null,
        status: "error",
        error: "Geolocation is not supported",
      });
    }
  }, []);

  return location;
};

export default useGeolocation;
