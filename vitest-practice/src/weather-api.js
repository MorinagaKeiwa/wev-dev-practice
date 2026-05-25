export async function fetchCityWeather(city) {
  const response = await fetch(`https://wttr.in/${city}?format=j1`);
  if (!response.ok) throw new Error("API error");
  return response.json();
}
