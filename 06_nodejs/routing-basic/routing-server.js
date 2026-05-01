import http from "node:http";

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  console.log(`${method}${url}`);

  if (method === "GET" && url === "/") {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.end("<h1>ホームぺージ</h1><P>ようこそ！</P>");
  } else if (method === "GET" && url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "ユーザー一覧を返す" }));
  } else if (method === "POST" && url === "/users") {
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "新しいユーザーを作成しました" }));
  } else {
    res.writeHead(404, { "Content-Type": "text.html;charset=utf-8" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(3000, () => {
  console.log("サーバーを起動: http://localhost:3000");
});
