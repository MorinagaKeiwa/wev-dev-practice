import { describe, it, expect } from "vitest";
import { TodoList } from "./todo-list.js";

describe("TodoList", () => {
  it("最初はリストが空である", () => {
    const list = new TodoList();
    expect(list.count()).toBe(0);
  });

  it("TODO を追加できる", () => {
    const list = new TodoList();
    list.add("牛乳を買う");
    expect(list.count()).toBe(1);
    expect(list.getAll()[0].text).toBe("牛乳を買う");
    expect(list.getAll()[0].done).toBe(false);
  });
  it("TODO を完了にできる", () => {
    const list = new TodoList();
    list.add("牛乳を買う");
    list.complete(0);
    expect(list.getAll()[0].done).toBe(true);
  });

  it("完了した TODO だけ取得できる", () => {
    const list = new TodoList();
    list.add("牛乳を買う");
    list.add("パンを買う");
    list.complete(0);
    expect(list.getDone()).toHaveLength(1);
    expect(list.getDone()[0].text).toBe("牛乳を買う");
  });
});
