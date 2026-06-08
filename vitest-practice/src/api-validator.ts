export interface ApiProduct {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

export function isApiProduct(value: unknown): value is ApiProduct {
  if (typeof value !== "object" || value === null) return false;

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.price === "number" &&
    typeof obj.inStock === "boolean"
  );
}

export function isApiProductArray(value: unknown): value is ApiProduct[] {
  return Array.isArray(value) && value.every(isApiProduct);
}
