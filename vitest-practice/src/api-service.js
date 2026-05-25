// const db = [
//   { id: 1, name: "Alice", role: "admin" },
//   { id: 2, name: "Bob", role: "user" },
//   { id: 3, name: "Carol", role: "user" },
// ];

// export async function getUser(id) {
//   await new Promise((resolve) => setTimeout(resolve, 50));
//   const user = db.find((u) => u.id === id);
//   if (!user) throw new Error(`ユーザー ID ${id} は見つかりません`);
//   return user;
// }

// export async function listUsers() {
//   await new Promise((resolve) => setTimeout(resolve, 50));
//   return db;
// }

// export async function isAdmin(id) {
//   const user = await getUser(id);
//   return user.role === "admin";
// }

const db = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Carol", role: "user" },
];

// ID でユーザーを取得する（非同期）
export async function getUser(id) {
  await new Promise((resolve) => setTimeout(resolve, 50));
  const user = db.find((u) => u.id === id);
  if (!user) throw new Error(`ユーザー ID ${id} は見つかりません`);
  return user;
}

// ユーザー一覧を取得する（非同期）
export async function listUsers() {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return db;
}

// 管理者ユーザーかどうかを判定する（非同期）
export async function isAdmin(id) {
  const user = await getUser(id);
  return user.role === "admin";
}
