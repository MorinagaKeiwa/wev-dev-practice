export class TodoList {
  constructor() {
    this.items = [];
  }

  add(text) {
    this.items.push({ text, done: false });
  }

  complete(index) {
    this.items[index].done = true;
  }

  count() {
    return this.items.length;
  }

  getAll() {
    return [...this.items];
  }

  getDone() {
    return this.items.filter((item) => item.done);
  }
}
