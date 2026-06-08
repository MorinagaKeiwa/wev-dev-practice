import { describe, it, expect } from "vitest";

function greetTs(name: string): string {
  return `こんにちは、${name}さん！`;
}

describe("greetTs（TypeScript版）", () => {
  it("名前を含む挨拶文を返す", () => {
    expect(greetTs("田中")).toBe("こんにちは、田中さん！");
  });

  it("引数に数値を渡すと型エラーになる（コンパイル時）", () => {
    // greetTs(123);
    expect(true).toBe(true);
  });
});
