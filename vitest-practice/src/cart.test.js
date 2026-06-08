import { describe, it, expect } from "vitest";
import { Cart } from "./cart.js";

describe("Cart", () => {
  it("商品をカートに追加できる", () => {
    const cart = new Cart();
    cart.add({ name: "りんご", price: 200 });
    expect(cart.total()).toBe(200);
  });

  it("複数の商品の合計金額を計算できる", () => {
    const cart = new Cart();
    cart.add({ name: "りんご", price: 200 });
    cart.add({ name: "みかん", price: 150 });
    expect(cart.total()).toBe(350);
  });

  it("商品名が空のときエラーになる", () => {
    const cart = new Cart();
    expect(() => cart.add({ name: "", price: 100 })).toThrow(
      "商品情報が不正です",
    );
  });

  it("価格がマイナスのときエラーになる", () => {
    const cart = new Cart();
    expect(() => cart.add({ name: "りんご", price: -1 })).toThrow(
      "商品情報が不正です",
    );
  });

  it("商品を削除できる", () => {
    const cart = new Cart();
    cart.add({ name: "りんご", price: 200 });
    cart.remove("りんご");
    expect(cart.total()).toBe(0);
  });

  it("存在しない商品を削除しようとするとエラーになる", () => {
    const cart = new Cart();
    expect(() => cart.remove("りんご")).toThrow(
      "「りんご」はカートに存在しません",
    );
  });

  it("カートが空かどうかを確認できる", () => {
    const cart = new Cart();
    expect(cart.isEmpty()).toBe(true);
    cart.add({ name: "りんご", price: 200 });
    expect(cart.isEmpty()).toBe(false);
  });
});
