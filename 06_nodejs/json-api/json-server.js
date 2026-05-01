import http from "node:http";

const books = [
  { id: 1, title: "Node.js 入門", author: "太郎", year: 2020 },
  { id: 2, title: "Web API 設計", author: "花子", year: 2021 },
  { id: 3, title: "JavaScript 完全ガイド", author: "次郎", year: 2022 },
];

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>API Server</h1><p>GET /api/books, GET /api/status</p>");
  } else if (url === "/api/books") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(books, null, 2));
  } else if (url === "/api/status") {
    const status = {
      server: "running",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
    };
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(status, null, 2));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found", path: url }));
  }
});

server.listen(3000, () => {
  console.log("サーバー起動: http://localhost:3000");
});
