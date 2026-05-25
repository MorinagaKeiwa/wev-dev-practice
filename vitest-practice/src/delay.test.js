// import { describe, it, expect } from "vitest";
// import { addAsync } from "./delay";

// describe("addAsync関数", () => {
//   it("1 + 2 = 3になる", async () => {
//     const result = await addAsync(1, 2);
//     expect(result).toBe(3);
//   });

//   it("負の数を含む計算も正しい", async () => {
//     const result = await addAsync(-1, 5);
//     expect(result).toBe(4);
//   });
// });

// describe("fetchUserMock 関数", () => {
//   it("ID が 1 のユーザーが取得できる", async () => {
//     const user = await fetchUserMock(1);
//     expect(user.name).toBe("Alice");
//     expect(user.email).toBe("alice@example.com");
//   });

//   it("存在しない ID はエラーになる", async () => {
//     try {
//       await fetchUserMock(999);
//     } catch (error) {
//       expect(error.message).toContain("999");
//     }
//   });
// });

import { describe, it, expect } from "vitest";
import { addAsync, fetchUserMock } from "./delay.js";

describe("addAsync 関数", () => {
  it("1 + 2 = 3 になる", async () => {
    // ← async を追加
    const result = await addAsync(1, 2); // ← await で待つ
    expect(result).toBe(3);
  });

  it("負の数を含む計算も正しい", async () => {
    const result = await addAsync(-1, 5);
    expect(result).toBe(4);
  });
});

describe("fetchUserMock 関数", () => {
  it("ID が 1 のユーザーが取得できる", async () => {
    const user = await fetchUserMock(1);
    expect(user.name).toBe("Alice");
    expect(user.email).toBe("alice@example.com");
  });

  it("存在しない ID はエラーになる", async () => {
    try {
      await fetchUserMock(999);
    } catch (error) {
      expect(error.message).toContain("999");
    }
  });
});
