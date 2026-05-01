import http from "node:http";

// サンプルデータ
const items = [
  { id: 1, name: "りんご", price: 150 },
  { id: 2, name: "バナナ", price: 100 },
  { id: 3, name: "オレンジ", price: 120 },
];

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  console.log(`${method} ${url}`);

  // GET /
  if (method === "GET" && url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>API サーバー</h1>
      <h2>利用可能なエンドポイント</h2>
      <ul>
        <li><a href="/api/items">GET /api/items</a> - 商品一覧</li>
        <li>GET /api/items/:id - 商品詳細（例: /api/items/1）</li>
        <li><a href="/api/users">GET /api/users</a> - ユーザー一覧</li>
      </ul>
    `);
  }
  // GET /api/items
  else if (method === "GET" && url === "/api/items") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(items));
  }
  // GET /api/items/:id
  else if (method === "GET" && /^\/api\/items\/\d+$/.test(url)) {
    const id = parseInt(url.split("/")[3]);
    const item = items.find((i) => i.id === id);

    if (item) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(item));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "商品が見つかりません" }));
    }
  }
  // GET /api/users
  //   else if (method === "GET" && url === "/api/users") {
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   } else if (method === "GET" && /^\/api\/users\/\d+$/.test(url)) {
  //     const userId = parseInt(url.split("/")[3]);
  //     const user = users.find((u) => u.id === userId);
  //     if (user) {
  //       res.writeHead(200, { "Content-Type": "application/json" });
  //       res.end(JSON.stringify(user));
  //     } else {
  //       res.writeHead(404, { "Content-Type": "application/json" });
  //       res.end(JSON.stringify({ error: "userIDが見つかりません" }));
  //     }
  //   }
  // 404
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        error: "Not Found",
        path: url,
        message: `エンドポイント '${url}' は存在しません`,
      }),
    );
  }
});

server.listen(3000, () => {
  console.log("サーバー起動: http://localhost:3000");
});
