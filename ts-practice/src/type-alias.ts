type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const product: Product[] = [
  { id: 1, name: "ノートPC", price: 89800, inStock: true },
  { id: 2, name: "マウス", price: 3200, inStock: true },
  { id: 3, name: "キーボード", price: 12800, inStock: false },
];

const available = product.filter((n) => n.inStock);
available.forEach((p) => {
  console.log(`${p.name}:${p.price.toLocaleString()}円`);
});

type OrderStatus = "pending" | "processing" | "shipped" | "delivered";

type Order = {
  id: number;
  productName: string;
  status: OrderStatus;
};

const orders: Order[] = [
  { id: 101, productName: "ノートPC", status: "shipped" },
  { id: 102, productName: "マウス", status: "delivered" },
  { id: 103, productName: "キーボード", status: "pending" },
];

orders.forEach((o) => {
  console.log(`注文 ${o.id}：${o.productName} → ${o.status}`);
});

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   inStock: boolean;
// };

// const product: Product = [
//   { id: 1, name: "laptop", price: 60000, inStock: true },
//   {},
//   {},
// ];
