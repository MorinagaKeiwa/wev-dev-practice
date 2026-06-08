import { describe, it, expect } from "vitest";
// import { getDiscountRate, getAgeMessage } from "./membership.js";
import { getDiscountRate, getAgeMessage } from "./membershipA.js";

describe("getDiscountRate", () => {
  it("gold 会員の割引率は 0.30 である", () => {
    expect(getDiscountRate("gold")).toBe(0.3);
  });

  it("silver 会員の割引率は 0.15 である", () => {
    expect(getDiscountRate("silver")).toBe(0.15);
  });

  it("それ以外の会員の割引率は 0 である", () => {
    expect(getDiscountRate("standard")).toBe(0);
  });
});

describe("getAgeMessage", () => {
  it("負の年齢はエラーメッセージを返す", () => {
    expect(getAgeMessage(-1)).toBe("エラー：年齢が無効です");
  });

  it("17 歳はジュニア会員になれる", () => {
    expect(getAgeMessage(17)).toBe("ジュニア会員として登録できます");
  });

  it("65 歳はシニア会員になれる", () => {
    expect(getAgeMessage(65)).toBe("シニア会員として登録できます");
  });

  it("20 歳は一般会員になれる", () => {
    expect(getAgeMessage(20)).toBe("一般会員として登録できます");
  });
});
