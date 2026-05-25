import { describe, it, expect, beforeEach } from "vitest";
import { ShoppingCart } from "./shopping-cart.js";

// describe("干渉あり（beforeEach なし）", () => {
//   const cart = new ShoppingCart();

//   it("商品を1つ追加すると count は1になる", () => {
//     cart.add({ name: "りんご", price: 100 });
//     expect(cart.count()).toBe(1);
//   });

//   it("カートが空のとき count は0になる", () => {
//     expect(cart.count()).toBe(0);
//   });
// });

describe("干渉なし（beforeEach あり）", () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  it("商品を1つ追加すると count は1になる", () => {
    cart.add({ name: "りんご", price: 100 });
    expect(cart.count()).toBe(1);
  });

  it("カートが空のとき count は0になる", () => {
    expect(cart.count()).toBe(0);
  });
});
