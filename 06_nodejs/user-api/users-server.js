import http from "node:http";

let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/api/users") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(users, null, 2));
  } else if (method === "POST" && url === "/api/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const newData = JSON.parse(body);
        const newUser = {
          id: users.length + 1,
          name: newData.name,
          email: newData.email,
        };
        users.push(newUser);

        res.writeHead(201, {
          "Content-Type": "application/json; charset=utf-8",
        });
        res.end(JSON.stringify({ success: true, user: newUser }));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(3000, () => {
  console.log("サーバー起動: http://localhost:3000");
});
