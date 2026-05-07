import http from "node:http";

let todos = [
  { id: 1, title: "Node.js を学ぶ", done: false },
  { id: 2, title: "API を構築する", done: false },
];
let nextId = 3;

const server = http.createServer((req, res) => {
  const { method, url } = req;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    if (method === "GET" && url === "/todos") {
      res.writeHead(200);
      res.end(JSON.stringify(todos, null, 2));
    } else if (method === "POST" && url === "/todos") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const data = JSON.parse(body);
        const newTodo = { id: nextId++, title: data.title, done: false };
        todos.push(newTodo);
        res.writeHead(201);
        res.end(JSON.stringify(newTodo));
      });
    } else if (method === "DELETE" && /^\/todos\/\d+$/.test(url)) {
      const id = parseInt(url.split("/")[2]);
      const index = todos.findIndex((t) => t.id === id);
      if (index === -1) {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not Found" }));
        return;
      }
      todos.splice(index, 1);
      res.writeHead(204);
      res.end();
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Not Found" }));
    }
  } catch (err) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: err.message }));
  }
});

server.listen(8000, () => {
  console.log("API サーバー起動: http://localhost:8000");
});
