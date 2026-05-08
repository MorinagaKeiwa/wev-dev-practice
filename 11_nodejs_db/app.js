import http from "node:http";
import pool from "./db.js";

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const url = new URL(req.url, "http://localhost");
  const path = url.pathname;
  const matchId = path.match(/^\/tasks\/(\d+)$/);

  const readBody = () =>
    new Promise((resolve) => {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => resolve(JSON.parse(body || "{}")));
    });

  try {
    if (path === "/tasks" && req.method === "GET") {
      const [rows] = await pool.execute("SELECT * FROM tasks ORDER BY id");
      res.writeHead(200);
      res.end(JSON.stringify(rows));
      return;
    }
    if (matchId && req.method === "GET") {
      const [rows] = await pool.execute("SELECT * FROM tasks WHERE id = ?", [
        matchId[1],
      ]);
      if (rows.length === 0) {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "タスクが見つかりません" }));
        return;
      }
      res.writeHead(200);
      res.end(JSON.stringify(rows[0]));
      return;
    }
    if (path === "/tasks" && req.method === "POST") {
      const { title } = await readBody();
      const [result] = await pool.execute(
        "INSERT INTO tasks (title) VALUES (?)",
        [title],
      );
      res.writeHead(201);
      res.end(JSON.stringify({ id: result.insertId, title, done: false }));
      return;
    }
    if (matchId && req.method === "PUT") {
      const { title, done } = await readBody();
      await pool.execute("UPDATE tasks SET title = ?, done = ? WHERE id = ?", [
        title,
        done,
        matchId[1],
      ]);
      res.writeHead(200);
      res.end(JSON.stringify({ id: Number(matchId[1]), title, done }));
      return;
    }
    if (matchId && req.method === "DELETE") {
      await pool.execute("DELETE FROM tasks WHERE id = ?", [matchId[1]]);
      res.writeHead(200);
      res.end(JSON.stringify({ message: "削除しました" }));
      return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({ error: "Not Found" }));
  } catch (err) {
    console.error(err);
    res.writeHead(500);
    res.end(JSON.stringify({ error: "サーバーエラーが発生しました" }));
  }
});

server.listen(3000, () => {
  console.log("サーバー起動中 → http://localhost:3000");
});
