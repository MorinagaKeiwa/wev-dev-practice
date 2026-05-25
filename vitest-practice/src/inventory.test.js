// import { describe, expect, it } from "vitest";
// import { findItem, isInStock, getStockCount } from "./inventory.js";

// describe("findItem関数", () => {
//   it("存在するIDを渡すとアイテムが返る", () => {
//     const item = findItem(1);
//     expect(findItem(item)).toBeDefined;
//     expect(findItem(item)).not.toBeNull;
//   });

//   it("存在しないIDを返すとnullが返る", () => {
//     const item = findItem(999);
//     expect(item).toBeNull;
//   });

//   describe('isInStock 関数', () => {
//   it('在庫があるアイテムは truthy を返す', () => {
//     expect(isInStock(1)).toBeTruthy();
//   });

//   it('在庫が 0 のアイテムは falsy を返す', () => {
//     expect(isInStock(2)).toBeFalsy();
//   });

//   it('存在しない ID は false を返す', () => {
//     expect(isInStock(999)).toBe(false);
//   });
// });
// describe('getStockCount 関数', () => {
//   it('存在するアイテムの在庫数を返す', () => {
//     expect(getStockCount(1)).toBe(10);
//     expect(getStockCount(1)).toBeDefined();
//   });

//   it('存在しない ID は undefined を返す', () => {
//     expect(getStockCount(999)).toBeUndefined();
//   });

// });

import { describe, it, expect } from "vitest";
import { findItem, isInStock, getStockCount } from "./inventory.js";

describe("findItem 関数", () => {
  it("存在する ID を渡すとアイテムが返る", () => {
    const item = findItem(1);
    expect(item).toBeDefined(); // undefined でないこと
    expect(item).not.toBeNull(); // null でないこと
  });

  it("存在しない ID を渡すと null が返る", () => {
    const item = findItem(999);
    expect(item).toBeNull(); // null が返ること
  });
});

describe("isInStock 関数", () => {
  it("在庫があるアイテムは truthy を返す", () => {
    expect(isInStock(1)).toBeTruthy(); // stock: 10
  });

  it("在庫が 0 のアイテムは falsy を返す", () => {
    expect(isInStock(2)).toBeFalsy(); // stock: 0
  });

  it("存在しない ID は false を返す", () => {
    expect(isInStock(999)).toBe(false); // 明確に false を返す
  });
});

describe("getStockCount 関数", () => {
  it("存在するアイテムの在庫数を返す", () => {
    expect(getStockCount(1)).toBe(10);
    expect(getStockCount(1)).toBeDefined();
  });

  it("存在しない ID は undefined を返す", () => {
    expect(getStockCount(999)).toBeUndefined();
  });
});
