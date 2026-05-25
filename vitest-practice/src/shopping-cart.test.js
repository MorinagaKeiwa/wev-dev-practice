// import { describe, it, expect, beforeEach, afterEach } from "vitest";
// import { ShoppingCart } from "./shopping-cart.js";

// describe("ShoppingCart", () => {
//   let cart;

//   beforeEach(() => {
//     cart = new ShoppingCart();
//   });

//   afterEach(() => {
//     cart.clear();
//   });
// });

// describe("ShoppingCart", () => {
//   it("商品を追加できる", () => {
//     // const cart = new ShoppingCart();
//     cart.add({ name: "りんご", price: 100 });
//     expect(cart.count()).toBe(1);
//   });

//   it("商品を削除できる", () => {
//     // const cart = new ShoppingCart();
//     cart.add({ name: "りんご", price: 100 });
//     cart.remove("りんご");
//     expect(cart.count()).toBe(0);
//   });

//   it("合計金額を計算できる", () => {
//     // const cart = new ShoppingCart();
//     cart.add({ name: "みかん", price: 80 });
//     cart.add({ name: "ぶどう", price: 300 });
//     expect(cart.total()).toBe(380);
//   });
//   it("カートが空のとき合計は0になる", () => {
//     expect(cart.total()).toBe(0);
//   });
// });

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { ShoppingCart } from "./shopping-cart.js";

describe("ShoppingCart", () => {
  let cart; // ← describe の中・beforeEach の外で宣言する

  beforeEach(() => {
    // 各テストの前に新しいカートを用意する
    cart = new ShoppingCart();
  });

  afterEach(() => {
    // 各テストの後にカートをクリアする
    cart.clear();
  });

  it("商品を追加できる", () => {
    cart.add({ name: "りんご", price: 100 });
    expect(cart.count()).toBe(1);
  });

  it("商品を削除できる", () => {
    cart.add({ name: "りんご", price: 100 });
    cart.remove("りんご");
    expect(cart.count()).toBe(0);
  });

  it("合計金額を計算できる", () => {
    cart.add({ name: "みかん", price: 80 });
    cart.add({ name: "ぶどう", price: 300 });
    expect(cart.total()).toBe(380);
  });

  it("カートが空のとき合計は0になる", () => {
    expect(cart.total()).toBe(0);
  });
});
