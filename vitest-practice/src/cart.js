export class Cart {
  constructor() {
    this.items = [];
  }

  add(item) {
    if (!item.name || item.price < 0) {
      throw new Error("商品情報が不正です");
    }
    this.items.push(item);
  }

  remove(name) {
    const before = this.items.length;
    this.items = this.items.filter((i) => i.name !== name);
    if (this.items.length === before) {
      throw new Error(`「${name}」はカートに存在しません`);
    }
  }

  total() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
