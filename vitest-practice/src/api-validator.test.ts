import { describe, it, expect } from "vitest";
import { isApiProduct, isApiProductArray } from "./api-validator.js";

describe("isApiProduct", () => {
  it("正しい形のオブジェクトは true を返す", () => {
    const product = { id: 1, name: "りんご", price: 200, inStock: true };
    expect(isApiProduct(product)).toBe(true);
  });

  it("null は false を返す", () => {
    expect(isApiProduct(null)).toBe(false);
  });

  it("文字列は false を返す", () => {
    expect(isApiProduct("product")).toBe(false);
  });

  it("id が文字列のとき false を返す", () => {
    const product = { id: "1", name: "りんご", price: 200, inStock: true };
    expect(isApiProduct(product)).toBe(false);
  });

  it("price プロパティが欠けているとき false を返す", () => {
    const product = { id: 1, name: "りんご", inStock: true };
    expect(isApiProduct(product)).toBe(false);
  });

  it("inStock が文字列のとき false を返す", () => {
    const product = { id: 1, name: "りんご", price: 200, inStock: "true" };
    expect(isApiProduct(product)).toBe(false);
  });
});

describe("isApiProductArray", () => {
  it("正しい配列は true を返す", () => {
    const products = [
      { id: 1, name: "りんご", price: 200, inStock: true },
      { id: 2, name: "みかん", price: 150, inStock: false },
    ];
    expect(isApiProductArray(products)).toBe(true);
  });

  it("空の配列は true を返す", () => {
    expect(isApiProductArray([])).toBe(true);
  });

  it("1つでも不正なオブジェクトがあると false を返す", () => {
    const products = [
      { id: 1, name: "りんご", price: 200, inStock: true },
      { id: "2", name: "みかん", price: 150, inStock: false }, // id が文字列
    ];
    expect(isApiProductArray(products)).toBe(false);
  });

  it("配列でないとき false を返す", () => {
    expect(isApiProductArray({ id: 1 })).toBe(false);
  });
});
