import { describe, it, expect } from "vitest";
import {
  greet,
  isAdult,
  getScoreLabel,
  getEvenNumbers,
  parsePositiveInt,
} from "./validator.js";

describe("greet 関数", () => {
  it("名前を含む挨拶文を返す", () => {
    expect(greet("田中")).toContain("田中");
  });

  it("「こんにちは」で始まる", () => {
    expect(greet("田中")).toMatch(/^こんにちは/);
  });
});

describe("isAdult 関数", () => {
  it("18歳は成人と判定される", () => {
    expect(isAdult(18)).toBeTruthy();
  });

  it("17歳は成人ではないと判定される", () => {
    expect(isAdult(17)).toBeFalsy();
  });
});

describe("getScoreLabel 関数", () => {
  it("90点は excellent になる", () => {
    expect(getScoreLabel(90)).toBe("excellent");
  });

  it("70点は good になる", () => {
    expect(getScoreLabel(70)).toBe("good");
  });

  it("50点は needs_improvement になる", () => {
    expect(getScoreLabel(50)).toBe("needs_improvement");
  });
});

describe("getEvenNumbers 関数", () => {
  it("偶数だけが抽出される", () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("抽出結果の長さが正しい", () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5])).toHaveLength(2);
  });

  it("偶数が含まれる", () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5])).toContain(4);
  });
});

describe("parsePositiveInt 関数", () => {
  it('"42" を数値 42 に変換する', () => {
    expect(parsePositiveInt("42")).toBe(42);
  });

  it("負の数を渡すとエラーになる", () => {
    expect(() => parsePositiveInt("-1")).toThrow();
  });

  it("文字列を渡すとエラーメッセージが含まれる", () => {
    expect(() => parsePositiveInt("abc")).toThrow("正の整数ではありません");
  });
});
