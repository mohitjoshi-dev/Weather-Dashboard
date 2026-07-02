const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.weatherapi.com/v1";

export async function searchLocations(query) {
  if (!query.trim()) return [];

  const response = await fetch(
    `${BASE_URL}/search.json?key=${API_KEY}&q=${query}`
  );

  if (!response.ok) {
    throw new Error("Search failed");
  }

  return response.json();
}

export async function getCurrentWeather(city) {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=no`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return response.json();
}