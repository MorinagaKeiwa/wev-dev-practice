// import http from "node:http";
// const users = [
//   { id: 1, name: "alice", email: "Alice@example.com" },
//   { id: 2, name: "bob", email: "Bob@example.com" },
//   { id: 3, name: "charlie", email: "Charlie.example.com" },
// ];

// const server = http.createServer((req, res), () => {
//   const method = req.method;
//   const url = req.url;
// });

// console.log(`${method},${url}`);

// if (method === "GET" && url === "/users") {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(users));
// } else if (method === "GET" && "/^\/users\/(\d+)$".match(url)) {
//   // res.writeHead(200,{"Content-Type":"application/json"});
//   // res.end(JSON.stringify())
//   const parts = url.split("/");
//   const id = parseInt(parts[2]);
//   const user = users.find((u) => u.id === id);

//   if (user) {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify());
//   } else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(
//       JSON.stringify({
//         error: "User not found",
//         message: `ID ${id} のユーザーは存在しません`,
//       }),
//     );
//   }
// } else {
//   res.writeHead(404, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ error: "Not Found" }));
// }

// server.listen(3000, () => {
//   console.log("サーバー起動: http://localhost:3000");
// });

import http from "node:http";

// サンプルデータ（本来はデータベースから取得）
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  console.log(`${method} ${url}`);

  // GET /users - 全ユーザーの一覧
  if (method === "GET" && url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
  // GET /users/:id - 特定のユーザーの詳細
  else if (method === "GET" && /^\/users\/\d+$/.test(url)) {
    // URLからIDを抽出
    const parts = url.split("/");
    const id = parseInt(parts[2]); // 文字列を数値に変換

    // IDに一致するユーザーを検索
    const user = users.find((u) => u.id === id);

    if (user) {
      // ユーザーが見つかった
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    } else {
      // ユーザーが見つからなかった
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          error: "User not found",
          message: `ID ${id} のユーザーは存在しません`,
        }),
      );
    }
  }
  // どのパターンにもマッチしない
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(3000, () => {
  console.log("サーバー起動: http://localhost:3000");
});
