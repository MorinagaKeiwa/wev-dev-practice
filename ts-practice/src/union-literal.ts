type UserId = string | number;

function fetchUser(id: UserId) {
  console.log(`ユーザー取得${id}`);
}

fetchUser("user-abc");
fetchUser(123);

type OrderStatus1 = "pending" | "shipped" | "delivered" | "cancelled";
type theme = "light" | "dark";

type Order1 = {
  id: number;
  status: OrderStatus;
};

const order1: Order1 = { id: 1, status: "shipped" };
const order2: Order1 = { id: 2, status: "pending" };

console.log(order1);
console.log(order2);

type product = {
  name: string;
  description: string | null;
};

const p1: Product = { name: "ノートPC", description: "高性能なノートPC" };
const p2: Product = { name: "マウス", description: null };

console.log(p1);
console.log(p2);

const order3: Order = { id: 3, status: "deleted" };
fetchUser(true);
