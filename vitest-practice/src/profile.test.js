import { describe, it, expect } from "vitest";
import { createProfile, getDisplayName } from "./profile.js";

describe("createProfile 関数", () => {
  it("数値には toBe を使う", () => {
    const profile = createProfile("Alice", 20, ["読書"]);
    expect(profile.age).toBe(20);
    expect(profile.isAdult).toBe(true);
  });

  it("文字列には toBe を使う", () => {
    const profile = createProfile("Alice", 20, ["読書"]);
    expect(profile.name).toBe("Alice");
  });

  it("配列には toEqual を使う", () => {
    const profile = createProfile("Alice", 20, ["読書", "音楽"]);
    expect(profile.hobbies).toEqual(["読書", "音楽"]);
  });

  it("オブジェクト全体には toEqual を使う", () => {
    const profile = createProfile("Alice", 20, ["読書"]);
    expect(profile).toEqual({
      name: "Alice",
      age: 20,
      hobbies: ["読書"],
      isAdult: true,
    });
  });
});

describe("getDisplayName 関数", () => {
  it("名前と年齢を含む文字列を返す", () => {
    const profile = createProfile("Alice", 20, []);
    const label = getDisplayName(profile);
    expect(label).toBe("Alice（20歳）");
  });
});
