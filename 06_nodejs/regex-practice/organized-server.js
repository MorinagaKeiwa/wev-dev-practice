import http from "node:http";

const routes = {
  "GET /": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("利用可能: GET /users, GET /posts");
  },
  "GET /users": (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]),
    );
  },
  "POST /users": (req, res) => {
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "ユーザーを作成しました" }));
  },
  "GET /posts": (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([{ id: 1, title: "Node.js入門" }]));
  },
  "GET /about": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>About</h1><p>このサーバーについて</p>");
  },
};

const server = http.createServer((req, res) => {
  const key = `${req.method} ${req.url}`;

  console.log(`リクエスト: ${key}`);

  const handler = routes[key];

  if (handler) {
    handler(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        error: "Not Found",
        message: `${key} は存在しません`,
      }),
    );
  }
});

server.listen(3000, () => {
  console.log("サーバー起動: http://localhost:3000");
});
