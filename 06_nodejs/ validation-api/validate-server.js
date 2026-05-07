import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/register") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);

        if (!data.name) {
          res.writeHead(400, {
            "Content-Type": "application/json; charset=utf-8",
          });
          res.end(JSON.stringify({ success: false, error: "name は必須です" }));
          return;
        }
        if (!data.age) {
          res.writeHead(400, {
            "Content-Type": "application/json; charset=utf-8",
          });
          res.end(JSON.stringify({ success: false, error: "age は必須です" }));
          return;
        }
        if (typeof data.age !== "number" || data.age < 0) {
          res.writeHead(400, {
            "Content-Type": "application/json; charset=utf-8",
          });
          res.end(
            JSON.stringify({
              success: false,
              error: "age は 0 以上の数値が必要です",
            }),
          );
          return;
        }

        res.writeHead(200, {
          "Content-Type": "application/json; charset=utf-8",
        });
        res.end(JSON.stringify({ success: true, received: data }));
      } catch (err) {
        res.writeHead(400, {
          "Content-Type": "application/json; charset=utf-8",
        });
        res.end(JSON.stringify({ success: false, error: "Invalid JSON" }));
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
