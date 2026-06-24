import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
    name: "",      // Added for City/Locality name
    pincode: "",   // Added for Pin Code / Postal Code
    error: null,
  });

  useEffect(() => {
    // 1. Check browser support
    if (!navigator.geolocation) {
      setLocation(prev => ({
        ...prev,
        loaded: true,
        error: { code: 0, message: "Geolocation is not supported by your browser." }
      }));
      return;
    }

    // 2. Success Handler (Handles Coords -> API Fetch -> State Update)
    const onSuccess = async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      try {
        // Fetch human-readable location data using free reverse geocoding
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        );
        const data = await response.json();

        setLocation({
          loaded: true,
          coordinates: { lat, lng },
          name: data.city || data.locality || "Unknown Location",
          pincode: data.postcode,
          error: null,
        });

      } catch (apiError) {
        console.log(apiError)
        // Fallback: If API fails, we still keep the coordinates we found
        setLocation({
          loaded: true,
          coordinates: { lat, lng },
          name: "Failed to fetch name",
          pincode: "Failed to fetch pin",
          error: { code: 500, message: "Location found, but address lookup failed." },
        });
      }
    };

    // 3. Error Handler
    const onError = (error) => {
      setLocation({
        loaded: true,
        coordinates: { lat: "", lng: "" },
        name: "",
        pincode: "",
        error: {
          code: error.code,
          message: error.message,
        },
      });
    };

    // 4. Trigger the native browser prompt
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};