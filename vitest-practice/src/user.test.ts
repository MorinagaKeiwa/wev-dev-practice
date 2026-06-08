import { describe, it, expect, beforeEach } from "vitest";
import { createUser, isAdmin, formatUserName, User } from "./user.js";

describe("createUser", () => {
  it("デフォルトのロールは member になる", () => {
    const user = createUser({ name: "田中", email: "tanaka@example.com" });
    expect(user.role).toBe("member");
    expect(user.id).toBe(1);
  });

  it("admin ロールを指定できる", () => {
    const user = createUser({
      name: "管理者",
      email: "admin@example.com",
      role: "admin",
    });
    expect(user.role).toBe("admin");
  });

  it("名前が空のときエラーになる", () => {
    expect(() => createUser({ name: "  ", email: "test@example.com" })).toThrow(
      "名前は必須です",
    );
  });

  it("メールに @ がないときエラーになる", () => {
    expect(() => createUser({ name: "田中", email: "invalid-email" })).toThrow(
      "メールアドレスの形式が正しくありません",
    );
  });
});

describe("isAdmin", () => {
  it("admin ロールのユーザーは true を返す", () => {
    const adminUser: User = {
      id: 1,
      name: "管理者",
      email: "admin@example.com",
      role: "admin",
    };
    expect(isAdmin(adminUser)).toBe(true);
  });

  it("member ロールのユーザーは false を返す", () => {
    const memberUser: User = {
      id: 2,
      name: "一般ユーザー",
      email: "user@example.com",
      role: "member",
    };
    expect(isAdmin(memberUser)).toBe(false);
  });
});

describe("formatUserName", () => {
  it("ロール付きの表示名を返す", () => {
    const user: User = {
      id: 1,
      name: "山田",
      email: "yamada@example.com",
      role: "admin",
    };
    expect(formatUserName(user)).toBe("[admin] 山田");
  });
});
