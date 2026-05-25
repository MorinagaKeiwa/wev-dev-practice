export function calcTax(price, rate) {
  if (price < 0) throw new Error("価格は 0 以上である必要があります");
  if (rate < 0 || rate > 1)
    throw new Error("税率は 0〜1 の間で指定してください");
  return Math.round(price * rate * 100) / 100;
}

export function calcDiscount(price, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("割引率は 0〜100 の間で指定してください");
  }
  return price * (1 - discountPercent / 100);
}

export function isValidPrice(price) {
  return typeof price === "number" && price >= 0 && isFinite(price);
}
