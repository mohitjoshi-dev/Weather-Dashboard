const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

export async function geocode(place) {
  const url =
    `https://api.geoapify.com/v1/geocode/search?` +
    `text=${encodeURIComponent(place)}` +
    `&limit=1` +
    `&apiKey=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.features?.length) {
    throw new Error("Location not found");
  }

  const feature = data.features[0];

  return {
    lat: feature.properties.lat,
    lon: feature.properties.lon,
    city:
      feature.properties.city ||
      feature.properties.county ||
      feature.properties.state,
    country: feature.properties.country,
    formatted: feature.properties.formatted,
  };
}