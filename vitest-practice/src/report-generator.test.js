import { describe, it, expect, beforeAll, afterAll, beforeEach } from "vitest";
import { ReportGenerator } from "./report-generator.js";

describe("ReportGenerator", () => {
  let generator;

  beforeAll(() => {
    generator = new ReportGenerator();
    generator.initialize();
  });

  beforeEach(() => {
    generator.records = [];
  });

  afterAll(() => {
    generator.shutdown();
  });

  it("レコードを追加できる", () => {
    generator.addRecord({ name: "Alice", score: 90 });
    const report = generator.generate();
    expect(report.total).toBe(1);
  });

  it("複数のレコードを追加できる", () => {
    generator.addRecord({ name: "Alice", score: 90 });
    generator.addRecord({ name: "Bob", score: 75 });
    const report = generator.generate();
    expect(report.total).toBe(2);
    expect(report.items).toHaveLength(2);
  });

  it("初期化済みなら generate が動く", () => {
    const report = generator.generate();
    expect(report).toHaveProperty("total");
    expect(report).toHaveProperty("items");
  });
});
