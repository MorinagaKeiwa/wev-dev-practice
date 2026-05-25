import { describe, it, expect, vi } from "vitest";
import { getWeatherSummary } from "./weather-service.js";

// weather-api.js モジュール全体を偽物に差し替える
vi.mock("./weather-api.js", () => ({
  fetchCityWeather: vi.fn(),
}));

// vi.mock で差し替えた関数を取得する
import { fetchCityWeather } from "./weather-api.js";

describe("getWeatherSummary", () => {
  it("天気コードが113以下のとき「晴れ」を返す", async () => {
    fetchCityWeather.mockResolvedValue({
      current_condition: [{ weatherCode: "113" }],
    });

    const result = await getWeatherSummary("Tokyo");
    expect(result).toBe("Tokyoは晴れです");
  });

  it("天気コードが200のとき「雨」を返す", async () => {
    fetchCityWeather.mockResolvedValue({
      current_condition: [{ weatherCode: "200" }],
    });

    const result = await getWeatherSummary("Osaka");
    expect(result).toBe("Osakaは雨です");
  });

  it("API がエラーのときエラーを投げる", async () => {
    fetchCityWeather.mockRejectedValue(new Error("API error"));

    await expect(getWeatherSummary("Tokyo")).rejects.toThrow("API error");
  });
});
