const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

export async function searchLocations(query) {
  if (!query) return [];

  const region = localStorage.getItem("searchRegion") || "india";

  const url =
    `https://api.geoapify.com/v1/geocode/autocomplete?` +
    `text=${encodeURIComponent(query)}` +
    `${region === "india" ? "&bias=countrycode:in" : ""}` +
    `&limit=6` +
    `&apiKey=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  const unique = [];
const seen = new Set();

for (const item of data.features) {
  const location = {
    name:
      item.properties.name ||
      item.properties.suburb ||
      item.properties.city ||
      item.properties.formatted,

    region:
      item.properties.state ||
      item.properties.county ||
      "",

    country: item.properties.country,

    lat: item.properties.lat,
    lon: item.properties.lon,
  };

  const key = `${location.name}-${location.region}-${location.country}`;

  if (!seen.has(key)) {
    seen.add(key);
    unique.push(location);
  }
}

return unique;

}