import { describe, it, expect, beforeEach, afterEach } from "vitest";

describe("成績管理", () => {
  let log = [];

  beforeEach(() => {
    log.push("外側 beforeEach");
  });

  afterEach(() => {
    log.push("外側 afterEach");
    console.log("実行順序:", log.join(" → "));
    log = [];
  });

  describe("合格者の場合", () => {
    beforeEach(() => {
      log.push("内側 beforeEach（合格者）");
    });

    afterEach(() => {
      log.push("内側 afterEach（合格者）");
    });

    it("合格判定が true になる", () => {
      log.push("テスト実行");
      expect(80 >= 60).toBe(true);
    });
  });

  describe("不合格者の場合", () => {
    beforeEach(() => {
      log.push("内側 beforeEach（不合格者）");
    });

    afterEach(() => {
      log.push("内側 afterEach（不合格者）");
    });

    it("合格判定が false になる", () => {
      log.push("テスト実行");
      expect(40 >= 60).toBe(false);
    });
  });
});
