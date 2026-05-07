import http from "node:http";

let todos = [
  {
    id: 1,
    title: "Node.js を学ぶ",
    done: false,
    createdAt: "2024-01-01T00:00:00.000Z",
  },
  {
    id: 2,
    title: "API を構築する",
    done: false,
    createdAt: "2024-01-02T00:00:00.000Z",
  },
];
let nextId = 3;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  try {
    if (method === "POST" && url === "/todos") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const data = JSON.parse(body);
        if (!data.title) {
          res.writeHead(400);
          res.end(JSON.stringify({ error: "title は必須です" }));
          return;
        }
        const newTodo = {
          id: nextId++,
          title: data.title,
          done: false,
          createdAt: new Date().toISOString(),
        };
        todos.push(newTodo);
        console.log(`✓ 作成: id=${newTodo.id} "${newTodo.title}"`);
        res.writeHead(201);
        res.end(JSON.stringify(newTodo));
      });
      return;
    }

    if (method === "GET" && url === "/todos") {
      console.log(`✓ 一覧取得: ${todos.length} 件`);
      res.writeHead(200);
      res.end(JSON.stringify(todos, null, 2));
      return;
    }

    if (method === "GET" && /^\/todos\/\d+$/.test(url)) {
      const id = parseInt(url.split("/")[2]);
      const todo = todos.find((t) => t.id === id);
      if (todo) {
        res.writeHead(200);
        res.end(JSON.stringify(todo, null, 2));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not Found", id }));
      }
      return;
    }

    if (method === "PUT" && /^\/todos\/\d+$/.test(url)) {
      const id = parseInt(url.split("/")[2]);
      const todo = todos.find((t) => t.id === id);
      if (!todo) {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not Found" }));
        return;
      }
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const data = JSON.parse(body);
        if (data.title !== undefined) todo.title = data.title;
        if (data.done !== undefined) todo.done = data.done;
        console.log(`✓ 更新: id=${id}`);
        res.writeHead(200);
        res.end(JSON.stringify(todo));
      });
      return;
    }

    if (method === "DELETE" && /^\/todos\/\d+$/.test(url)) {
      const id = parseInt(url.split("/")[2]);
      const index = todos.findIndex((t) => t.id === id);
      if (index === -1) {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not Found" }));
        return;
      }
      const deleted = todos.splice(index, 1)[0];
      console.log(`✓ 削除: id=${id} "${deleted.title}"`);
      res.writeHead(204);
      res.end();
      return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({ error: "Not Found" }));
  } catch (err) {
    res.writeHead(500);
    res.end(
      JSON.stringify({ error: "Internal Server Error", message: err.message }),
    );
  }
});

server.listen(3000, () => {
  console.log("Todo API 起動: http://localhost:3000");
  console.log("エンドポイント: GET/POST /todos、GET/PUT/DELETE /todos/:id");
});
