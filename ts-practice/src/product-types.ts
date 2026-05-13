type Category = "electronics" | "clothing" | "food";
type StockStatus = "in-stock" | "out-of-stock" | "preorder";

type Product = {
  id: number;
  name: string;
  price: number | "free";
  category: Category;
  stock: StockStatus;
  description: string | null;
};

const products: Product[] = [
  {
    id: 1,
    name: "ワイヤレスイヤホン",
    price: 8980,
    category: "electronics",
    stock: "in-stock",
    description: "ノイズキャンセリング対応",
  },
  {
    id: 2,
    name: "サンプルアプリ",
    price: "free",
    category: "electronics",
    stock: "in-stock",
    description: null,
  },
  {
    id: 3,
    name: "コットンTシャツ",
    price: 2480,
    category: "clothing",
    stock: "pre-order",
    description: null,
  },
];

function formatPrice(price: number | "free") {
  if (typeof price === "number") {
    return `${price.toLocaleString()}円`;
  } else {
    return "無料";
  }
}

products.forEach((p) => {
  const stockLabel =
    p.stock === "in-stock"
      ? "在庫あり"
      : p.stock === "pre-order"
        ? "予約受付中"
        : "在庫なし";
  console.log(
    `[${p.category}] ${p.name} - ${formatPrice(p.price)} (${stockLabel})`,
  );
});

const bad: Product = {
  id: 4,
  name: "テスト商品",
  price: "discount",
  category: "toys",
  stock: "in-stock",
  description: null,
};
