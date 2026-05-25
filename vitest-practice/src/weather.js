// export async function getWeather(city) {
//   const response = await fetch(`https://wttr.in/${city}?format=j1`);
//   if (!response.ok) {
//     throw new error("天気情報の取得に失敗しました");
//   }
//   const data = await response.json();
//   return data;
// }

// 天気情報を外部APIから取得する関数
import { fetchCityWeather } from "./weather-api.js";

// 天気を取得して「晴れ/雨/くもり」の文字列を返す
export async function getWeatherSummary(city) {
  const data = await fetchCityWeather(city);
  const code = data.current_condition[0].weatherCode;

  if (code <= 113) return `${city}は晴れです`;
  if (code <= 296) return `${city}は雨です`;
  return `${city}はくもりです`;
}
