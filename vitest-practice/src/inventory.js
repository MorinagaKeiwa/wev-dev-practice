const items = [
  { id: 1, name: "りんご", stock: 10 },
  { id: 2, name: "みかん", stock: 0 },
  { id: 3, name: "ぶどう", stock: 5 },
];

export function findItem(id) {
  return items.find((item) => item.id === id) ?? null;
}

export function isInStock(id) {
  const item = findItem(id);
  if (!item) return false;
  return item.stock > 0;
}

export function getStockCount(id) {
  const item = findItem(id);
  return item ? item.stock : undefined;
}
