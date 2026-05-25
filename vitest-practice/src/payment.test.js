import { describe, it, expect } from "vitest";
import { calcTax, calcDiscount, isValidPrice } from "./payment.js";

describe("calcTax 関数", () => {
  it("消費税 10% の計算結果が 0 より大きい", () => {
    const tax = calcTax(1000, 0.1);
    expect(tax).toBeGreaterThan(0);
  });

  it("消費税 10% は 1000 以下", () => {
    const tax = calcTax(1000, 0.1);
    expect(tax).toBeLessThanOrEqual(1000);
  });

  it("小数の税計算が近似値と一致する", () => {
    const tax = calcTax(333, 0.1);
    expect(tax).toBeCloseTo(33.3);
  });

  it("価格が負の場合はエラーになる", () => {
    expect(() => calcTax(-100, 0.1)).toThrow();
    expect(() => calcTax(-100, 0.1)).toThrow("0 以上");
  });

  it("税率が範囲外の場合はエラーになる", () => {
    expect(() => calcTax(1000, 1.5)).toThrow("0〜1");
  });

  it("正常な入力ではエラーが発生しない", () => {
    expect(() => calcTax(1000, 0.1)).not.toThrow();
  });
});

describe("calcDiscount 関数", () => {
  it("20% オフの結果が元の価格より小さい", () => {
    const discounted = calcDiscount(1000, 20);
    expect(discounted).toBeLessThan(1000);
    expect(discounted).toBeGreaterThan(0);
  });

  it("割引率が 100 を超える場合はエラーになる", () => {
    expect(() => calcDiscount(1000, 150)).toThrow("0〜100");
  });
});

describe("isValidPrice 関数", () => {
  it("正の数値は有効な価格", () => {
    expect(isValidPrice(1000)).toBeTruthy();
    expect(isValidPrice(0)).toBeTruthy();
  });

  it("負の数値や文字列は無効な価格", () => {
    expect(isValidPrice(-1)).toBeFalsy();
    expect(isValidPrice("1000")).toBeFalsy();
    expect(isValidPrice(Infinity)).toBeFalsy();
  });
});
