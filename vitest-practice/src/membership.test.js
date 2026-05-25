import { describe, it, expect } from "vitest";
import { getDiscountRate, getAgeMessage } from "./membership.js";

describe("getDiscountRate", () => {
  it("gold 会員の割引率は 0.30 である", () => {
    expect(getDiscountRate("gold")).toBe(0.3);
  });
});

describe("getAgeMessage", () => {
  it("20 歳は一般会員になれる", () => {
    expect(getAgeMessage(20)).toBe("一般会員として登録できます");
  });
});
