import { describe, it, expect } from "vitest";
import { getUser, listUsers, isAdmin } from "./api-service.js";

describe("getUser 関数", () => {
  it("ID が 1 のユーザーを取得できる", async () => {
    const user = await getUser(1);
    expect(user.name).toBe("Alice");
  });

  it("取得したユーザーに role が含まれる", async () => {
    await expect(getUser(1)).resolves.toMatchObject({ role: "admin" });
  });

  it("存在しない ID はエラーになる", async () => {
    await expect(getUser(999)).rejects.toThrow("見つかりません");
  });

  it("エラーメッセージに ID が含まれる", async () => {
    await expect(getUser(999)).rejects.toThrow("999");
  });
});

describe("listUsers 関数", () => {
  it("3 件のユーザーが返る", async () => {
    const users = await listUsers();
    expect(users).toHaveLength(3);
  });

  it("Alice が含まれる", async () => {
    await expect(listUsers()).resolves.toContainEqual({
      id: 1,
      name: "Alice",
      role: "admin",
    });
  });
});

describe("isAdmin 関数", () => {
  it("ID が 1 のユーザーは管理者", async () => {
    await expect(isAdmin(1)).resolves.toBe(true);
  });

  it("ID が 2 のユーザーは管理者でない", async () => {
    await expect(isAdmin(2)).resolves.toBe(false);
  });

  it("存在しない ID はエラーになる（getUser の rejects が伝播する）", async () => {
    await expect(isAdmin(999)).rejects.toThrow("見つかりません");
  });
});
