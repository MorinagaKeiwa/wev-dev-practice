import { describe, it, expect } from "vitest";
import { isStrongPassword } from "./password.js";

describe("isStrongPassword", () => {
  it("8文字以上のとき true を返す", () => {
    expect(isStrongPassword("Abcd1234")).toBe(false);
  });

  it("7文字以下のとき false を返す", () => {
    expect(isStrongPassword("Abc123")).toBe(false);
  });

  it("大文字がないとき false を返す", () => {
    expect(isStrongPassword("abcd1234")).toBe(false);
  });

  it("数字がないとき false を返す", () => {
    expect(isStrongPassword("AbcdEfgh")).toBe(false);
  });

  it("記号があるとき true を返す", () => {
    expect(isStrongPassword("Abcd123!")).toBe(true);
  });
});
