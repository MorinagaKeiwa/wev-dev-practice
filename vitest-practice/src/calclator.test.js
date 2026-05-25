import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "./calculator.js";

describe("add関数", () => {
  it.only("正の整数同士を足すと正しい値になる", () => {
    expect(add(1, 3)).toBe(4);
  });

  it("負の数を含む計算が正しい", () => {
    expect(add(-1, 4)).toBe(3);
  });

  it("小数を含む計算が正しい", () => {
    expect(add(2.5, 5.5)).toBe(8);
  });
});

describe("subtract関数", () => {
  it("3 - 1 = 2になる", () => {
    expect(subtract(3, -1)).toBe(4);
  });
});

describe("multiply関数", () => {
  it("4 * 5 = 20になる", () => {
    expect(multiply(4, 5)).toBe(20);
  });
});

describe("divide関数", () => {
  it.skip("20 ÷ 5 = 4になる", () => {
    expect(divide(20, 5)).toBe(4);
  });
});
