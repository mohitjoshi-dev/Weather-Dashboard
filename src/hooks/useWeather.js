import { useEffect, useState } from "react";
import { getCurrentWeather } from "../api/weather";

function useWeather(defaultCity = "New Delhi") {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);

        const data = await getCurrentWeather(defaultCity);

        setWeather(data);
        setError("");
      } catch (err) {
        setError("City not found");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [defaultCity]);

  return {
    weather,
    loading,
    error,
  };
}

export default useWeather;