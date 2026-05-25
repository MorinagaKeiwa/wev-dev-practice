import { describe, it, expect } from "vitest";
import { greet } from "./greet.js";

describe("greet", () => {
  it("名前を含む挨拶文を返す", () => {
    expect(greet("田中")).toBe("こんにちは、田中さん！");
  });
});
