function calcTax(price: number, taxRate: number): number {
  return Math.round(price * (1 + taxRate));
}

function formatProduct(name: string, price: number): string {
  return `商品名:${name} 価格:${price}円`;
}

function log(message: string): void {
  console.log(`[LOG]${message}`);
}

const taxIncluded = calcTax(2800, 0.1);
console.log(`${formatProduct("TypeScript入門書", taxIncluded)}`);

log("計算が完了しました");

function formatPrice1(price: number, unit?: string): string {
  const u = unit ?? "円";
  return `${price.toLocaleString()}${u}`;
}
function formatPrice2(price: number, unit: string = "円"): string {
  return `${price}${unit}`;
}

console.log(formatPrice1(1980));
console.log(formatPrice1(29.99, "USD"));

console.log(formatPrice2(1980));
console.log(formatPrice2(29.99, "USD"));
