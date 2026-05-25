import { describe, it, expect } from "vitest";
import { createUser, formatUserLabel } from "./user.js";

// describe("createUser関数", () => {
//   it("nameとemailを持つユーザーが作成される", () => {
//     const name = "Alice";
//     const email = "alice.example";

//     const user = createUser(name, email);

//     expect(createUser(user.name)).toContain("Alice");
//     expect(createUser(user.email)).toContain("alice.example");
//   });

describe("createUser 関数", () => {
  it("name と email を持つユーザーが作成される", () => {
    // Arrange
    const name = "Alice";
    const email = "alice@example.com";

    // Act
    const user = createUser(name, email);

    // Assert
    expect(user.name).toBe("Alice");
    expect(user.email).toBe("alice@example.com");
  });

  it("id が数値として割り当てられる", () => {
    const name = "Bob";
    const email = "bob@example.com";

    const user = createUser(name, email);

    expect(user.id).toBeDefined();
    expect(typeof user.id).toBe("number");
  });
});

describe("formatUserLabel 関数", () => {
  it("id・name・email を含むラベル文字列を返す", () => {
    const user = { id: 1, name: "Alice", email: "alice@example.com" };

    const label = formatUserLabel(user);

    expect(label).toContain("Alice");
    expect(label).toContain("alice@example.com");
    expect(label).toMatch(/^\[1\]/);
  });
});
