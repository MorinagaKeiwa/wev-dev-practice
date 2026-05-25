import { fetchCityWeather } from "./weather-api.js";

export async function getWeatherSummary(city) {
  const data = await fetchCityWeather(city);
  const code = data.current_condition[0].weatherCode;

  if (code <= 113) return `${city}は晴れです`;
  if (code <= 296) return `${city}は雨です`;
  return `${city}はくもりです`;
}
