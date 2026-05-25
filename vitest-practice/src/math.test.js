// import { describe, it, expext } from "vitest";
// import { add, substract, multiply } from "./math.js";

// describe("add関数", () => {
//   it("正の整数同士を足すと正しい値になる", () => {
//     expect(add(1, 2)).toBe(3);
//   });

//   it("負の数をふくっむ計算が正しい", () => {
//     expect(add(-1, 2)).toBe(1);
//   });

//   it("少数の計算も正しい", () => {
//     expect(add(1.5, 2.5)).toBe(4);
//   });
// });

// describe("substract関数", () => {
//   it("5-3=2になる", () => {
//     expect(substract(5, 3)).toBe(2);
//   });
// });

// describe("multipuly関数", () => {
//   it("3 * 4 = 12になる", () => {
//     expect(multipuly(3, 4)).toBe(12);
//   });
// });

import { describe, it, expect } from "vitest";
import { add, subtract, multiply } from "./math.js";

describe("add 関数", () => {
  it("正の整数同士を足すと正しい値になる", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("負の数を含む計算が正しい", () => {
    expect(add(-1, 2)).toBe(1);
  });

  it("小数の計算も正しい", () => {
    expect(add(1.5, 2.5)).toBe(4);
  });
});

describe("subtract 関数", () => {
  it("5 - 3 = 2 になる", () => {
    expect(subtract(5, 3)).toBe(2);
  });
});

describe("multiply 関数", () => {
  it("3 × 4 = 12 になる", () => {
    expect(multiply(3, 4)).toBe(12);
  });
});
