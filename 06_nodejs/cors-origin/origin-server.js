import http from "node:http";

const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (method === "GET" && url === "/api/data") {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        message: "許可されたオリジンからのアクセスです",
        origin,
      }),
    );
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(9000, () => {
  console.log("オリジン制限 API 起動: http://localhost:9000");
  console.log("許可オリジン:", allowedOrigins);
});
