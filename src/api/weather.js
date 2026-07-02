const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.weatherapi.com/v1";
console.log(API_KEY);

 export async function getCurrentWeather(city) {
  console.log(city);

  const response = await fetch(
   `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=no`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();

  console.log(data);

  return data;
}