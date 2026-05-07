import http from "node:http";

let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

let posts = [
  { id: 1, userId: 1, title: "Node.js 入門", content: "Node.js は楽しい！" },
  { id: 2, userId: 1, title: "API 設計入門", content: "REST が大事。" },
  {
    id: 3,
    userId: 2,
    title: "JavaScript Tips",
    content: "便利な書き方いろいろ",
  },
];

let nextPostId = 4;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  try {
    if (method === "GET" && url === "/users") {
      res.writeHead(200);
      res.end(JSON.stringify(users, null, 2));
    } else if (method === "GET" && /^\/users\/\d+$/.test(url)) {
      const id = parseInt(url.split("/")[2]);
      const user = users.find((u) => u.id === id);
      if (user) {
        res.writeHead(200);
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "User not found" }));
      }
    } else if (method === "GET" && /^\/users\/\d+\/posts$/.test(url)) {
      const userId = parseInt(url.split("/")[2]);
      const userExists = users.some((u) => u.id === userId);
      if (!userExists) {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "User not found" }));
        return;
      }
      const userPosts = posts.filter((p) => p.userId === userId);
      res.writeHead(200);
      res.end(JSON.stringify(userPosts, null, 2));
    } else if (method === "GET" && url === "/posts") {
      res.writeHead(200);
      res.end(JSON.stringify(posts, null, 2));
    } else if (method === "POST" && url === "/posts") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const data = JSON.parse(body);
        const newPost = {
          id: nextPostId++,
          userId: data.userId,
          title: data.title,
          content: data.content,
        };
        posts.push(newPost);
        res.writeHead(201);
        res.end(JSON.stringify(newPost));
      });
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Not Found" }));
    }
  } catch (err) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: err.message }));
  }
});

server.listen(3000, () => {
  console.log("Blog API 起動: http://localhost:3000");
});
