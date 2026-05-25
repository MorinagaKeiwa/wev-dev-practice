import { describe, it, expect } from "vitest";
import { buildWelcomeMessage, filterByTag, getTagList } from "./message.js";

const samplePosts = [
  { id: 1, title: "記事A", tags: ["vitest", "javascript"] },
  { id: 2, title: "記事B", tags: ["vitest", "typescript"] },
  { id: 3, title: "記事C", tags: ["css"] },
];

describe("buildWelcomeMessage 関数", () => {
  it("名前を含むメッセージが返る", () => {
    const msg = buildWelcomeMessage("田中", "スタンダード");
    expect(msg).toContain("田中");
    expect(msg).toContain("スタンダード");
  });

  it("「ようこそ」で終わる", () => {
    const msg = buildWelcomeMessage("田中", "スタンダード");
    expect(msg).toMatch(/ようこそ！$/);
  });
});

describe("filterByTag 関数", () => {
  it("vitest タグの記事が 2 件返る", () => {
    const result = filterByTag(samplePosts, "vitest");
    expect(result).toHaveLength(2);
  });

  it("フィルター結果に記事 A が含まれる", () => {
    const result = filterByTag(samplePosts, "vitest");
    expect(result).toContainEqual({
      id: 1,
      title: "記事A",
      tags: ["vitest", "javascript"],
    });
  });

  it("存在しないタグは 0 件", () => {
    const result = filterByTag(samplePosts, "react");
    expect(result).toHaveLength(0);
  });
});

describe("getTagList 関数", () => {
  it("重複なしのタグ一覧が返る", () => {
    const tags = getTagList(samplePosts);
    expect(tags).toContain("vitest");
    expect(tags).toContain("css");
  });

  it("vitest は 1 回だけ含まれる（重複除去されている）", () => {
    const tags = getTagList(samplePosts);
    expect(tags.filter((t) => t === "vitest")).toHaveLength(1);
  });
});
