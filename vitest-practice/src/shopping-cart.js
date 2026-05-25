export class ShoppingCart {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  remove(name) {
    this.items = this.items.filter((i) => i.name !== name);
  }

  count() {
    return this.items.length;
  }

  total() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  clear() {
    this.items = [];
  }
}
