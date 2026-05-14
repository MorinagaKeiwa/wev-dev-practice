type Pair<T, U> = {
  first: T;
  second: U;
};

function createPair<T, U>(first: T, second: U): Pair<T, U> {
  return { first, second };
}

const coord = createPair(35.6895, 139.6917);
const entry = createPair("title", true);

console.log(coord);
console.log(entry);

type ApiResponse<t> = {
  data: t;
  status: number;
  message: string;
};

type User = { id: number; name: string; email: string };

const singleUser: ApiResponse<User> = {
  data: { id: 1, name: "Alice", email: "alice@example.com" },
  status: 200,
  message: "OK",
};

const userList: ApiResponse<User[]> = {
  data: [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ],
  status: 200,
  message: "OK",
};

console.log(`ユーザー1件: ${singleUser.data.name} (${singleUser.status})`);
console.log(`ユーザー一覧: ${userList.data.length}件 (${userList.status})`);
